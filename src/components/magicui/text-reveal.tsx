"use client";

import { FC, ReactNode, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/utils/cn";

interface TextRevealByWordProps {
  text: string;
  className?: string;
  coloredWords?: string[]; // Liste des mots ou phrases à colorer dès le début
}

export const TextRevealByWord: FC<TextRevealByWordProps> = ({
  text,
  className,
  coloredWords = [], // Valeur par défaut à un tableau vide
}) => {
  const targetRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  // Fonction pour découper le texte en segments, en incluant les groupes de mots colorés
  const getSegments = () => {
    let segments: { text: string; isColored: boolean }[] = [];
    let currentIndex = 0;

    while (currentIndex < text.length) {
      let match = false;

      for (let i = 0; i < coloredWords.length; i++) {
        if (text.startsWith(coloredWords[i], currentIndex)) {
          segments.push({
            text: coloredWords[i],
            isColored: true,
          });
          currentIndex += coloredWords[i].length;
          match = true;
          break;
        }
      }

      if (!match) {
        const nextSpaceIndex = text.indexOf(" ", currentIndex);
        const wordEnd =
          nextSpaceIndex === -1 ? text.length : nextSpaceIndex + 1;
        segments.push({
          text: text.slice(currentIndex, wordEnd),
          isColored: false,
        });
        currentIndex = wordEnd;
      }
    }

    return segments;
  };

  const segments = getSegments();

  return (
    <div ref={targetRef} className={cn("relative z-0 h-[200vh]", className)}>
      <div
        className={
          "sticky text-black top-0 mx-auto flex h-[50%] max-w-4xl items-center bg-transparent px-[1rem] py-[5rem]"
        }
      >
        <p
          ref={targetRef}
          className={
            "flex flex-wrap p-5 text-2xl font-bold text-black/20 md:p-8 md:text-3xl lg:p-10 lg:text-4xl xl:text-5xl"
          }
        >
          {segments.map((segment, i) => {
            const start = i / segments.length;
            const end = start + 1 / segments.length;
            return (
              <Word
                key={i}
                progress={scrollYProgress}
                range={[start, end]}
                isColored={segment.isColored} // Vérifie si le segment doit être coloré
              >
                {segment.text}
              </Word>
            );
          })}
        </p>
      </div>
    </div>
  );
};

interface WordProps {
  children: ReactNode;
  progress: any;
  range: [number, number];
  isColored: boolean; // Propriété pour savoir si le mot doit être coloré
}

const Word: FC<WordProps> = ({ children, progress, range, isColored }) => {
  const opacity = useTransform(progress, range, [0, 1]);
  return (
    <span className="xl:lg-3 relative mx-1 lg:mx-2.5">
      <span className={"absolute opacity-30"}>{children}</span>
      <motion.span
        style={isColored ? {} : { opacity: opacity }} // Pas d'animation si le segment est coloré
        className={isColored ? "text-secondary" : "text-black"} // Applique une couleur spécifique
      >
        {children}
      </motion.span>
    </span>
  );
};

export default TextRevealByWord;
