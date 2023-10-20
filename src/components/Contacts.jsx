const Contacts = () => {
  const contacts = {
    title: 'Контакты аварийного комиссара в Оренбурге',
    adress: 'ул. Авторемонтная, д. 13/1, каб. 201 ',
    adressDiscription: '(2 этаж вход с левого торца)',
    phoneFirst: '+ 7 (3532) 97-90-50',
    phoneSecond: '+ 7-987-847-90-50',
    phoneThird: '+7-919-845-14-15',
    email: 'ruslan11dec@mail.ru',
    discription:
      'АВТОКОМ56 предлагает услугу выезда аварийных комиссаров на место ДТП в Оренбурге',
  };

  return (
    <div className="text-center text-black flex flex-wrap flex-col justify-center container mx-auto pt-16">
      <h2 className="pb-10 text-3xl">{contacts.title}</h2>
      <div>{contacts.adress}</div>
      <div>{contacts.adressDiscription}</div>
      <div>
        тел. <span className="font-semibold">{contacts.phoneFirst}</span>
      </div>
      <div>
        тел. <span className="font-semibold">{contacts.phoneSecond}</span>
      </div>
      <div>
        тел. <span className="font-semibold">{contacts.phoneThird}</span>
      </div>
      <div>
        E-mail: <span className="font-semibold">{contacts.email}</span>
      </div>
      <div>{contacts.discription}</div>
      <div className="mx-auto mt-10 container">
        <iframe
          src="https://yandex.ru/map-widget/v1/?um=constructor%3A98f55d1df508a4101158d634c70271dbadb21d397700b5dc1a1d7f8621d45987&amp;source=constructor"
          className="border-none h-80 w-full"></iframe>
      </div>
    </div>
  );
};

export default Contacts;
