import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import { forwardRef } from 'react';

export const Card = forwardRef(({ item, size = '176px' }, ref) => {
  return (
    <div ref={ref} className="flex flex-wrap justify-center gap-y-2 self-start">
      <img
        className=""
        style={{ width: size, height: size }}
        src={item.img}
        alt={item.title}
      />
      <p className="font-bold text-xl w-full">{item.title}</p>
    </div>
  );
});

Card.displayName = 'Card';

Card.propTypes = {
  item: PropTypes.object,
  size: PropTypes.string,
};

export default Card;

export const MCard = motion(Card);
