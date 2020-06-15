const dotenv = require('dotenv').config();
const Sequelize = require('sequelize');

const sequelize = new Sequelize('testdb2','alien',process.env.password,{
    host: 'localhost',
    dialect: 'mysql'
});

sequelize.authenticate()
.then(() => console.log("Connection Created"))
.catch(err => console.log(err));