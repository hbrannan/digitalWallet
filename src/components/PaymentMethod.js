import React from 'react';
import { connect } from 'react-redux';
import { updatePaymentInfo, deletePaymentMethod, updatePaymentChoice} from '../actions';

let PaymentMethod = ({variant, name, lastPayment, cardId, onDeleteMethod, onUpdateMethod, onSelectMethod}) => {
  let options;
  let selectMethod;
  if (variant === '--manage') {
    options = <div className="payment-method__options">
    <span className="update"
      onClick={() => {onUpdateMethod(cardId)}}
    >U</span> \
    <span className="delete"
      onClick={() => {onDeleteMethod(cardId)}}
    >D</span>
  </div>;
  }
  if (variant === '--main-wallet') {
    selectMethod = () => { onSelectMethod(cardId)};
  }

  return (
    <li
      className={`payment-method`}
      onClick={selectMethod}
    >
      <span>{name}</span>
      <span>{lastPayment}</span>
      {options}
    </li>
  );
}

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => {
  return {
    onDeleteMethod: (cardId) => {dispatch(deletePaymentMethod(cardId))},
    onUpdateMethod: (cardId) => {dispatch(updatePaymentInfo(cardId))},
    onSelectMethod: (cardId) => {dispatch(updatePaymentChoice(cardId))}
  };
};

PaymentMethod = connect(mapStateToProps, mapDispatchToProps)(PaymentMethod)

export default PaymentMethod;
