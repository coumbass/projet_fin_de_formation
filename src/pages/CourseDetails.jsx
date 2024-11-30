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



export default function CourseDetails() {
  const [comment, setComment] = useState('');
  const reviews = [
    {
      avatarSrc: "https://cdn.builder.io/api/v1/image/assets/2abb0b1728de4d98902e239cea09e9d5/7302c33eac10f68ccaa6cff485212409b74130752aa34593778320cebfca5248?apiKey=2abb0b1728de4d98902e239cea09e9d5&",
      name: "Marie Dupont",
      timestamp: "il y a environ une heure",
      comment: "Une formation exceptionnelle qui m'a permis de développer mes compétences en marketing digital. Je recommande vivement!"
    },
    {
      avatarSrc: "https://cdn.builder.io/api/v1/image/assets/2abb0b1728de4d98902e239cea09e9d5/eb4fbe26fea67b6b752bca63d5ee243f00d743b84afefc66f6a12e262c8a76e9?apiKey=2abb0b1728de4d98902e239cea09e9d5&",
      name: "Sophie Martin",
      timestamp: "il y a environ une heure",
      comment: "Contenu très complet et bien structuré. Les exercices pratiques sont particulièrement utiles pour mettre en application les concepts appris."
    }
  ];

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (comment.trim()) {
      setComment('');
    }
  };

  return (
    <main className="flex overflow-hidden flex-col bg-white">
      <div className="px-3 py-6 w-full max-md:pr-5 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <aside className="flex flex-col w-[17%] max-md:ml-0 max-md:w-full">
            <div className="flex z-10 flex-col grow items-start mt-9 max-md:mt-10 max-md:mr-0">
              <Navigation/>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/2abb0b1728de4d98902e239cea09e9d5/743ba92dcb6656eb1c35f650340af30b4c6ca9b13b0bcd34bc2c34a1ce2e35b3?apiKey=2abb0b1728de4d98902e239cea09e9d5&"
                alt="Graphique marketing"
                className="object-contain rounded-none aspect-[0.72] mt-[610px] w-[217px] max-md:mt-10"
              />
            </div>
          </aside>

          <section className="flex flex-col ml-5 w-[83%] max-md:ml-0 max-md:w-full">
            <article className="flex flex-col items-start px-6 py-7 mx-auto w-full bg-white rounded-[32px] shadow-[0px_4px_48px_rgba(0,0,0,0.02)] max-md:px-5 max-md:mt-6 max-md:max-w-full">
              <header className="flex gap-4 self-stretch text-3xl font-semibold tracking-wide leading-none text-neutral-900">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/2abb0b1728de4d98902e239cea09e9d5/04cde48795241d82563d570cf0aaf2034914125b1a3c0e70b1265b8e6f76cfca?apiKey=2abb0b1728de4d98902e239cea09e9d5&"
                  alt="Icône marketing"
                  className="object-contain shrink-0 w-12 rounded-none aspect-square"
                />
                <h1 className="grow shrink my-auto w-[738px] max-md:max-w-full">
                  Marketing Digital Pro: Maîtrisez le Paysage Numérique
                </h1>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/2abb0b1728de4d98902e239cea09e9d5/01b63e80aba560b8b4bcc075e2c9729c8bf6fcd614c4cf93f537390a8598c1d5?apiKey=2abb0b1728de4d98902e239cea09e9d5&"
                  alt="Statistiques"
                  className="object-contain shrink-0 self-start max-w-full aspect-[7.35] w-[280px]"
                />
              </header>

              <div className="self-stretch mt-6 max-md:max-w-full">
                <div className="flex gap-5 max-md:flex-col">
                  <div className="flex flex-col w-9/12 max-md:ml-0 max-md:w-full">
                    <div className="flex flex-col w-full max-md:mt-7 max-md:max-w-full">
                        <div className="w-full rounded-3xl aspect-[1.86] max-md:max-w-full overflow-hidden">
                              <iframe
                                className="w-full h-full object-contain"
                                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                                title="Présentation du cours"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                              ></iframe>
                        </div>


                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/2abb0b1728de4d98902e239cea09e9d5/eec02ead66083e76f2594261711f83030df2ced10b302c65fd2f8dfd4f8d7204?apiKey=2abb0b1728de4d98902e239cea09e9d5&"
                        alt="Contenu du programme"
                        className="object-contain mt-6 w-full rounded-none aspect-[4.9] max-md:max-w-full"
                      />
                    </div>
                  </div>
                  <aside className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/2abb0b1728de4d98902e239cea09e9d5/85867a3b2fbbe4cdbe3b56af9436d8d21dddc242e9f52cae9159c523fc7cb17c?apiKey=2abb0b1728de4d98902e239cea09e9d5&"
                      alt="Informations complémentaires"
                      className="object-contain shrink-0 max-w-full rounded-none aspect-[0.41] w-[280px] max-md:mt-6"
                    />
                  </aside>
                </div>
              </div>

              <section className="w-full">
                <h2 className="text-xl font-bold tracking-tight leading-tight text-indigo-800 mb-4 mt-8">
                  Avis
                </h2>
                {reviews.map((review, index) => (
                  <article key={index} className="mb-4">
                    <div className="flex gap-4 self-start">
                      <img
                        loading="lazy"
                        src={review.avatarSrc}
                        alt={`Avatar de ${review.name}`}
                        className="object-contain shrink-0 w-12 aspect-square"
                      />
                      <div className="flex flex-col self-start">
                        <h3 className="text-base font-medium text-sky-950">{review.name}</h3>
                        <time className="mt-1 text-xs text-zinc-500">{review.timestamp}</time>
                      </div>
                    </div>
                    <p className="mt-3.5 mr-12 ml-16 text-sm leading-5 text-zinc-500 max-md:mr-2.5 max-md:max-w-full">
                      {review.comment}
                    </p>
                  </article>
                ))}
              </section>

              <form onSubmit={handleCommentSubmit} className="mt-8 w-full">
                <label htmlFor="comment" className="block text-lg font-medium leading-none text-sky-950 mb-4">
                  Laissez un commentaire
                </label>
                <textarea
                  id="comment"
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  className="px-6 pt-5 pb-20 mt-4 max-w-full text-xs rounded-2xl bg-slate-50 text-zinc-400 w-[726px] max-md:px-5 max-md:pb-28"
                  placeholder="Écrivez votre commentaire ici..."
                  aria-label="Zone de texte pour commentaire"
                />
                <button
                  type="submit"
                  className="w-full gap-2.5 self-stretch py-3.5 pr-12 pl-12 mt-8 text-base font-bold leading-none text-center text-white bg-amber-500 rounded-[40px] max-md:px-5 hover:bg-amber-600 transition-colors"
                >
                  Publier l'avis
                </button>
              </form>
            </article>
          </section>
        </div>
      </div>
    </main>
  );
}