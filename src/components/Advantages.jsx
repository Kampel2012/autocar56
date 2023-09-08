import ButtonCallCom from './UI/ButtonCallCom';
import { MCard } from './UI/Card';
import { motion } from 'framer-motion';
import { imageAnimation } from '../components/animations/animations';

const Advantages = () => {
  const title = 'Основные достоинства аварийного комиссара';

  const advantages = [
    {
      title: 'Оформление документов на месте ДТП',
      img: 'https://sankt-peterburg.avariynyy-komissar.ru/templates/autokom/images/screen3_icon_1.png',
    },
    {
      title: 'ФОТОфиксация места ДТП',
      img: 'https://sankt-peterburg.avariynyy-komissar.ru/templates/autokom/images/screen3_icon_2.png',
    },
    {
      title: 'Проведение независимой экспертизы',
      img: 'https://sankt-peterburg.avariynyy-komissar.ru/templates/autokom/images/screen3_icon_3.png',
    },
    {
      title: 'Подготовка документов для обращения в СК',
      img: 'https://sankt-peterburg.avariynyy-komissar.ru/templates/autokom/images/screen3_icon_4.png',
    },
    {
      title: 'Эвакуация пострадавшего ТС за счет страховой компании',
      img: 'https://sankt-peterburg.avariynyy-komissar.ru/templates/autokom/images/screen3_icon_5.png',
    },
    {
      title: 'Урегулирование споров со страховой компанией',
      img: 'https://sankt-peterburg.avariynyy-komissar.ru/templates/autokom/images/screen3_icon_6.png',
    },
  ];

  const advantagesEl = advantages.map((item, i) => (
    <MCard
      custom={i + 1}
      variants={imageAnimation}
      item={item}
      key={item.title}
      size="140px"
    />
  ));

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.3, once: true }}
      className="container mx-auto flex flex-wrap flex-col justify-center grow text-center">
      <h2 className="text-4xl py-3">{title}</h2>
      <div className="grid md:grid-cols-3 mt-6 gap-x-2 gap-y-2">
        {advantagesEl}
      </div>
      <motion.div
        custom={7}
        variants={imageAnimation}
        className="flex flex-wrap justify-center my-12">
        <ButtonCallCom />
      </motion.div>
    </motion.div>
  );
};

export default Advantages;
