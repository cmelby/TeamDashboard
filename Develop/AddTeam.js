
// const fs = require("fs");
// const generateHTML = require("./generateHTML");
// const fs = require("fs");
// const axios = require("axios");

const inquirer = require("inquirer");
const teamArr = require("./script");
const Employee = require("../Develop/lib/Employee");
const Manager= require("../Develop/lib/Manager");
const Engineer = require("../Develop/lib/Engineer");
const Intern = require("../Develop/lib/Intern");


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
          name: "officeNumber"
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
    
        teamArr.push(new Manager(val.name, val.id, val.email, val.officeNumber))
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
        
        teamArr.push(new Engineer(val.name, val.id, val.email, val.officeNumber))

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
     
        teamArr.push(new Intern(val.name, val.id, val.email, val.officeNumber))
   
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
//start the prompt...

askForManagerInfo();
// Logs goodbye and exits the node app..
  function quit() {
    console.log("\nThank You!");
    process.exit(0);
  }

// module.exports = AddTeam;


// going to use individual functions for each prompt and to gather only the new peices of information,
//the .then function is going to instaciate a new varible calling on our calsses 
// then we will also have a switch case for the new prompt. 
//the fs.writefile will create a write to the outputfile then function generate html that generates the file in that folder.

//in the .then we need to create a "new" employee 