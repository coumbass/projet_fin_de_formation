import * as React from "react";
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
function ChatInterface() {
  const messages = [
    {
      id: 1,
      name: "Esther Howard",
      avatar: "https://cdn.builder.io/api/v1/image/assets/2abb0b1728de4d98902e239cea09e9d5/3e5d891c98cecf5de0c8e2890dede32bde6a5f20224230786715fd09dda5fa22?apiKey=2abb0b1728de4d98902e239cea09e9d5&",
      message: "Le passage a connu une popularité croissante...",
      time: "20:10",
      isActive: true
    },
    {
      id: 2,
      name: "Cody Fisher",
      avatar: "https://cdn.builder.io/api/v1/image/assets/2abb0b1728de4d98902e239cea09e9d5/2629ded33c559777ce208ca3559a8a4b09156a3ec2a216d910ea48b1f4e4e011?apiKey=2abb0b1728de4d98902e239cea09e9d5&",
      message: "Le passage a connu une popularité croissante...",
      time: "20:10"
    },
    {
      id: 3,
      name: "Savannah Nguyen",
      avatar: "https://cdn.builder.io/api/v1/image/assets/2abb0b1728de4d98902e239cea09e9d5/a44faddbea0cd4b25875b4ecec0213729ceec3f2a3af1e0a87d0325f72b88c71?apiKey=2abb0b1728de4d98902e239cea09e9d5&",
      message: "Le passage a connu une popularité croissante...",
      time: "20:10"
    },
    {
      id: 4,
      name: "Robert Fox",
      avatar: "https://cdn.builder.io/api/v1/image/assets/2abb0b1728de4d98902e239cea09e9d5/71d6bba6eaa21c0bc16c1190420a706c40c54a4189c4d79757a9677d1be838fc?apiKey=2abb0b1728de4d98902e239cea09e9d5&",
      message: "Le passage a connu une popularité croissante...",
      time: "20:10"
    },
    {
      id: 5,
      name: "Bessie Cooper",
      avatar: "https://cdn.builder.io/api/v1/image/assets/2abb0b1728de4d98902e239cea09e9d5/e0ac6035d87b97db061cb97e0800b5f540ff3b084d48f16a9f5eacaf7507e4d2?apiKey=2abb0b1728de4d98902e239cea09e9d5&",
      message: "Le passage a connu une popularité croissante...",
      time: "20:10"
    }
  ];

  const chatMessages = [
    {
      id: 1,
      text: "Le passage connaît une popularité",
      time: "21:04",
      isOwn: false
    },
    {
      id: 2,
      text: "Création Ipsum est simplement un texte factice de l'industrie de l'impression et de la composition.",
      time: "21:04",
      isOwn: false
    },
    {
      id: 3,
      text: "Création Ipsum est simplement un texte factice de l'industrie de l'impression et de la composition.",
      time: "21:04",
      isOwn: true
    }
  ];

  const [searchTerm, setSearchTerm] = React.useState("");
  const [newMessage, setNewMessage] = React.useState("");

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleNewMessage = (e) => {
    setNewMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newMessage.trim()) {
      setNewMessage("");
    }
  };

  return (
    <div className="flex overflow-hidden flex-col bg-white min-h-screen">
      <div className="px-3 py-6 w-full max-md:pr-5 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <div className="flex flex-col w-[17%] max-md:ml-0 max-md:w-full">
            <div className="flex z-10 flex-col grow items-start mt-9 max-md:mt-10 max-md:-mr-1.5">
              <Navigation/>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/2abb0b1728de4d98902e239cea09e9d5/63c79f5abe36293feedb73cba41acd5e84800931e7af827d7ce83e84b3bf8cb5?apiKey=2abb0b1728de4d98902e239cea09e9d5&"
                className="object-contain mt-44 rounded-none aspect-[0.72] w-[217px] max-md:mt-10"
                alt="Décoration latérale secondaire"
              />
            </div>
          </div>

          <div className="flex flex-col ml-5 w-[83%] max-md:ml-0 max-md:w-full">
            <div className="grow px-6 py-6 w-full bg-white rounded-[32px] shadow-[0px_4px_48px_rgba(0,0,0,0.02)] max-md:pl-5 max-md:mt-6 max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col">
                <div className="flex flex-col w-[31%] max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col px-4 py-5 mx-auto w-full bg-white rounded-2xl max-md:mt-10">
                    <div className="flex gap-5 justify-between text-base font-medium leading-none whitespace-nowrap text-sky-950 max-md:mx-1.5">
                      <div>Messages</div>
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/2abb0b1728de4d98902e239cea09e9d5/65e119572051081902ebfa316d2793e56b235cf807a8a09488a51aca23c64b00?apiKey=2abb0b1728de4d98902e239cea09e9d5&"
                        className="object-contain shrink-0 w-6 aspect-square"
                        alt="Options messages"
                      />
                    </div>

                    <form className="flex gap-3 px-6 py-3.5 mt-5 text-xs whitespace-nowrap rounded-xl bg-slate-50 text-zinc-500 max-md:px-5">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/2abb0b1728de4d98902e239cea09e9d5/4924ac313fe78c49fdb42c8741dec070e43a679a1153eb76d4d410c6a06f19c5?apiKey=2abb0b1728de4d98902e239cea09e9d5&"
                        className="object-contain shrink-0 self-start w-5 aspect-square"
                        alt="Icône recherche"
                      />
                      <input
                        type="search"
                        className="grow shrink opacity-60 w-[232px] bg-transparent"
                        placeholder="Rechercher"
                        value={searchTerm}
                        onChange={handleSearch}
                        aria-label="Rechercher dans les messages"
                      />
                    </form>

                    {messages.map((message) => (
                      <div key={message.id}>
                        <div className={`flex gap-2.5 px-4 py-6 mt-5 rounded-xl ${
                          message.isActive ? 'bg-blue-500 bg-opacity-10 text-sky-950' : 'text-sky-950'
                        }`}>
                          <img
                            loading="lazy"
                            src={message.avatar}
                            className="object-contain shrink-0 self-start aspect-[0.94] w-[50px]"
                            alt={`Avatar de ${message.name}`}
                          />
                          <div className="flex flex-col">
                            <div className="flex gap-5 justify-between">
                              <div className="text-sm font-medium">{message.name}</div>
                              <div className="my-auto text-xs text-right opacity-50">{message.time}</div>
                            </div>
                            <div className={`text-xs ${!message.isActive && 'text-zinc-500'}`}>
                              {message.message}
                            </div>
                          </div>
                        </div>
                        {!message.isActive && <div className="shrink-0 mt-6 h-px border border-black border-solid" />}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col ml-5 w-[69%] max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col py-8 mx-auto w-full bg-white rounded-2xl max-md:mt-10 max-md:max-w-full">
                    <div className="flex flex-col px-8 w-full text-sky-950 max-md:px-5 max-md:max-w-full">
                      <div className="flex flex-wrap gap-5 justify-between w-full max-md:mr-1 max-md:max-w-full">
                        <div className="flex gap-2.5">
                          <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/2abb0b1728de4d98902e239cea09e9d5/6254183cbbfa5045b6407107587f90b4237380eeee838efc86f1071654114e01?apiKey=2abb0b1728de4d98902e239cea09e9d5&"
                            className="object-contain shrink-0 self-start bg-fuchsia-500 rounded-full aspect-[0.97] fill-fuchsia-500 h-[37px] w-[37px]"
                            alt="Photo de profil"
                          />
                          <div className="flex flex-col">
                            <div className="text-base font-medium">Esther Howard</div>
                            <div className="self-start text-xs opacity-40">En ligne</div>
                          </div>
                        </div>
                        <button 
                          className="focus:outline-none"
                          aria-label="Plus d'options"
                        >
                          <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/2abb0b1728de4d98902e239cea09e9d5/78e2af8443fdfe79b2971b5de5df0db5ff4424237b413aa7293e6ca2b6315057?apiKey=2abb0b1728de4d98902e239cea09e9d5&"
                            className="object-contain shrink-0 self-start w-9 aspect-square"
                            alt=""
                          />
                        </button>
                      </div>

                      {chatMessages.map((message) => (
                        <div key={message.id}>
                          {message.isOwn ? (
                            <>
                              <div className="self-end px-5 py-3 mt-9 max-w-full text-sm leading-6 text-white bg-blue-500 rounded-xl w-[352px]">
                                {message.text}
                              </div>
                              <div className="flex gap-2 self-end mt-2 text-xs whitespace-nowrap text-zinc-500">
                                <div>Envoyé</div>
                                <img
                                  loading="lazy"
                                  src="https://cdn.builder.io/api/v1/image/assets/2abb0b1728de4d98902e239cea09e9d5/ad4b31eb08f83d8ee73d8cdaee99563315508294af5242d7cc0bb0d32eac81d3?apiKey=2abb0b1728de4d98902e239cea09e9d5&"
                                  className="object-contain shrink-0 self-start mt-1.5 w-2 aspect-[2]"
                                  alt=""
                                />
                              </div>
                            </>
                          ) : (
                            <div className="flex gap-5 self-start">
                              <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/2abb0b1728de4d98902e239cea09e9d5/2eb3108953aa89d2b54358bb86a293a235630f36c37b1799f9bb4820f077b909?apiKey=2abb0b1728de4d98902e239cea09e9d5&"
                                className="object-contain shrink-0 self-start mt-4 w-10 aspect-square"
                                alt="Avatar utilisateur"
                              />
                              <div className="flex flex-col grow shrink-0 basis-0 w-fit">
                                <div className="flex flex-col justify-center px-5 py-3 text-sm leading-6 rounded-xl bg-neutral-100 text-sky-950">
                                  <div className="opacity-80">{message.text}</div>
                                </div>
                                <div className="self-start mt-2.5 ml-5 text-xs opacity-50 text-zinc-500 max-md:ml-2.5">
                                  {message.time}
                                </div>
                              </div>
                            </div>
                          )}
                        </div>
                      ))}

                      <form onSubmit={handleSubmit} className="flex flex-wrap gap-5 justify-between items-start self-center px-7 py-4 mt-28 max-w-full bg-gray-50 rounded-xl w-[704px] max-md:px-5 max-md:mt-10">
                        <div className="flex gap-2.5 items-start text-xs text-sky-950">
                          <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/2abb0b1728de4d98902e239cea09e9d5/4a530bfe4a4df32a8fcb18642a696fd077b49c222fdcce5843cc4c715a2c6873?apiKey=2abb0b1728de4d98902e239cea09e9d5&"
                            className="object-contain shrink-0 w-4 aspect-square"
                            alt=""
                          />
                          <label htmlFor="messageInput" className="sr-only">Écrire un message</label>
                          <input
                            id="messageInput"
                            type="text"
                            className="self-stretch opacity-50 bg-transparent"
                            placeholder="Écrivez un message..."
                            value={newMessage}
                            onChange={handleNewMessage}
                          />
                        </div>
                        <div className="flex gap-3">
                          <button type="button" aria-label="Joindre un fichier">
                            <img
                              loading="lazy"
                              src="https://cdn.builder.io/api/v1/image/assets/2abb0b1728de4d98902e239cea09e9d5/8bd104ca146299bb86574b0b9a62b58ec04d35951cd56e318341ed74e7177c42?apiKey=2abb0b1728de4d98902e239cea09e9d5&"
                              className="object-contain shrink-0 my-auto w-3.5 aspect-square"
                              alt=""
                            />
                          </button>
                          <button type="submit" aria-label="Envoyer le message">
                            <img
                              loading="lazy"
                              src="https://cdn.builder.io/api/v1/image/assets/2abb0b1728de4d98902e239cea09e9d5/816cc388ca4a4acbbcc7abe3f2f652337893379e35d0799c9e0d31c2cee515d2?apiKey=2abb0b1728de4d98902e239cea09e9d5&"
                              className="object-contain shrink-0 aspect-square w-[22px]"
                              alt=""
                            />
                          </button>
                        </div>
                      </form>
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

export default ChatInterface;