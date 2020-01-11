const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;

const postsRoute = require('./routes/api/posts.route');

app.use(bodyParser.json());
app.use(cors());

app.use('api/posts', postsRoute);

app.listen(port,() => {
    console.log(`server listening on port ${port}`);
});