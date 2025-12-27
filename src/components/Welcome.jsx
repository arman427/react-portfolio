import { ArrowDown } from "lucide-react";
import { useScrollTo } from "../hooks/useScrollTo";
import { useGSAP } from '@gsap/react';
import gsap from "gsap";
import { SplitText } from 'gsap/SplitText';

import CountUp from "react-countup";


const Welcome = () => {
   const scrollToSection = useScrollTo();

   useGSAP(() => {
      const titleSplit = new SplitText('.welcome-title', { type: 'words,chars' });
      const text = new SplitText('.welcome-text', { type: 'words,chars' });

      gsap.from(titleSplit.chars, {
         yPercent: 80,
         opacity: 0,
         duration: 1.2,
         stagger: 0.04,
         ease: "back",
      }),

         gsap.fromTo(text.chars, {
            opacity: 0,
            y: 0,
         }, {
            opacity: 1,
            y: 0,
            ease: "power1.inOut",
            delay: 0.5,
            duration: .8,
            stagger: {
               amount: 1,
               from: "start",
            }
         });
   }, []);

   return (
      <>
         <div className="container flex flex-col gap-4 justify-center items-center mx-auto pt-50 overflow-hidden">
            <h1 className={`md:text-8xl text-5xl lg:text-[110px] font-bold text-center text-white relative z-20 welcome-title dark:text-black tracking-[-3px] sm:tracking-[-4px]`}>Привет, я Арман</h1>
            <div className="w-full h-10 relative flex justify-center animate-pulse">
               <div className="absolute left-1/2 -translate-x-1/2 top-0 bg-gradient-to-r from-transparent via-emerald-400 to-transparent h-[2px] w-3/4 blur-sm" />
               <div className="absolute left-1/2 -translate-x-1/2 top-0 bg-gradient-to-r from-transparent via-emerald-400 to-transparent h-px w-3/4" />
               <div className="absolute left-1/2 -translate-x-1/2 top-0 bg-gradient-to-r from-transparent via-emerald-400 to-transparent h-[5px] w-1/4 blur-sm" />
               <div className="absolute left-1/2 -translate-x-1/2 top-0 bg-gradient-to-r from-transparent via-emerald-400 to-transparent h-px w-1/4" />
            </div>
         </div>

         <div className={`mx-auto text-[15px] max-w-90 sm:max-w-160 text-center text-white/70 welcome-text dark:text-black`}>Начинающий Фронтенд-Разработчик, превращающий идеи в быстрые, масштабируемые и интуитивно понятные веб-приложения. Разрабатываю на React и создаю чистые, эффективные пользовательские интерфейсы.</div>

         <button className={`mx-auto flex gap-1 items-center mt-10 cursor-pointer px-10 py-4 border rounded-4xl bg-white text-black/70 text-xl relative overflow-hidden button hover:scale-102 hover:bg-transparent welcome-button dark:text-white`}
            onClick={(e) => scrollToSection('about', e)}>
            <ArrowDown width={'17px'} />
            Смотреть
            <ArrowDown width={'17px'} />
         </button>

         <div className="flex mx-auto flex-col items-center mt-30 gap-3 px-3">
            <p className="mx-auto text-xl sm:text-2xl text-center text-white/60 dark:text-black welcome-count">Количество проектов за мое время обучения:</p>
            <CountUp
               start={0}
               end={10}
               duration={5}
               delay={3}
               enableScrollSpy={false}
               scrollSpyOnce={false}
               useEasing={true}
               className="text-5xl sm:text-8xl gradient-text"
            />
         </div>
      </>
   );
}

export default Welcome;