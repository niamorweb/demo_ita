import Header from "@/components/layout/Header_v2";
import Image from "next/image";
import React from "react";

export default function page() {
  const features = [
    {
      label: "Accès transparent par le personnel",
      title: "Une connexion rapide pour se mettre encore plus vite au travail",
      description:
        "Dashlane s'intègre de manière transparente à votre pile de sécurité et au travail quotidien des employés et comble une lacune critique en matière de sécurité en plus d'offrir un accès sécurisé.",
      image:
        "https://cdn.pixabay.com/photo/2021/12/11/19/25/map-6863486_1280.jpg",
      items: [
        {
          title: "Saisie automatique des mots de passe :",
          description:
            "Dashlane s'intègre de manière transparente à votre pile de sécurité",
        },
        {
          title: "Saisie automatique des mots de passe :",
          description:
            "Dashlane s'intègre de manière transparente à votre pile de sécurité",
        },
      ],
    },
    {
      label: "Accès transparent par le personnel",
      title: "Une connexion rapide pour se mettre encore plus vite au travail",
      description:
        "Dashlane s'intègre de manière transparente à votre pile de sécurité et au travail quotidien des employés et comble une lacune critique en matière de sécurité en plus d'offrir un accès sécurisé.",
      image:
        "https://cdn.pixabay.com/photo/2021/12/11/19/25/map-6863486_1280.jpg",
      items: [
        {
          title: "Saisie automatique des mots de passe :",
          description:
            "Dashlane s'intègre de manière transparente à votre pile de sécurité",
        },
        {
          title: "Saisie automatique des mots de passe :",
          description:
            "Dashlane s'intègre de manière transparente à votre pile de sécurité",
        },
      ],
    },
    {
      label: "Accès transparent par le personnel",
      title: "Une connexion rapide pour se mettre encore plus vite au travail",
      description:
        "Dashlane s'intègre de manière transparente à votre pile de sécurité et au travail quotidien des employés et comble une lacune critique en matière de sécurité en plus d'offrir un accès sécurisé.",
      image:
        "https://cdn.pixabay.com/photo/2021/12/11/19/25/map-6863486_1280.jpg",
      items: [
        {
          title: "Saisie automatique des mots de passe :",
          description:
            "Dashlane s'intègre de manière transparente à votre pile de sécurité",
        },
        {
          title: "Saisie automatique des mots de passe :",
          description:
            "Dashlane s'intègre de manière transparente à votre pile de sécurité",
        },
      ],
    },
  ];

  return (
    <div>
      <Header />
      <section>
        <div>
          <div className="flex flex-col gap-4">
            <h1 className="text-[70px]">
              Une sécurité exhaustive des identifiants. Pour un minimum
              d'effort.
            </h1>
            <p>
              Protégez plus que vos mots de passe grâce à une gestion intuitive
              des identifiants pour l'ensemble de votre organisation.
              Configurez, oubliez et faites confiance à Dashlane pour sécuriser
              vos employés et vos données contre les failles de sécurité.
            </p>
            <div className="flex items-center gap-3">
              <button>Contacter le service commercial</button>
              <button>Essayer un forfait professionnel</button>
            </div>
          </div>
          <Image
            width={1000}
            height={600}
            src="https://cdn.pixabay.com/photo/2021/12/11/19/25/map-6863486_1280.jpg"
            alt=""
          />
        </div>
      </section>
      <section>
        <div>
          <p>
            DES ORGANISATIONS DE RENOM DANS LE MONDE ENTIER NOUS FONT CONFIANCE
          </p>
        </div>
      </section>
      <section>
        <div>
          {features.map((feature, index) => (
            <div>
              <div>
                <span>{feature.label}</span>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
                <div>
                  {feature.items.map((item, index) => (
                    <div>
                      <div className="flex flex-col gap-2">
                        <p className="underline underline-offset-2">
                          {item.title}
                        </p>
                        <p>{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
