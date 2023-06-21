import Card from './UI/Card';
import ButtonCallCom from './UI/ButtonCallCom';

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

  const todosEl = todos.map((item) => (
    <Card item={item} key={item.title} size="140px" />
  ));

  return (
    <div className="container mx-auto flex flex-wrap flex-col justify-center grow text-center">
      <h2 className="text-4xl py-10 text-black">{title}</h2>
      <div className="grid md:grid-cols-4 text-black mt-10">{todosEl}</div>
      <div className="flex flex-wrap justify-center my-16">
        <ButtonCallCom />
      </div>
    </div>
  );
};

export default DtpTodos;
