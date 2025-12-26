import { useEffect, useRef, useState } from "react";
import { useScrollTo } from './../hooks/useScrollTo';
import { ArrowUp, Moon } from "lucide-react";
import { Sun } from "lucide-react";


const Header = () => {
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




   return (
      <>
         <header className="header relative pt-10">
            <div className={`container mx-auto flex center items-center`}>
               
               <div className={`header-nav justify-center mx-auto px-15 py-3 rounded-4xl relative border border-white/10 group overflow-hidden dark:border-black bg-white/2 shadow-emerald-400`}>
                  
                  <ul className="header-nav__list flex gap-10 text-white/70 dark:text-black text-[17px]">
                     <li className="hover:-translate-y-[1.2px] duration-200"><a href="#" className="hover:text-white duration-300 ease">Главная</a></li>
                     <li className="hover:-translate-y-[1.2px] duration-200"><a href="#" className="hover:text-white duration-300 ease" onClick={(e) => scrollToSection('about', e)}>Обо мне</a></li>
                     <li className="hover:-translate-y-[1.2px] duration-200"><a href="#" className="hover:text-white duration-300 ease" onClick={(e) => scrollToSection('projects', e)}>Проекты</a></li>
                     <li className="hover:-translate-y-[1.2px] duration-200"><a href="#" className="hover:text-white duration-300 ease" onClick={(e) => scrollToSection('contacts', e)}>Контакты</a></li>
                  </ul>
               </div>

            </div>
         </header>

         <ArrowUp className={`fixed right-10 bottom-20 backdrop-blur-md z-999 px-6 py-4 w-20 h-15 rounded-4xl border border-white/10 cursor-pointer duration-300 ease ${backToTop ? 'active-back' : ''} back`} onClick={clickToTop}/>
      </>
   );
}

export default Header;