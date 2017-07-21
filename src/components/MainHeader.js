import React from 'react';
import Icon from './Icon';
import CartTotal from './CartTotal';

const MainHeader = () => {
  return (
    <div className="main-header">
      <div className="main-header__left">
        <Icon variant="--large"/>
      </div>
      <div className="main-header__right">
        <CartTotal />
      </div>
    </div>
  );
};

export default MainHeader;
