import { useEffect, useRef, useState } from "react";
import { useScrollTo } from './../hooks/useScrollTo';
import { ArrowUp, Moon } from "lucide-react";
import { Sun } from "lucide-react";


const Header = () => {
   const [isHovered, setIsHovered] = useState(false);
   const [position, setPosition] = useState({ x: 0, y: 0 });
   const buttonRef = useRef(null);
   const scrollToSection = useScrollTo();
   const [backToTop, setBackToTop] = useState(false)

   useEffect(() => {
      const handleScroll = () => {
         if (window.scrollY > 500) {
            setBackToTop(true);
         } else {
            setBackToTop(false);
         }
      }

      window.addEventListener('scroll', handleScroll)
      return () => {
         window.removeEventListener('scroll', handleScroll)
      };
   }, []);

   const clickToTop = () => {
      window.scroll({
         top: 0,
         behavior: 'smooth',
      })
   }


   const getInitialisDefault = () => { // Достает тему из лок. стореджа и возвращает true если тема default, fals если dark (светлая)
      const storedTheme = localStorage.getItem('theme');
      return storedTheme === 'default';
   };

   const [isDefault, setIsDefault] = useState(getInitialisDefault); // Сохраняем это в состояние

   useEffect(() => {
      const newTheme = isDefault ? 'default' : 'dark'; // Создаем тему на основе состояния, если там true то соответсвенно default

      if (isDefault === true) { // Удаляем класс dark если была светлая
         document.documentElement.classList.remove('dark');
      } else if (isDefault === false) {
         document.documentElement.classList.add('dark');
      }

      localStorage.setItem('theme', newTheme); // Кладет в локал сторедж текущую тему
   }, [isDefault]);

   const toggleTheme = () => { // Переключает тему на противоположную
      setIsDefault(!isDefault);
   }



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
      <>
         <header className="header relative pt-10">
            <div className={`container mx-auto flex justify-between items-center`}>
               <div className="w-18.5"></div>
               <div className={` header-nav justify-center px-15 py-3 rounded-4xl relative border border-white/30 group overflow-hidden dark:border-black`} ref={buttonRef} onMouseEnter={buttonEnter} onMouseLeave={buttonLeave} onMouseMove={buttonMove}>
                  <span className="header-animation" style={animationStyle} />
                  <div className="absolute w-full h-full inset-0 bg-white/30 rounded-3xl blur-xl opacity-20 -z-10 duration-200 ease group-hover:opacity-30" />
                  <ul className="header-nav__list flex gap-10 text-white/70 dark:text-black">
                     <li><a href="" className="hover:text-sky-400 duration-200 ease">Главная</a></li>
                     <li><a href="" className="hover:text-sky-400 duration-200 ease" onClick={(e) => scrollToSection('about', e)}>Обо мне</a></li>
                     <li><a href="" className="hover:text-sky-400 duration-200 ease" onClick={(e) => scrollToSection('projects', e)}>Проекты</a></li>
                     <li><a href="" className="hover:text-sky-400 duration-200 ease" onClick={(e) => scrollToSection('contacts', e)}>Контакты</a></li>
                  </ul>
               </div>

               <button className="cursor-pointer border border-white/30 p-3 px-6 rounded-4xl dark:text-black dark:border-black" onClick={toggleTheme}>
                  {isDefault ? <Sun /> : <Moon />}
               </button>
            </div>
         </header>

         <ArrowUp className={`fixed right-30 bottom-30 backdrop-blur-md z-999 px-4 py-3 w-15 h-13 rounded-4xl border border-white/30 cursor-pointer duration-200 ease hover:bg-white/10 ${backToTop ? 'active-back' : ''} back`} onClick={clickToTop}/>
      </>
   );
}

export default Header;