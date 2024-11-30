import * as React from "react";
import { Link } from "react-router-dom";
import { useState } from 'react';
import { useNavigate } from "react-router-dom";



const Navigation = () => {
  const [activeTab, setActiveTab] = useState("cours");
  const navigate = useNavigate(); // Hook pour la navigation

  const getButtonClasses = (tabName) => {
    const baseClasses = "px-12 py-4 rounded-r-full flex items-center space-x-4 transition-colors w-56 text-lg";
    return `${baseClasses} ${
      activeTab === tabName
        ? "bg-orange-500 text-white"
        : "bg-white text-orange-500 hover:bg-orange-100"
    }`;
  };

  return (
    <div className="p-6">
      {/* Logo digi avec les points */}
      <div className="flex items-center mb-10">
        <span className="text-orange-500 font-bold text-3xl">digi</span>
        <div className="flex gap-1.5 ml-2">
          <div className="w-2 h-2 rounded-full bg-orange-500"></div>
          <div className="w-2 h-2 rounded-full bg-orange-500"></div>
          <div className="w-2 h-2 rounded-full bg-orange-500"></div>
        </div>
      </div>

      {/* Liste des boutons de navigation */}
      <div className="flex flex-col space-y-6">
        {/* Bouton Home */}
        <button
          onClick={() => {
            setActiveTab("home");
            navigate("/dashboard"); // Redirige vers la page d'accueil
          }}
          className={getButtonClasses("home")}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
            <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
          </svg>
          <span>Home</span>
        </button>

        {/* Bouton Cours */}
        <button
          onClick={() => {
            setActiveTab("cours");
            navigate("/courses/catalog"); // Redirige vers courses/catalog
          }}
          className={getButtonClasses("cours")}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
            <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
          </svg>
          <span>Cours</span>
        </button>

        {/* Bouton Messages */}
        <button
          onClick={() => {
            setActiveTab("messages");
            navigate("/chat"); // Redirige vers messages
          }}
          className={getButtonClasses("messages")}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
          </svg>
          <span>Messages</span>
        </button>
      </div>
    </div>
  );
};

