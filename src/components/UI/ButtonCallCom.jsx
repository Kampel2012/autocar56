import PropTypes from 'prop-types';

const ButtonCallCom = ({ text = 'ВЫЗВАТЬ КОМИССАРА' }) => {
  const phoneNumber = '97-90-50';

  const handleCallButtonClick = () => {
    window.open(`tel:${phoneNumber}`);
  };

  const urlPhone =
    'https://sankt-peterburg.avariynyy-komissar.ru/templates/autokom/images/icon_tel.png';
  return (
    <button
      onClick={handleCallButtonClick}
      className="flex flex-wrap gap-x-3 px-3 py-2 rounded-md bg-red-600 border-2 hover:opacity-80">
      <img src={urlPhone} alt="значок телефона" />
      <p className="self-center text-xl font-semibold">{text}</p>
    </button>
  );
};

ButtonCallCom.propTypes = {
  text: PropTypes.string,
};

export default ButtonCallCom;
