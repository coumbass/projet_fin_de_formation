import * as React from "react";

export default function Profile() {
  const messages = [
    {
      id: 1,
      avatar: "https://cdn.builder.io/api/v1/image/assets/2abb0b1728de4d98902e239cea09e9d5/f4aa56863357755620f1fac13797820a711dce340c4b72e8ae4dfe7874a40ab4?apiKey=2abb0b1728de4d98902e239cea09e9d5&",
      name: "Fatou kine",
      message: "J'ai terminé ma tâche la semaine dernière..",
      time: "Il y a 15min",
      unread: 0
    },
    {
      id: 2,
      avatar: "https://cdn.builder.io/api/v1/image/assets/2abb0b1728de4d98902e239cea09e9d5/55eeb7fbd1782852014f83fdf015b3c727ef091d22f1b357dae6728c1a68ce9b?apiKey=2abb0b1728de4d98902e239cea09e9d5&",
      name: "Équipe Design UI",
      message: "N'oubliez pas notre rapport quotidien..",
      time: "Il y a 2h",
      unread: 46
    },
    {
      id: 3,
      avatar: "https://cdn.builder.io/api/v1/image/assets/2abb0b1728de4d98902e239cea09e9d5/43e9d09cb639b201af92f4e0bca87474c2be7b35b470221ed74a957901692005?apiKey=2abb0b1728de4d98902e239cea09e9d5&",
      name: "Roberto",
      message: "La semaine dernière, vous vous souvenez?",
      time: "",
      unread: 0
    },
    {
      id: 4,
      avatar: "https://cdn.builder.io/api/v1/image/assets/2abb0b1728de4d98902e239cea09e9d5/e5f5e003ba2ac614d0788726b5fd8f2283d38477543f9fcee585bd7b5cfc7ceb?apiKey=2abb0b1728de4d98902e239cea09e9d5&",
      name: "Amy",
      message: "Mon patron m'a donné cette tâche..",
      time: "Il y a 2 min",
      unread: 0
    }
  ];

  const courses = [
    {
      id: 1,
      image: "https://cdn.builder.io/api/v1/image/assets/2abb0b1728de4d98902e239cea09e9d5/e8bcacb260f9cc6e8d27f0c2aa52d8d015b870464fc62014d3762cc32fefcd02?apiKey=2abb0b1728de4d98902e239cea09e9d5&",
      title: "Excellence E-commerce: Vendre Plus Intelligemment en Ligne",
      instructor: "Andy Stevanus"
    },
    {
      id: 2,
      image: "https://cdn.builder.io/api/v1/image/assets/2abb0b1728de4d98902e239cea09e9d5/e8fd07fabd8e31c2e3fd131e717089a96a79a0ac96b1db0336e425b0ac3ed11e?apiKey=2abb0b1728de4d98902e239cea09e9d5&",
      title: "Marketing d'Influence: Les Secrets",
      instructor: "Brian Braun"
    },
    {
      id: 3,
      image: "https://cdn.builder.io/api/v1/image/assets/2abb0b1728de4d98902e239cea09e9d5/9c418def53bb0451ab4bbf22356b403ac41cb906fdf52652dfff20f913c1d47e?apiKey=2abb0b1728de4d98902e239cea09e9d5&",
      title: "Dynamo Digital: Libérez Votre Potentiel en Ligne",
      instructor: "Chyntia Laura"
    },
    {
      id: 4,
      image: "https://cdn.builder.io/api/v1/image/assets/2abb0b1728de4d98902e239cea09e9d5/832a047d15fc4f22370dae23255de25526ff48159341ff0ff008752a6faabaa6?apiKey=2abb0b1728de4d98902e239cea09e9d5&",
      title: "Magie du SEO: Dominer les Classements Numériques",
      instructor: "Dennise Khan"
    }
  ];

  return (
    <div className="flex overflow-hidden flex-col bg-white">
      <div className="px-3 py-6 w-full max-md:pr-5 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <div className="flex flex-col w-[16%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow mt-9 max-md:mt-10">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/2abb0b1728de4d98902e239cea09e9d5/d35a621b9e3070974bd5e8f25ac99a5baa27bb928a4f3c3d584536ceea35e891?apiKey=2abb0b1728de4d98902e239cea09e9d5&"
                alt=""
                className="object-contain self-center max-w-full aspect-[0.39] w-[134px]"
              />
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/2abb0b1728de4d98902e239cea09e9d5/ff5557c20dbdebb8df29cfbfe02f5c350a7374383a6276ef5ac6aa11cc06a36a?apiKey=2abb0b1728de4d98902e239cea09e9d5&"
                alt=""
                className="object-contain mt-56 rounded-none aspect-[0.72] w-[217px] max-md:mt-10"
              />
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[84%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col px-6 py-6 mx-auto w-full bg-white rounded-[32px] shadow-[0px_4px_48px_rgba(0,0,0,0.02)] max-md:px-5 max-md:mt-9 max-md:max-w-full">
              <div className="px-9 py-10 bg-white rounded-3xl max-md:px-5 max-md:max-w-full">
                <div className="flex gap-5 max-md:flex-col">
                  <div className="flex flex-col w-[22%] max-md:ml-0 max-md:w-full">
                    <img
                      loading="lazy"
                      src="https://img.freepik.com/vecteurs-premium/portrait-avatar-rond-etudiante-musulmane-du-primaire-hijab-rouge-dans-style-plat_768258-1754.jpg?w=740"
                      alt="Photo de profil de Coumba"
                      className="object-contain grow shrink-0 max-w-full rounded-none aspect-[1.03] w-[223px] max-md:mt-10"
                    />
                  </div>
                  <div className="flex flex-col ml-5 w-[78%] max-md:ml-0 max-md:w-full">
                    <div className="flex flex-col mt-2.5 w-full max-md:mt-10 max-md:max-w-full">
                      <div className="flex flex-wrap gap-5 justify-between w-full max-md:max-w-full">
                        <div className="flex flex-col items-start font-medium">
                          <div className="self-stretch text-3xl font-semibold text-gray-700">
                            Coumba
                          </div>
                          <div className="mt-2.5 text-xl text-amber-500">
                            Dev web
                          </div>
                          <div className="mt-2 text-sm leading-loose text-neutral-400">
                            Dakar, Keur Massar
                          </div>
                        </div>
                        <div className="flex gap-5 self-start">
                          <button className="flex gap-3.5 justify-center items-center px-4 rounded-2xl bg-slate-200 h-[60px] w-[60px]">
                            <img
                              loading="lazy"
                              src="https://cdn.builder.io/api/v1/image/assets/2abb0b1728de4d98902e239cea09e9d5/8e8b194675d4f721598ecb273c9d14bfbf95e20d4fdfc6c0a7f0badcedb1285d?apiKey=2abb0b1728de4d98902e239cea09e9d5&"
                              alt=""
                              className="object-contain self-stretch my-auto w-7 aspect-square"
                            />
                          </button>
                          <button className="flex gap-3.5 justify-center items-center px-4 rounded-2xl bg-slate-200 h-[60px] w-[60px]">
                            <img
                              loading="lazy"
                              src="https://cdn.builder.io/api/v1/image/assets/2abb0b1728de4d98902e239cea09e9d5/9297785bbf601639eaf86dd970ed55f109a6ef78dcbd401c68390ac18efb2c4b?apiKey=2abb0b1728de4d98902e239cea09e9d5&"
                              alt=""
                              className="object-contain self-stretch my-auto w-7 aspect-square"
                            />
                          </button>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-10 items-start self-start mt-12 text-base text-gray-700 max-md:mt-10 max-md:max-w-full">
                        <div className="flex gap-5 items-center whitespace-nowrap min-w-[240px]">
                          <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/2abb0b1728de4d98902e239cea09e9d5/d05c4d3de2341081087ad901da8849998b0cc8bd26bcc755dee0b2995ad3a06f?apiKey=2abb0b1728de4d98902e239cea09e9d5&"
                            alt=""
                            className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
                          />
                          <div className="self-stretch my-auto">
                            sarelsowsn@gmail.com
                          </div>
                        </div>
                        <div className="flex gap-5 items-center">
                          <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/2abb0b1728de4d98902e239cea09e9d5/c6be36a51d675094803bd7c32f6391d85e4c611d804120679a3081ce5a15ef0f?apiKey=2abb0b1728de4d98902e239cea09e9d5&"
                            alt=""
                            className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
                          />
                          <div className="self-stretch my-auto">
                            +221 77 111 11 11
                          </div>
                        </div>
                        <div className="flex gap-5 items-center">
                          <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/2abb0b1728de4d98902e239cea09e9d5/d0bc303cdd748a1b2fff257bbe25407b7a239f265dc91ae801e04e6451213ce1?apiKey=2abb0b1728de4d98902e239cea09e9d5&"
                            alt=""
                            className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
                          />
                          <div className="self-stretch my-auto">
                            Xarala
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-4 max-md:max-w-full">
                <div className="flex gap-5 max-md:flex-col">
                  <div className="flex flex-col w-[58%] max-md:ml-0 max-md:w-full">
                    <div className="flex flex-col px-6 pt-6 pb-12 mx-auto w-full bg-white rounded-3xl max-md:px-5 max-md:mt-6 max-md:max-w-full">
                      <div className="flex flex-wrap gap-5 justify-between max-md:max-w-full">
                        <div className="flex flex-col">
                          <div className="self-start text-2xl font-medium text-gray-700">
                            Cours Suivis
                          </div>
                          <div className="mt-2 text-sm leading-7 text-neutral-400">
                            Vos cours en cours
                          </div>
                        </div>
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/2abb0b1728de4d98902e239cea09e9d5/604dfe8f4f0c78f42bc55ffed6293d760a1eec4395dc62e7e94aa76981b823aa?apiKey=2abb0b1728de4d98902e239cea09e9d5&"
                          alt=""
                          className="object-contain shrink-0 self-start mt-2.5 w-7 aspect-square"
                        />
                      </div>
                      <div className="flex flex-col gap-8 mt-9">
                        {courses.map(course => (
                          <div key={course.id} className="flex gap-5 justify-between items-center">
                            <img
                              loading="lazy"
                              src={course.image}
                              alt={`Miniature du cours ${course.title}`}
                              className="object-contain shrink-0 self-stretch rounded-3xl aspect-square w-[73px]"
                            />
                            <div className="flex flex-col self-stretch my-auto max-md:max-w-full">
                              <div className="text-lg font-medium text-gray-700 max-md:max-w-full">
                                {course.title}
                              </div>
                              <div className="self-start mt-3.5 text-base text-neutral-400">
                                {course.instructor}
                              </div>
                            </div>
                            <img
                              loading="lazy"
                              src="https://cdn.builder.io/api/v1/image/assets/2abb0b1728de4d98902e239cea09e9d5/a5ad1e7aadeef054103b09d44ed4d899ec619f38ec33595b21452d5fb5c06232?apiKey=2abb0b1728de4d98902e239cea09e9d5&"
                              alt=""
                              className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col ml-5 w-[42%] max-md:ml-0 max-md:w-full">
                    <div className="flex flex-col px-6 pt-6 pb-12 mx-auto w-full bg-white rounded-3xl max-md:px-5 max-md:mt-6 max-md:max-w-full">
                      <div className="flex gap-5 justify-between text-2xl font-medium text-gray-700 max-md:mr-1.5">
                        <div>Messages Récents</div>
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/2abb0b1728de4d98902e239cea09e9d5/604dfe8f4f0c78f42bc55ffed6293d760a1eec4395dc62e7e94aa76981b823aa?apiKey=2abb0b1728de4d98902e239cea09e9d5&"
                          alt=""
                          className="object-contain shrink-0 my-auto w-7 aspect-square"
                        />
                      </div>
                      <div className="self-start mt-2 text-sm leading-7 text-neutral-400">
                        Vos dernières conversations
                      </div>
                      <div className="flex flex-col mt-7 w-full">
                        {messages.map(message => (
                          <div
                            key={message.id}
                            className={`flex gap-5 items-start px-7 py-4 w-full ${
                              message.unread > 0 ? 'bg-gray-100' : 'bg-white'
                            } rounded-2xl max-w-[411px] max-md:px-5 ${
                              message.id > 1 ? 'mt-1.5' : ''
                            }`}
                          >
                            <div className="flex gap-3 items-center w-[60px]">
                              <img
                                loading="lazy"
                                src={message.avatar}
                                alt={`Avatar de ${message.name}`}
                                className="object-contain self-stretch my-auto rounded-2xl aspect-square w-[60px]"
                              />
                            </div>
                            <div className="flex flex-1 shrink justify-between items-start basis-0 min-w-[240px]">
                              <div className="flex flex-col rounded-none w-[226px]">
                                <div className="self-start text-lg font-medium text-gray-700">
                                  {message.name}
                                </div>
                                <div className="mt-2 text-sm leading-7 text-neutral-400">
                                  {message.message}
                                </div>
                              </div>
                              <div className="flex flex-col w-[62px]">
                                {message.time && (
                                  <div className="text-xs text-right text-neutral-400">
                                    {message.time}
                                  </div>
                                )}
                                {message.unread > 0 && (
                                  <div className="z-10 px-1 mt-1.5 w-10 h-10 text-sm font-bold text-center text-white whitespace-nowrap bg-cyan-300 rounded-lg border-solid border-[3px] border-zinc-50">
                                    {message.unread}
                                  </div>
                                )}
                              </div>
                            </div>
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
      </div>
    </div>
  );
}