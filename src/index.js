const express = require('express');
const app = express();

const prepareAndStartServer = () => {
    app.listen(3001, () => {
        console.log('server stsarted at port 3001');
    })
}

prepareAndStartServer();