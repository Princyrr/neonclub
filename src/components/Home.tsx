import React, { useEffect, useRef } from 'react';
import { Calendar, Clock, MapPin, Star } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import p1 from '../assets/p1.png';
import p2 from '../assets/p2.png';
import p3 from '../assets/p3.png';
import p4 from '../assets/p4.png';
import p5 from '../assets/p5.png';
import p6 from '../assets/p6.png';
import p7 from '../assets/p7.png';
import p8 from '../assets/p8.png';
import p9 from '../assets/p9.png';
import p10 from '../assets/p10.png';
import p11 from '../assets/p11.png';
import p12 from '../assets/p12.png';

gsap.registerPlugin(ScrollTrigger);

const Home: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const images = [p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, p12];

  // Refs para animar vários blocos
  const infoCardsRef = useRef<HTMLDivElement>(null);
  const eventsRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    // Animação do background com troca de imagens conforme scroll
    let obj = { frame: 0 };
    gsap.to(obj, {
      frame: images.length - 1,
      snap: 'frame',
      ease: 'none',
      scrollTrigger: {
        trigger: section,
        start: 'top top',
        end: '+=600',
        scrub: 1,
        pin: true,
      },
onUpdate: () => {
  if (section) {
    section.style.backgroundImage = `url(${images[obj.frame]})`;

    section.style.backgroundSize = 'cover'; // <- SEMPRE 'cover'
    section.style.backgroundPosition = 'center';
    section.style.height = '100vh'; // ou mantenha default do Tailwind
  }
},




    });

    // Fade in e slide up dos elementos - título principal
    if (headingRef.current) {
      gsap.fromTo(
        headingRef.current,
        { autoAlpha: 0, y: 50 },
        {
          duration: 1,
          autoAlpha: 1,
          y: 0,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: headingRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      );
    }

    // Animação dos cards de informação
    if (infoCardsRef.current) {
      gsap.fromTo(
        infoCardsRef.current.children,
        { autoAlpha: 0, y: 50 },
        {
          duration: 1,
          autoAlpha: 1,
          y: 0,
          ease: 'power3.out',
          stagger: 0.15,
          scrollTrigger: {
            trigger: infoCardsRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      );
    }

    // Animação da seção eventos
    if (eventsRef.current) {
      gsap.fromTo(
        eventsRef.current.children,
        { autoAlpha: 0, y: 50 },
        {
          duration: 1,
          autoAlpha: 1,
          y: 0,
          ease: 'power3.out',
          stagger: 0.2,
          scrollTrigger: {
            trigger: eventsRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      );
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [images]);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section com background controlado por scroll */}
  <section
  ref={sectionRef}
 className="relative h-screen sm:min-h-screen flex items-center justify-center overflow-hidden"


  style={{
    backgroundImage: `url(${p1})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover', // sempre cover
  }}
>



        <div
          ref={headingRef}
          className="relative z-10 text-center px-4 max-w-4xl mx-auto"
        >
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-blue-800 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
            NEON CLUB
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
            A experiência noturna mais intensa da cidade. Música eletrônica, drinks exclusivos e uma atmosfera única.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-blue-800 via-purple-500 to-pink-500 text-white font-bold rounded-full hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-purple-500/25">
              RESERVE SUA MESA
            </button>
            <button className="px-8 py-4 border-2 border-purple-500 text-purple-300 font-bold rounded-full hover:bg-purple-500 hover:text-white transition-all duration-300">
              EVENTOS
            </button>
          </div>
        </div>
      </section>

      {/* Info Cards */}
      <section
        ref={infoCardsRef}
        className="py-16 px-4 bg-gradient-to-r from-gray-900 to-black"
      >
        <div className="container mx-auto max-w-6xl grid md:grid-cols-3 gap-8">
          <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 hover:scale-105 shadow-[0_0_20px_#a855f7]">
            <div className="flex items-center mb-4">
              <Clock className="w-8 h-8 text-blue-800 mr-3" />
              <h3 className="text-xl font-bold text-white">Horário</h3>
            </div>
            <p className="text-gray-300">
              Quinta a Sábado
              <br />
              22:00 às 06:00
            </p>
          </div>

          <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 hover:scale-105 shadow-[0_0_20px_#a855f7]">
            <div className="flex items-center mb-4">
              <MapPin className="w-8 h-8 text-pink-400 mr-3" />
              <h3 className="text-xl font-bold text-white">Localização</h3>
            </div>
            <p className="text-gray-300">
              Espinheiro
              <br />
              avenida conselheiro rosa e silva, 172
            </p>
          </div>

          <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 hover:scale-105 shadow-[0_0_20px_#a855f7]">
            <div className="flex items-center mb-4">
              <Star className="w-8 h-8 text-purple-400 mr-3" />
              <h3 className="text-xl font-bold text-white">Avaliação</h3>
            </div>
            <div className="flex items-center">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="w-5 h-5 text-yellow-400 fill-current" />
              ))}
              <span className="text-gray-300 ml-2">4.8/5</span>
            </div>
          </div>
        </div>
      </section>

      {/* Events Preview */}
      <section
        ref={eventsRef}
        className="py-16 px-4 bg-black"
      >
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-800 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Próximos Eventos
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="relative group overflow-hidden rounded-xl">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-800 to-purple-600 opacity-80"></div>
              <div className="relative p-8 text-white">
                <div className="flex items-center mb-4">
                  <Calendar className="w-6 h-6 mr-2" />
                  <span className="text-sm font-medium">SÁBADO, 15 JAN</span>
                </div>
                <h3 className="text-2xl font-bold mb-2">NEON NIGHT</h3>
                <p className="text-gray-200 mb-4">Uma noite especial com os melhores DJs da cidade</p>
                <button className="px-6 py-2 bg-white text-purple-600 font-bold rounded-full hover:bg-gray-100 transition-colors duration-300">
                  SAIBA MAIS
                </button>
              </div>
            </div>

            <div className="relative group overflow-hidden rounded-xl">
              <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-80"></div>
              <div className="relative p-8 text-white">
                <div className="flex items-center mb-4">
                  <Calendar className="w-6 h-6 mr-2" />
                  <span className="text-sm font-medium">SEXTA, 21 JAN</span>
                </div>
                <h3 className="text-2xl font-bold mb-2">PINK FRIDAY</h3>
                <p className="text-gray-200 mb-4">Noite especial só para as damas com open bar</p>
                <button className="px-6 py-2 bg-white text-pink-600 font-bold rounded-full hover:bg-gray-100 transition-colors duration-300">
                  SAIBA MAIS
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
