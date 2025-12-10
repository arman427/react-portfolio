const Welcome = () => {
   return (
      <>
         <div className="container flex flex-col gap-4 justify-center items-center mx-auto mt-50 overflow-hidden">
            <h1 className="md:text-7xl text-3xl lg:text-9xl font-bold text-center text-white relative z-20">Привет, я Арман</h1>
            <div className="w-full h-10 relative flex justify-center">
               <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm mx-auto" />
               <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4 mx-auto" />
               <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm mx-auto gradient" />
               <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4 mx-auto" />
            </div>
         </div>
         <div className="mx-auto w-1/3 text-center text-white/70">Я Начинающий Фронтенд-Разработчик, превращающий идеи в быстрые, масштабируемые и интуитивно понятные веб-приложения. Разрабатываю на React и создаю чистые, эффективные пользовательские интерфейсы.</div>
         <button className="mx-auto flex items-center mt-10 cursor-pointer px-7 py-3 border border-white/30 rounded-4xl text-white/60 relative overflow-hidden button duration-300 ease hover:-translate-y-2 hover:border-white/50 hover:text-white hover:shadow-md hover:shadow-white/50">
            <div className="w-full inset-0 absolute bg-white/30 rounded-4xl opacity-70 blur-3xl"/>
            Смотреть
         </button>
      </>
   );
}

export default Welcome;