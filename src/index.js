require('dotenv').config();
require('./database');

const express = require('express');
const router = require('./routes');

const app = express();
const SERVER_PORT = process.env.SERVER_PORT;

app.use(express.json());
app.use(router);

app.listen(SERVER_PORT, () => console.log(`Server is running! Port: ${SERVER_PORT}`));