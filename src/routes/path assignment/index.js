const express = require('express');
var bodyParser = require('body-parser');

const route1 = require('./routes/route1.js');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', route1);

app.listen(process.env.PORT || 4000, function() {
    console.log('Express app running on port ' + (process.env.PORT || 4000))
});