import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
  Parallax,
} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/bundle';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import ButtonCallCom from './UI/ButtonCallCom';

const Comments = () => {
  const titleComments = 'Отзывы клиентов об аварийных комиссарах в Оренбурге';

  const comments = [
    {
      text: 'Въехала в маршрутку, водитель которой повел себя неадекватно и требовал с меня 20 тысяч рублей. Я позвонила мужу, он сказал закрыться в машине и ждать аварийного комиссара. Комиссар приехал быстро и объяснил, что сделает все документы, и водитель маршрутки получит страховку. Не знаю, что бы я делала с этим мужланом, если бы не вы.',
      name: 'Владислава Герасимова',
    },
    {
      text: 'В офисе аварийных комиссаров заполнили все документы для страховой компании. Мне осталось только их отвести в страховую компанию и съездить на экспертизу. Очень удобно, что ваша служба аварийных комиссаров работает по всей России. Сохранил ваш телефон, так как дальнобойщик и не знаешь, где понадобится ваша помощь. Аварийный комиссар оформил документы по европротоколу, не пришлось ехать в ГИБДД и сидеть там часами в ожидании. Спасибо за ваш труд.',
      name: 'Лаврентий Карпов',
    },
    {
      text: 'На парковке детского сада поцарапала машину, не знала, что делать, позвонила мужу, он вызвал аварийных комиссаров. Приехал молодой парень, объяснил, что когда повреждения маленькие, аварию оформляют без ГИБДД по протоколу страховой компании. На следующий день забрала протокол в офисе аварийных комиссаров и увезла в свою страховую.',
      name: 'Анна Булкина',
    },
    {
      text: 'В городе Оренбурге был в командировке на два дня, а руководство задач нарезало за неделю, не успеть. Как на зло, на парковке девушка, задавая назад, въехала в мой служебный автомобиль. Первые мысли, что все встречи и переговоры накрылись медным тазом. Но виновница предложила оформиться через аварийных комиссаров. Комиссар приехал быстро, фотографировал все, записал повреждения и отпустил меня. На следующий день приехал в офис аварийных комиссаров и забрал документы. Спасибо, вы сэкономили мое время, что позволило мне решить все дела, запланированные на командировку.',
      name: 'Макс Константинов',
    },
    {
      text: 'Всем рекомендую вызывать на место ДТП не ГАИ, а аварийных комиссаров. Во-первых, приехали быстро. Во-вторых, оплату за услуги комиссаров страховая мне вернула. В-третьих, бесплатно сделали расчет суммы выплаты страховки.',
      name: 'Олег Лыткин',
    },
  ];

  const commentsElems = comments.map((item) => (
    <SwiperSlide
      key={item.name}
      className="flex flex-wrap flex-col justify-center">
      <div className="text-left mx-12 flex flex-wrap flex-col justify-between">
        <div>{item.text}</div>
        <div className="text-right mt-4 font-semibold">{item.name}</div>
      </div>
    </SwiperSlide>
  ));

  return (
    <div className="container mx-auto min-h-screen text-black flex flex-wrap justify-center">
      <h2 className="text-4xl py-3 self-end text-center">{titleComments}</h2>
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay, Parallax]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        speed={1000}
        autoplay
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={() => () => {}}
        onSlideChange={() => {}}
        className="md:h-96 h-min py-10">
        {commentsElems}
      </Swiper>
      <div className="text-white self-start py-10">
        <ButtonCallCom />
      </div>
    </div>
  );
};

export default Comments;
