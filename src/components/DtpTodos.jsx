import { MCard } from './UI/Card';
import ButtonCallCom from './UI/ButtonCallCom';
import { motion } from 'framer-motion';
import {
  imageAnimation,
  textAnimation,
} from '../components/animations/animations';

const DtpTodos = () => {
  const title = 'Попали в ДТП в Оренбурге ? Что делать?';

  const todos = [
    {
      title: 'Сохраняйте спокойствие',
      img: 'https://sankt-peterburg.avariynyy-komissar.ru/templates/autokom/images/screen2_icon_1.png',
    },
    {
      title: 'Включите аварийную сигнализацию',
      img: 'https://sankt-peterburg.avariynyy-komissar.ru/templates/autokom/images/screen2_icon_2.png',
    },
    {
      title: 'Позвоните аварийному комиссару',
      img: 'https://sankt-peterburg.avariynyy-komissar.ru/templates/autokom/images/screen2_icon_3.png',
    },
    {
      title: 'Установите знак аварийной остановки',
      img: 'https://sankt-peterburg.avariynyy-komissar.ru/templates/autokom/images/screen2_icon_4.png',
    },
  ];

  const todosEl = todos.map((item, i) => (
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
      <motion.h2 variants={textAnimation} className="text-4xl py-10 text-black">
        {title}
      </motion.h2>
      <div className="grid md:grid-cols-4 text-black mt-10">{todosEl}</div>
      <motion.div
        variants={imageAnimation}
        custom={5}
        className="flex flex-wrap justify-center my-16">
        <ButtonCallCom />
      </motion.div>
    </motion.div>
  );
};

export default DtpTodos;
