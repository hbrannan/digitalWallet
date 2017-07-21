import React, { Component } from 'react';
import PaymentMethodsList from '../containers/PaymentMethodsList';
import { connect } from 'react-redux';
import { changeToAddScreen, changeToMainManageScreen, toggleWalletClosed, changeToMainScreen } from '../actions';

class WalletContent extends Component {
  constructor(props) {
    super(props);
  }
  render () {
    const {walletScreen} = this.props;
    if (walletScreen ===  'main') {
      return (
        <div>
          <div className="wallet__header">
            <span className="wallet__title">Wallet</span>
            <span onClick={this.props.closeWallet}> X </span>
          </div>
          <div className="wallet__options-bar">
            <span className="blue-link"
              onClick={this.props.onAddClick}
            >+ &nbsp; Add</span>
            <span className="blue-link"
              onClick={this.props.onManageClick}
            > Manage &nbsp; ▶</span>
          </div>
          <PaymentMethodsList variant="--main-wallet"/>
        </div>
      );
    } else if (walletScreen === 'add') {
      return (
        <div className="wallet__header">
          <span onClick={this.props.onBackToMainClick}> ◀ </span>
          <span className="wallet__title">Add Debit or Credit Card</span>
        </div>
      );
    } else if (walletScreen === 'manage-main') {
      return (
        <div>
          <div className="wallet__header">
            <span onClick={this.props.onBackToMainClick}> ◀ </span>
            <span className="wallet__title">Choose Card to Update</span>
          </div>
          <PaymentMethodsList variant="--manage"/>
        </div>
      );
    } else if (walletScreen === 'manage-form') {
      return null;
    }
  }
}

const mapStateToProps = state => ({
   walletScreen: state.wallet_screen
});

const mapDispatchToProps = dispatch => {
  return {
    onAddClick: () => {dispatch(changeToAddScreen())},
    onManageClick: () => {dispatch(changeToMainManageScreen())},
    onBackToMainClick: () => {dispatch(changeToMainScreen())},
    closeWallet: () => {dispatch(toggleWalletClosed())}
  };
}

WalletContent = connect(mapStateToProps, mapDispatchToProps)(WalletContent)

export default WalletContent;
