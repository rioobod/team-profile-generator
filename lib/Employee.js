//function Employee
const inquirer = require('inquirer');
// const engineer = require('Engineer');
// const intern = require('Intern');
const manager = require('./Manager');
class Employee {
    constructor(name = '') {
        this.manager;
        // this.employee_Id = employee_Id;
        // this.email_address = this.email_address;       
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