import Kohami from '/images/project-Kohami.png?url';
import GearUp from '/images/project-gearUp.png?url';
import Gulp from '/images/project-Insectoid.png?url';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/all';
import { useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

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

   const scrollRef = useRef();


   useGSAP(() => {
      const cards = gsap.utils.toArray(scrollRef.current.children);
      const isMobile = window.innerWidth < 1024;
      if (isMobile) {
         cards.forEach((card) => {
            gsap.fromTo(card, {
               y: 50,
               opacity: 0
            }, {
               y: 0,
               opacity: 1,
               duration: 0.2,
               scrollTrigger: {
                  trigger: card,
                  start: 'top 60%',
                  end: 'bottom 20%',
                  toggleActions: 'play none none reverse', // анимация при скролле вверх/вниз
               },
               ease: 'power1.inOut',
            });
         });
      } else {
         gsap.fromTo(cards, {
            y: 50,
            opacity: 0
         }, {
            y: 0,
            opacity: 1,
            duration: .3,
            stagger: 0.15,
            scrollTrigger: {
               trigger: scrollRef.current,
               start: 'top 100%',
               end: 'bottom 50%',
            },
            ease: 'power1.inOut',
         })
      };
   }, { scope: scrollRef });

   return (
      <section className="projects mt-70" id='projects'>
         <div className="container mx-auto text-center">
            <div className="projects-content px-4">
               <h1 className="md:text-7xl text-5xl lg:text-8xl font-bold text-white relative z-20 mb-2 dark:text-black">Мои <span className="gradient-text">проекты</span></h1>
               <p className="text-white/70 max-w-200 mx-auto dark:text-black text-[16px] lg:text-[18px]">Добро пожаловать в моё портфолио собственных веб-проектов. Каждый из них является прямым отражением моего опыта, подхода к коду и внимания к деталям.</p>

               <div className="projects-list flex lg:flex-row items-center lg:items-stretch flex-col justify-between mt-15 gap-5" ref={scrollRef}>
                  {projects.map((item) => (
                     <div className="project-card max-w-90 lg:max-w-112.5 border border-white/30 rounded-4xl flex flex-col justify-between  hover:-translate-y-3  duration-300 ease-in-out relative group dark:bg-black/10" key={item.id}>
                        <div className='absolute duration-300 ease w-full inset-0 bg-white/10 rounded-4xl opacity-50 blur-2xl group-hover:blur-sm -z-10' />
                        <img src={item.imageUrl} alt="project" className='h-50 lg:h-62.5 rounded-t-4xl' />

                        <div className="card-stack flex gap-3 justify-center mt-5">
                           {item.stack.map((item, index) => (
                              <span key={index} className='text-white/70 py-0.75  text-[14px] px-4 border border-white/30 rounded-4xl dark:text-black dark:border-black/50'>{item}</span>
                           ))}
                        </div>

                        <div className="title__text grow mt-10 px-4">
                           <h4 className='text-4xl gradient-text dark:text-black'>{item.title}</h4>
                           <p className='mt-3 text-white/70 dark:text-black'>{item.body}</p>
                        </div>

                        <a className={`mx-auto flex gap-1 items-center mt-10 mb-5 cursor-pointer px-10 py-4 border rounded-4xl bg-white text-black/70 text-xl relative overflow-hidden button hover:scale-102 hover:bg-transparent dark:text-white`}
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