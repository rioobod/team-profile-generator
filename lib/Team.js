const inquirer = require("inquirer");
const Manager = require("./Manager");
const Engineer = require("./Engineer");
const Intern = require("./Intern");

class Team {
  constructor() {
    this.manager;
    this.engineer;
    this.intern;
    this.teamMembers = [];
    this.managerQuestions = [
      {
        type: "input",
        name: "name",
        message: "what is the team managers name?",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log("Please enter a name");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "id",
        message: "what is the team managers employee ID?",
        validate: (idInput) => {
          if (idInput) {
            return true;
          } else {
            console.log("Please enter an employee ID");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "email",
        message: "what is the team managers email address?",
        validate: (emailInput) => {
          if (emailInput) {
            return true;
          } else {
            console.log("Please enter a valid email");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "officeNumber",
        message: "what is the team managers office number?",
      },
    ];
    this.teamMemberQuestions = [
      // type of team member:
      {
        type: "rawlist",
        name: "employeeType",
        message: "What type of team member is this?",
        choices: ["Engineer", "Intern"],
        default: "Engineer",
      },
      // common questions
      {
        type: "input",
        name: "name",
        message: 'what is the team member"s name?',
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log("Please enter a name");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "id",
        message: 'what is the team member"s ID?',
        validate: (idInput) => {
          if (idInput) {
            return true;
          } else {
            console.log("Please enter an employee ID");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "email",
        message: 'what is the team member"s email address?',
        validate: (emailInput) => {
      

          if (emailInput) {
            return true;
          } else {
            console.log("Please enter a valid email");
            return false;
          }
        },
      },
      // Engineer specific questions
      {
        type: "input",
        name: "github",
        message: 'what is the engineer"s github user name?',
        when: (answers) => answers.employeeType === "Engineer",
        validate: (githubInput) => {
          if (githubInput) {
            return true;
          } else {
            console.log("Please enter the github user name");
            return false;
          }
        },
      },
      // Intern specific questions
      {
        type: "input",
        name: "school",
        message: 'what is the name of the intern"s school?',
        when: (answers) => answers.employeeType === "Intern",
      },
      // Add another employee
      {
        type: "confirm",
        name: "addTeamMember",
        message: "Would you like to enter another member?",
        default: false,
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
    return inquirer.prompt(this.managerQuestions).then((manager) => {
      const { name, id, email, officeNumber } = manager;
      return (this.manager = new Manager(name, id, email, officeNumber));
    });
  }

  // this function will get the employee info for both an engineer and an intern
  getTeamMember(team = {}) {
    console.log(`
              =================
              Add New Team Member
              =================
        `);

    //check to see if the passed in team variable is null.
    if (!team.members) {
      team.members = [];
    }

    return inquirer.prompt(this.teamMemberQuestions).then((teamMember) => {
      /*
                    check to see what type of employee is being created.
                    Then create a new employee base on the role they have and then
                    push the data into the passed in array.
                 */
      if (teamMember.employeeType === "Engineer") {
        const { name, id, email, github } = teamMember;
        this.engineer = new Engineer(name, id, email, github);
        team.members.push(this.engineer);
      } else {
        const { name, id, email, school } = teamMember;
        this.intern = new Intern(name, id, email, school);
        team.members.push(this.intern);
      }

      // check if the user wants to add another employee.
      if (teamMember.addTeamMember) {
        return this.getTeamMember(team);
      } else {
        return team;
      }
    });
  }

  initializeTeam() {
    this.getManager().then((manager) => {
      this.teamMembers.push(manager);
    });
  }
}

module.exports = Team;
