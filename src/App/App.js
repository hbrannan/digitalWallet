import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchWelcomeInfo } from '../actions';
import '../styles-global/app.less';
import WalletPanel from '../Wallet/WalletPanel';
import StoreHeader from '../components/StoreHeader';
import MainHeader from '../components/MainHeader';
import UserMessage from '../containers/UserMessage';
import PaymentMethodsContainer from '../components/PaymentMethodsContainer';


class App extends Component {
  componentDidMount() {
    this.props.loadWelcomeInfo(this.props.userId);
  }
  render() {
    return (
      <div>
        <WalletPanel />

        <div className="container">
          <div className="container__content">
            <div className="App">
              <StoreHeader />
              <div className="App-container">
                <MainHeader />
                <UserMessage
                  inputClass="welcome-line"
                  preText="Welcome, "
                  postText="!"
                />
                <PaymentMethodsContainer variant="--main"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

const mapStateToProps = state => ({
  userId: state.user_id
});

const mapDispatchToProps = dispatch => {
  return {
    loadWelcomeInfo : (userId) => {dispatch(fetchWelcomeInfo(userId))}
  };
};

App = connect(mapStateToProps, mapDispatchToProps)(App);

export default App;
