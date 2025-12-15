import Kohami from './../../public/images/project-Kohami.png';
import GearUp from './../../public/images/project-gearUp.png';
import Gulp from './../../public/images/project-Insectoid.png';


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
      <section className="projects mt-70">
         <div className="container mx-auto text-center">
            <div className="projects-content">
               <h1 className="md:text-7xl text-3xl lg:text-8xl font-bold text-white relative z-20 mb-2">Мои <span className="gradient-text">проекты</span></h1>
               <p className="text-white/70 w-200 mx-auto">Добро пожаловать в моё портфолио собственных веб-проектов. Каждый из них является прямым отражением моего опыта, подхода к коду и внимания к деталям.</p>

               <div className="projects-list grid grid-cols-3 mt-15">
                  {projects.map((item, index) => (
                     <div className="project-card max-w-[450px] border border-white/30 rounded-4xl flex flex-col justify-between  hover:-translate-y-3  duration-300 ease-in-out relative group" key={index}>
                        <div className='absolute duration-300 ease w-full inset-0 bg-white/10 rounded-4xl opacity-50 blur-2xl group-hover:blur-sm -z-10' />
                        <img src={item.imageUrl} alt="project" className='h-[250px] rounded-t-4xl' />

                        <div className="card-stack flex gap-3 justify-center mt-5">
                           {item.stack.map((item, index) => (
                              <span key={index} className='text-white/70 py-[3px]  text-[14px] px-4 border border-white/30 rounded-4xl'>{item}</span>
                           ))}
                        </div>

                        <div className="title__text flex-grow mt-10">
                           <h4 className='text-4xl project-title'>{item.title}</h4>
                           <p className='mt-3 text-white/70'>{item.body}</p>
                        </div>

                        <a className={`mx-auto flex gap-1 items-center cursor-pointer px-6 py-3 border border-black rounded-4xl bg-white text-black relative overflow-hidden button duration-300 ease hover:-translate-y-2 hover:border-white/50 hover:text-white hover:shadow-xl hover:shadow-white/10 hover:bg-transparent welcome-button mb-5 mt-7`}
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