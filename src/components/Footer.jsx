import Nav from './UI/Nav';
import PropTypes from 'prop-types';
/* import Logo from '../assets/logo.png'; */

const Footer = ({ scrollToRef, myRef }) => {
  const year = new Date().getFullYear();

  return (
    <div className="h-20 container mx-auto flex flex-wrap justify-between items-center text-white px-3">
      <p className="text-lg">© {year}</p>
      <div className="md:block hidden">
        <Nav scrollToRef={scrollToRef} myRef={myRef} />
      </div>
      <div className="text-lg font-bold">+7(3532) 97-90-50</div>

      {/*       <a
        href="https://metrika.yandex.ru/stat/?id=94864708&amp;from=informer"
        target="_blank"
        rel="nofollow noreferrer">
        <img
          src="https://informer.yandex.ru/informer/94864708/1_0_FFFFFFFF_FFFFFFFF_0_visits"
          className="w-20 h-4 border-none"
          alt="Яндекс.Метрика"
          title="Яндекс.Метрика: данные за сегодня (визиты)"
        />
      </a> */}
    </div>
  );
};

Footer.propTypes = {
  scrollToRef: PropTypes.func,
  myRef: PropTypes.array,
};

export default Footer;
