const AboutBenefits = () => {
   return (
      <div className="about-benefits">
         <div className="about-benefits__list grid gap-10">
            <div className="about-benefits__card__wrapper flex justify-start items-start gap-5 bg-white/[5%] p-5 rounded-4xl dark:bg-black/10">
               <svg className="bi bi-code about-icon bg-white/10 px-3 py-3 rounded-[100%] fill-black" xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M5.854 4.854a.5.5 0 1 0-.708-.708l-3.5 3.5a.5.5 0 0 0 0 .708l3.5 3.5a.5.5 0 0 0 .708-.708L2.707 8zm4.292 0a.5.5 0 0 1 .708-.708l3.5 3.5a.5.5 0 0 1 0 .708l-3.5 3.5a.5.5 0 0 1-.708-.708L13.293 8z" />
               </svg>

               <div className="about-benefits__card__desc">
                  <h4 className="gradient-text text-3xl mb-1">Веб-разработка</h4>
                  <p className="text-white/70 dark:text-black">Создание адаптивных веб-сайтов и веб-приложений с использованием современных фреймворков</p>
               </div>
            </div>
            <div className="about-benefits__card__wrapper flex justify-start items-start gap-5 bg-white/[5%] p-5 rounded-4xl dark:bg-black/10">
               <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-code about-icon bg-white/10 px-3 py-3 rounded-[100%] fill-black" viewBox="0 0 16 16">
                  <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z" />
               </svg>

               <div className="about-benefits__card__desc">
                  <h4 className="gradient-text text-3xl mb-1">Дизайн пользовательского интерфейса UI/UX</h4>
                  <p className="text-white/70 dark:text-black">Разработка интуитивно понятных пользовательских интерфейсов и взаимодействия с пользователем</p>
               </div>
            </div>
            <div className="about-benefits__card__wrapper flex justify-start items-start gap-5 bg-white/[5%] p-5 rounded-4xl dark:bg-black/10">
               <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-code about-icon bg-white/10 px-3 py-3 rounded-[100%] fill-black" viewBox="0 0 16 16">
                  <path d="M5 2a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2h3.5A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5H14a.5.5 0 0 1-1 0H3a.5.5 0 0 1-1 0h-.5A1.5 1.5 0 0 1 0 12.5v-9A1.5 1.5 0 0 1 1.5 2zm1 0h4a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1M1.5 3a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5H3V3zM15 12.5v-9a.5.5 0 0 0-.5-.5H13v10h1.5a.5.5 0 0 0 .5-.5m-3 .5V3H4v10z" />
               </svg>

               <div className="about-benefits__card__desc">
                  <h4 className="gradient-text text-3xl mb-1">Управление проектом</h4>
                  <p className="text-white/70 dark:text-black">Ведение проектов от концепции до завершения с использованием гибких методологией</p>
               </div>
            </div>
         </div>
      </div>
   );
}

export default AboutBenefits;