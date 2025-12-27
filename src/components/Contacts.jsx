import { Mail, MapPin, Phone, Send } from "lucide-react";
import Socials from './Socials';
import { set, useForm } from "react-hook-form";
import axios from 'axios';
import { useState } from "react";

const Contacts = () => {
   const [loading, setLoading] = useState(false);
   const [serverMessage, setServerMessage] = useState('');
   const API_URL = 'https://react-portfolio-backend-s51e.onrender.com/';

   const {
      register,
      handleSubmit,
      reset,
      formState: { errors },
   } = useForm({ mode: 'onSubmit' });

   const onSubmit = async (data) => {
      setLoading(true);
      try {
         const response = await axios.post(API_URL, data);
         console.log(response.data.message);
         setServerMessage(response.data.message);
         document.body.classList.add('overflow-hidden');
      } catch (error) {
         console.error('Error:', error);
         console.log(error.response?.data?.message || 'Ошибка отправки');
      } finally {
         setLoading(false);
         document.body.classList.remove('overflow-hidden');
         reset();
      }
   }


   return (
      <section className="mt-70 mb-50" id="contacts">
         <div className="container mx-auto">
            <div>
               <h1 className="md:text-7xl text-center text-3xl lg:text-8xl font-bold text-white relative z-20 mb-2 dark:text-black">Мои <span className="gradient-text">контакты</span></h1>
               <p className="text-white/70 text-center w-200 mx-auto dark:text-black">У вас есть на примете проект или вы хотите сотрудничать? Не стесняйтесь обращаться ко мне. Я всегда открыт для обсуждения новых возможностей.</p>

               <div className="flex justify-center gap-80 mt-30">
                  <div className="grid gap-3">
                     <h4 className="text-3xl font-medium dark:text-black">Контактная информация</h4>
                     <div className="flex gap-3 items-center">
                        <Mail className="bg-white/10 px-3.5 w-13 h-13 rounded-[100%] dark:bg-black/10 dark:text-black" />
                        <div className="">
                           <h4 className="font-light text-xl dark:text-black">Почта</h4>
                           <a href="mailto:babayananuta11@gmail.com" className="text-white/70 duration-400 ease hover:text-emerald-400 text-[16px] dark:text-black/70 font-light">react@gmail.com</a>
                        </div>
                     </div>
                     <div className="flex gap-3 items-center">
                        <Phone className="bg-white/10 px-3.5 w-13 h-13 rounded-[100%] dark:bg-black/10 dark:text-black" />
                        <div className="flex flex-col justify-between">
                           <h4 className="font-light text-xl dark:text-black">Телефон</h4>
                           <a href="tel:+79610599262" className="text-white/70 duration-400 ease hover:text-emerald-400 text-[16px] dark:text-black/70 font-light">+7 (961) 059 92-62</a>
                        </div>
                     </div>
                     <div className="flex gap-3 items-center">
                        <MapPin className="bg-white/10 px-3.5 w-13 h-13 rounded-[100%] dark:bg-black/10 dark:text-black" />
                        <div className="flex flex-col justify-between">
                           <h4 className="font-light text-xl dark:text-black">Местоположение</h4>
                           <a href="mailto:babayananuta11@gmail.com" className="text-white/70 duration-400 ease hover:text-emerald-400 text-[16px] dark:text-black/70 font-light">Улица пушкина бла бл ....</a>
                        </div>
                     </div>


                     <div className="text-center mt-10">
                        <h4 className="mb-2 dark:text-black font-light">Свяжитесь со мной</h4>
                        <div>
                           <Socials />
                        </div>
                     </div>
                  </div>


                  <div className="bg-white/5 py-7 pt-5 px-7 w-130 rounded-4xl text-center dark:bg-black/5">
                     <form action="" onSubmit={handleSubmit(onSubmit)}>
                        <h3 className="text-3xl font-medium mb-7 dark:text-black">Отправьте сообщение</h3>

                        <p className="font-light text-xl text-white/70 dark:text-black/70">Ваше имя</p>
                        <input placeholder="Владислав" type="text" className="placeholder:text-[14px] w-full border-white/30 border outline-none px-5 py-2 rounded-xl dark:border-black/30 dark:text-black focus:border-white/70 duration-200 ease dark:focus:border-black/70" {...register("name",
                           {
                              required: 'Имя обязательно!',
                              minLength: {
                                 value: 2,
                                 message: 'Мин. кол-во символов - 2',
                              },
                              maxLength: {
                                 value: 20,
                                 message: 'Макс. кол-во символов - 20',
                              }
                           }
                        )} />
                        {errors.name && <p className="text-sky-400">{errors.name.message}</p>}

                        <p className="font-light text-xl text-white/70 dark:text-black/70 mt-5">Ваш телефон</p>
                        <input placeholder="+7 (999) 888 77-66" type="tel" className="placeholder:text-[14px] w-full border-white/30 border outline-none px-5 py-2 rounded-xl number-input dark:border-black/30 dark:text-black focus:border-white/70 duration-200 ease dark:focus:border-black/70"
                           {...register("phone",
                              {
                                 required: 'Телефон обязателен!',
                                 pattern: {
                                    value: /^(\+7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/,
                                    message: 'Недопустимые символы',
                                 }
                              }
                           )}
                        />
                        {errors.phone && <p className="text-sky-400">{errors.phone.message}</p>}
                        <p className="font-light text-xl text-white/70 dark:text-black/70 mt-5">Сообщение</p>
                        <textarea placeholder="Хочу сайт" className="placeholder:text[14px] w-full h-30 border-white/30 border outline-none px-5 py-2 rounded-xl resize-none dark:border-black/30 dark:text-black focus:border-white/70 duration-200 ease dark:focus:border-black/70"
                           {...register("description",
                              {
                                 required: 'Сообщение обязательно!',
                                 maxLength: {
                                    value: 200,
                                    message: 'Э куда столько'
                                 }
                              }
                           )}
                        />
                        {errors.description && <p className="text-sky-400">{errors.description.message}</p>}
                        <button className={`group mx-auto flex gap-3 items-center mt-10 cursor-pointer px-10 py-4 border rounded-4xl bg-white text-black/70 text-xl relative overflow-hidden button hover:scale-102 hover:bg-transparent welcome-button dark:text-white`}
                        >
                           <div className="w-full inset-0 absolute bg-white/30 rounded-4xl opacity-70 blur-3xl -z-10" />
                           Отправить
                           <Send className="group-hover:rotate-45 duration-500 ease-in-out" />
                        </button>


                        <div className={`loader-overlay fixed inset-0 w-full h-full flex flex-col gap-3 items-center justify-center bg-black/30 backdrop-blur-md z-9999 ${loading ? 'active' : ''}`}>
                           <h1 className="text-2xl">Пожалуйста, подождите...</h1>
                           <div className="loader"></div>
                        </div>

                        {serverMessage && <p className="mt-4 py-3 px-4 max-w-70 mx-auto rounded-xl text-green-900 bg-green-300">{serverMessage}</p>}
                     </form>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
}

export default Contacts;