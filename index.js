const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const PORT = 3000;
const app = express();
app.use(cors());
app.use(bodyParser());



app.listen(PORT, `express is up and running on port ${port}!`);