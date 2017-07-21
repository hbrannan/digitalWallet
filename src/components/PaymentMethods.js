import React from 'react';
import PaymentMethodsList from '../containers/PaymentMethodsList';
import ChangeCardButton from '../containers/ChangeCardButton';

const PaymentMethods = ({variant}) => {
  return (
    <div className="payment-methods__container">
        <div className="payment-methods__header">
          <div>Pay With</div>
          <ChangeCardButton />
        </div>

      <PaymentMethodsList variant={variant}/>

    </div>
  );
}

export default PaymentMethods;
