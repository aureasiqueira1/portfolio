import { ReactLenis } from "lenis/react";
import { useTransform, motion, useScroll } from "framer-motion";
import { useRef, useEffect } from "react";
import PropTypes from "prop-types";
import kanban from "../../assets/images/projects/kanban.png";
import financeiro from "../../assets/images/projects/financeiro.png";
import shoppingcart from "../../assets/images/projects/shoppingcart.png";
import githubsearch from "../../assets/images/projects/githubsearch.png";
import spotify from "../../assets/images/projects/spotify.png";
import quiz from "../../assets/images/projects/quiz.png";
import marvel from "../../assets/images/projects/marvel.png";
import audio from "../../assets/images/projects/audio-text.png";
import metaverso from "../../assets/images/projects/metaverso.png";
import veículos from "../../assets/images/projects/veículos.png";
import clientlist from "../../assets/images/projects/client-list.png";
import cep from "../../assets/images/projects/cep.png";
import mobile from "../../assets/images/projects/mobile.png";
import cook from "../../assets/images/projects/cookApp.png";
import goals from "../../assets/images/projects/mygoals.png";

const projects = [
  {
    title: "📅 Agenda - Kanban",
    description:
      "Aplicação inspirada na metodologia Kanban para gerenciamento de tarefas. Permite criar, visualizar e mover tarefas entre colunas de forma prática e intuitiva.",
    link: kanban,
    color: "#FF6B00",
    githubLink: "https://github.com/aureasiqueira1/ProjectSchedule",
    liveLink: "https://project-schedule-neon.vercel.app/",
    techs: ["React", "JavaScript", "CSS", "PostgreSQL", "Express", "TypeORM"]
  },
  {
    title: "🚗 Veículos",
    description:
      "Sistema completo de gestão de veículos com cadastro, edição, exclusão e busca de automóveis. Inclui simulação de score para usuários e backend robusto com NestJS.",
    link: veículos,
    color: "#FF2EB1",
    githubLink: "https://github.com/aureasiqueira1/oncar-app",
    liveLink: "https://front-oncar.vercel.app/",
    techs: ["React", "TypeScript", "NestJS", "Styled Components", "TypeORM", "PostgreSQL"]
  },
  {
    title: "👥 Lista de Clientes",
    description:
      "CRUD completo para gerenciamento de clientes, com classificação de clientes como Vip ou Premium. Backend documentado com Swagger.",
    link: clientlist,
    color: "#3B82F6",
    githubLink: "https://github.com/aureasiqueira1/client-list",
    liveLink: "https://client-list-one.vercel.app/",
    techs: ["React", "TypeScript", "NestJS", "Styled Components", "TypeORM", "PostgreSQL", "Swagger"]
  },
  {
    title: "💰 Sistema Financeiro",
    description:
      "Aplicação financeira que permite registrar entradas e saídas de valores, exibindo um resumo dos saldos. Ideal para controle de orçamento pessoal.",
    link: financeiro,
    color: "#FF6B00",
    githubLink: "https://github.com/aureasiqueira1/App-financeiro",
    liveLink: "https://github.com/aureasiqueira1/App-financeiro",
    techs: ["React", "TypeScript", "Styled Components"]
  },
  {
    title: "🌐 Metaverso App",
    description:
      "Interface moderna e animada com interações como maximizar, minimizar e fechar janelas. Layout baseado em conceitos de UI futuristas.",
    link: metaverso,
    color: "#FF2EB1",
    githubLink: "https://github.com/aureasiqueira1/metaverso-app",
    liveLink: "https://metaverso-app.vercel.app/",
    techs: ["NextJS", "TypeScript", "Styled Components"]
  },
  {
    title: "🛒 E-Commerce",
    description:
      "Plataforma de loja virtual com cadastro, login, carrinho de compras e sistema de favoritos. Design simples e objetivo.",
    link: shoppingcart,
    color: "#3B82F6",
    githubLink: "https://github.com/aureasiqueira1/Shopping",
    liveLink: "https://shopping-umber.vercel.app/",
    techs: ["React", "JavaScript", "CSS3", "HTML5", "API Lorem Picsum"]
  },
  {
    title: "🎤 Notas de Áudio e Texto",
    description:
      "Aplicação que permite registrar notas por voz ou digitação, utilizando a API de reconhecimento de fala para facilitar o registro rápido de ideias.",
    link: audio,
    color: "#FF6B00",
    githubLink: "https://github.com/aureasiqueira1/audio-text",
    liveLink: "https://audio-text-ruby.vercel.app/",
    techs: ["NextJs", "TypeScript", "Tailwind", "Speech Recognition API"]
  },
  {
    title: "📦 Busca de Repositórios",
    description:
      "Aplicação que consulta repositórios do GitHub, exibindo informações básicas a partir de uma pesquisa por nome de usuário/repositório.",
    link: githubsearch,
    color: "#FF2EB1",
    githubLink: "https://github.com/aureasiqueira1/FrontEndDesafio",
    liveLink: "https://front-end-desafio-eight.vercel.app/",
    techs: ["React", "TypeScript", "Styled Components"]
  },
  {
    title: "📍 Busca de CEP",
    description:
      "Aplicação simples que busca um endereço completo a partir do CEP informado, utilizando a API ViaCep. Projetada com testes e Storybook.",
    link: cep,
    color: "#3B82F6",
    githubLink: "https://github.com/aureasiqueira1/cep",
    liveLink: "https://cep-taupe.vercel.app/",
    techs: ["NextJs", "TypeScript", "Tailwind", "Jest", "Storybook", "API ViaCep"]
  },
  {
    title: "📚 Quiz Engenharia de Software",
    description:
      "App mobile com 5 perguntas sobre engenharia de software. Desenvolvido em Flutter, possui sistema de pontuação e feedback.",
    link: quiz,
    color: "#FF6B00",
    githubLink: "https://github.com/aureasiqueira1/AppQuiz",
    liveLink: "https://aureasiqueira1.github.io/AppQuiz/#/",
    techs: ["Flutter", "Dart", "Mockito"]
  },
  {
    title: "🦸 Marvel Explorer",
    description:
      "Aplicação com informações detalhadas sobre personagens, HQs e filmes da Marvel. Possui carrossel interativo e visual moderno.",
    link: marvel,
    color: "#FF2EB1",
    githubLink: "https://github.com/aureasiqueira1/marvel",
    liveLink: "https://marvel-three-sandy.vercel.app/",
    techs: ["NextJs", "TypeScript", "Styled Components"]
  },
  {
    title: "🎧 Spotify Landing Page",
    description:
      "Landing page inspirada no Spotify com foco em layout e estética. Baseada em protótipo do Figma.",
    link: spotify,
    color: "#3B82F6",
    githubLink: "https://github.com/aureasiqueira1/landing-page-spotify",
    liveLink: "https://landing-page-spotify-eight.vercel.app/",
    techs: ["CSS", "HTML", "Figma"]
  },
  {
    title: "🍔 Lanchonete Delivery",
    description:
      "Aplicativo mobile para pedidos em lanchonete. Possui sistema de carrinho, remoção e envio de pedido.",
    link: mobile,
    color: "#FF6B00",
    githubLink: "https://github.com/aureasiqueira1/hamburguer-delivery",
    techs: ["React Native", "Expo", "Tailwind"]
  },
  {
    title: "👨‍🍳 Cook App",
    description:
      "App de receitas que sugere opções com base nos ingredientes selecionados. Ideal para descobrir novas receitas com o que você tem em casa.",
    link: cook,
    color: "#FF2EB1",
    githubLink: "https://github.com/aureasiqueira1/cook-app",
    techs: ["React Native", "Expo", "Expo router", "Supabase", "React Native reanimated"]
  },
  {
    title: "🎯 My Goals",
    description:
      "Aplicativo de metas pessoais com armazenamento local usando SQLite. Organize objetivos e acompanhe seu progresso.",
    link: goals,
    color: "#3B82F6",
    githubLink: "https://github.com/aureasiqueira1/MyGoals",
    techs: ["React Native", "Typescript", "Expo", "Expo router", "NativeWind", "Tailwindcss", "SQLite"]
  }
];

