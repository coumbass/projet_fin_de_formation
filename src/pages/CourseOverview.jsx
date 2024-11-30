import React from 'react';

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


export default function CourseOverview() {
  return (
    <div className="flex overflow-hidden flex-col bg-white">
      <div className="px-3 py-6 w-full max-md:pr-5 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <div className="flex flex-col w-[17%] max-md:ml-0 max-md:w-full">
            <div className="flex z-10 flex-col grow items-start mt-9 max-md:mt-10 max-md:-mr-1.5">
              <Navigation/>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/2abb0b1728de4d98902e239cea09e9d5/2ee3b6aba7a3d4060a3e8ce71ed2a9be27de233618a6865b84ba3d45ae88e432?apiKey=2abb0b1728de4d98902e239cea09e9d5&"
                className="object-contain rounded-none aspect-[0.72] mt-[785px] w-[217px] max-md:mt-10"
                alt="Décoration de la barre latérale inférieure"
              />
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[83%] max-md:ml-0 max-md:w-full">
            <div className="grow px-6 py-6 w-full bg-white rounded-[32px] shadow-[0px_4px_48px_rgba(0,0,0,0.02)] max-md:pl-5 max-md:mt-6 max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col">
                <div className="flex flex-col w-[71%] max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col items-start w-full max-md:mt-10 max-md:max-w-full">
                    <div className="text-2xl font-semibold leading-none text-sky-950">
                      Découvrir
                    </div>
                    <div className="flex gap-2.5 mt-4 text-sm">
                      <div className="leading-none text-zinc-500">Cours</div>
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/2abb0b1728de4d98902e239cea09e9d5/9d122fc3837df66cfb53145f1351d2dbc9c0c628dfaf5e1470c0041dd0b71dc6?apiKey=2abb0b1728de4d98902e239cea09e9d5&"
                        className="object-contain shrink-0 my-auto w-4 aspect-square"
                        alt="Séparateur"
                      />
                      <div className="font-medium basis-auto text-sky-950">
                        Création de Campagnes Numériques Convaincantes
                      </div>
                    </div>
                    <div className="flex flex-col self-stretch px-8 py-9 mt-8 w-full bg-white rounded-2xl max-md:px-5 max-md:max-w-full">
                      <div className="flex relative flex-col pt-44 pr-20 pb-7 pl-8 w-full text-xs font-medium text-white whitespace-nowrap rounded-2xl min-h-[428px] max-md:px-5 max-md:pt-24 max-md:max-w-full">
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/2abb0b1728de4d98902e239cea09e9d5/f3548a9966d96097443cc0e167cb2f5bdabbe74ea156ecc5889b29ca7206a417?apiKey=2abb0b1728de4d98902e239cea09e9d5&"
                          className="object-cover absolute inset-0 size-full"
                          alt="Image de couverture du cours"
                        />
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/2abb0b1728de4d98902e239cea09e9d5/10a26b40301494601cb3bd15d4db73711461f677446188609fca39c68c8c6bb9?apiKey=2abb0b1728de4d98902e239cea09e9d5&"
                          className="object-contain self-center aspect-square w-[70px]"
                          alt="Icône du cours"
                        />
                        <div className="flex relative gap-1 self-start px-2 py-1.5 mt-28 rounded-xl bg-white bg-opacity-30 shadow-[0px_4px_20px_rgba(0,0,0,0.05)] max-md:mt-10">
                          <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/2abb0b1728de4d98902e239cea09e9d5/0301482ebe21a6258d27b822d84a07302b7908d2234764027c810b3fe9584899?apiKey=2abb0b1728de4d98902e239cea09e9d5&"
                            className="object-contain shrink-0 my-auto w-3 aspect-square"
                            alt="Icône participants"
                          />
                          <div>740</div>
                        </div>
                      </div>
                      <div className="self-start mt-10 text-2xl font-semibold leading-none text-sky-950 max-md:max-w-full">
                        Création de Campagnes Numériques Convaincantes
                      </div>
                      <div className="self-start mt-2.5 text-sm leading-none text-sky-950">
                        <span className="text-zinc-500">Par</span>{" "}
                        <span className="font-medium text-sky-950">
                          Fatou Kine
                        </span>
                        <span className="">, </span>
                        <span className="text-zinc-500">Expert SEO</span>
                      </div>
                      <div className="flex flex-wrap gap-10 items-center self-start mt-7 text-sm font-medium whitespace-nowrap text-zinc-500">
                        <div className="grow self-stretch my-auto text-sky-950">
                          Information
                        </div>
                        <div className="self-stretch px-4 py-2 text-white bg-orange-500 rounded-3xl">
                          Contenu
                        </div>
                        <div className="flex gap-2 self-stretch my-auto">
                          <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/2abb0b1728de4d98902e239cea09e9d5/ec21f73f06cd53aeebadce7520ba786a103dad9839d637684d230e200a86ba1e?apiKey=2abb0b1728de4d98902e239cea09e9d5&"
                            className="object-contain shrink-0 self-start aspect-square w-[17px]"
                            alt="Icône communauté"
                          />
                          <div>Communauté</div>
                        </div>
                        <div className="flex gap-2 self-stretch my-auto">
                          <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/2abb0b1728de4d98902e239cea09e9d5/ec21f73f06cd53aeebadce7520ba786a103dad9839d637684d230e200a86ba1e?apiKey=2abb0b1728de4d98902e239cea09e9d5&"
                            className="object-contain shrink-0 self-start aspect-square w-[17px]"
                            alt="Icône étudiants"
                          />
                          <div>Étudiants</div>
                        </div>
                      </div>
                      <div className="p-10 mt-12 rounded-2xl bg-slate-50 max-md:px-5 max-md:mt-10 max-md:max-w-full">
                        <div className="flex gap-5 max-md:flex-col">
                          <div className="flex flex-col w-[77%] max-md:ml-0 max-md:w-full">
                            <div className="flex flex-col grow items-start max-md:mt-10 max-md:max-w-full">
                              <div className="text-xs opacity-70 text-zinc-500">
                                Cours 1 sur 6
                              </div>
                              <div className="mt-2 text-sm font-medium text-sky-950">
                                Cours 1 - Introduction
                              </div>
                              <div className="flex flex-col items-start self-stretch mt-5 bg-orange-100 rounded-xl max-md:pr-5 max-md:max-w-full">
                                <div className="flex shrink-0 max-w-full h-1 bg-orange-500 rounded-xl w-[339px]" />
                              </div>
                              <div className="mt-3 text-xs text-sky-950">
                                2 unités complétées sur 11 disponibles
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-col ml-5 w-[23%] max-md:ml-0 max-md:w-full">
                            <div className="flex flex-col self-stretch my-auto text-sm font-semibold leading-none text-white max-md:mt-10">
                              <div className="flex flex-col">
                                <button className="flex flex-col justify-center items-center px-8 py-4 bg-blue-500 rounded-md max-md:px-5">
                                  <div className="gap-2 self-stretch">
                                    Aller à l'Unité 3
                                  </div>
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-5 justify-between mt-14 max-md:mt-10 max-md:max-w-full">
                        <div className="flex flex-col text-sky-950">
                          <div className="text-lg font-medium leading-none">
                            Cours 1 - Introduction
                          </div>
                          <div className="flex gap-3 self-start mt-8 text-sm leading-none">
                            <img
                              loading="lazy"
                              src="https://cdn.builder.io/api/v1/image/assets/2abb0b1728de4d98902e239cea09e9d5/e8d435af2cc2b21ca466b0ac993dbcd53388e15138c6ba1f55ef6924d19b5211?apiKey=2abb0b1728de4d98902e239cea09e9d5&"
                              className="object-contain shrink-0 w-6 aspect-square"
                              alt="Icône unité"
                            />
                            <div className="my-auto basis-auto">
                              U1: Présentation
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col">
                          <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/2abb0b1728de4d98902e239cea09e9d5/e5c6db3a9f034bee9b8206ad7bb492b28e8b184c8d3c580d2be45d4577e048c0?apiKey=2abb0b1728de4d98902e239cea09e9d5&"
                            className="object-contain w-6 aspect-square"
                            alt="Icône statut"
                          />
                          <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/2abb0b1728de4d98902e239cea09e9d5/e08c70d0cac68456cda84e2f3d1bc0a97a8176f7b5d9a3b824c947775fcea669?apiKey=2abb0b1728de4d98902e239cea09e9d5&"
                            className="object-contain mt-8 w-6 aspect-square"
                            alt="Icône progression"
                          />
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-5 justify-between mt-12 w-full text-sm leading-none text-sky-950 max-md:mt-10 max-md:max-w-full">
                        <div className="flex gap-3">
                          <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/2abb0b1728de4d98902e239cea09e9d5/e8d435af2cc2b21ca466b0ac993dbcd53388e15138c6ba1f55ef6924d19b5211?apiKey=2abb0b1728de4d98902e239cea09e9d5&"
                            className="object-contain shrink-0 w-6 aspect-square"
                            alt="Icône unité"
                          />
                          <div className="flex-auto my-auto">
                            U2: Opportunités professionnelles (profil de carrière)
                          </div>
                        </div>
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/2abb0b1728de4d98902e239cea09e9d5/e08c70d0cac68456cda84e2f3d1bc0a97a8176f7b5d9a3b824c947775fcea669?apiKey=2abb0b1728de4d98902e239cea09e9d5&"
                          className="object-contain shrink-0 w-6 aspect-square"
                          alt="Icône progression"
                        />
                      </div>
                      <div className="flex gap-3 self-start mt-12 text-sm leading-none text-sky-950 max-md:mt-10">
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/2abb0b1728de4d98902e239cea09e9d5/e8d435af2cc2b21ca466b0ac993dbcd53388e15138c6ba1f55ef6924d19b5211?apiKey=2abb0b1728de4d98902e239cea09e9d5&"
                          className="object-contain shrink-0 w-6 aspect-square"
                          alt="Icône unité"
                        />
                        <div className="flex-auto my-auto">
                          U3: Comment tirer le meilleur parti de ce cours !
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-5 justify-between mt-14 text-lg font-medium leading-none text-sky-950 max-md:mt-10 max-md:max-w-full">
                        <div>Cours 2 - Marketing Digital Avancé</div>
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/2abb0b1728de4d98902e239cea09e9d5/4fc43a0fce8e96b122178cc239202c0669c51c5fcea7bdea5d96957845fc7aaa?apiKey=2abb0b1728de4d98902e239cea09e9d5&"
                          className="object-contain shrink-0 w-6 aspect-square"
                          alt="Icône expansion"
                        />
                      </div>
                      <div className="flex flex-wrap gap-10 mt-16 text-lg font-medium leading-none text-sky-950 max-md:mt-10 max-md:max-w-full">
                        <div className="flex-auto w-[602px] max-md:max-w-full">
                          Cours 3 - Stratégies SEO Avancées
                        </div>
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/2abb0b1728de4d98902e239cea09e9d5/4fc43a0fce8e96b122178cc239202c0669c51c5fcea7bdea5d96957845fc7aaa?apiKey=2abb0b1728de4d98902e239cea09e9d5&"
                          className="object-contain shrink-0 w-6 aspect-square"
                          alt="Icône expansion"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col ml-5 w-[29%] max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col px-8 py-8 mx-auto w-full bg-white rounded-2xl text-sky-950 max-md:px-5 max-md:mt-10">
                    <div className="self-start text-lg font-medium leading-none">
                      Aperçu des Bases
                    </div>
                    <div className="self-start mt-7 text-sm font-medium opacity-80 text-zinc-500">
                      COURS 1 - INTRODUCTION
                    </div>
                    {[...Array(8)].map((_, i) => (
                      <div key={i} className="flex gap-4 items-center mt-4">
                        <div className="self-stretch px-3 w-9 h-9 text-xs text-center whitespace-nowrap bg-violet-100 rounded-full fill-violet-100">
                          U{i + 1}
                        </div>
                        <div className="grow shrink self-stretch my-auto text-sm leading-none w-[154px]">
                          {i < 2 ? (
                            ["Présentation", "Opportunités professionnelles"][i]
                          ) : (
                            "Module en cours..."
                          )}
                        </div>
                        <img
                          loading="lazy"
                          src={`http://b.io/ext_${i < 2 ? "10" : "12"}-`}
                          className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
                          alt={i < 2 ? "Complété" : "À faire"}
                        />
                      </div>
                    ))}
                    <div className="self-start mt-12 text-sm font-medium opacity-80 text-zinc-500 max-md:mt-10">
                      COURS 2 - MARKETING DIGITAL
                    </div>
                    {[...Array(8)].map((_, i) => (
                      <div key={i} className="flex gap-4 items-center mt-4">
                        <div className="self-stretch px-3 w-9 h-9 text-xs text-center whitespace-nowrap bg-violet-100 rounded-full fill-violet-100">
                          U{i + 1}
                        </div>
                        <div className="grow shrink self-stretch my-auto text-sm leading-none w-[154px]">
                          Module à venir...
                        </div>
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/2abb0b1728de4d98902e239cea09e9d5/4b0fadece0c3203ae1a2ac4ad783093f565c8cf6e27be0cabc2f698ca8d0edf9?apiKey=2abb0b1728de4d98902e239cea09e9d5&"
                          className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
                          alt="À faire"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}