import React, {Component} from 'react';
import { connect } from 'react-redux';
import { submitForm } from '../actions';

/*
  Card Form
*/

class CardForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      cardType: 'MC',
      expiration: '',
      csc: '',
    }
  }

  componentWillMount() {
    //TODO: consider starting timer and clearing form after
    // period of inactivity.
  }

  //Prevent Default page reload. Dispatch formSubmit action with form data.
  handleSubmit (e) {
    e.preventDefault();
    //TODO: validate entries/ selections
    this.props.onFormSubmit({
      name: `${this.state.firstName} ${this.state.lastName}`,
      cardType: this.state.cardType,
      expiration: this.state.expiration,
      csc: this.state.csc,
    });
  }

  render () {
    return (
      <div>

        <form onSubmit={this.handleSubmit.bind(this)}>

          <div className="form__inline-group">
            <input placeholder="firstName" value={this.state.firstName}/>
            <input placeholder="lastName" value={this.state.lastName}/>
          </div>

          <select>
            <option>MC</option>
            <option>VISA</option>
            <option>DISCOVER</option>
            <option>AMEX</option>
          </select>

          <input placeholder="Card Number, e.g., 111 1111 111 111" />

          <div className="form__inline-group">
            <div className="form__vertical-group">
              <label htmlFor="expiration">Expires</label>
              <input id="expiration" placeholder="11/29" value={this.state.expiration}/>
            </div>
            <div className="form__vertical-group">
              <label htmlFor="csc">CSC</label>
              <input id="csc" placeholder="343" value={this.state.csc}/>
            </div>
          </div>

          <button type="submit">{this.props.buttonText}</button>
        </form>

        <div className="form__response-container"></div>

      </div>
    );
  }

  static validateCardByType () {
    //TODO
    //Change validate expectations for CSC, card number by card type
  }
}

const mapStateToProps = state => ({
  state
});

const mapDispatchToProps = dispatch => {
  return {
    onFormSubmit: (formData) => {dispatch(submitForm(formData))}
  };
}

CardForm = connect(mapStateToProps, mapDispatchToProps)(CardForm);

export default CardForm;

/*
FORM TODOS:
  form validation (client & API side)
   -- by card type
   -- consider: loose matching name to name?
  displaying sent/ waiting & response messages
  visual cues for form errors
*/
