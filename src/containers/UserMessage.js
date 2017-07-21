import React from 'react';
import { connect } from 'react-redux';
import './styles/userMessage.less'

let UserMessage = ({userName, variant, preText, postText}) => {
  return (
    <p className={variant}>
     <span>{preText} </span>
     <span className="user-message__name">{userName}</span>
     <span>{postText}</span>
    </p>
  );
}

const mapStateToProps = state => ({
  userName: state.user_name
})

UserMessage = connect(mapStateToProps)(UserMessage);

export default UserMessage;

