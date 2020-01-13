const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const personRoute = require('./routes/persons.route');

const app = express();
const port = process.env.PORT || 3000;


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cors());

app.use('/person', personRoute);

app.listen(port,() => {
    console.log(`server listening on port ${port}`);
});