import React from 'react';
import { connect } from 'react-redux';
import { toggleWalletOpen } from '../actions';

let ChangeCardButton = ({dispatch, onChangeCard}) => {
  console.log(dispatch, 'dispatch')
  return (
    <div
    onClick={() => {dispatch(toggleWalletOpen())}}>Change ▶ </div>
  );
}

ChangeCardButton = connect()(ChangeCardButton);

export default ChangeCardButton;
