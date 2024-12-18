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
export default function CourseDetail() {

  
  
  return (
    <div className="px-5 py-6 w-full max-md:pr-5 max-md:max-w-full">
      <div className="flex gap-5 max-md:flex-col">
        <aside className="flex flex-col w-[17%] max-md:ml-0 max-md:w-full">
          <nav className="flex z-10 flex-col grow items-start mt-9 max-md:mt-10 max-md:-mr-1.5">
            <Navigation />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/2abb0b1728de4d98902e239cea09e9d5/bdd193f19a33132ab087c5df291e2f3ac75fad067dfa1bd282662cf5cfd80776?apiKey=2abb0b1728de4d98902e239cea09e9d5&"
              className="object-contain rounded-none aspect-[0.72] mt-[1141px] w-[217px] max-md:mt-10"
              alt="Navigation secondaire"
            />
          </nav>
        </aside>

        <main className="flex flex-col ml-5 w-[83%] max-md:ml-0 max-md:w-full">
          <div className="grow px-6 py-6 w-full bg-white rounded-[32px] shadow-[0px_4px_48px_rgba(0,0,0,0.02)] max-md:pl-5 max-md:mt-6 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col">
              <section className="flex flex-col w-[71%] max-md:ml-0 max-md:w-full">
                <header className="flex flex-col items-start w-full max-md:mt-10 max-md:max-w-full">
                  <h1 className="text-3xl font-semibold tracking-wide leading-none text-zinc-900">
                    Cours
                  </h1>
                  <nav className="flex gap-2.5 mt-3 text-sm" aria-label="Fil d'Ariane">
                    <span className="leading-none text-zinc-500">Cours</span>
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/2abb0b1728de4d98902e239cea09e9d5/3bafe1aa9402e2c9fccb02c5b6e08e7fc6296a708badc9133bc1821862c761ad?apiKey=2abb0b1728de4d98902e239cea09e9d5&"
                      className="object-contain shrink-0 my-auto w-4 aspect-square"
                      alt=""
                      aria-hidden="true"
                    />
                    <span className="font-medium basis-auto text-sky-950">
                      Créer des Campagnes Numériques Captivantes
                    </span>
                  </nav>
                </header>

                <article className="flex flex-col self-stretch py-8 mt-7 bg-white rounded-2xl max-md:max-w-full">
                  <div className="flex flex-col items-start px-7 w-full text-sm font-medium text-sky-950 max-md:px-5 max-md:max-w-full">
                    <div className="relative w-full aspect-video rounded-2xl overflow-hidden">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/2abb0b1728de4d98902e239cea09e9d5/f3548a9966d96097443cc0e167cb2f5bdabbe74ea156ecc5889b29ca7206a417?apiKey=2abb0b1728de4d98902e239cea09e9d5&"
                        className="object-cover absolute inset-0 size-full"
                        alt="Aperçu du cours"
                      />
                      <div className="relative flex flex-col items-center justify-center h-full">
                        <button 
                          className="bg-white/30 p-4 rounded-full"
                          aria-label="Lancer la vidéo"
                        >
                          <img
                            src="https://cdn.builder.io/api/v1/image/assets/2abb0b1728de4d98902e239cea09e9d5/0258045c330526427dabb5bcd0d261927894014095b993a01cb3dfa0e604f3e4?apiKey=2abb0b1728de4d98902e239cea09e9d5&"
                            className="w-[70px] aspect-square"
                            alt=""
                            aria-hidden="true"
                          />
                        </button>
                        <div className="absolute bottom-4 left-4 flex gap-1 px-2 py-1.5 rounded-xl bg-white/30 shadow-lg">
                          <img
                            src="https://cdn.builder.io/api/v1/image/assets/2abb0b1728de4d98902e239cea09e9d5/0301482ebe21a6258d27b822d84a07302b7908d2234764027c810b3fe9584899?apiKey=2abb0b1728de4d98902e239cea09e9d5&"
                            className="w-3 aspect-square"
                            alt=""
                            aria-hidden="true"
                          />
                          <span className="text-white text-xs">740</span>
                        </div>
                      </div>
                    </div>

                    <h2 className="mt-10 text-2xl font-semibold leading-none max-md:max-w-full">
                      Créer des Campagnes Numériques Captivantes
                    </h2>

                    <div className="mt-2.5 leading-none">
                      <span className="text-zinc-500">Par</span>{" "}
                      <span className="font-medium text-sky-950">Simon Shaw</span>
                      <span className="">, </span>
                      <span className="text-zinc-500">Expert SEO</span>
                    </div>

                    <nav className="flex flex-wrap gap-10 items-center mt-7 whitespace-nowrap text-zinc-500">
                      <button className="px-4 py-2 text-white bg-amber-500 rounded-3xl">
                        Information
                      </button>
                      <a href="/courses/details">
  <button className="text-sky-950">Contenu</button>
</a>                      <button className="flex gap-2 items-center">
                        <img
                          src="https://cdn.builder.io/api/v1/image/assets/2abb0b1728de4d98902e239cea09e9d5/ec21f73f06cd53aeebadce7520ba786a103dad9839d637684d230e200a86ba1e?apiKey=2abb0b1728de4d98902e239cea09e9d5&"
                          className="w-[17px] aspect-square"
                          alt=""
                          aria-hidden="true"
                        />
                        <span>Communauté</span>
                      </button>
                      <button className="flex gap-2 items-center">
                        <img
                          src="https://cdn.builder.io/api/v1/image/assets/2abb0b1728de4d98902e239cea09e9d5/ec21f73f06cd53aeebadce7520ba786a103dad9839d637684d230e200a86ba1e?apiKey=2abb0b1728de4d98902e239cea09e9d5&"
                          className="w-[17px] aspect-square"
                          alt=""
                          aria-hidden="true"
                        />
                        <span>Étudiants</span>
                      </button>
                    </nav>

                    <div className="self-stretch mt-12 leading-7 max-md:mt-10 max-md:mr-1 max-md:max-w-full">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                        ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat.
                      </p>
                      <p className="mt-4">
                        Duis aute irure dolor in reprehenderit in voluptate velit esse
                        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                        cupidatat non proident, sunt in culpa qui officia deserunt mollit
                        anim id est laborum.
                      </p>
                    </div>
                  </div>

                  <hr className="mt-14 border-zinc-400/10" />

                  <section className="px-8 mt-10 max-md:px-5">
                    <h3 className="text-lg font-medium leading-none text-sky-950">
                      Avis
                    </h3>

                    <div className="mt-8 space-y-10">
                      <article className="flex flex-col">
                        <div className="flex gap-4">
                          <img
                            src="https://cdn.builder.io/api/v1/image/assets/2abb0b1728de4d98902e239cea09e9d5/e8443198a511a00eb50aada310f3ababe14ea2db4195ee2654f34d91696ff607?apiKey=2abb0b1728de4d98902e239cea09e9d5&"
                            className="w-12 aspect-square rounded-full"
                            alt="Photo de profil d'Arlene McCoy"
                          />
                          <div>
                            <h4 className="text-base font-medium text-sky-950">
                              Arlene McCoy
                            </h4>
                            <time className="text-xs text-zinc-500">
                              il y a environ une heure
                            </time>
                          </div>
                        </div>
                        <p className="mt-3 ml-16 text-sm leading-none text-zinc-500">
                          L'accès au cloud IBM était exactement ce que je cherchais et
                          Aaron m'a fourni la solution.
                        </p>
                      </article>

                      <article className="flex flex-col">
                        <div className="flex gap-4">
                          <img
                            src="https://cdn.builder.io/api/v1/image/assets/2abb0b1728de4d98902e239cea09e9d5/6a8db7ca349c2a30519b6f25fedb02504ea65d4b7787cee3209d85a17f5244ff?apiKey=2abb0b1728de4d98902e239cea09e9d5&"
                            className="w-12 aspect-square rounded-full"
                            alt="Photo de profil de Kristin Watson"
                          />
                          <div>
                            <h4 className="text-base font-medium text-sky-950">
                              Kristin Watson
                            </h4>
                            <time className="text-xs text-zinc-500">
                              il y a environ une heure
                            </time>
                          </div>
                        </div>
                        <p className="mt-3 ml-16 text-sm leading-5 text-zinc-500">
                          À la fin de ce cours, lorem ipsum dolor sit amet, consectetur
                          adipiscing elit. Odio dictum morbi odio facilisi.
                        </p>
                      </article>
                    </div>

                    <h3 className="mt-20 text-lg font-medium leading-none text-sky-950 max-md:mt-10">
                      Laisser un commentaire
                    </h3>

                    <textarea
                      className="w-full px-6 pt-4 pb-20 mt-5 text-xs rounded-2xl bg-slate-50 text-zinc-400 resize-none"
                      placeholder="Écrivez votre commentaire ici..."
                      aria-label="Votre commentaire"
                    />

                    <button className="w-full py-3.5 px-12 mt-6 text-base font-bold text-white bg-amber-500 rounded-[40px] hover:bg-amber-600 transition-colors">
                      Publier l'avis
                    </button>
                  </section>
                </article>
              </section>

              <aside className="flex flex-col ml-5 w-[29%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col items-start py-7 pr-3.5 pl-8 mx-auto mt-11 w-full bg-white rounded-2xl max-md:pl-5 max-md:mt-10">
                  <div className="flex gap-6 px-8 py-7 rounded-2xl border border-dashed bg-slate-50 border-black/10">
                    <div className="text-2xl font-medium leading-none text-sky-950">
                      199,00 €
                    </div>
                    <div className="text-base leading-none text-zinc-500 line-through">
                      250,00 €
                    </div>
                  </div>

                  <hr className="w-full my-6 border-zinc-400/10" />

                  <h3 className="text-lg font-medium leading-none text-sky-950">
                    Ce que vous apprendrez
                  </h3>

                  <p className="mt-4 text-sm leading-6 text-zinc-500">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua
                  </p>

                  <hr className="w-full my-6 border-zinc-400/10" />

                  <h3 className="text-lg font-medium leading-none text-sky-950">
                    Ce cours inclut :
                  </h3>

                  <ul className="mt-5 space-y-5 text-sm text-zinc-500">
                    <li className="flex gap-3 items-center">
                      <img
                        src="https://cdn.builder.io/api/v1/image/assets/2abb0b1728de4d98902e239cea09e9d5/8dcf7f2ba855e6045dad53292839ef7bf427346bc2b23c38aa8b56a647a13b46?apiKey=2abb0b1728de4d98902e239cea09e9d5&"
                        className="w-4 aspect-square"
                        alt=""
                        aria-hidden="true"
                      />
                      <span>100% d'avis positifs (45)</span>
                    </li>
                    <li className="flex gap-3 items-center">
                      <img
                        src="https://cdn.builder.io/api/v1/image/assets/2abb0b1728de4d98902e239cea09e9d5/ca2e7060d155786ea821acd7bcb99ea3532195e9c574d744a7c396c633932376?apiKey=2abb0b1728de4d98902e239cea09e9d5&"
                        className="w-4 aspect-square"
                        alt=""
                        aria-hidden="true"
                      />
                      <span>2167 étudiants</span>
                    </li>
                    <li className="flex gap-3 items-center">
                      <img
                        src="https://cdn.builder.io/api/v1/image/assets/2abb0b1728de4d98902e239cea09e9d5/4ca60045ace1f3e0749cea9673b7815a8e54ff7df472f1c8cc2cee960a3c4306?apiKey=2abb0b1728de4d98902e239cea09e9d5&"
                        className="w-4 aspect-square"
                        alt=""
                        aria-hidden="true"
                      />
                      <span>59 Leçons (9h 11m)</span>
                    </li>
                    <li className="flex gap-3 items-center">
                      <img
                        src="https://cdn.builder.io/api/v1/image/assets/2abb0b1728de4d98902e239cea09e9d5/38badf1a23da3f1226b2f83004f65645d9448626bb816e1c107420fbc1c82b78?apiKey=2abb0b1728de4d98902e239cea09e9d5&"
                        className="w-4 aspect-square"
                        alt=""
                        aria-hidden="true"
                      />
                      <span>6 cours</span>
                    </li>
                    <li className="flex gap-3 items-center">
                      <img
                        src="https://cdn.builder.io/api/v1/image/assets/2abb0b1728de4d98902e239cea09e9d5/2648fd9b15dcd0bc27629ac462647bdd44a159c9b2ef8488df17f84ed1a98af4?apiKey=2abb0b1728de4d98902e239cea09e9d5&"
                        className="w-4 aspect-square"
                        alt=""
                        aria-hidden="true"
                      />
                      <span>70 téléchargements (70 fichiers)</span>
                    </li>
                    <li className="flex gap-3 items-center">
                      <img
                        src="https://cdn.builder.io/api/v1/image/assets/2abb0b1728de4d98902e239cea09e9d5/c485ae03957f6ac8718823cd31951be5a219d5227dcda077a4dde9e540422804?apiKey=2abb0b1728de4d98902e239cea09e9d5&"
                        className="w-4 aspect-square"
                        alt=""
                        aria-hidden="true"
                      />
                      <span>Disponible sur l'application</span>
                    </li>
                    <li className="flex gap-3 items-center">
                      <img
                        src="https://cdn.builder.io/api/v1/image/assets/2abb0b1728de4d98902e239cea09e9d5/6875e444f2d8d8515bc820471dc73a699dcdae4a7a26a872961f30c43e54fd75?apiKey=2abb0b1728de4d98902e239cea09e9d5&"
                        className="w-4 aspect-square"
                        alt=""
                        aria-hidden="true"
                      />
                      <span>Audio : Français</span>
                    </li>
                    <li className="flex gap-2 items-center">
                      <img
                        src="https://cdn.builder.io/api/v1/image/assets/2abb0b1728de4d98902e239cea09e9d5/7c3d33776c3fc91ea81c5b3f42fff044b28dd8e231ac0092bbe9e883b7e195e1?apiKey=2abb0b1728de4d98902e239cea09e9d5&"
                        className="w-4 aspect-square"
                        alt=""
                        aria-hidden="true"
                      />
                      <span>Niveau :</span>
                      <span className="px-2 py-px text-xs tracking-tight text-orange-500 bg-orange-100 rounded-md">
                        Débutant
                      </span>
                    </li>
                  </ul>

                  <hr className="w-full my-8 border-zinc-400/10" />

                  <h3 className="text-lg font-medium leading-none text-sky-950">
                    Tags :
                  </h3>

                  <div className="flex flex-wrap gap-2.5 mt-5">
                    <button className="flex items-center gap-1.5 px-3 py-1.5 text-sm text-zinc-500 rounded-lg bg-slate-50">
                      <span>numérique</span>
                      <img
                        src="https://cdn.builder.io/api/v1/image/assets/2abb0b1728de4d98902e239cea09e9d5/28208024f3e3acf861561d1bf70cb68b891b2304c36531b0be9a300dc8de176c?apiKey=2abb0b1728de4d98902e239cea09e9d5&"
                        className="w-4 aspect-square"
                        alt=""
                        aria-hidden="true"
                      />
                    </button>
                    <button className="flex items-center gap-1.5 px-3 py-1.5 text-sm text-zinc-500 rounded-lg bg-slate-50">
                      <span>Marketing Produit</span>
                      <img
                        src="https://cdn.builder.io/api/v1/image/assets/2abb0b1728de4d98902e239cea09e9d5/28208024f3e3acf861561d1bf70cb68b891b2304c36531b0be9a300dc8de176c?apiKey=2abb0b1728de4d98902e239cea09e9d5&"
                        className="w-4 aspect-square"
                        alt=""
                        aria-hidden="true"
                      />
                    </button>
                    <button className="flex items-center gap-1.5 px-3 py-1.5 text-sm text-zinc-500 rounded-lg bg-slate-50">
                      <span>Tutoriels</span>
                      <img
                        src="https://cdn.builder.io/api/v1/image/assets/2abb0b1728de4d98902e239cea09e9d5/28208024f3e3acf861561d1bf70cb68b891b2304c36531b0be9a300dc8de176c?apiKey=2abb0b1728de4d98902e239cea09e9d5&"
                        className="w-4 aspect-square"
                        alt=""
                        aria-hidden="true"
                      />
                    </button>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}