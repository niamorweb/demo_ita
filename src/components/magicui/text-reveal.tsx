"use client";

import { FC, ReactNode, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/utils/cn";

interface TextRevealByWordProps {
  text: string;
  className?: string;
  coloredWords?: { word: string; color: string }[];
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
    let segments: { text: string; color?: string }[] = [];
    let currentIndex = 0;

    while (currentIndex < text.length) {
      let match = false;

      for (let i = 0; i < coloredWords.length; i++) {
        if (text.startsWith(coloredWords[i].word, currentIndex)) {
          segments.push({
            text: coloredWords[i].word,
            color: coloredWords[i].color, // Associe la couleur spécifique
          });
          currentIndex += coloredWords[i].word.length;
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
                color={segment.color} // Utilise la couleur spécifique du segment
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
  color?: string; // Propriété pour la couleur spécifique
}

const Word: FC<WordProps> = ({ children, progress, range, color }) => {
  const opacity = useTransform(progress, range, [0, 1]);
  return (
    <span
      className="relative mx-1 lg:mx-2.5 inline-block" // Ajout de inline-block
      style={{ whiteSpace: "pre-wrap" }} // Garde les sauts de ligne, mais évite le retour à la ligne automatique non désiré
    >
      <span className={"absolute opacity-30"}>{children}</span>
      <motion.span
        style={color ? { color } : { opacity: opacity }} // Applique la couleur spécifique si présente
        className={color ? "inline-block" : "text-black inline-block"}
      >
        {children}
      </motion.span>
    </span>
  );
};

export default TextRevealByWord;
