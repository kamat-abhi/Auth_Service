const express = require('express');
const bodyparser = require('body-parser');

const { PORT } = require('./config/serverConfig');
const Apiroutes = require('./routes/index');

const db = require('./models/index');

const app = express();

const prepareAndStartServer = () => {

    app.use(bodyparser.json());
    app.use(bodyparser.urlencoded({extended: true}));

    app.use('/api', Apiroutes);

    app.listen(PORT, () => {
        console.log(`server started on Port : ${PORT}`);
        if(process.env.DB_SYNC){
            db.sequelize.sync({alter: true})
        }
    })
}

prepareAndStartServer();