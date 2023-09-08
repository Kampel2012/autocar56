import ButtonCallCom from './UI/ButtonCallCom';
import { MCard } from './UI/Card';
import { motion } from 'framer-motion';
import { imageAnimation } from '../components/animations/animations';

const Helpfulness = () => {
  const title = 'Чем мы можем быть полезны Вам?';

  const helpfulness = [
    {
      title: 'Консультация юриста',
      img: 'https://sankt-peterburg.avariynyy-komissar.ru/templates/autokom/images/screen5_icon_1.png',
    },
    {
      title: 'Аварийный комиссар',
      img: 'https://sankt-peterburg.avariynyy-komissar.ru/templates/autokom/images/screen5_icon_2.png',
    },
    {
      title: 'Автотехническая экспертиза',
      img: 'https://sankt-peterburg.avariynyy-komissar.ru/templates/autokom/images/screen5_icon_3.png',
    },
    {
      title: 'Юридическая помощь при спорах по ДТП',
      img: 'https://sankt-peterburg.avariynyy-komissar.ru/templates/autokom/images/screen5_icon_4.png',
    },
    {
      title: 'Представление интересов в суде',
      img: 'https://sankt-peterburg.avariynyy-komissar.ru/templates/autokom/images/screen5_icon_5.png',
    },
    {
      title: 'Сбор документов в ГИБДД',
      img: 'https://sankt-peterburg.avariynyy-komissar.ru/templates/autokom/images/screen5_icon_6.png',
    },
    {
      title: 'Эвакуация автомобиля',
      img: 'https://sankt-peterburg.avariynyy-komissar.ru/templates/autokom/images/screen5_icon_7.png',
    },
    {
      title: 'Решение ваших проблем берем на себя',
      img: 'https://i.ibb.co/L6YM7b1/image8.png',
    },
  ];

  const advantagesEl = helpfulness.map((item, i) => (
    <MCard
      custom={i + 1}
      variants={imageAnimation}
      item={item}
      key={item.title}
      size="80px"
    />
  ));

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.2, once: true }}
      className="container mx-auto flex flex-wrap flex-col justify-center grow text-center py-16">
      <h2 className="text-4xl py-3">{title}</h2>
      <div className="grid md:grid-cols-4 mt-6 gap-x-2 gap-y-8">
        {advantagesEl}
      </div>
      <motion.div
        custom={9}
        variants={imageAnimation}
        className="flex flex-wrap justify-center mt-12">
        <ButtonCallCom />
      </motion.div>
    </motion.div>
  );
};

export default Helpfulness;
