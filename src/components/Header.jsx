import PropTypes from 'prop-types';
import Nav from './UI/Nav';
import PositionedMenu from './UI/PositionedMenu';

const Header = ({ scrollToRef, myRef }) => {
  const headerTitle = 'АВТОКОМ56 ЛОГО';
  const headerPhone = '97-90-50';

  const linksHeader = [
    { name: 'Почему мы?', link: '' },
    { name: 'Наши услуги', link: '' },
    { name: 'Отзывы', link: '' },
    { name: 'Контакты', link: '' },
  ];

  return (
    <div className="text-center bg-black bg-opacity-30 h-24 fixed w-full text-white">
      <div className="container mx-auto flex flex-wrap justify-between h-full items-center px-4">
        <h1 className="mr-1">{headerTitle}</h1>
        <div className="text-lg font-semibold gap-x-5 flex-wrap hidden md:flex">
          <Nav links={linksHeader} scrollToRef={scrollToRef} myRef={myRef} />
        </div>
        <p className="self-center text-lg">{headerPhone}</p>
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