export default function Projects() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    // Add specific styles for 1366x768 resolution
    const style = document.createElement("style");
    style.textContent = `
      @media screen and (width: 1366px) and (height: 768px),
             screen and (width: 1367px) and (height: 768px),
             screen and (width: 1368px) and (height: 769px) {
        .project-card {
          scale: 0.85;
          margin-top: -5vh;
        }
        .project-container {
          height: 90vh;
        }
      }
    `;
    document.head.appendChild(style);

    // Resolution check function
    const checkResolution = () => {
      const isTargetResolution =
        window.innerWidth >= 1360 &&
        window.innerWidth <= 1370 &&
        window.innerHeight >= 760 &&
        window.innerHeight <= 775;

      if (isTargetResolution) {
        document.documentElement.style.setProperty("--project-scale", "0.85");
        document.documentElement.style.setProperty("--project-margin", "-5vh");
      } else {
        document.documentElement.style.setProperty("--project-scale", "1");
        document.documentElement.style.setProperty("--project-margin", "0");
      }
    };

    checkResolution();
    window.addEventListener("resize", checkResolution);

    return () => {
      document.head.removeChild(style);
      window.removeEventListener("resize", checkResolution);
    };
  }, []);

  return (
    <ReactLenis root>
      <main className="bg-black" ref={container}>
        <section className="text-white w-full bg-slate-950">
          {projects.map((project, i) => {
            const targetScale = 1;
            return (
              <Card
                key={`p_${i}`}
                i={i}
                url={project.link}
                title={project.title}
                color={project.color}
                description={project.description}
                progress={scrollYProgress}
                range={[i * 0.25, 1]}
                githubLink={project.githubLink}
                liveLink={project.liveLink}
                techs={project.techs}
              />
            );
          })}
        </section>
      </main>
    </ReactLenis>
  );
}

