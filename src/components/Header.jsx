import PropTypes from 'prop-types';
import Nav from './UI/Nav';
import PositionedMenu from './UI/PositionedMenu';
import Logo from '../assets/logo.png';

const Header = ({ scrollToRef, myRef }) => {
  const headerPhone = '+7 (3532) 97-90-50';

  const linksHeader = [
    { name: 'Почему мы?', link: '' },
    { name: 'Наши услуги', link: '' },
    { name: 'Отзывы', link: '' },
    { name: 'Контакты', link: '' },
  ];

  return (
    <div className="text-center bg-[#5B5B5B] bg-opacity-80 h-[70px] md:h-24 fixed w-full text-white">
      <div className="container mx-auto flex flex-wrap justify-between h-full items-center px-1 md:px-4">
        <img
          className="h-[70px] md:h-24"
          src={Logo}
          onClick={() => scrollTo(top)}
        />
        <div className="text-lg font-semibold gap-x-5 flex-wrap hidden md:flex">
          <Nav links={linksHeader} scrollToRef={scrollToRef} myRef={myRef} />
        </div>
        <p className="self-center text-lg font-semibold">{headerPhone}</p>
        <div className="md:hidden">
          <PositionedMenu
            linksHeader={linksHeader}
            scrollToRef={scrollToRef}
            myRef={myRef}
          />
        </div>
      </div>
    </div>
  );
};

Header.propTypes = {
  scrollToRef: PropTypes.func,
  myRef: PropTypes.array,
};

export default Header;
