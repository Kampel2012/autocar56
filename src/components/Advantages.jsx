import ButtonCallCom from './UI/ButtonCallCom';
import Card from './UI/Card';

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

  const advantagesEl = advantages.map((item) => (
    <Card item={item} key={item.title} size="140px" />
  ));

  return (
    <div className="container mx-auto flex flex-wrap flex-col justify-center grow text-center">
      <h2 className="text-4xl py-3">{title}</h2>
      <div className="grid md:grid-cols-3 mt-6 gap-x-2 gap-y-2">
        {advantagesEl}
      </div>
      <div className="flex flex-wrap justify-center my-12">
        <ButtonCallCom />
      </div>
    </div>
  );
};

export default Advantages;
