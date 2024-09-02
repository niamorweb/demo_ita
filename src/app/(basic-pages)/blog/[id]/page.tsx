import { articles } from "@/data/articles";
import Image from "next/image";
import React from "react";
export default async function page({ params }: any) {
  console.log(params);
  console.log(params.id);

  const article = await articles.find((x) => x.id == params.id);

  if (!article) {
    return (
      <div className="flex items-center justify-center text-xl py-32">
        This article doesn't article
      </div>
    );
  }
  return (
    <div className="pb-40">
      <div className="relative">
        <Image
          className="w-full max-h-[500px] object-cover"
          src={article.image}
          width={2000}
          height={1000}
          alt=""
        />
        <div className="absolute top-0 left-0 w-full h-full backdrop-brightness-50 text-white flex items-center flex-col gap-3 justify-center">
          <span className="text-sm text-white/70">
            {article.readingTime} de lecture
          </span>
          <h2 className="text-xl lg:text-3xl font-semibold text-center">
            {article.title}
          </h2>
        </div>
      </div>
      <div className="px-4 lg:px-10">
        <div className="max-w-[800px] mx-auto flex flex-col mt-12 gap-4">
          <div className="blog-content">
            <p>
              La cartographie topographique a connu d'énormes avancées grâce à
              l'émergence de l'intelligence artificielle (IA). Cette technologie
              transforme non seulement la manière dont les cartes sont créées,
              mais aussi la précision et l'efficacité de la collecte des
              données. Cet article explore les principaux aspects de cette
              révolution et ses impacts sur diverses industries.
            </p>

            <h2>1. Précision Améliorée grâce aux Algorithmes d'IA</h2>
            <p>
              Traditionnellement, la cartographie topographique était un
              processus manuel et laborieux. Les géomètres devaient effectuer
              des relevés sur le terrain et traiter les données à l'aide de
              méthodes classiques. Aujourd'hui, les algorithmes d'IA permettent
              d'analyser des images satellitaires et des données de drones avec
              une précision inégalée. Les techniques de{" "}
              <strong>machine learning</strong> peuvent identifier les
              caractéristiques du terrain, telles que les montagnes, les
              rivières et les vallées, avec une grande exactitude.
            </p>

            <h2>2. Traitement Automatisé des Données</h2>
            <p>
              Les systèmes d'IA peuvent traiter des quantités massives de
              données topographiques en un temps record. Grâce aux réseaux
              neuronaux convolutifs (CNN), les images capturées par les
              satellites ou les drones sont analysées pour extraire des
              informations pertinentes. Ce traitement automatisé permet
              d'obtenir des cartes détaillées et actuelles sans intervention
              humaine, ce qui réduit les erreurs et améliore l'efficacité.
            </p>

            <h2>3. Applications Pratiques dans Divers Domaines</h2>
            <p>
              Les améliorations apportées par l'IA en cartographie topographique
              ont des applications dans de nombreux domaines :
            </p>
            <ul>
              <li>
                <strong>Urbanisme :</strong> Les planificateurs urbains
                utilisent des cartes précises pour concevoir des infrastructures
                et gérer l'expansion des villes.
              </li>
              <li>
                <strong>Gestion des Ressources Naturelles :</strong> Les
                géologues et écologistes bénéficient de cartes détaillées pour
                surveiller les changements environnementaux et gérer les
                ressources.
              </li>
              <li>
                <strong>Réponse aux Catastrophes :</strong> En cas de
                catastrophe naturelle, les cartes actualisées permettent une
                réponse rapide et efficace pour minimiser les dégâts.
              </li>
            </ul>

            <h2>4. Défis et Perspectives Futures</h2>
            <p>
              Bien que les avantages de l'IA dans la cartographie topographique
              soient indéniables, il reste des défis à surmonter. Les problèmes
              de <strong>précision des capteurs</strong>, le traitement des
              données dans des environnements variés et l'intégration des
              nouvelles technologies sont des questions en cours de résolution.
              Toutefois, les perspectives futures sont prometteuses, avec des
              développements continus visant à améliorer encore plus la qualité
              des cartes et l'efficacité des processus.
            </p>

            <h2>Conclusion</h2>
            <p>
              La combinaison de la topographie et de l'intelligence artificielle
              marque une nouvelle ère dans la cartographie. En offrant une
              précision accrue, un traitement automatisé des données et des
              applications pratiques dans divers domaines, l'IA révolutionne la
              manière dont nous comprenons et interagissons avec notre
              environnement. Avec les progrès technologiques continus, nous
              pouvons nous attendre à des innovations encore plus
              impressionnantes à l'avenir.
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center text-center mt-32">
        <Image
          className="w-[80px] h-[80px] rounded-full object-cover"
          src="https://cdn.pixabay.com/photo/2021/12/11/19/25/map-6863486_1280.jpg"
          width={80}
          height={80}
          alt=""
        />
        <p className="mt-6">{article.authorName}</p>
        <p>{article.authorJob}</p>
      </div>
    </div>
  );
}
