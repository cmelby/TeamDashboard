// const fs = require("fs");

const inquirer = require("inquirer");
const Employee = require("../Develop/lib/Employee");
// const generateHTML = require("./generateHTML");
// const fs = require("fs");
// const axios = require("axios");

//Questions array used to prompt user.........
const questions = [
    {
      type: "input",
      message: "Employee Name?",
      name: "name"
    },
    {
      type: "input",
      message: "Employee id?",
      name: "id"
    },
    {
      type: 'list',
      name: 'role',
      message: 'Employee Title?',
      choices: [
        'Engineer',
        'Intern',
        'Manager'
      ]
    }
  ];
//   inquirer.prompt(questions);

  const employee = new Employee();

  inquirer.prompt(questions).then(employee);
 