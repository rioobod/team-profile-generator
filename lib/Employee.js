//function Employee
const inquirer = require('inquirer');

class Employee {
    constructor(name = '', id = '', email = '') {
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = {roleType: "Employee", icon: ''};
    }

    getName() {
        return this.name;
    }

    getId() {
        return `ID: ${this.id}`;
    }

    getEmail() {
        return `Email: ${this.email}`;
    }

    getRole(role) {
        if (role) {
            this.role = { ...role }
            return this.role
        }
        return this.role
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
};

module.exports = Employee;