import React from 'react';
import { connect } from 'react-redux';
import Icon from '../components/Icon';

let CartTotal = ({cartTotal, currencySymbol}) => {
  return (
    <div className="cart-total">
      <Icon variant="--small"/>
      <span className="main-header__total">{currencySymbol}{cartTotal}</span>
    </div>
  );
}

const mapStateToProps = state => ({
  cartTotal: state.last_payment,
  currencySymbol: state.currency_symbol
})

CartTotal = connect(mapStateToProps)(CartTotal);

export default CartTotal;