function Card({
  i,
  title,
  description,
  url,
  color,
  progress,
  range,
  targetScale,
  githubLink,
  liveLink,
  techs
}) {
  const container = useRef(null);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    
   <div
      ref={container}
      className="h-screen flex items-center justify-center sticky top-10 project-container"
    >
      <motion.div
        style={{
          scale,
          top: `calc(-5vh + ${i * 5}px)`,
          transform: `scale(var(--project-scale, 1))`,
          marginTop: "var(--project-margin, 0)",
        }}
        className="relative -top-[25%] h-auto w-[90%] md:w-[85%] lg:w-[75%] xl:w-[65%] origin-top project-card"
        whileHover={{
          y: -8,
          transition: { duration: 0.3 },
        }}
      >
        <div className="p-[2px] rounded-lg bg-gradient-to-r from-[#FF6B00] via-[#FF2EB1] to-[#3B82F6] animate-gradient-x inline-block">
          <div className="p-[2px] rounded-xl bg-gradient-to-r from-[#FF6B00] via-[#FF2EB1] to-[#3B82F6] animate-gradient-x">
            <div className="bg-zinc-900 rounded-[10px] p-4 text-white">
                {/* Modern split card design */}
                <div className="w-full flex flex-col md:flex-row bg-zinc-700 rounded-2xl overflow-hidden shadow-xl">
                  {/* Image section - full width on mobile, 55% on desktop */}
                  <div className="w-full md:w-[55%] h-[250px] md:h-[400px] lg:h-[450px] relative overflow-hidden flex items-center justify-center">
                    <motion.img
                      src={url}
                      alt={title}
                      initial={{ scale: 1 }}
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.4 }}
                    />
                  </div>

                  {/* Content section - full width on mobile, 45% on desktop */}
                  <div className="w-full md:w-[45%] p-2 md:p-2 lg:p-10 flex flex-col justify-between">
                    <div className="mb-6">
                      <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2 md:mb-4"> 
                        {title}
                      </h2>
                      <p className="text-sm md:text-base text-gray-100 leading-relaxed line-clamp-3 md:line-clamp-none max-w-md">
                        {description}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-2 mt-2">
                      {techs?.map((tech, index) => (
                        <div className="p-[2px] rounded-lg bg-gradient-to-r from-[#FF6B00] via-[#FF2EB1] to-[#3B82F6] animate-gradient-x inline-block">
                          <span
                            key={index}
                            className="px-3 py-1 text-sm rounded-lg bg-gray-800 text-white shadow-sm block"
                          >
                            {tech}
                          </span>
                        </div>
                      ))}
                    </div>

                    <div className="mt-4 md:mt-auto pt-2">
                      <div className="w-full h-[3px] bg-gradient-to-r from-[#FF6B00] via-[#FF2EB1] to-[#3B82F6] animate-gradient-x mb-4 md:mb-4" />

                      <div className="flex items-center gap-8">
                        {/* GitHub Link */}
                        <motion.a
                          href={githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group flex items-center gap-2"
                          whileHover={{ y: -3 }}
                          transition={{ type: "spring", stiffness: 400 }}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="22"
                            height="22"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke={color}
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                          </svg>
                          <span
                            className="text-xs md:text-sm font-medium"
                            style={{ color }}
                          >
                            Código
                          </span>
                        </motion.a>

                        {/* Live Link */}
                        <motion.a
                          href={liveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group flex items-center gap-2"
                          whileHover={{ y: -3 }}
                          transition={{ type: "spring", stiffness: 400 }}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="22"
                            height="22"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke={color}
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <circle cx="12" cy="12" r="10"></circle>
                            <line x1="2" y1="12" x2="22" y2="12"></line>
                            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                          </svg>
                          <span
                            className="text-xs md:text-sm font-medium"
                            style={{ color }}
                          >
                            Ver Projeto
                          </span>
                        </motion.a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

// Add PropTypes validation
Card.propTypes = {
  i: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  progress: PropTypes.object.isRequired,
  range: PropTypes.array.isRequired,
  targetScale: PropTypes.number.isRequired,
  githubLink: PropTypes.string.isRequired,
  liveLink: PropTypes.string.isRequired,
};
