import aboutMe from './../images/about-me.jpg'
import AboutSocials from './AboutSocials';

const About = () => {
   return (
      <>
         <section className="about mt-150" id='about'>
            <div className="container mx-auto">
               <div className="about-content flex items-center justify-between gap-10">
                  <div className="about-img__wrapper rounded-3xl">
                     <img src={aboutMe} alt="" className='rounded-3xl' />
                  </div>

                  <div className="about-desc w-[1000px]">
                     <h1 className="md:text-7xl text-3xl lg:text-8xl font-bold text-white relative z-20 mb-2">Обо <span className="gradient-text">мне</span></h1>
                     <p className="text-white/70 mb-5">Я начинающий фронтенд-разработчик с примерно одного года целенаправленного обучения и практики. Мой путь в веб-разработку начался с искреннего любопытства, которое быстро переросло в настоящую страсть.</p>

                     <ul className='text-white/70 grid gap-1'>
                        <li><span className='grad-linii'>Навыки:</span> Уверенно работаю с HTML5, CSS3 (включая Flexbox/Grid) и JavaScript (ES6+). Сейчас активно углубляюсь в Tailwind и React и осваиваю работу с системами контроля версий, такими как Git.
                        </li>
                        <li>
                           <span className='grad-linii'>Опыт:</span> За этот год я разработал около 10 учебных и пет-проектов, включая адаптивные лендинги, небольшие приложения с API-интеграцией.
                        </li>
                        <li>
                           <span className='grad-linii'>Моя цель:</span> Создавать чистый, элегантный и, самое главное, удобный для пользователя код, который приносит реальную пользу. Я постоянно учусь и ищу возможности применить свои знания в реальных проектах.
                        </li>
                     </ul>

                     <AboutSocials />
                  </div>
               </div>
            </div>
         </section>
      </>
   );
}

export default About;