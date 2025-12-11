import { useRef, useState } from "react";

const Header = () => {
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

      setPosition({ x, y })
   }

   const animationStyle = {
      opacity: isHovered ? 1 : 0,
      transform: `translate(${position.x}px, ${position.y}px) translate(-50%, -50%)`,
   };

   return (
      <div className="container mx-auto flex justify-center items-center">
         <div className="header-nav mt-10 px-10 py-3 rounded-4xl relative border border-white/30 group duration-200 hover:border-white/50 overflow-hidden" ref={buttonRef} onMouseEnter={buttonEnter} onMouseLeave={buttonLeave} onMouseMove={buttonMove}>
            <span className="header-animation" style={animationStyle} />
            <div className="absolute w-full h-full inset-0 bg-white/30 rounded-3xl blur-xl opacity-20 -z-10 duration-200 ease group-hover:opacity-30" />
            <ul className="header-nav__list flex gap-10 text-white/70">
               <li><a href="" className="hover:text-white duration-200 ease">Главная</a></li>
               <li><a href="" className="hover:text-white duration-200 ease">Проекты</a></li>
               <li><a href="" className="hover:text-white duration-200 ease">Обо мне</a></li>
               <li><a href="" className="hover:text-white duration-200 ease">Услуги</a></li>
               <li><a href="" className="hover:text-white duration-200 ease">Контакты</a></li>
            </ul>
         </div>
      </div>
   );
}

export default Header;