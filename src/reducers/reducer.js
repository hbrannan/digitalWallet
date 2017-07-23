const defaultState = {
  user_id: 1,
  user_name: 'steve',
  selected_card_id: 1,
  cart_total: 24.95,
  cart_currency: 'USD',
  last_payment: {card_name: 'Master Card', lastFour: '1234', lastPurchaseAmount: '50.00', currency:'USD'},
  payment_methods: [
    {card_name: 'Master Card', lastFour: '1234', lastPurchaseAmount: '50.00', currency:'USD'},
    {card_name: 'Visa', lastFour: '4444', lastPurchaseAmount: '150.00', currency:'USD'},
    {card_name: 'AmEx', lastFour: '9837', lastPurchaseAmount: '5.50', currency:'USD'}
  ],
  wallet_open: true,
  wallet_screen: 'add'
};

const appState = (state = defaultState, action) => {
  switch (action.type) {
    //TODO
    case 'WELCOME_INFO_FETCH_SUCCESS':
      return {
        ...state,
      }
    case 'TOGGLE_WALLET_OPEN':
      return {
        ...state,
        wallet_open: true
      }
    case 'TOGGLE_WALLET_CLOSED':
      return {
        ...state,
        wallet_open: false,
        wallet_screen: 'main'
      }
    case 'TO_MAIN':
      return {
        ...state,
        wallet_screen: 'main'
      }
    case 'TO_ADD':
      return {
        ...state,
        wallet_screen: 'add'
      }
    case 'TO_MAIN_MANAGE':
      return {
        ...state,
        wallet_screen: 'manage-main'
      }
    case 'TO_MANAGE_UPDATE_FORM':
      return {
        ...state,
        wallet_screen: 'manage-form'
      }
    case 'UPDATE_PAYMENT_CHOICE':
      return {
        ...state,
        selected_card_id: action.cardId
      }
    default:
      return state;
  }
};

export default appState;
