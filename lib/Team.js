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
    }
}

module.exports = Team