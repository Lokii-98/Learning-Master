const express = require('express');
const bodyParser = require("body-parser");
// const router = require('./routes/routing');
const myErrorLogger = require('./utilities/errorlogger')
const myRequestLogger = require('./utilities/requestlogger')
const userRouter = require('./routes/userRouter');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use(myRequestLogger);
app.use('/login',userRouter)
app.use(myErrorLogger);

app.listen(8000);
console.log("Server listening in port 8000");

module.exports = app;