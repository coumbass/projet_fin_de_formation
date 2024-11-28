import * as React from "react";

import { Link } from "react-router-dom";
import { useState } from 'react';
import { useNavigate } from "react-router-dom";



const Navigation = () => {
  const [activeTab, setActiveTab] = useState("home");
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
            navigate("/"); // Redirige vers la page d'accueil
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



function Dashboard() {
  return (
    <div className="flex overflow-hidden flex-col bg-gray-200">
      <div className="px-3 py-6 w-full max-md:pr-5 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <div className="flex flex-col w-[17%] max-md:ml-0 max-md:w-full">
            <div className="flex z-10 flex-col grow items-start mt-9 max-md:mt-10 max-md:-mr-1.5">
            <Navigation />
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/1c5092b42afba83e6b1bc18c9e510308b9d1e73a62ad5a9bd8c71178f71c07f5?placeholderIfAbsent=true&apiKey=2abb0b1728de4d98902e239cea09e9d5"
                className="object-contain mt-80 rounded-none aspect-[0.72] w-[217px] max-md:mt-10"
              />
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[83%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col p-6 mx-auto w-full bg-gray rounded-[32px] shadow-[0px_4px_48px_rgba(0,0,0,0.02)] max-md:px-5 max-md:mt-6 max-md:max-w-full">
              <div className="flex flex-wrap gap-5 justify-between max-md:max-w-full">
                <div className="flex flex-col">
                  <div className="self-start text-base leading-none text-stone-500">
                    Bonjour John, content de te revoir.
                  </div>
                  <div className="mt-1 text-3xl font-semibold tracking-wide leading-none text-indigo-800">
                    Votre tableau de bord aujourd'hui
                  </div>
                </div>
                <Link to="/profile">
                      <img
                        loading="lazy"
                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/f65e14c105c9ae43048667c73a1f939776bb4b0a9a8bd1687bdbf71175fe3c5e?placeholderIfAbsent=true&apiKey=2abb0b1728de4d98902e239cea09e9d5&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/f65e14c105c9ae43048667c73a1f939776bb4b0a9a8bd1687bdbf71175fe3c5e?placeholderIfAbsent=true&apiKey=2abb0b1728de4d98902e239cea09e9d5&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/f65e14c105c9ae43048667c73a1f939776bb4b0a9a8bd1687bdbf71175fe3c5e?placeholderIfAbsent=true&apiKey=2abb0b1728de4d98902e239cea09e9d5&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/f65e14c105c9ae43048667c73a1f939776bb4b0a9a8bd1687bdbf71175fe3c5e?placeholderIfAbsent=true&apiKey=2abb0b1728de4d98902e239cea09e9d5&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/f65e14c105c9ae43048667c73a1f939776bb4b0a9a8bd1687bdbf71175fe3c5e?placeholderIfAbsent=true&apiKey=2abb0b 1728de4d98902e239cea09e9d5&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/f65e14c105c9ae43048667c73a1f939776bb4b0a9a8bd1687bdbf71175fe3c5e?placeholderIfAbsent=true&apiKey=2abb0b1728de4d98902e239cea09e9d5&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/f65e14c105c9ae43048667c73a1f939776bb4b0a9a8bd1687bdbf71175fe3c5e?placeholderIfAbsent=true&apiKey=2abb0b1728de4d98902e239cea09e9d5&width=2000 2000w"
                        className="object-contain shrink-0 my-auto max-w-full aspect-[4.61] w-[184px]"
                        alt="Profile"
                      />
                  </Link>
              </div>
              <div className="mt-4 max-md:mr-0.5 max-md:max-w-full">
                <div className="flex gap-5 max-md:flex-col">
                  <div className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
                    <div className="flex flex-col grow max-md:mt-4">
                      <div className="flex flex-col px-4 py-6 w-full bg-white rounded-2xl">
                        <div className="flex gap-4 self-start">
                          <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/da3127488b172df784286308f82fcc923e922d9ba230aaa4197cb323501bb1f4?placeholderIfAbsent=true&apiKey=2abb0b1728de4d98902e239cea09e9d5"
                            className="object-contain shrink-0 my-auto w-12 rounded-none aspect-square"
                          />
                          <div className="flex flex-col">
                            <div className="self-start text-2xl font-semibold leading-none text-sky-950">
                              03
                            </div>
                            <div className="text-xs text-zinc-500">
                              Cours complété
                            </div>
                          </div>
                        </div>
                        <div className="flex gap-1.5 mt-9">
                          <div className="flex flex-col items-start my-auto rounded-2xl bg-sky-950 bg-opacity-10">
                            <div className="flex shrink-0 bg-blue-500 rounded-2xl h-[13px] w-[123px]" />
                          </div>
                          <div className="text-sm font-medium leading-none text-right text-sky-950">
                            50%
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
                    <div className="flex flex-col grow max-md:mt-4">
                      <div className="flex flex-col px-4 py-6 w-full bg-white rounded-2xl">
                        <div className="flex gap-4 self-start">
                          <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/84d1d7b1ddd73c12160b511a7a7db3d1c8d6d5e211837f7a0206f923f2f7c8a9?placeholderIfAbsent=true&apiKey=2abb0b1728de4d98902e239cea09e9d5"
                            className="object-contain shrink-0 my-auto w-12 rounded-none aspect-square"
                          />
                          <div className="flex flex-col">
                            <div className="self-start text-2xl font-semibold leading-none text-sky-950">
                              02
                            </div>
                            <div className="text-xs text-zinc-500">
                              Cours en cours
                            </div>
                          </div>
                        </div>
                        <div className="flex gap-1.5 mt-9">
                          <div className="flex flex-col items-start my-auto rounded-2xl bg-sky-950 bg-opacity-10">
                            <div className="flex shrink-0 bg-blue-500 rounded-2xl h-[13px] w-[123px]" />
 </div>
                          <div className="text-sm font-medium leading-none text-right text-sky-950">
                            40%
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
                    <div className="flex flex-col grow max-md:mt-4">
                      <div className="flex flex-col px-4 py-6 w-full bg-white rounded-2xl">
                        <div className="flex gap-4 self-start">
                          <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/7901dbd6f3f661c8d61d01a3caa289b429ca2e08dd2a1638a9e5319eb4edb3f2?placeholderIfAbsent=true&apiKey=2abb0b1728de4d98902e239cea09e9d5"
                            className="object-contain shrink-0 my-auto w-12 rounded-none aspect-square"
                          />
                          <div className="flex flex-col">
                            <div className="self-start text-2xl font-semibold leading-none text-sky-950">
                              05
                            </div>
                            <div className="text-xs text-zinc-500">
                              Certificat obtenu
                            </div>
                          </div>
                        </div>
                        <div className="flex gap-3 mt-9">
                          <div className="flex flex-col items-start my-auto rounded-2xl bg-sky-950 bg-opacity-10">
                            <div className="flex shrink-0 bg-blue-500 rounded-2xl h-[13px] w-[123px]" />
                          </div>
                          <div className="text-sm font-medium leading-none text-right text-sky-950">
                            10%
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
                    <div className="flex flex-col grow max-md:mt-4">
                      <div className="flex flex-col px-4 py-6 w-full bg-white rounded-2xl">
                        <div className="flex gap-4 self-start whitespace-nowrap">
                          <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/9e0710dbd102fba62cbc4b9d37811ec16d9b105b82366ce36d2d3452010d6077?placeholderIfAbsent=true&apiKey=2abb0b1728de4d98902e239cea09e9d5"
                            className="object-contain shrink-0 my-auto rounded-none aspect-[0.98] w-[47px]"
                          />
                          <div className="flex flex-col">
                            <div className="self-start text-2xl font-semibold leading-none text-sky-950">
                              10
                            </div>
                            <div className="text-xs text-zinc-500">
                              Réussite
                            </div>
                          </div>
                        </div>
                        <div className="flex gap-2 mt-9">
                          <div className="flex flex-col items-start my-auto rounded-2xl bg-sky-950 bg-opacity-10">
                            <div className="flex shrink-0 bg-blue-500 rounded-2xl h-[13px] w-[123px]" />
                          </div>
                          <div className="text-sm font-medium leading-none text-right text-sky-950">
                            70%
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap gap-5 justify-between mt-6 w-full max-w-[999px] max-md:max-w-full">
                <div className="my-auto text-3xl font-semibold tracking-wide leading-none text-zinc-900">
                  Vos cours inachevés
                </div>
                <div className="flex gap-6">
                  <div className="flex justify-center px-3.5 text-base font-bold leading-none text-center text-white bg-amber-500 rounded-lg min-h-[38px]">
                    <div className="overflow-hidden self-stretch h-full">
                      Voir tout
                    </div>
                  </div>
                  <div className="self-start text-2xl leading-none basis-auto text-sky-950">
                   Ma communauté
                  </div>
                </div>
              </div>
              <div className="mt-3 max-md:mr-0.5 max-md:max-w-full">
                <div className="flex gap-5 max-md:flex-col">
                  <div className="flex flex-col w-[73%] max-md:ml-0 max-md:w-full">
                    <div className="flex flex-col mt-3 w-full max-md:mt-9 max-md:max-w-full">
                      <div className="max-md:max-w-full">
                        <div className="flex gap-5 max-md:flex-col">
                        <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
  <Link to="/courses/overview" className="flex flex-col grow max-md:mt-4">
    <div className="flex flex-col items-center aspect-square bg-neutral-100 rounded-[48px]">
      <div className="flex relative flex-col w-full rounded-none aspect-[1.013]">
        <img
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/67f7dd6db1b70c21d90a4f915c0716b877cedb9bdd3143577b86a854fbd73e18?placeholderIfAbsent=true&apiKey=2abb0b1728de4d98902e239cea09e9d5&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/67f7dd6db1b70c21d90a4f915c0716b877cedb9bdd3143577b86a854fbd73e18?placeholderIfAbsent=true&apiKey=2abb0b1728de4d98902e239cea09e9d5&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/67f7dd6db1b70c21d90a4f915c0716b877cedb9bdd3143577b86a854fbd73e18?placeholderIfAbsent=true&apiKey=2abb0b1728de4d98902e239cea09e9d5&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/67f7dd6db1b70c21d90a4f915c0716b877cedb9bdd3143577b86a854fbd73e18?placeholderIfAbsent=true&apiKey=2abb0b1728de4d98902e239cea09e9d5&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/67f7dd6db1b70c21d90a4f915c0716b877cedb9bdd3143577b86a854fbd73e18?placeholderIfAbsent=true&apiKey=2abb0b1728de4d98902e239cea09e9d5&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/67f7dd6db1b70c21d90a4f915c0716b877cedb9bdd3143577b86a854fbd73e18?placeholderIfAbsent=true&apiKey=2abb0b1728de4d98902e239cea09e9d5&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/67f7dd6db1b70c21d90a4f915c0716b877cedb9bdd3143577b86a854fbd73e18?placeholderIfAbsent=true&apiKey=2abb0b1728de4d98902e239cea09e9d5&width=2000 2000w"
          className="object-cover absolute inset-0 size-full"
        />
        <div className="flex relative flex-col p-6 w-full rounded-2xl max-md:px-5">
          <div className="flex gap-5 justify-between w-full">
            <div className="flex gap-4 text-white">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/33a034894ce19c19a1b19833188123b970b1d3c783eaa4b310ef2a2fa4b42dad?placeholderIfAbsent=true&apiKey=2abb0b1728de4d98902e239cea09e9d5&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/33a034894ce19c19a1b19833188123b970b1d3c783eaa4b310ef2a2fa4b42dad?placeholderIfAbsent=true&apiKey=2abb0b1728de4d98902e239cea09e9d5&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/33a034894ce19c19a1b19833188123b970b1d3c783eaa4b310ef2a2fa4b42dad?placeholderIfAbsent=true&apiKey=2abb0b1728de4d98902e239cea09e9d5&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/33a034894ce19c19a1b19833188123b970b1d3c783eaa4b310ef2a2fa4b42dad?placeholderIfAbsent=true&apiKey=2abb0b1728de4d98902e239cea09e9d5&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/33a034894ce19c19a1b19833188123b970b1d3c783eaa4b310ef2a2fa4b42dad?placeholderIfAbsent=true&apiKey=2abb0b1728de4d98902e239cea09e9d5&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/33a034894ce19c19a1b19833188123b970b1d3c783eaa4b310ef2a2fa4b42dad?placeholderIfAbsent=true&apiKey=2abb0b1728de4d98902e239cea09e9d5&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/33a034894ce19c19a1b19833188123b970b1d3c783eaa4b310ef2a2fa4b42dad?placeholderIfAbsent=true&apiKey=2abb0b1728de4d98902e239cea09e9d5&width=2000 2000w"
                className="object-contain shrink-0 w-12 rounded-full aspect-square"
              />
              <div className="flex flex-col">
                <div className="text-lg font-semibold">Dianne Edwards</div>
                <div className="self-start text-sm">@dianneed</div>
              </div>
            </div>
            <div className="flex justify-center self-start px-3.5 text-base font-bold leading-none text-center text-white bg-indigo-800 rounded-lg min-h-[38px]">
              <div className="overflow-hidden self-stretch h-full">82 min</div>
            </div>
          </div>
          <div className="px-7 py-4 mt-52 text-lg font-medium text-white rounded-2xl bg-neutral-400 bg-opacity-50 max-md:px-5 max-md:mt-10">
            Dynamo numérique : Libérez votre potentiel en ligne
          </div>
        </div>
      </div>
    </div>
  </Link>
</div>
                          <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                            <div className="flex flex-col grow max-md:mt-4">
                              <div className="flex flex-col items-center aspect-square bg-neutral-100 rounded-[48px]">
                                <div className="flex relative flex-col w-full rounded-none aspect-[1.013]">
                                  <img
                                    loading="lazy"
                                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/67f7dd6db1b70c21d90a4f915c0716b877cedb9bdd3143577b86a854fbd73e18?placeholderIfAbsent=true&apiKey=2abb0b1728de4d98902e239cea09e9d5&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/67f7dd6db1b70c21d ```javascript
90a4f915c0716b877cedb9bdd3143577b86a854fbd73e18?placeholderIfAbsent=true&apiKey=2abb0b1728de4d98902e239cea09e9d5&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/67f7dd6db1b70c21d90a4f915c0716b877cedb9bdd3143577b86a854fbd73e18?placeholderIfAbsent=true&apiKey=2abb0b1728de4d98902e239cea09e9d5&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/67f7dd6db1b70c21d90a4f915c0716b877cedb9bdd3143577b86a854fbd73e18?placeholderIfAbsent=true&apiKey=2abb0b1728de4d98902e239cea09e9d5&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/67f7dd6db1b70c21d90a4f915c0716b877cedb9bdd3143577b86a854fbd73e18?placeholderIfAbsent=true&apiKey=2abb0b1728de4d98902e239cea09e9d5&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/67f7dd6db1b70c21d90a4f915c0716b877cedb9bdd3143577b86a854fbd73e18?placeholderIfAbsent=true&apiKey=2abb0b1728de4d98902e239cea09e9d5&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/67f7dd6db1b70c21d90a4f915c0716b877cedb9bdd3143577b86a854fbd73e18?placeholderIfAbsent=true&apiKey=2abb0b1728de4d98902e239cea09e9d5&width=2000 2000w"
                                    className="object-cover absolute inset-0 size-full"
                                  />
                                  <div className="flex relative flex-col p-6 w-full rounded-2xl max-md:px-5">
                                    <div className="flex gap-5 justify-between w-full">
                                      <div className="flex gap-4 text-white">
                                        <img
                                          loading="lazy"
                                          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/33a034894ce19c19a1b19833188123b970b1d3c783eaa4b310ef2a2fa4b42dad?placeholderIfAbsent=true&apiKey=2abb0b1728de4d98902e239cea09e9d5&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/33a034894ce19c19a1b19833188123b970b1d3c783eaa4b310ef2a2fa4b42dad?placeholderIfAbsent=true&apiKey=2abb0b1728de4d98902e239cea09e9d5&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/33a034894ce19c19a1b19833188123b970b1d3c783eaa4b310ef2a2fa4b42dad?placeholderIfAbsent=true&apiKey=2abb0b1728de4d98902e239cea09e9d5&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/33a034894ce19c19a1b19833188123b970b1d3c783eaa4b310ef2a2fa4b42dad?placeholderIfAbsent=true&apiKey=2abb0b1728de4d98902e239cea09e9d5&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/33a034894ce19c19a1b19833188123b970b1d3c783eaa4b310ef2a2fa4b42dad?placeholderIfAbsent=true&apiKey=2abb0b1728de4d989 ```javascript
d98902e239cea09e9d5&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/33a034894ce19c19a1b19833188123b970b1d3c783eaa4b310ef2a2fa4b42dad?placeholderIfAbsent=true&apiKey=2abb0b1728de4d98902e239cea09e9d5&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/33a034894ce19c19a1b19833188123b970b1d3c783eaa4b310ef2a2fa4b42dad?placeholderIfAbsent=true&apiKey=2abb0b1728de4d98902e239cea09e9d5&width=2000 2000w"
                                          className="object-contain shrink-0 w-12 rounded-full aspect-square"
                                        />
                                        <div className="flex flex-col">
                                          <div className="text-lg font-semibold">
                                            Dianne Edwards
                                          </div>
                                          <div className="self-start text-sm">
                                            @dianneed
                                          </div>
                                        </div>
                                      </div>
                                      <div className="flex justify-center self-start px-3.5 text-base font-bold leading-none text-center text-white bg-indigo-800 rounded-lg min-h-[38px]">
                                        <div className="overflow-hidden self-stretch h-full">
                                          82 min
                                        </div>
                                      </div>
                                    </div>
                                    <div className="px-7 py-4 mt-52 text-lg font-medium text-white rounded-2xl bg-neutral-400 bg-opacity-50 max-md:px-5 max-md:mt-10">
                                      Dynamo numérique : Libérez votre potentiel en ligne
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-5 justify-between mt-6 w-full max-md:max-w-full">
                        <div className="my-auto text-3xl font-semibold tracking-wide leading-none text-zinc-900">
                          Cours populaires
                        </div>
                        <div className="flex justify-center px-3.5 text-base font-bold leading-none text-center text-white bg-amber-500 rounded-lg min-h-[38px]">
                          <div className="overflow-hidden self-stretch h-full">
                            Voir tout
                          </div>
                        </div>
                      </div>
                      <div className="mt-6 max-md:max-w-full">
                        <div className="flex gap-5 max-md:flex-col">
                          <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                          <Link to="/courses/detail">
      <div className="flex flex-col items-start py-4 pr-20 pl-5 mx-auto w-full bg-white rounded-xl shadow-[0px_0px_5px_rgba(0,0,0,0.099)] max-md:pr-5 max-md:mt-4 cursor-pointer">
        <div className="flex gap-5 font-medium text-slate-900">
          <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/2a4b17d1426ceaedc40428e87729a307ce57a346a1ea119630a54278fccbd24f?placeholderIfAbsent=true&apiKey=2abb0b1728de4d98902e239cea09e9d5&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/2a4b17d1426ceaedc40428e87729a307ce57a346a1ea119630a54278fccbd24f?placeholderIfAbsent=true&apiKey=2abb0b1728de4d98902e239cea09e9d5&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/2a4b17d1426ceaedc40428e87729a307ce57a346a1ea119630a54278fccbd24f?placeholderIfAbsent=true&apiKey=2abb0b1728de4d98902e239cea09e9d5&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/2a4b17d1426ceaedc40428e87729a307ce57a346a1ea119630a54278fccbd24f?placeholderIfAbsent=true&apiKey=2abb0b1728de4d98902e239cea09e9d5&width=800 800w"
            className="object-contain shrink-0 rounded-2xl aspect-square w-[95px]"
          />
          <div className="flex flex-col items-start self-start">
            <div className="self-stretch text-lg leading-loose">Evan Lindsey</div>
            <div className="mt-1 text-sm leading-7 bg-blend-normal">Début : 17 avril</div>
            <div className="mt-2 text-base text-amber-500">159 $</div>
          </div>
        </div>
        <div className="mt-2.5 text-base font-semibold leading-7 text-stone-500">
          Éthique du marketing numérique : Naviguer dans le paysage éthique
        </div>
      </div>
    </Link>
                          </div>
                          <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                            <div className="flex flex-col items-start py-4 pr-20 pl-5 mx-auto w-full bg-white rounded-xl shadow-[0px_0px_5px_rgba(0,0,0,0.099)] max-md:pr-5 max-md:mt-4">
                              <div className="flex gap-5 font-medium text-slate-900">
                                <img
                                  loading="lazy"
                                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/411593a1bda397aa46b723582b1021315e7517d54c448c77e7a59fe18d724261?placeholderIfAbsent=true&apiKey=2abb0b1728de4d98902e239cea09e9d5&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/411593a1bda397aa46b723582b1021315e7517d54c448c77e7a59fe18d724261?placeholderIfAbsent=true&apiKey=2abb0b1728de4d98902e239cea09e9d5&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/411593a1bda397aa46b723582b1021315e7517d54c448c77e7a59fe18d724261?placeholderIfAbsent=true&apiKey=2abb0b1728de4d98902e239cea09e9d5&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/411593a1bda397aa46b723582b1021315e7517d54c448c77e7a59fe18d724261?placeholderIfAbsent=true&apiKey=2abb0b1728de4d98902e239cea09e9d5&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/411593a1bda397aa46b723582b1021315e7517d54c448c77e7a59fe18d724261?placeholderIfAbsent=true&apiKey=2abb0b1728de4d98902 ```javascript
239cea09e9d5&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/411593a1bda397aa46b723582b1021315e7517d54c448c77e7a59fe18d724261?placeholderIfAbsent=true&apiKey=2abb0b1728de4d98902e239cea09e9d5&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/411593a1bda397aa46b723582b1021315e7517d54c448c77e7a59fe18d724261?placeholderIfAbsent=true&apiKey=2abb0b1728de4d98902e239cea09e9d5&width=2000 2000w"
                                  className="object-contain shrink-0 rounded-2xl aspect-square w-[95px]"
                                />
                                <div className="flex flex-col items-start self-start">
                                  <div className="self-stretch text-lg leading-loose">
                                    Roger Hamilton
                                  </div>
                                  <div className="mt-1 text-sm leading-7 bg-blend-normal">
                                    Début : 19 avril
                                  </div>
                                  <div className="mt-2 text-base text-amber-500">
                                    159 $
                                  </div>
                                </div>
                              </div>
                              <div className="mt-2.5 text-base font-semibold leading-7 text-stone-500">
                                Puissance du Pay-Per-Click : Créer des campagnes rentables
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col ml-5 w-[27%] max-md:ml-0 max-md:w-full">
                    <div className="flex flex-col max-md:mt-6">
                      <div className="flex flex-col px-px pt-6 pb-2.5 w-full bg-white rounded-2xl">
                        <div className="flex gap-5 justify-between mr-4 ml-4 max-md:mx-2.5">
                          <div className="flex gap-4">
                            <img
                              loading="lazy"
                              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/7b95e9930a47ef58c1a878526fc80badb4982b8eca574aedbf53d96d00bdfb6a?placeholderIfAbsent=true&apiKey=2abb0b1728de4d98902e239cea09e9d5&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/7b95e9930a47ef58c1a878526fc80badb4982b8eca574aedbf53d96d00bdfb6a?placeholderIfAbsent=true&apiKey=2abb0b1728de4d98902e239cea09e9d5&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/7b95e9930a47ef58c1a878526fc80badb4982b8eca574aedbf53d96d00bdfb6a?placeholderIfAbsent=true&apiKey=2abb0b1728de4d98902e239cea09e9d5&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/7b95e9930a47ef58c1a878526fc80badb4982b8eca574aedbf53d96d00bdfb6a?placeholderIfAbsent=true&apiKey=2abb0b1728de4d98902e239cea09e9d5&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/7b95e9930a47ef58c1a878526fc80badb4982b8eca574aedbf53d96d00bdfb6a?placeholderIfAbsent=true&apiKey=2abb0b1728de4d98902e239cea09e9d5&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/7b95e9930a47ef58c1a878526fc80badb4982b8eca574aedbf53d96d00bdfb6a?placeholderIfAbsent=true&apiKey=2abb ```javascript
0b1728de4d98902e239cea09e9d5&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/7b95e9930a47ef58c1a878526fc80badb4982b8eca574aedbf53d96d00bdfb6a?placeholderIfAbsent=true&apiKey=2abb0b1728de4d98902e239cea09e9d5&width=2000 2000w"
                              className="object-contain shrink-0 w-11 rounded-xl aspect-square"
                            />
                            <div className="flex flex-col">
                              <div className="text-base font-medium leading-none text-sky-950">
                                We The Feast
                              </div>
                              <div className="self-start mt-2 text-xs text-zinc-500">
                                48 Membres
                              </div>
                            </div>
                          </div>
                          <div className="self-end mt-7 text-xs font-semibold leading-none text-amber-500">
                            Privé{" "}
                          </div>
                        </div>
                        <div className="flex shrink-0 mt-4 h-px bg-zinc-400 bg-opacity-10" />
                        <div className="flex gap-5 justify-between mt-4 mr-4 ml-4 max-md:mx-2.5">
                          <div className="flex gap-4">
                            <img
                              loading="lazy"
                              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/a6397d69089650af7e6a9e7ff25497896a468fa719adb0a5c430e7c6c85d206e?placeholderIfAbsent=true&apiKey=2abb0b1728de4d98902e239cea09e9d5&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/a6397d69089650af7e6a9e7ff25497896a468fa719adb0a5c430e7c6c85d206e?placeholderIfAbsent=true&apiKey=2abb0b1728de4d98902e239cea09e9d5&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a6397d69089650af7e6a9e7ff25497896a468fa719adb0a5c430e7c6c85d206e?placeholderIfAbsent=true&apiKey=2abb0b1728de4d98902e239cea09e9d5&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/a6397d69089650af7e6a9e7ff25497896a468fa719adb0a5c430e7c6c85d206e?placeholderIfAbsent=true&apiKey=2abb0b1728de4d98902e239cea09e9d5&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/a6397d69089650af7e6a9e7ff25497896a468fa719adb0a5c430e7c6c85d206e?placeholderIfAbsent=true&apiKey=2abb0b1728de4d98902e239cea09e9d5&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a6397d69089650af7e6a9e7ff25497896a468fa719adb0a5c430e7c6c85d206e?placeholderIfAbsent=true&apiKey=2abb0b1728de4d98902e239cea09e9d5&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/a6397d69089650af7e6a9e7ff25497896a468fa719adb0a5c430e7c6c85d206e?placeholderIfAbsent=true&apiKey=2abb0b1728de4d98902e239cea09e9d5&width=2000 2000w"
                              className="object-contain shrink-0 w-11 rounded-xl aspect-square"
                            />
                            <div className="flex flex-col">
                              <div className="text-base font-medium leading-none text-sky-950">
                                We The Feast
                              </div>
                              <div className=" self-start mt-2 text-xs text-zinc-500">
                                18 Membres
                              </div>
                            </div>
                          </div>
                          <div className="self-end mt-7 text-xs font-semibold leading-none text-amber-500">
                            Privé{" "}
                          </div>
                        </div>
                        <div className="flex shrink-0 mt-4 h-px bg-zinc-400 bg-opacity-10" />
                        <div className="flex gap-5 justify-between self-center mt-4 max-w-full w-[257px]">
                          <div className="flex gap-4">
                            <img
                              loading="lazy"
                              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/fb73c37cecbad39c137a31bd1f29ec280a4c769c55fce2b2f9dbf3f0e0f00c23c?placeholderIfAbsent=true&apiKey=2abb0b1728de4d98902e239cea09e9d5&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/fb73c37cecbad39c137a31bd1f29ec280a4c769c55fce2b2f9dbf3f0e0f00c23c?placeholderIfAbsent=true&apiKey=2abb0b1728de4d98902e239cea09e9d5&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/fb73c37cecbad39c137a31bd1f29ec280a4c769c55fce2b2f9dbf3f0e0f00c23c?placeholderIfAbsent=true&apiKey=2abb0b1728de4d98902e239cea09e9d5&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/fb73c37cecbad39c137a31bd1f29ec280a4c769c55fce2b2f9dbf3f0e0f00c23c?placeholderIfAbsent=true&apiKey=2abb0b1728de4d98902e239cea09e9d5&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/fb73c37cecbad39c137a31bd1f29ec280a4c769c55fce2b2f9dbf3f0e0f00c23c?placeholderIfAbsent=true&apiKey=2abb0b1728de4d98902e239cea09e9d5&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/fb73c37cecbad39c137a31bd1f29ec280a4c769c55fce2b2f9dbf3f0e0f00c23c?placeholderIfAbsent=true&apiKey=2abb0b1728de4d98902e239cea09e9d5&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/fb73c37cecbad39c137a31bd1f29ec280a4c769c55fce2b2f9dbf3f0e0f00c23c?placeholderIfAbsent=true&apiKey=2abb0b1728de4d98902e239cea09e9d5&width=2000 2000w"
                              className="object-contain shrink-0 w-11 rounded-xl aspect-square"
                            />
                            <div className="flex flex-col">
                              <div className="text-base font-medium leading-none text-sky-950">
                                We The Feast
                              </div>
                              <div className="self-start mt-2 text-xs text-zinc-500">
                                26 Membres
                              </div>
                            </div>
                          </div>
                          <div className="self-end mt-7 text-xs font-semibold leading-none text-indigo-800">
                            Public{" "}
                          </div>
                        </div>
                        <div className="flex shrink-0 mt-4 h-px bg-zinc-400 bg-opacity-10" />
                        <div className="flex gap-5 justify-between self-center mt-4 max-w-full w-[257px]">
                          <div className="flex gap-4">
                            <img
                              loading="lazy"
                              srcSet="https ://cdn.builder.io/api/v1/image/assets/TEMP/0580d1e8df8d5b4f17fa449619994a0769c5fa7eb5acd34154cbb12f6aa80adc?placeholderIfAbsent=true&apiKey=2abb0b1728de4d98902e239cea09e9d5&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/0580d1e8df8d5b4f17fa449619994a0769c5fa7eb5acd34154cbb12f6aa80adc?placeholderIfAbsent=true&apiKey=2abb0b1728de4d98902e239cea09e9d5&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/0580d1e8df8d5b4f17fa449619994a0769c5fa7eb5acd34154cbb12f6aa80adc?placeholderIfAbsent=true&apiKey=2abb0b1728de4d98902e239cea09e9d5&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/0580d1e8df8d5b4f17fa449619994a0769c5fa7eb5acd34154cbb12f6aa80adc?placeholderIfAbsent=true&apiKey=2abb0b1728de4d98902e239cea09e9d5&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/0580d1e8df8d5b4f17fa449619994a0769c5fa7eb5acd34154cbb12f6aa80adc?placeholderIfAbsent=true&apiKey=2abb0b1728de4d98902e239cea09e9d5&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/0580d1e8df8d5b4f17fa449619994a0769c5fa7eb5acd34154cbb12f6aa80adc?placeholderIfAbsent=true&apiKey=2abb0b1728de4d98902e239cea09e9d5&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/0580d1e8df8d5b4f17fa449619994a0769c5fa7eb5acd34154cbb12f6aa80adc?placeholderIfAbsent=true&apiKey=2abb0b1728de4d98902e239cea09e9d5&width=2000 2000w"
                              className="object-contain shrink-0 w-11 rounded-xl aspect-square"
                            />
                            <div className="flex flex-col">
                              <div className="text-base font-medium leading-none text-sky-950">
                                We The Feast
                              </div>
                              <div className="self-start mt-2 text-xs text-zinc-500">
                                32 Membres
                              </div>
                            </div>
                          </div>
                          <div className="self-end mt-7 text-xs font-semibold leading-none text-indigo-800">
                            Public{" "}
                          </div>
                        </div>
                        <div className="flex shrink-0 mt-4 h-px bg-zinc-400 bg-opacity-10" />
                        <div className="flex gap-5 justify-between mt-4 mr-4 ml-4 max-md:mx-2.5">
                          <div className="flex gap-4">
                            <img
                              loading="lazy"
                              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/56dc4cf4dc1b61bb9805568703a1fcc7a71b8934db97da55f36890097066ad52?placeholderIfAbsent=true&apiKey=2abb0b1728de4d98902e239cea09e9d5&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/56dc4cf4dc1b61bb9805568703a1fcc7a71b8934db97da55f36890097066ad52?placeholderIfAbsent=true&apiKey=2abb0b1728de4d98902e239cea09e9d5&width=200 200w, https://cdn.builder.io/api/v1/image/assets/T ```javascript
EMP/56dc4cf4dc1b61bb9805568703a1fcc7a71b8934db97da55f36890097066ad52?placeholderIfAbsent=true&apiKey=2abb0b1728de4d98902e239cea09e9d5&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/56dc4cf4dc1b61bb9805568703a1fcc7a71b8934db97da55f36890097066ad52?placeholderIfAbsent=true&apiKey=2abb0b1728de4d98902e239cea09e9d5&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/56dc4cf4dc1b61bb9805568703a1fcc7a71b8934db97da55f36890097066ad52?placeholderIfAbsent=true&apiKey=2abb0b1728de4d98902e239cea09e9d5&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/56dc4cf4dc1b61bb9805568703a1fcc7a71b8934db97da55f36890097066ad52?placeholderIfAbsent=true&apiKey=2abb0b1728de4d98902e239cea09e9d5&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/56dc4cf4dc1b61bb9805568703a1fcc7a71b8934db97da55f36890097066ad52?placeholderIfAbsent=true&apiKey=2abb0b1728de4d98902e239cea09e9d5&width=2000 2000w"
                              className="object-contain shrink-0 w-11 rounded-xl aspect-square"
                            />
                            <div className="flex flex-col">
                              <div className="text-base font-medium leading-none text-sky-950">
                                We The Feast
                              </div>
                              <div className="self-start mt-2 text-xs text-zinc-500">
                                54 Membres
                              </div>
                            </div>
                          </div>
                          <div className="self-end mt-7 text-xs font-semibold leading-none text-amber-500">
                            Privé{" "}
                          </div>
                        </div>
                        <div className="flex shrink-0 mt-4 h-px bg-zinc-400 bg-opacity-10" />
                      </div>
                      <div className="self-start mt-6 text-2xl leading-none text-sky-950">
                        Activité
                      </div>
                      <div className="flex flex-col p-3 mt-4 w-full bg-white rounded-lg">
                        <div className="flex gap-2 text-xs font-semibold text-gray-800 max-md:mr-2.5">
                          <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/9a9188d30e49fddf2cdb4419af0293baec29a85d5a1a21afe5ec333df8871a14?placeholderIfAbsent=true&apiKey=2abb0b1728de4d98902e239cea09e9d5"
                            className="object-contain shrink-0 w-9 rounded-none aspect-square"
                          />
                          <div>
                            2 Devoirs en attente pour les Bases de l'eCommerce
                          </div>
                        </div>
                        <div className="flex gap-3 self-end mt-1.5 max-w-full text-xs font-bold leading-none text-center w-[182px]">
                          <div className="grow my-auto text-amber-500">
                            Ignorer
                          </div>
                          <div className="flex justify-center px-2.5 text-white bg-amber-500 rounded min-h-[30px]">
                            <div className="overflow-hidden self-stretch h-full">
                              Envoyer le devoir
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col p-3 mt-4 w-full bg-white rounded-lg">
                        <div className="flex gap-2 text-xs font-semibold text-gray-800 max-md:mr-2.5">
                          <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/9a9188d30e49fd5b4f17fa449619994a0769c5fa7eb5acd34154cbb12f6aa80adc?placeholderIfAbsent=true&apiKey=2abb0b1728de4d98902e239cea09e9d5"
                            className="object-contain shrink-0 w-9 rounded-none aspect-square"
                          />
                          <div>
                            2 Devoirs en attente pour les Bases de l'eCommerce
                          </div>
                        </div>
                        <div className="flex gap-3 self-end mt-1.5 max-w-full text-xs font-bold leading-none text-center w-[182px]">
                          <div className="grow my-auto text-amber-500">
                            Ignorer
                          </div>
                          <div className="flex justify-center px-2.5 text-white bg-amber-500 rounded min-h-[30px]">
                            <div className="overflow-hidden self-stretch h-full">
                              Envoyer le devoir
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
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

export default Dashboard;