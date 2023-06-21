import ButtonCallCom from './UI/ButtonCallCom';
import Card from './UI/Card';

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
  ];

  const advantagesEl = helpfulness.map((item) => (
    <Card item={item} key={item.title} size="80px" />
  ));

  return (
    <div className="container mx-auto flex flex-wrap flex-col justify-center grow text-center py-16">
      <h2 className="text-4xl py-3">{title}</h2>
      <div className="grid md:grid-cols-3 mt-6 gap-x-2 gap-y-4">
        {advantagesEl}
      </div>
      <div className="flex flex-wrap justify-center mt-12">
        <ButtonCallCom />
      </div>
    </div>
  );
};

export default Helpfulness;
