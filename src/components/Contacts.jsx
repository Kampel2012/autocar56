const Contacts = () => {
  return (
    <div className="text-center text-black flex flex-wrap flex-col justify-center container mx-auto pt-16">
      <h2 className="pb-10 text-3xl">
        Контакты аварийного комиссара в Оренбурге
      </h2>
      <div>Авторемонтная 13 а, 201 каб. (2 этаж вход с левого торца)</div>
      <div>
        + 7 (3532) 97-90-50 +7-98-78-47-90-50 E-mail: ruslan11dec@mail.ru
      </div>
      <div>
        Компания предлагает своим клиентам услугу выезда аварийных комиссаров на
        место ДТП в Оренбурге
      </div>
      <div className="mx-auto mt-10 container">
        <iframe
          src="https://yandex.ru/map-widget/v1/?um=constructor%3A98f55d1df508a4101158d634c70271dbadb21d397700b5dc1a1d7f8621d45987&amp;source=constructor"
          className="border-none h-80 w-full"
        ></iframe>
      </div>
    </div>
  );
};

export default Contacts;
