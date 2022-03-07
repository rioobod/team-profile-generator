//function Employee
const inquirer = require('inquirer');

const manager = require('./Manager');
class Employee {
    constructor(name = '') {
        this.manager;

    }
    getEmployeeInfo() {
        inquirer.prompt({
            type: 'text',
            name: 'name',
            message: 'what is the team managers name?'
        })
        .then(({ name }) => {
            this.manager = new manager(name);
            console.log({name})
        });
      
    } 
}
module.exports = Employee;