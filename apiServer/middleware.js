// const path = require('path');
const bodyParser = require('body-parser');
const allowCrossDomain = (req, res, next) => {
  res.header('access-control-allow-origin', '*');
  res.header('access-control-allow-method', '*');
  res.header('access-control-allow-headers', 'Content-Type');
  res.header('Content-Type','application/json');
  if (req.method == 'OPTIONS') {
    res.status(200).send(200)
  } else {
    next();
  }
};

module.exports = function (app, express) {
  app.use(allowCrossDomain);
  app.use(bodyParser.json());
}
