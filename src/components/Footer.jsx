import Nav from './UI/Nav';
import PropTypes from 'prop-types';

const Footer = ({ scrollToRef, myRef }) => {
  return (
    <div className="h-20 container mx-auto flex flex-wrap justify-between items-center text-white px-3">
      <div className="">АВТОКОМ56 ЛОГО</div>
      <div className="md:block hidden">
        <Nav scrollToRef={scrollToRef} myRef={myRef} />
      </div>
      <div className="text-lg font-bold">97-90-50</div>
    </div>
  );
};

Footer.propTypes = {
  scrollToRef: PropTypes.func,
  myRef: PropTypes.array,
};

export default Footer;
