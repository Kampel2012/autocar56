import { motion } from 'framer-motion';
import { textAnimation } from '../components/animations/animations';

const OurServices = () => {
  const title = 'Какие услуги оказывает аварийный комиссар';

  const services = [
    'Консультационная и правовая помощь участникам ДТП',
    'Психологическая помощь участникам дорожно-транспортного происшествия',
    'До прибытия экипажа ГИБДД организация "кармана безопасности" на месте столкновения, выставление светоотражаемых конусов, знаков аварийной остановки, организация движения в случае сложной дорожной ситуации',
    'В сложных авариях вызов бригады скорой помощи, эвакуация пассажиров',
    'Осуществление ФОТО и ВИДЕО- фиксации события с привязкой к местности',
    'Панорамная, узловая, детальная сьемка повреждений',
    'Составление схемы дорожно-транспортного происшествия',
    'Составление акта осмотра ТС с указанием повреждений, полученных в результате аварии',
    'Заполнение извещения о ДТП',
    'Оформление ДТП по Европротоколу (При соблюдении норм законодательства)',
    'Обеспечение корректности в документах, оформляемых представителями компетентных органов',
  ];

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.2, once: true }}
      className="text-black container mx-auto flex flex-wrap flex-col justify-center grow text-center py-10">
      <h1 className="mb-10 text-3xl">{title}</h1>
      <ul className="text-left">
        {services.map((item, i) => (
          <motion.li
            custom={i + 1}
            variants={textAnimation}
            className="text-xl border-b m-3 font-medium px-2 pb-2"
            key={item}>
            {item}
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
};

export default OurServices;
