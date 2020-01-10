
// const fs = require("fs");
// const generateHTML = require("./generateHTML");
// const fs = require("fs");
// const axios = require("axios");

const inquirer = require("inquirer");
const Employee = require("../Develop/lib/Employee");
const Manager= require("../Develop/lib/Manager");
const Engineer = require("../Develop/lib/Engineer");
const Intern = require("../Develop/lib/Intern");


// class AddTeam {

// Prompts the user for to select a role.....
function askForRole() {
  return inquirer
    .prompt([
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
          'Manager',
          'Intern',
          'No',
        ]
      }
    ]).then(val => {
      // If the user says yes to another game, play again, otherwise quit the game
      if (val.role === 'Engineer') {
        askForEngineerInfo();
      } 
      else if (val.role === 'Manager') {
        askForManagerInfo();
      } 
      else if (val.role === 'Intern') {
        askForInternInfo();
      }
      else if (val.choice === 'No') {
        quit();
      }
    });
  }
  askForRole();

  // Prompts the user for Manager Info
function askForManagerInfo() {
    return inquirer
      .prompt([
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
        }
      ]).then()
      askForRole();
      
  }
  // Prompts the user for Engineer Info.....
  function askForEngineerInfo() {
    return inquirer
      .prompt([
        {
          type: "input",
          message: "What is your Engineers Name?",
          name: "name"
        },
        {
          type: "input",
          message: "What is your Engineers id?",
          name: "id"
        },
        {
          type: "input",
          message: "What is your Engineers email?",
          name: "email"
        },
        {
          type: "input",
          message: "What is your Engineers GitHub username?",
          name: "username"
        }
      ])
     
  }
// Prompts the user for Intern Info.......
  function askForInternInfo() {
    return inquirer
      .prompt([
        {
          type: "input",
          message: "What is your Inturns Name?",
          name: "name"
        },
        {
          type: "input",
          message: "What is your Inturns id?",
          name: "id"
        },
        {
          type: "input",
          message: "What is your Inturns email?",
          name: "email"
        },
        {
          type: "input",
          message: "What is your Inturns School?",
          name: "school"
        }
   
      ])
   

  }

  // Logs goodbye and exits the node app
  function quit() {
    console.log("\nThank You!");
    process.exit(0);
  }

// module.exports = AddTeam;
