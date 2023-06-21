import PropTypes from 'prop-types';

const Card = ({ item, size = '176px' }) => {
  return (
    <div className="flex flex-wrap justify-center gap-y-2 self-start">
      <img
        className=""
        style={{ width: size, height: size }}
        src={item.img}
        alt={item.title}
      />
      <p className="font-bold text-xl w-full">{item.title}</p>
    </div>
  );
};

Card.propTypes = {
  item: PropTypes.object,
  size: PropTypes.string,
};

export default Card;
