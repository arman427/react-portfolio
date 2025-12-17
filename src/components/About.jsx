import aboutMe from '/images/about-me.jpg'
import AboutSocials from './Socials';
import AboutBenefits from './AboutBenefits';

const About = () => {
   return (
      <>
         <section className="about mt-150" id='about'>
            <div className="container mx-auto">
               <div className="about-content flex justify-between gap-20">
                  <div className="about-desc max-w-[700px]">
                     <h1 className="md:text-7xl text-3xl lg:text-8xl font-bold text-white relative z-20 mb-2 dark:text-black">Обо <span className="gradient-text">мне</span></h1>
                     <p className="text-white/70 mb-7 mt-5 dark:text-black">Я начинающий фронтенд-разработчик с примерно одного года целенаправленного обучения и практики. Мой путь в веб-разработку начался с искреннего любопытства, которое быстро переросло в настоящую страсть.</p>

                     <ul className='text-white/70 grid gap-4 dark:text-black'>
                        <li><span className='grad-linii'>Навыки:</span> Уверенно работаю с HTML5, CSS3 (включая Flexbox/Grid) и JavaScript (ES6+). Сейчас активно углубляюсь в Tailwind и React и осваиваю работу с системами контроля версий, такими как Git.
                        </li>
                        <li>
                           <span className='grad-linii'>Опыт:</span> У меня примерно год обучения и практики, за это время я сделал множество проектов, включая адаптивные лендинги, небольшие приложения с API-интеграцией.
                        </li>
                        <li>
                           <span className='grad-linii'>Моя цель:</span> Создавать чистый, элегантный и, самое главное, удобный для пользователя код, который приносит реальную пользу. Я постоянно учусь и ищу возможности применить свои знания в реальных проектах.
                        </li>
                     </ul>
                  </div>


                  <AboutBenefits />
               </div>
            </div>
         </section>
      </>
   );
}

export default About;