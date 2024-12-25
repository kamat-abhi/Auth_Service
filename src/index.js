const express = require('express');

const { PORT } = require('./config/serverConfig');
const app = express();

const prepareAndStartServer = () => {
    app.listen(PORT, () => {
        console.log(`server started on Port : ${PORT}`);
        console.log(process.env);
        console.log(process);
    })
}

prepareAndStartServer();