import React, { Component } from 'react';
import './styles-global/app.less';
import Icon from './components/Icon';
import PaymentMethods from './components/PaymentMethods';
import UserMessage from './containers/UserMessage';
import CartTotal from './containers/CartTotal';
import WalletPanel from './containers/WalletPanel';


class App extends Component {
  render() {
    return (
      <div>
        <WalletPanel />

        <div className="container">
          <div className="container__content">
            <div className="App">

              <div className="store__header">
                <Icon variant="--small"/>
              </div>

              <div className="App-container">
                <div className="main-header">
                  <div className="main-header__left">
                    <Icon variant="--large"/>
                  </div>
                  <div className="main-header__right">
                    <CartTotal />
                  </div>
                </div>

                <UserMessage
                  inputClass="welcome-line"
                  preText="Welcome,"
                  postText="!"
                />

                <PaymentMethods variant="--main"/>
              </div>

            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
