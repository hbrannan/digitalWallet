import React from 'react';
import { connect } from 'react-redux';
import { toggleWalletOpen } from '../actions';

let ChangeCardButton = ({dispatch, onChangeCard}) => {
  return (
    <div
    onClick={() => {dispatch(toggleWalletOpen())}}>Change ▶ </div>
  );
}

ChangeCardButton = connect()(ChangeCardButton);

export default ChangeCardButton;
