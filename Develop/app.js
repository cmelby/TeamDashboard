// const fs = require("fs");

const inquirer = require("inquirer");
const Employee = require("../Develop/lib/Employee");
// const generateHTML = require("./generateHTML");
// const fs = require("fs");
// const axios = require("axios");

//Questions array used to prompt user.........
function promptUser() {
 inquire.prompt([
    {
        type: "input",
        message: "What is your manager's name?",
        name: "name"
      },
      {
        type: "input",
        message: "What is your manager's id?",
        name: "id"
      },
      {
        type: "input",
        message: "What is your manager's email?",
        name: "email"
      },
      {
        type: "input",
        message: "What is your manager's office number?",
        name: "office number"
      },
      {
        type: 'list',
        name: 'role',
        message: 'What type of employee would you like to add?',
        choices: [
          'Engineer',
          'Intern',
        ]
      }
    ]);
 
}

promptUser();



//   inquirer.prompt(questions);
//   inquirer.prompt(employeeInfo);
