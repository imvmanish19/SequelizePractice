const {sequelize,Student} = require('./createmodel');

const task = async () => {
    try {
        await sequelize.sync();

        await Student.create({
            name: ['Tom','Banton','Leope','Ikya','Krishna'][parseInt(Math.random()*5)],
            age: [19,20,21,22,23][parseInt(Math.random()*5)],
            place: 'Bangalore'
        });
    }
    catch(e) {
        console.log('error');
    }
}

task();