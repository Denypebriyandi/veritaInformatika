const express = require('express');
const bodyParser = require('body-parser');
const geo = require('./routes/r_geo');
const app = express();
app.use(bodyParser.json({limit: '250mb', extended: true}));
app.use(bodyParser.urlencoded( {limit: "250mb", extended: false, parameterLimit:50000 } ));
app.use('/verita', geo);
const port = 8000;
app.listen(port, () => console.log('run server on '+port));