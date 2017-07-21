# About
 This project contains
  - framing of a Back-end API server built with Node.js
    with Create, Read, Update, and Delete options for interacting with a users' Payment Methods
  - framing of a SQL databse
    with Users, Cards, and Purchases
  - A React/Redux front end with
    - A Welcome Screen
      - displays initial data
      - an option to change payment method,
    - A Wallet Panel (4 Screens)
      - Main
      - Add
      - Main Management
      - Management Form
    Note: UI modules are split into components (rely on props and component state) and containers (connected to redux state).

  At this point, the App successfully moves between screens and modifies local state. All screens have basic styles. Mobile is supported via media queries, responsive styles, cursor setting. The integration between front and back end is not yet completed. See more details in TODOs.

# Project Structure
 - database
   - index.js (Schemas, Relationship Definitions, & Sequelize Connection)
 - apiServer
   - index.js (connection)
   - middelware.js
   - routes.js (sends endpoint hits to controller handling)
   - controller.js (TODO: handles interfacing with DB, sends responses)

#TODOS
 - Create src/ManagementForm.js
 - In src/WalletContent, utilize ManagementForm
 - In src/CardForm.js need:
   - form validation, both client side & server side
   - inform user of errors and server reponses
 - In src/actions.js need:
   - API Calls to API server in update/ delete/ add payment method functions
   - support ea. of these API calls with actions:
     - PAYMENT_METHOD_MOD_IN_PROGRESS
     - PAYMENT_METHOD_MOD_SUCCESS
     - PAYMENT_METHOD_MOD_FAILURE
  - External API call (e.g. to banks) to validate accounts.
  - support this call with actions:
     - ACCOUNT_VALIDATION_IN_PROGRESS
     - ACCOUNT_VALIDATION_SUCCESS
     - ACCOUNT_VALIDATION_FAILURE
 - In src/reducer.js need:
  - cases to handle above actions.

 - In apiServer/controllers need:
  - to fill out ea. fn to fulfill I/O described in comments.

# Setup:
`yarn install`
`yarn start` runs front end on port 8080
`yarn start--server` runs back end on port 3000


# FOR DEVELOPMENT/ DUMMY DATA DB INITIALIZATION -- CLI -- (EARLY STAGE)
insert into users values (1, 'steve', 'arch', 1, 1, 1);
insert into users values (2, 'angie', 'bleck', 1, 1, 1);

insert into cards values (1, 'amex', '1234', '111 111 111 111', '66', '341', 1, 1, '66', '66', 1)
insert into cards values (2, 'visa', '1234', '111 111 111 111', '66', '341', 1, 1, '66', '66', 1)
insert into cards values (3, 'mc', '1234', '111 111 111 111', '66', '341', 1, 1, '66', '66', 1)
