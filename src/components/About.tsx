import React, { useEffect, useRef, useState } from "react";
import { Sparkles, Users, Music2, Award } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import p6Bg from "../assets/sobre.png";
import teste1 from "../assets/teste1.png";
import teste2 from "../assets/teste2.png";
import teste3 from "../assets/teste3.png";
import teste4 from "../assets/teste4.png";
import teste5 from "../assets/teste5.png";
import teste6 from "../assets/teste6.png";

gsap.registerPlugin(ScrollTrigger);

const images = [teste1, teste2, teste3, teste4, teste5, teste6];

const About: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Ref para todas as seções que terão animação
  const sectionsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    if (!containerRef.current) return;

    // ScrollTrigger para troca da imagem conforme scroll
    const trigger = ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top bottom",
      end: "bottom top",
      scrub: 0.1,
      onUpdate: (self) => {
        const progress = self.progress;
        const index = Math.min(images.length - 1, Math.floor(progress * images.length));
        setCurrentImageIndex(index);
      },
    });

    // Animar as seções fade + translateY on scroll
    sectionsRef.current.forEach((section) => {
      gsap.fromTo(
        section,
        { autoAlpha: 0, y: 50 },
        {
          duration: 1,
          autoAlpha: 1,
          y: 0,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    });

    return () => {
      trigger.kill();
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  // Função para adicionar refs dinâmicos
  const addToRefs = (el: HTMLDivElement) => {
    if (el && !sectionsRef.current.includes(el)) {
      sectionsRef.current.push(el);
    }
  };

  return (
    <div className="min-h-screen bg-black pt-20 text-white">
      {/* Hero Section */}
      <section
        ref={addToRefs}
        className="py-16 px-4 bg-center bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url(${p6Bg})`,
          backgroundColor: "rgba(0, 0, 0, 0.8)",
          backgroundBlendMode: "overlay",
        }}
      >
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Quem Somos
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed">
            Há mais de 10 anos criando as melhores experiências da vida noturna, o NEON CLUB é referência em entretenimento e diversão na cidade.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section ref={addToRefs} className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Nossa História</h2>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  Fundado em 2014, o NEON CLUB nasceu da paixão pela música eletrônica e pelo desejo de criar um espaço único onde as pessoas pudessem se conectar através da música e da dança.
                </p>
                <p>
                  Desde então, temos sido pioneiros em trazer os melhores DJs nacionais e internacionais, oferecendo uma experiência audiovisual incomparável com tecnologia de ponta e um ambiente sofisticado.
                </p>
                <p>
                  Nosso compromisso é proporcionar noites inesquecíveis, onde cada detalhe é pensado para criar momentos únicos e especiais.
                </p>
              </div>
            </div>

            <div
              ref={containerRef}
              className="relative w-full h-80 rounded-xl border border-purple-500/20 overflow-hidden"
              style={{
                backgroundImage: `url(${images[currentImageIndex]})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                transition: "background-image 0.1s ease-in-out",
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/30 via-purple-500/30 to-pink-500/30 backdrop-blur-sm flex items-center justify-center">
                <div className="text-center p-4 rounded-lg" style={{ backgroundColor: "rgba(167, 139, 250, 0.8)" }}>
                  <Sparkles className="w-16 h-16 text-purple-600 mx-auto mb-4" />
                  <p className="text-pink-800 text-lg font-semibold">10+ Anos de Experiência</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section ref={addToRefs} className="py-16 px-4 bg-gradient-to-r from-gray-900 to-black">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: <Users className="w-8 h-8 text-white" />, value: "50K+", label: "Clientes Satisfeitos" },
              { icon: <Music2 className="w-8 h-8 text-white" />, value: "200+", label: "DJs Internacionais" },
              { icon: <Award className="w-8 h-8 text-white" />, value: "15", label: "Prêmios Recebidos" },
              { icon: <Sparkles className="w-8 h-8 text-white" />, value: "1000+", label: "Eventos Realizados" },
            ].map((stat, i) => (
              <div key={i} className="text-center group">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300"
                  style={{
                    background: [
                      "linear-gradient(to right, #3b82f6, #8b5cf6)",
                      "linear-gradient(to right, #8b5cf6, #ec4899)",
                      "linear-gradient(to right, #ec4899, #3b82f6)",
                      "linear-gradient(to right, #3b82f6, #8b5cf6, #ec4899)",
                    ][i],
                  }}
                >
                  {stat.icon}
                </div>
                <h3 className="text-3xl font-bold mb-2">{stat.value}</h3>
                <p className="text-gray-300">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section ref={addToRefs} className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-gray-800/50 backdrop-blur-sm p-8 md:p-12 rounded-2xl border border-purple-500/20">
            <h2 className="text-3xl font-bold text-center mb-8">Nossa Missão</h2>
            <p className="text-lg text-gray-300 text-center leading-relaxed">
              Criar experiências únicas e memoráveis através da música, tecnologia e hospitalidade.
              Acreditamos que a vida noturna vai além da diversão - é sobre conexões humanas,
              momentos especiais e a celebração da vida. Nosso objetivo é ser o lugar onde histórias
              incríveis começam e amizades se fortalecem.
            </p>
          </div>
        </div>
      </section>

      {/* Team Values */}
      <section ref={addToRefs} className="py-16 px-4 bg-gradient-to-br from-black via-purple-900/10 to-black">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">Nossos Valores</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Inovação",
                color: "text-blue-400",
                text: "Sempre buscamos as mais novas tecnologias e tendências para oferecer experiências únicas aos nossos clientes.",
              },
              {
                title: "Qualidade",
                color: "text-purple-400",
                text: "Excelência em cada detalhe, desde o som até o atendimento, garantindo sempre a melhor experiência possível.",
              },
              {
                title: "Diversidade",
                color: "text-pink-400",
                text: "Celebramos a diversidade e criamos um ambiente acolhedor para todas as pessoas, sem exceção.",
              },
            ].map((value, i) => (
              <div key={i} className="text-center group shadow-[0_0_20px_#a855f7] rounded-xl p-4 bg-black/30">
                <h3 className={`text-xl font-bold mb-4 ${value.color}`}>{value.title}</h3>
                <p className="text-gray-300">{value.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
