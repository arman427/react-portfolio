const Header = () => {
   return (
      <div className="container mx-auto flex justify-center items-center">
         <div className="header-nav mt-10 px-10 py-3 rounded-4xl relative border border-white/30 group duration-200 hover:border-white/50">
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