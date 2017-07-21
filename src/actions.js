const axios = require('axios');
const apiServerPort = process.env.API_SERVER_PORT || 3000;
const serverPath = `http://localhost:${apiServerPort}`;

/* ACTIONS TOC
  Wallet
   - Open
   - Close
  Wallet Screens
   - ToMain
   - ToMainManagement
   - TODO: ToManagementForm
   - ToAddCard
  Payment Method Options
   - Add Payment
   - Delete Payment
   - Update Payment
  Helpers:
   - accountIsValid
   - sendStorageError
*/

export function fetchWelcomeInfo (userId) {
  return dispatch => {
    dispatch(requestingWelcomeInfo());

    axios.get(`${serverPath}/users/welcome/?userId=${userId}`)
      .then(response => {
        console.log('succ', response.data.welcomeData)
        const data = response.data.welcomeData;
        return {type: 'WELCOME_INFO_FETCH_SUCCESS', data}
      })
      .catch(err => {
        console.log(err);
        return {type: 'WELCOME_INFO_FETCH_FAILURE', err}
      })
  }
}

export function toggleWalletOpen () {
  return { type: 'TOGGLE_WALLET_OPEN' };
}

export function toggleWalletClosed () {
  return { type: 'TOGGLE_WALLET_CLOSED' };
}

export function changeToMainScreen () {
  return { type: 'TO_MAIN' };
}

export function changeToMainManageScreen () {
  return { type: 'TO_MAIN_MANAGE' };
}

export function changeToManageFormScreen () {
  return { type: 'TO_MAIN_MANAGE' };
}

export function changeToAddScreen () {
  return { type: 'TO_ADD' };
}

export function updatePaymentChoice (cardId) {
  return { type: 'UPDATE_PAYMENT_CHOICE', cardId};
}

export function updatePaymentInfo (cardId) {
  //TODO: API CALL
  return { type: 'UPDATE_PAYMENT_INFO', cardId};
}

export function deletePaymentMethod (cardId) {
  //TODO: API CALL
  return { type: 'DELETE_PAYMENT_METHOD', cardId};
}

export function submitForm (formData) {
  if (accountIsValid(formData)){
    //TODO: API CALL TO NODE/ EXPRESS
    return { type: 'SUBMIT_FORM', formData: formData };
  } else {
    return { type: 'ACCOUNT_VALIDATION_ERROR'}
  }
}

function requestingWelcomeInfo () {
  return { type: 'REQUESTING_WELCOME_INFO' };
};

function accountIsValid (formData) {
  //TODO: external API CALL for validation (e.g. to bank)
  return true;
}

function sendStorageError (errorMessage) {
  return { type: 'STORAGE_ERROR', errorMessage };
}


/*
ACTIONS TODO: form sending message
 form error (client side validation, e.g., CC vetting)
 form error (API account validation via bank)
 form success (API account validation via bank)
*/
