import React from 'react';
import { connect } from 'react-redux';
import Icon from '../components/Icon';
import { mapCurrencyToSymbol } from '../utils.js';


let CartTotal = ({cartTotal, cartCurrency}) => {
  const currencySymbol = mapCurrencyToSymbol(cartCurrency);
  return (
    <div className="cart-total">
      <Icon variant="--small"/>
      <span className="main-header__total">{currencySymbol}{cartTotal}</span>
    </div>
  );
}

const mapStateToProps = state => ({
  cartTotal: state.cart_total,
  cartCurrency: state.cart_currency
});

CartTotal = connect(mapStateToProps)(CartTotal);

export default CartTotal;
