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

export function changeToAddScreen () {
  return { type: 'TO_ADD' };
}

export function updatePaymentChoice (cardId) {
  console.log('update Payment', cardId)
  return { type: 'UPDATE_PAYMENT_CHOICE', cardId};
}

export function updatePaymentInfo (cardId) {
  console.log('update info', cardId)
  return { type: 'UPDATE_PAYMENT_INFO', cardId};
}

export function deletePaymentMethod (cardId) {
  console.log('delete info', cardId)
  return { type: 'DELETE_PAYMENT_METHOD', cardId};
}

export function submitForm (formData) {
  console.log('form submit')
  return { type: 'SUBMIT_FORM', formData: formData };
}

/*
ACTIONS TODO: form sending message
 form error (client side validation, e.g., CC vetting)
 form error (API account validation via bank)
 form success (API account validation via bank)
*/
