import React, { Component } from 'react';
import { connect } from 'react-redux';
import WalletContent from './WalletContent';

class WalletPanel extends Component {
  constructor(props) {
    super(props);
  }

  render () {
    if (!this.props.walletIsOpen) return null;
    else {
      return (
        <div className="wallet__background">
          <div className="wallet__container">
            <WalletContent />
          </div>
        </div>
      );
    }
  }
}

const mapStateToProps = state => ({
  walletIsOpen: state.wallet_open
});

WalletPanel = connect(mapStateToProps)(WalletPanel)

export default WalletPanel
