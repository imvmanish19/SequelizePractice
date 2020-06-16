const {sequelize,Student} = require('./createmodel');

const task = async () => {
    try {
        await sequelize.sync();

        const students = await Student.findAll({
            order: [
                ['name','DESC'],
                ['age','DESC']
            ]
        });

        //console.log(students)

        students.forEach(student => {
            console.log(`name: ${student.dataValues.name} \t\t age: ${student.dataValues.age}`);
        });
    }
    catch (err) {
        console.log(err);
    }
}

task();