import React, { Component } from 'react';
import { connect } from 'react-redux';
import PaymentMethod from '../components/PaymentMethod';

class PaymentMethodsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      variant: this.props.variant
    }
  }

  componentDidMount() {
    if (!this.props.variant) this.setState({variant: ''});
  }

  render() {
    return (
      <ul className={`payment-methods__list${this.state.variant}`}>
        {
          this.props.paymentMethods.map((method, idx) => {
            let symbol = PaymentMethodsList.currencyToSymbol(method.currency)
              if (this.state.variant === '--main') {
                if (idx === this.props.selectedPaymentMethodId){
                  return <PaymentMethod
                    key={idx}
                    cardId={idx}
                    name={`${method.card_name} ${method.lastFour}`}
                    lastPayment={`${symbol}${method.lastPurchaseAmount}`}
                    variant={this.props.variant}
                  />
                }
              } else {
                return <PaymentMethod
                  key={idx}
                  cardId={idx}
                  name={`${method.card_name} ${method.lastFour}`}
                  lastPayment={`${symbol}${method.lastPurchaseAmount}`}
                  variant={this.props.variant}
                />
              }
          })
        }
      </ul>
    );
  }

  static currencyToSymbol (currency) {
    const mapping = {
      'USD': '$'
    };

    return mapping[currency];
  }
}

const mapStateToProps = state => ({
  paymentMethods: state.payment_methods,
  selectedPaymentMethodId: state.selected_card_id
});

const mapDispatchToProps = dispatch => {
  return {};
}

PaymentMethodsList = connect(mapStateToProps, mapDispatchToProps)(PaymentMethodsList);

export default PaymentMethodsList;
