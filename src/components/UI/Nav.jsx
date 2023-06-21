import PropTypes from 'prop-types';

const Nav = ({ scrollToRef, myRef }) => {
  const linksHeader = [
    { name: 'Почему мы?', link: '' },
    { name: 'Наши услуги', link: '' },
    { name: 'Отзывы', link: '' },
    { name: 'Контакты', link: '' },
  ];

  const btns = linksHeader.map((item, i) => (
    <button
      onClick={() => scrollToRef(myRef[i])}
      key={item.name}
      type="button"
      className="hover:opacity-70"
    >
      {item.name}
    </button>
  ));

  return (
    <nav className="text-lg font-semibold flex gap-x-5 flex-wrap self-center">
      {btns}
    </nav>
  );
};

Nav.propTypes = {
  linksHeader: PropTypes.array,
  scrollToRef: PropTypes.func,
  myRef: PropTypes.array,
};

export default Nav;
