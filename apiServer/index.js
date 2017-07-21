const port = process.env.PORT || 3000;
const express = require('express');
const app = express();

require('./middleware')(app, express);
require('./routes')(app, express);

//L I S T E N

app.listen(port, () => {
  console.log('app listening at ', port);
})

