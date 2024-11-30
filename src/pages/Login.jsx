import React, { useState } from 'react';
import { Link } from "react-router-dom";

export const Login = () => {
  const [formData, setFormData] = useState({
    email: 'sarelsow@gmail.com',
    password: 'passer123',
    rememberMe: false,
    showPassword: false
  });

  const handleInputChange = (name, value) => {
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.email && formData.password) {
      console.log('Form submitted:', formData);
    }
  };

  const togglePasswordVisibility = () => {
    setFormData(prev => ({
      ...prev,
      showPassword: !prev.showPassword
    }));
  };

  return (
    <div className="flex overflow-hidden flex-col bg-white min-h-screen">
      <div className="flex relative flex-col w-full min-h-[1024px]">
        <img
          loading="lazy"
          src="https://media.istockphoto.com/id/1647776840/photo/product-props-multicolor-laser-light-neon-lights-product-placement-studio-facade-stage.jpg?s=1024x1024&w=is&k=20&c=czRC3wJiLHjWC-eeICO-DxCyCzSaKfk8YbSHZTSR2BA="
          className="object-cover absolute inset-0 size-full"
          alt="Background"
        />
        <div className="flex relative flex-col pt-20 w-full">
          <div className="self-center w-full max-w-[1240px]">
            <div className="flex gap-5 max-md:flex-col">
              <div className="flex flex-col w-[45%] max-md:w-full">
                <div className="flex flex-col items-start font-bold text-white">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/2abb0b1728de4d98902e239cea09e9d5/44e3f5e31d7ebc113548c37c3f19e1a375e98b959190c8a771ee38e764151dde?apiKey=2abb0b1728de4d98902e239cea09e9d5&"
                    className="object-contain max-w-full aspect-[1.93] w-[207px]"
                    alt="Logo de l'entreprise"
                  />
                  <h1 className="self-stretch mt-6 text-4xl tracking-wide leading-none text-amber-500">
                    Lancez votre parcours d'apprentissage avec nous                  </h1>
                  <h2 className="mt-4 text-3xl font-semibold tracking-wide leading-none">
                    L’apprentissage qui ouvre des portes à votre avenir
                  </h2>
                  <p className="mt-3 text-xl tracking-tight leading-7">
                    Des programmes créés par des experts pour vous aider à développer des compétences solides et avancer dans votre parcours professionnel.
                  </p>

                </div>
              </div>
              <div className="flex flex-col ml-5 w-[55%] max-md:ml-0 max-md:w-full">
                <form onSubmit={handleSubmit} className="flex flex-col items-center px-12 py-12 mx-auto mt-24 w-full bg-white rounded-2xl shadow-sm max-md:px-5 max-md:mt-10">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/2abb0b1728de4d98902e239cea09e9d5/d14b416cba28ecb9789c9f7dd82f5a4a88d9550ed4c22539255c8b0d9bc6b877?apiKey=2abb0b1728de4d98902e239cea09e9d5&"
                    className="object-contain max-w-full aspect-[1.93] w-[139px]"
                    alt="Logo de connexion"
                  />
                  <h3 className="mt-5 text-2xl font-bold leading-none text-neutral-700">
                    Connexion Apprenant
                  </h3>
                  <p className="mt-4 text-lg tracking-tight leading-none text-center text-neutral-700">
                    Connectez-vous à votre compte
                  </p>

                  <div className="flex flex-col self-stretch mt-8 text-base min-h-[82px] w-full">
                    <label 
                      htmlFor="email"
                      className="leading-none text-neutral-900"
                    >
                      Adresse e-mail
                    </label>
                    <div className="flex overflow-hidden flex-col justify-center p-4 mt-2 w-full bg-white rounded-lg border border-solid border-zinc-400 min-h-[56px]">
                      <input
                        type="email"
                        id="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        placeholder="Entrez votre adresse e-mail"
                        required
                        className="flex-1 shrink self-stretch my-auto basis-0 outline-none text-zinc-600"
                        aria-label="Adresse e-mail"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col self-stretch mt-8 text-base min-h-[82px] w-full">
                    <label 
                      htmlFor="password"
                      className="leading-none text-neutral-900"
                    >
                      Mot de passe
                    </label>
                    <div className="flex overflow-hidden flex-col justify-center p-4 mt-2 w-full bg-white rounded-lg border border-solid border-zinc-400 min-h-[56px]">
                      <div className="flex overflow-hidden gap-3 items-center w-full bg-white">
                        <input
                          type={formData.showPassword ? "text" : "password"}
                          id="password"
                          value={formData.password}
                          onChange={(e) => handleInputChange('password', e.target.value)}
                          placeholder="Entrez votre mot de passe"
                          required
                          className="flex-1 shrink self-stretch my-auto basis-0 outline-none text-zinc-600"
                          aria-label="Mot de passe"
                        />
                        <button
                          type="button"
                          onClick={togglePasswordVisibility}
                          className="focus:outline-none"
                          aria-label={formData.showPassword ? "Masquer le mot de passe" : "Afficher le mot de passe"}
                        >
                          <img
                            src="https://cdn.builder.io/api/v1/image/assets/2abb0b1728de4d98902e239cea09e9d5/9737036eeefb0557da1bf67e52a84418f728222b6e33abec981b51e77e7e151f?apiKey=2abb0b1728de4d98902e239cea09e9d5&"
                            className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
                            alt=""
                            aria-hidden="true"
                          />
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-5 justify-between self-stretch mt-10 w-full">
                    <div className="flex gap-3">
                      <input
                        type="checkbox"
                        id="rememberMe"
                        checked={formData.rememberMe}
                        onChange={(e) => handleInputChange('rememberMe', e.target.checked)}
                        className="w-8 h-8 rounded-sm border-amber-500 border-solid border-[1.5px]"
                        aria-label="Se souvenir de moi"
                      />
                      <label 
                        htmlFor="rememberMe" 
                        className="my-auto text-base leading-none text-zinc-800"
                      >
                        Se souvenir de moi
                      </label>
                    </div>
                    <button
                      type="button"
                      className="my-auto text-base font-bold leading-none text-indigo-800"
                    >
                      Mot de passe oublié
                    </button>
                  </div>

                 <Link to="/dashboard"> <button
                    type="submit"
                    className="px-20 py-5 mt-20 w-80 max-w-full text-base font-bold leading-none text-center text-white bg-amber-500 hover:bg-amber-600 transition-colors rounded-[40px] max-md:px-5 max-md:mt-10"
                  >
                    Se connecter
                  </button>
                  </Link>
                </form>
              </div>
            </div>
          </div>
          
          <footer className="flex flex-wrap gap-5 justify-between px-8 py-8 mt-24 w-full bg-white bg-opacity-40 max-md:px-5 max-md:mt-10">
            <div className="text-sm leading-none text-center text-amber-500">
              Conditions d'utilisation<span className="text-amber-500"> |</span> Politique
              de confidentialité <span className="text-amber-500">|</span> Mentions
              légales
            </div>
            <div className="text-base font-bold leading-none text-white">
              © 2023 digiaccel, Tous droits réservés
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
};