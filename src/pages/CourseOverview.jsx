import React from 'react';

export default function CourseOverview() {
  return (
    <div className="flex overflow-hidden flex-col bg-white">
      <div className="px-5 py-6 w-full max-md:pr-5 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <aside className="flex flex-col w-[17%] max-md:ml-0 max-md:w-full">
            <nav className="flex z-10 flex-col grow items-start mt-9 max-md:mt-10 max-md:-mr-1.5">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/2abb0b1728de4d98902e239cea09e9d5/ab0ae5d9501e820994f89b2f9e3c2cfd26d5b94f6fe5f4764ab58b131adc8be9?apiKey=2abb0b1728de4d98902e239cea09e9d5&"
                className="object-contain ml-3.5 w-full aspect-[0.64] max-md:ml-2.5"
                alt="Navigation principale"
              />
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
                    <nav aria-label="Fil d'Ariane" className="flex gap-2.5 mt-3 text-sm">
                      <span className="leading-none text-zinc-500">Cours</span>
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/2abb0b1728de4d98902e239cea09e9d5/3bafe1aa9402e2c9fccb02c5b6e08e7fc6296a708badc9133bc1821862c761ad?apiKey=2abb0b1728de4d98902e239cea09e9d5&"
                        className="object-contain shrink-0 my-auto w-4 aspect-square"
                        alt=""
                        aria-hidden="true"
                      />
                      <span className="font-medium basis-auto text-sky-950">
                        Création de Campagnes Numériques Convaincantes
                      </span>
                    </nav>
                  </header>

                  <article className="flex flex-col self-stretch py-8 mt-7 bg-white rounded-2xl max-md:max-w-full">
                    <div className="relative aspect-video rounded-2xl overflow-hidden mb-10">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/2abb0b1728de4d98902e239cea09e9d5/f3548a9966d96097443cc0e167cb2f5bdabbe74ea156ecc5889b29ca7206a417?apiKey=2abb0b1728de4d98902e239cea09e9d5&"
                        className="object-cover absolute inset-0 w-full h-full"
                        alt="Aperçu du cours"
                      />
                      <div className="relative flex flex-col items-center justify-center h-full">
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/2abb0b1728de4d98902e239cea09e9d5/0258045c330526427dabb5bcd0d261927894014095b993a01cb3dfa0e604f3e4?apiKey=2abb0b1728de4d98902e239cea09e9d5&"
                          className="w-[70px] aspect-square mb-28"
                          alt=""
                          aria-hidden="true"
                        />
                        <div className="flex gap-1 px-2 py-1.5 rounded-xl bg-white/30 shadow-lg">
                          <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/2abb0b1728de4d98902e239cea09e9d5/0301482ebe21a6258d27b822d84a07302b7908d2234764027c810b3fe9584899?apiKey=2abb0b1728de4d98902e239cea09e9d5&"
                            className="w-3 aspect-square"
                            alt=""
                            aria-hidden="true"
                          />
                          <span className="text-white text-xs">740</span>
                        </div>
                      </div>
                    </div>

                    <div className="px-7 max-md:px-5">
                      <h2 className="text-2xl font-semibold text-sky-950 mb-2.5">
                        Création de Campagnes Numériques Convaincantes
                      </h2>
                      <p className="text-sm mb-7">
                        <span className="text-zinc-500">Par</span>{" "}
                        <span className="font-medium text-sky-950">Simon Shaw</span>
                        <span>, </span>
                        <span className="text-zinc-500">Expert SEO</span>
                      </p>

                      <div className="flex flex-wrap gap-10 items-center mb-12 text-sm">
                        <button className="px-4 py-2 text-white bg-amber-500 rounded-3xl">
                          Information
                        </button>
                        <button className="text-sky-950">Contenu</button>
                        <button className="flex gap-2 items-center text-zinc-500">
                          <img
                            src="https://cdn.builder.io/api/v1/image/assets/2abb0b1728de4d98902e239cea09e9d5/ec21f73f06cd53aeebadce7520ba786a103dad9839d637684d230e200a86ba1e?apiKey=2abb0b1728de4d98902e239cea09e9d5&"
                            className="w-[17px] aspect-square"
                            alt=""
                            aria-hidden="true"
                          />
                          Communauté
                        </button>
                        <button className="flex gap-2 items-center text-zinc-500">
                          <img
                            src="https://cdn.builder.io/api/v1/image/assets/2abb0b1728de4d98902e239cea09e9d5/ec21f73f06cd53aeebadce7520ba786a103dad9839d637684d230e200a86ba1e?apiKey=2abb0b1728de4d98902e239cea09e9d5&"
                            className="w-[17px] aspect-square"
                            alt=""
                            aria-hidden="true"
                          />
                          Étudiants
                        </button>
                      </div>

                      <div className="text-sm leading-7 text-zinc-500 mb-14">
                        <p className="mb-7">
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
                          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut 
                          enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                          nisi ut aliquip ex ea commodo consequat.
                        </p>
                        <p>
                          Duis aute irure dolor in reprehenderit in voluptate velit esse
                          cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                          cupidatat non proident, sunt in culpa qui officia deserunt 
                          mollit anim id est laborum.
                        </p>
                      </div>

                      <hr className="border-zinc-400/10 mb-10" />

                      <section className="px-8 max-md:px-5">
                        <h3 className="text-lg font-medium text-sky-950 mb-8">Avis</h3>
                        
                        <div className="mb-10">
                          <div className="flex gap-4 mb-3">
                            <img
                              src="https://cdn.builder.io/api/v1/image/assets/2abb0b1728de4d98902e239cea09e9d5/e8443198a511a00eb50aada310f3ababe14ea2db4195ee2654f34d91696ff607?apiKey=2abb0b1728de4d98902e239cea09e9d5&"
                              className="w-12 aspect-square rounded-full"
                              alt="Avatar d'Arlene McCoy"
                            />
                            <div>
                              <div className="font-medium text-sky-950">Arlene McCoy</div>
                              <div className="text-xs text-zinc-500">il y a environ une heure</div>
                            </div>
                          </div>
                          <p className="ml-16 text-sm text-zinc-500">
                            Accès au modélisation IBM Cloud que je cherchais et Aaron m'a donné la solution.
                          </p>
                        </div>

                        <h3 className="text-lg font-medium text-sky-950 mb-5">
                          Laisser un commentaire
                        </h3>
                        <textarea
                          className="w-full px-6 pt-4 pb-20 text-xs rounded-2xl bg-slate-50 text-zinc-400 mb-6"
                          placeholder="Écrivez vos commentaires ici..."
                        />
                        <button className="w-full py-3.5 px-12 text-base font-bold text-white bg-amber-500 rounded-[40px]">
                          Publier l'avis
                        </button>
                      </section>
                    </div>
                  </article>
                </section>

                <aside className="w-[29%] max-md:w-full">
                  <div className="bg-white rounded-2xl p-7 mt-11">
                    <div className="flex gap-6 px-8 py-7 rounded-2xl border border-dashed border-black/10 bg-slate-50">
                      <div className="text-2xl font-medium text-sky-950">199,00 €</div>
                      <div className="text-zinc-500">250,00 €</div>
                    </div>

                    <hr className="border-zinc-400/10 my-6" />

                    <div className="mb-8">
                      <h4 className="text-lg font-medium text-sky-950 mb-4">
                        Ce que vous apprendrez
                      </h4>
                      <p className="text-sm leading-6 text-zinc-500">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
                        eiusmod tempor incididunt ut labore et dolore magna aliqua
                      </p>
                    </div>

                    <hr className="border-zinc-400/10 mb-8" />

                    <h4 className="text-lg font-medium text-sky-950 mb-5">
                      Ce cours comprend:
                    </h4>

                    <ul className="space-y-5 mb-8">
                      {[
                        { icon: "ext_10-", text: "100% d'avis positifs (45)" },
                        { icon: "ext_11-", text: "2167 étudiants" },
                        { icon: "ext_12-", text: "59 Leçons (9h 11m)" },
                        { icon: "ext_13-", text: "6 cours" },
                        { icon: "ext_14-", text: "70 téléchargements (70 fichiers)" },
                        { icon: "ext_15-", text: "Disponible depuis l'application" },
                        { icon: "ext_16-", text: "Audio: Français" }
                      ].map((item, index) => (
                        <li key={index} className="flex gap-3 text-sm text-zinc-500">
                          <img
                            src={`http://b.io/${item.icon}`}
                            className="w-4 aspect-square"
                            alt=""
                            aria-hidden="true"
                          />
                          <span>{item.text}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex gap-2 mb-8">
                      <img
                        src="https://cdn.builder.io/api/v1/image/assets/2abb0b1728de4d98902e239cea09e9d5/7c3d33776c3fc91ea81c5b3f42fff044b28dd8e231ac0092bbe9e883b7e195e1?apiKey=2abb0b1728de4d98902e239cea09e9d5&"
                        className="w-4 aspect-square"
                        alt=""
                        aria-hidden="true"
                      />
                      <span className="text-sm text-zinc-500">Niveau:</span>
                      <span className="px-2 text-xs text-orange-500 bg-orange-100 rounded-md">
                        Débutant
                      </span>
                    </div>

                    <hr className="border-zinc-400/10 mb-8" />

                    <h4 className="text-lg font-medium text-sky-950 mb-5">Tags:</h4>
                    <div className="flex flex-wrap gap-2.5">
                      {["Digital", "Marketing Produit", "Formation"].map((tag, index) => (
                        <div key={index} className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-50 rounded-lg text-sm text-zinc-500">
                          <span>{tag}</span>
                          <img
                            src="https://cdn.builder.io/api/v1/image/assets/2abb0b1728de4d98902e239cea09e9d5/28208024f3e3acf861561d1bf70cb68b891b2304c36531b0be9a300dc8de176c?apiKey=2abb0b1728de4d98902e239cea09e9d5&"
                            className="w-4 aspect-square"
                            alt=""
                            aria-hidden="true"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </aside>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}