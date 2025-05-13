// import HeroImg from "@/assets/images/hero.jpg";
import HeroImg from "@/assets/images/projects/perfil.png";

export default function About() {
  return (
    <>
      <section id="about" className="py-16 md:py-32  text-white bg-[#04081A]">
        <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
          <h2 className="relative z-10 max-w-xl text-4xl font-medium lg:text-5xl gradient-text">
            SOBRE MIM
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
            <div className="relative mb-6 sm:mb-0">
              <div className="bg-linear-to-b aspect-76/59 relative rounded-2xl p-px from-zinc-300 to-transparent">
                <img
                  src={HeroImg}
                  className="rounded-[15px] shadow block"
                  alt="payments illustration"
                  width={1207}
                  height={929}
                />
              </div>
            </div>

            <div className="relative space-y-4">
              <p className="text-white">
                Olá! Sou Áurea Ribeiro, desenvolvedora apaixonada por JavaScript e especialista na criação de soluções web inovadoras. 
                <span className="font-bold text-white">
                  Com experiência em desenvolvimento full stack, foco em front-end (React e TypeScript) e back-end (Java e Spring Boot), busco sempre entregar soluções completas e escaláveis.
                </span>
              </p>

              <p className="text-white">
                Minha trajetória começou no front-end, onde me especializei em frameworks como React e TypeScript. Contudo, ao longo da carreira, ampliei meu conhecimento para o back-end, adquirindo experiência com Java e Spring Boot, o que me permite entender e desenvolver soluções de ponta a ponta.
              </p>

              <div className="pt-6">
                <blockquote className="border-l-4 border-gray-300 pl-4">
                  <p className="text-white">
                    Acredito que a chave para o sucesso está em aplicar boas práticas de desenvolvimento e testes unitários, garantindo a qualidade do software. Meu objetivo é sempre criar soluções que impactem positivamente os usuários e os negócios.
                  </p>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
