import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PropTypes from 'prop-types';

const PositionedMenu = ({ scrollToRef, myRef }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleClickMenuItem = (i) => {
    scrollToRef(myRef[i]);
    setAnchorEl(null);
  };
  const linksHeader = [
    { name: 'Почему мы?', link: '' },
    { name: 'Наши услуги', link: '' },
    { name: 'Отзывы', link: '' },
    { name: 'Контакты', link: '' },
  ];

  const elements = linksHeader.map((item, i) => {
    return (
      <MenuItem key={item.name} onClick={() => handleClickMenuItem(i)}>
        {item.name}
      </MenuItem>
    );
  });

  return (
    <div>
      <Button
        id="demo-positioned-button"
        aria-controls={open ? 'demo-positioned-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <img
          src="https://cdn-icons-png.flaticon.com/512/10312/10312984.png"
          className="h-10 opacity-90"
          alt="Меню"
        />
      </Button>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        elevation={0}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        {elements}
      </Menu>
    </div>
  );
};

PositionedMenu.propTypes = {
  items: PropTypes.array,
  scrollToRef: PropTypes.func,
  myRef: PropTypes.array,
};

export default PositionedMenu;
