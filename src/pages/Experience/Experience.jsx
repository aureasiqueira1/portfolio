import React from "react";
import { Code2, Activity, Cpu, Layers, Network, Binary } from "lucide-react";

const ExperienceCard = ({
  title,
  company,
  period,
  description,
  icon: Icon,
}) => (
  <div className="group relative overflow-hidden transform transition-all duration-300">
    {/* Glass morphism effect */}
    <div className="absolute inset-0 backdrop-blur-lg bg-white/5 rounded-lg" />

    {/* Animated gradient border */}
    <div className="relative bg-gray-900/90 rounded-lg p-8 h-full border border-gray-800/50 shadow-xl backdrop-blur-xl">
    
    {/* Animated border outline */}
    <div className="absolute inset-0 pointer-events-none z-20">
      {/* Top border: left to right */}
      <div className="absolute top-0 left-0 h-[2px] bg-gradient-to-r from-[#FF6B00] via-[#FF2EB1] to-[#3B82F6] border-animate-top" />

      {/* Right border: top to bottom */}
      <div className="absolute top-0 right-0 w-[2px] bg-gradient-to-b from-[#FF6B00] via-[#FF2EB1] to-[#3B82F6] border-animate-right" />

      {/* Bottom border: right to left */}
      <div className="absolute bottom-0 right-0 h-[2px] bg-gradient-to-l from-[#FF6B00] via-[#FF2EB1] to-[#3B82F6] border-animate-bottom" />

      {/* Left border: bottom to top */}
      <div className="absolute bottom-0 left-0 w-[2px] bg-gradient-to-t from-[#FF6B00] via-[#FF2EB1] to-[#3B82F6] border-animate-left" />
    </div>

      {/* Floating icon */}
      <div className="relative mb-6">
        <Icon className="w-12 h-12 text-white relative z-10 transform group-hover:scale-110 transition-transform duration-300" />
      </div>

      {/* Content with improved typography */}
      <div className="space-y-3">
        <h3 className="text-2xl font-bold bg-gradient-to-r from-[#FF6B00] to-[#FF2EB1] bg-clip-text text-transparent">
          {title}
        </h3>
        <div className="flex justify-between items-center text-gray-300">
          <span className="font-semibold text-[#FF6B00]">{company}</span>
          <span className="text-sm font-mono bg-[#FF6B00]/10 px-3 py-1 rounded-full">
            {period}
          </span>
        </div>
        <p className="text-gray-300 border-l-4 border-[#FF6B00]/50 pl-4 mt-4 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  </div>
);

const ExperienceSection = () => {
  const experiences = [
    {
      icon: Network,
      title: "Desenvolvedora FullStack",
      company: "Prática Klimaquip",
      period: "Ago/2021 - Abr/2022",
      description:
        "Atuação no setor de Digital Endeavors com foco no aprendizado e desenvolvimento de aplicações utilizando React.js e TypeScript no front-end, e Node.js no back-end, além de HTML5/CSS3, APIs REST e banco de dados SQL.",
    },
    {
      icon: Layers,
      title: "Desenvolvedora Front-End Junior",
      company: "4Intelligence",
      period: "Mai/2022 - Jan/2024",
      description:
        "Atuação na área de Engineering & Software Development, com foco no desenvolvimento de interfaces modernas e funcionais. Responsável por liderar projetos que envolvem desde a criação visual no Figma até a implementação front-end utilizando ReactJS, JavaScript, HTML e CSS. Envolvida também em testes unitários com Jest, além da operação e validação das aplicações para garantir qualidade e boa experiência do usuário",
    },
    {
      icon: Code2,
      title: "Desenvolvedora FullStack Pleno",
      company: "Basis",
      period: "Mar/2024 - Momento",
      description:
        "Atuação no Banco do Nordeste do Brasil S/A (BNB), sendo responsável pelo desenvolvimento e resolução de incidentes em sistemas de informação. Como Desenvolvedora Full Stack, sou especializada em front-end com React, TypeScript e Tailwind CSS, e back-end com Java, Spring Boot, JPA e arquitetura hexagonal. Tenho experiência na implementação de testes unitários com JUnit, Mockito, Jest e Testing Library, sempre focando na entrega de soluções completas e de alta qualidade.",
    },
  ];

  return (
    <>
      <div className="min-h-screen bg-gradient-to-b relative overflow-hidden pt-32 pb-20">
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-[#04081A]" />

        {/* Grid background */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(50,50,70,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(50,50,70,0.15)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_70%,transparent_100%)]" />

        {/* Animated particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-blue-500/20 rounded-full animate-float"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
              }}
            />
          ))}
        </div>

        {/* Content container */}
        <div className="relative container mx-auto px-6 mt-10">
          {/* Section header with enhanced effects */}
          <div className="flex flex-col items-center space-y-8 mb-20">
            <div className="relative">
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent mb-6">
                Experiência Profissional
              </h2>
            </div>
          </div>

          {/* Experience grid with improved layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
            {experiences.map((exp, index) => (
              <ExperienceCard key={index} {...exp} />
            ))}
          </div>
        </div>

        {/* Enhanced background effects */}
        <div className="absolute top-20 left-20 w-96 h-96 bg-cyan-500/10 rounded-full filter blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full filter blur-3xl animate-pulse delay-1000" />
      </div>
    </>
  );
};

export default ExperienceSection;
