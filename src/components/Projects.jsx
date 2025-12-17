import Kohami from '/images/project-Kohami.png?url';
import GearUp from '/images/project-gearUp.png?url';
import Gulp from '/images/project-Insectoid.png?url';


const Projects = () => {
   const projects = [
      {
         id: 1,
         imageUrl: Kohami,
         stack: ['HTML', 'CSS'],
         title: 'Красивое кафе',
         body: 'Красивое кафе Кохами с фотографиями ИИ',
         url: 'https://arman427.github.io/Kohami/',
      },
      {
         id: 2,
         imageUrl: GearUp,
         stack: ['React', 'SCSS'],
         title: 'Интернет магазин',
         body: 'Функциональный интернет магазин на реакте',
         url: 'https://arman427.github.io/react-online-store/',
      },
      {
         id: 3,
         imageUrl: Gulp,
         stack: ['Gulp', 'SCSS', 'JavaScript'],
         title: 'Свайпер',
         body: 'Сайт с красивым свайпером, разработанный с помощью сборщика Gulp',
         url: 'https://arman427.github.io/gulp-insectoiD/',
      },
   ];


   return (
      <section className="projects mt-70" id='projects'>
         <div className="container mx-auto text-center">
            <div className="projects-content">
               <h1 className="md:text-7xl text-3xl lg:text-8xl font-bold text-white relative z-20 mb-2 dark:text-black">Мои <span className="gradient-text">проекты</span></h1>
               <p className="text-white/70 w-200 mx-auto dark:text-black">Добро пожаловать в моё портфолио собственных веб-проектов. Каждый из них является прямым отражением моего опыта, подхода к коду и внимания к деталям.</p>

               <div className="projects-list flex justify-between mt-15">
                  {projects.map((item, index) => (
                     <div className="project-card max-w-112.5 border border-white/30 rounded-4xl flex flex-col justify-between  hover:-translate-y-3  duration-300 ease-in-out relative group dark:bg-black/10" key={index}>
                        <div className='absolute duration-300 ease w-full inset-0 bg-white/10 rounded-4xl opacity-50 blur-2xl group-hover:blur-sm -z-10' />
                        <img src={item.imageUrl} alt="project" className='h-62.5 rounded-t-4xl' />

                        <div className="card-stack flex gap-3 justify-center mt-5">
                           {item.stack.map((item, index) => (
                              <span key={index} className='text-white/70 py-0.75  text-[14px] px-4 border border-white/30 rounded-4xl dark:text-black dark:border-black/50'>{item}</span>
                           ))}
                        </div>

                        <div className="title__text grow mt-10">
                           <h4 className='text-4xl gradient-text dark:text-black'>{item.title}</h4>
                           <p className='mt-3 text-white/70 dark:text-black'>{item.body}</p>
                        </div>

                        <a className={`mx-auto flex gap-1 items-center cursor-pointer px-6 py-3 border border-black rounded-4xl bg-white text-black relative overflow-hidden button duration-300 ease hover:-translate-y-2 hover:border-white/50 hover:text-white hover:shadow-xl hover:shadow-white/10 hover:bg-transparent welcome-button mb-5 mt-7 dark:bg-black dark:text-white dark:hover:text-black dark:hover:border-black`}
                           href={item.url}
                           target="_blank"
                        >
                           <div className="w-full inset-0 absolute bg-white/30 rounded-4xl opacity-70 blur-3xl -z-10" />
                           Смотреть
                        </a>
                     </div>
                  ))}
               </div>
            </div>
         </div>
      </section>
   );
}

export default Projects;