import ButtonCallCom from './UI/ButtonCallCom';
import { MCard } from './UI/Card';
import { motion } from 'framer-motion';
import {
  imageAnimation,
  textAnimation,
} from '../components/animations/animations';

const AboutUs = () => {
  const itemsForAboutUs = [
    {
      title: 'ПРИЕДЕМ быстро',
      img: 'https://sankt-peterburg.avariynyy-komissar.ru/templates/autokom/images/screen1_icon_1.png',
    },
    {
      title: 'ОФОРМИМ документы на месте ДТП',
      img: 'https://sankt-peterburg.avariynyy-komissar.ru/templates/autokom/images/screen1_icon_2.png',
    },
    {
      title: 'ПОМОЖЕМ получить страховое возмещение',
      img: 'https://sankt-peterburg.avariynyy-komissar.ru/templates/autokom/images/screen1_icon_3.png',
    },
  ];

  const title = 'СЛУЖБА АВАРИЙНЫХ КОМИССАРОВ В ОРЕНБУРГЕ';

  const items = itemsForAboutUs.map((item, i) => (
    <MCard
      custom={i + 1}
      variants={imageAnimation}
      key={item.title}
      item={item}
      size="176px"
    />
  ));

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="text-center container mx-auto flex flex-wrap flex-col justify-center grow">
      <motion.div
        variants={textAnimation}
        className="sm:text-5xl text-3xl tracking-wider py-14">
        {title}
      </motion.div>
      <div className="md:grid md:grid-cols-3 gap-y-5 mt-4 mx-auto grid">
        {items}
      </div>
      <motion.div
        custom={4}
        variants={imageAnimation}
        className="flex flex-wrap justify-center mt-16 mb-16">
        <ButtonCallCom />
      </motion.div>
    </motion.div>
  );
};

export default AboutUs;