function CourseCatalog() {
  const coursData = [
    {
      image: "https://cdn.builder.io/api/v1/image/assets/2abb0b1728de4d98902e239cea09e9d5/ca082b79465e1bedf14bece829ef7d0371a3ae9db0caf2f83c957eb3bd1b37b2?apiKey=2abb0b1728de4d98902e239cea09e9d5&",
      categorie: "Animation 4D",
      titre: "Création de Campagnes Numériques Captivantes",
      duree: "15 Leçons (10h 5m)",
      prix: "140" 
    },
    {
      image: "https://cdn.builder.io/api/v1/image/assets/2abb0b1728de4d98902e239cea09e9d5/f1ac824bdc7f1ec0370798e21668f96e642c77de5048d556f743e2abc5834207?apiKey=2abb0b1728de4d98902e239cea09e9d5&",
      categorie: "Design",
      titre: "Marketing Digital Démystifié: De Débutant à Expert",
      duree: "15 Leçons (10h 5m)",
      prix: "130"
    },
    {
      image: "https://cdn.builder.io/api/v1/image/assets/2abb0b1728de4d98902e239cea09e9d5/b33dc3d8ef9df31f70ad0907b4cb20cf843c0a25b20e737773584f50a927db9c?apiKey=2abb0b1728de4d98902e239cea09e9d5&",
      categorie: "Scratch",
      titre: "Maîtrise des Réseaux Sociaux: Une Plongée dans le Marketing Digital",
      duree: "15 Leçons (10h 5m)",
      prix: "220"
    },
    {
      image: "https://cdn.builder.io/api/v1/image/assets/2abb0b1728de4d98902e239cea09e9d5/e0454e8bda7b1d8da26003d5ffbfd982bb2fad06c7c68acb28e077a1d6fd73d3?apiKey=2abb0b1728de4d98902e239cea09e9d5&",
      categorie: "Design",
      titre: "Art du Référencement: Dominer les Classements Web",
      duree: "15 Leçons (10h 5m)",
      prix: "200"
    },
    {
      image: "https://cdn.builder.io/api/v1/image/assets/2abb0b1728de4d98902e239cea09e9d5/6c5144969516231db031e02907c0f2a68f4ea663580e66b15e9e9938a144f181?apiKey=2abb0b1728de4d98902e239cea09e9d5&",
      categorie: "Psychologie",
      titre: "Dynamo Digital: Libérez Votre Potentiel En Ligne",
      duree: "15 Leçons (10h 5m)",
      prix: "350"
    },
    {
      image: "https://cdn.builder.io/api/v1/image/assets/2abb0b1728de4d98902e239cea09e9d5/1d12ddd6d48614db67d91ce069e691f39da809a013d6cf7b23d370e224793d25?apiKey=2abb0b1728de4d98902e239cea09e9d5&",
      categorie: "Développement",
      titre: "Excellence E-commerce: Vendre Plus Intelligemment en Ligne",
      duree: "15 Leçons (10h 5m)",
      prix: "199"
    },
    {
      image: "https://cdn.builder.io/api/v1/image/assets/2abb0b1728de4d98902e239cea09e9d5/de3755025c9d23fcadaf2b27931727f075e7027f71e2e9b100f818bf17124eff?apiKey=2abb0b1728de4d98902e239cea09e9d5&",
      categorie: "Python",
      titre: "Transformer les Données en Or Digital",
      duree: "15 Leçons (10h 5m)",
      prix: "399"
    },
    {
      image: "https://cdn.builder.io/api/v1/image/assets/2abb0b1728de4d98902e239cea09e9d5/10f53e92377cf9fd288b06258bc1a9a698a2b5106419ce41fa930e493fa29125?apiKey=2abb0b1728de4d98902e239cea09e9d5&",
      categorie: "Intelligence Artificielle",
      titre: "Marketing Vidéo: Lumière, Caméra, Conversion",
      duree: "15 Leçons (10h 5m)",
      prix: "300"
    },
    {
      image: "https://cdn.builder.io/api/v1/image/assets/2abb0b1728de4d98902e239cea09e9d5/32051f976308f8ce96ce9bf51c7421bd7f217d664fbc8215f04b04b09d9694ef?apiKey=2abb0b1728de4d98902e239cea09e9d5&",
      categorie: "Javascript",
      titre: "Excellence E-commerce: Vendre Plus Intelligemment en Ligne",
      duree: "15 Leçons (10h 5m)",
      prix: "178"
    },
    {
      image: "https://cdn.builder.io/api/v1/image/assets/2abb0b1728de4d98902e239cea09e9d5/c208a5898eb29776ebca9718aa08d6b2e96e8aba4b9eea4934bcdce3f08dc12e?apiKey=2abb0b1728de4d98902e239cea09e9d5&",
      categorie: "Javascript",
      titre: "Art du Référencement: Dominer les Classements Web",
      duree: "15 Leçons (10h 5m)",
      prix: "260"
    },
    {
      image: "https://cdn.builder.io/api/v1/image/assets/2abb0b1728de4d98902e239cea09e9d5/eb4b402ccfa4237a6855ec022465108cf4c6867ec6bf5db5a4f705b09cfe4332?apiKey=2abb0b1728de4d98902e239cea09e9d5&",
      categorie: "Google Ads",
      titre: "Marketing Digital Démystifié: De Débutant à Expert",
      duree: "15 Leçons (10h 5m)",
      prix: "410"
    },
    {
      image: "https://cdn.builder.io/api/v1/image/assets/2abb0b1728de4d98902e239cea09e9d5/a315fe43aa2b90c4d719bd7561680ba10ba140cb1c2332eb4865c815776a4f03?apiKey=2abb0b1728de4d98902e239cea09e9d5&",
      categorie: "Dessin",
      titre: "Création de Campagnes Numériques Captivantes",
      duree: "15 Leçons (10h 5m)",
      prix: "370"
    }
  ];

  const CarteCours = ({ image, categorie, titre, duree, prix }) => (
    <div className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
      <div className="flex flex-col px-2.5 pt-2.5 pb-5 mx-auto w-full bg-white rounded-2xl">
        <div className="flex relative flex-col items-start px-2.5 pt-2.5 pb-32 w-full text-xs font-medium leading-6 rounded-2xl aspect-[1.5] text-sky-950 max-md:pr-5 max-md:pb-24">
          <img loading="lazy" src={image} alt={`Miniature du cours ${titre}`} className="object-cover absolute inset-0 size-full" />
          <div className="relative gap-2.5 px-2.5 py-0.5 -mb-6 rounded-lg bg-white bg-opacity-60 max-md:mb-2.5">
            {categorie}
          </div>
        </div>
        <div className="mt-4 text-base font-medium leading-6 text-sky-950">
          {titre}
        </div>
        <div className="flex gap-5 justify-between mt-3.5 text-sm max-md:mr-1.5">
          <div className="flex gap-2 self-start leading-none text-zinc-500">
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/2abb0b1728de4d98902e239cea09e9d5/0a17a789c98cfef086f6b8b3c651cb8ca9b9d659ba8f21b66af178b8e7bd1380?apiKey=2abb0b1728de4d98902e239cea09e9d5&" alt="" className="object-contain shrink-0 my-auto w-4 aspect-square" />
            <div className="basis-auto">{duree}</div>
          </div>
          <div className="font-medium text-right text-orange-500">{prix}€</div>
        </div>
      </div>
    </div>
  );

  const BoutonFiltre = ({ label, valeur, icone }) => (
    <div className="flex gap-2.5 px-4 py-2.5 text-center bg-white rounded-xl">
      <div className="grow font-medium text-sky-950">{label}</div>
      <div className="flex whitespace-nowrap text-zinc-500">
        <div className="grow">{valeur}</div>
        {icone && <img loading="lazy" src={icone} alt="" className="object-contain shrink-0 w-6 aspect-square" />}
      </div>
    </div>
  );

  return (
    <div className="flex overflow-hidden flex-col bg-white">
      <div className="px-3 py-6 w-full max-md:pr-5 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <div className="flex flex-col w-[17%] max-md:ml-0 max-md:w-full">
            <div className="flex z-10 flex-col grow items-start mt-9 max-md:mt-10 max-md:-mr-1.5">
              <Navigation/>
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/2abb0b1728de4d98902e239cea09e9d5/32a93a355236a48f6594811b1ad1530264cc49645cca127c7fbc7427e7ed98da?apiKey=2abb0b1728de4d98902e239cea09e9d5&" alt="Élément de navigation" className="object-contain mt-96 rounded-none aspect-[0.72] w-[217px] max-md:mt-10" />
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[83%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col p-6 mx-auto w-full bg-white rounded-[32px] shadow-[0px_4px_48px_rgba(0,0,0,0.02)] max-md:pl-5 max-md:mt-6 max-md:max-w-full">
              <div className="flex flex-wrap gap-5 justify-between text-3xl font-semibold tracking-wide leading-none whitespace-nowrap text-zinc-900 max-md:mr-1 max-md:max-w-full">
                <div className="my-auto">Cours</div>
                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/2abb0b1728de4d98902e239cea09e9d5/f65e14c105c9ae43048667c73a1f939776bb4b0a9a8bd1687bdbf71175fe3c5e?apiKey=2abb0b1728de4d98902e239cea09e9d5&" alt="" className="object-contain shrink-0 max-w-full aspect-[4.61] w-[184px]" />
              </div>
              <div className="flex flex-wrap gap-5 justify-between mt-4 w-full max-md:max-w-full">
                <div className="flex flex-wrap gap-5 text-sm leading-6">
                  <BoutonFiltre label="Trier par:" valeur="Populaire" icone="https://cdn.builder.io/api/v1/image/assets/2abb0b1728de4d98902e239cea09e9d5/042fb18c8ae944e6f6ae78dbb4a8658d6e74a3e3f0db08e56d74ea41a176e2ea?apiKey=2abb0b1728de4d98902e239cea09e9d5&" />
                  <BoutonFiltre label="" valeur="Cours" icone="https://cdn.builder.io/api/v1/image/assets/2abb0b1728de4d98902e239cea09e9d5/042fb18c8ae944e6f6ae78dbb4a8658d6e74a3e3f0db08e56d74ea41a176e2ea?apiKey=2abb0b1728de4d98902e239cea09e9d5&" />
                  <BoutonFiltre label="Catégorie:" valeur="Toutes les Catégories" icone="https://cdn.builder.io/api/v1/image/assets/2abb0b1728de4d98902e239cea09e9d5/042fb18c8ae944e6f6ae78dbb4a8658d6e74a3e3f0db08e56d74ea41a176e2ea?apiKey=2abb0b1728de4d98902e239cea09e9d5&" />
                </div>
                <div className="flex gap-5">
                  <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/2abb0b1728de4d98902e239cea09e9d5/1a9d826b5b593d50f246108492d9ad0bbcb52ca81312c0a4e451902dc2cfe6a5?apiKey=2abb0b1728de4d98902e239cea09e9d5&" alt="Basculer la vue" className="object-contain shrink-0 rounded-xl aspect-[2.16] w-[95px]" />
                  <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/2abb0b1728de4d98902e239cea09e9d5/f6e62e347d56e17d323aaa845aa27fb74419dd1915008687cc0c1103e5315f52?apiKey=2abb0b1728de4d98902e239cea09e9d5&" alt="Filtre supplémentaire" className="object-contain shrink-0 rounded-none aspect-[1.23] w-[54px]" />
                </div>
              </div>
              <div className="mt-6 max-md:mr-2.5 max-md:max-w-full">
                <div className="flex flex-wrap gap-5">
                  {coursData.map((cours, index) => (
                    <CarteCours key={index} {...cours} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseCatalog;