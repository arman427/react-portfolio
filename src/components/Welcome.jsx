import { useRef, useState } from "react";
import { ArrowDown } from "lucide-react";



const Welcome = () => {
   const [isHovered, setIsHovered] = useState(false);
   const [position, setPosition] = useState({ x: 0, y: 0 });
   const buttonRef = useRef(null);
   const buttonEnter = () => {
      setIsHovered(true);
   }
   const buttonLeave = () => {
      setIsHovered(false);
   }

   const buttonMove = (event) => {
      const button = buttonRef.current;
      if (!button) return;
      const rect = button.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;

      setPosition({ x, y });
   }

   const animationStyle = {
      transform: `translate(${position.x}px, ${position.y}px) translate(-50%, -50%)`,
      opacity: isHovered ? 1 : 0,
   };

   return (
      <>
         <div className="container flex flex-col gap-4 justify-center items-center mx-auto mt-50 overflow-hidden">
            <h1 className="md:text-7xl text-3xl lg:text-9xl font-bold text-center text-white relative z-20">Привет, я Арман</h1>
            <div className="w-full h-10 relative flex justify-center animate-pulse">
               <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm mx-auto" />
               <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4 mx-auto" />
               <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm mx-auto gradient" />
               <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4 mx-auto" />
            </div>
         </div>
         <div className="mx-auto w-1/3 text-center text-white/70">Начинающий Фронтенд-Разработчик, превращающий идеи в быстрые, масштабируемые и интуитивно понятные веб-приложения. Разрабатываю на React и создаю чистые, эффективные пользовательские интерфейсы.</div>
         <button className="mx-auto flex gap-1 items-center mt-10 cursor-pointer px-6 py-3 border border-white/30 rounded-4xl text-white/60 relative overflow-hidden button duration-300 ease hover:-translate-y-2 hover:border-white/50 hover:text-white hover:shadow-xl hover:shadow-white/10"
            ref={buttonRef}
            onMouseEnter={buttonEnter}
            onMouseLeave={buttonLeave}
            onMouseMove={buttonMove}>
            <ArrowDown width={'17px'} />
            <span className="cursor-animation" style={animationStyle} />
            <div className="w-full inset-0 absolute bg-white/30 rounded-4xl opacity-70 blur-3xl -z-10" />
            Смотреть
            <ArrowDown width={'17px'} />
         </button>
      </>
   );
}

export default Welcome;