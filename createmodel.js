const dotenv = require('dotenv').config();
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

//console.log(DataTypes)

const sequelize = new Sequelize('testdb2','alien',process.env.password,{
    host: 'localhost',
    dialect: 'mysql'
});

const Student = sequelize.define('student', {
    name: {
        type: DataTypes.STRING(30),
        allowNull: false
    },
    age: {
        type:DataTypes.INTEGER(2),
        allowNull: false,
        defaultValue: -1
    },
    place: {
        type: DataTypes.STRING(20)
    }
});

sequelize.sync({alter: true})
.then(() => console.log('Database Synchronized'))
.catch(console.error)