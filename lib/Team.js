const inquirer = require('inquirer');
const Manager = require('./Manager');
const Engineer = require('./Engineer');
const Intern = require("./Intern");

class Team {
    constructor() {
        this.manager;
        this.engineer;
        this.intern;
        this.teamMembers = [];
        this.managerQuestions = [
            {
                type: 'input',
                name: 'name',
                message: 'what is the team managers name?',
                validate: nameInput => {
                    if (nameInput) {
                        return true
                    } else {
                        console.log('Please enter a name');
                        return false
                    }
                }
            },
            {
                type: 'input',
                name: 'id',
                message: 'what is the team managers employee ID?',
                validate: idInput => {
                    if (idInput) {
                        return true
                    } else {
                        console.log('Please enter an employee ID');
                        return false
                    }
                }
            },
            {
                type: 'input',
                name: 'email',
                message: 'what is the team managers email address?',
                validate: emailInput => {
                    if (emailInput) {
                        return true
                    } else {
                        console.log('Please enter a valid email');
                        return false
                    }
                }
            },
            {
                type: 'input',
                name: 'officeNumber',
                message: 'what is the team managers office number?'
            },
        ];
    }
        // this function to get the manager info
        getManager() {
            console.log(`
                  =================
                  Add Team Manager
                  =================
            `);
            return inquirer.prompt(this.managerQuestions)
                .then(manager => {
                    const {name, id, email, officeNumber} = manager;
                    return this.manager = new Manager(name, id, email, officeNumber);
                  
                })
        }
        initializeTeam() {
            this.getManager()
                .then(manager => {
                    this.teamMembers.push(manager);
                   
                })
            }
}

module.exports = Team