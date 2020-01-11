
// Declare our dependencies....
const fs = require("fs");
const util = require("util");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const writeFile = util.promisify(fs.writeFile)
const readFile = util.promisify(fs.readFile)

//Crreating templates and using constructor function RegExp to provide provides runtime compilation of the regular expression...
function createTemplate(template, key, value) {
  const replace = new RegExp("{{"+key+"}}");
  const newTemplate = template.replace(replace, value);
  return newTemplate;
}
//Render App function that compiles our html templates into an array.....
async function renderApp(roles) {
  const renderTeamArr = []

  const [managerTemplate, mainTemplate, internTemplate, engineerTemplate] = await Promise.all([
        readFile(__dirname + "/templates/Manager.html", "utf8"),
        readFile(__dirname + "/templates/main.html", "utf8"),
        readFile(__dirname + "/templates/Intern.html", "utf8"),
        readFile(__dirname + "/templates/Engineer.html", "utf8"),
        
  ])
//Creating template.....
  const managerDiv = roles.filter(employee => employee instanceof Manager)
    .map(employee => {
      let template = managerTemplate;
      for (const key in employee) {
        template = createTemplate(template, key, employee[key]);
      }
      return template;
    })
       
  //Creating template.....
  const engineerDiv = roles.filter(employee => employee instanceof Engineer)
    .map(employee => {
      let template = engineerTemplate;
      for (const key in employee) {
        template = createTemplate(template, key, employee[key]);
      }
      return template;
    })

  //Creating template......
  const internDiv = roles.filter(employee => employee instanceof Intern)
    .map(employee => {
      let template = internTemplate;
      for (const key in employee) {
        template = createTemplate(template, key, employee[key]);
      }
      return template;
    })
//Pushing out templates into our array....
  renderTeamArr.push(managerDiv, internDiv, engineerDiv)
//Storing our full template in one template....
  const teamHTML = createTemplate(mainTemplate, "body", renderTeamArr.join(""))
 //Writing that template and generating the team.html file for our dashbaord.....
  await writeFile("team.html", teamHTML, function(err) {
    if (err) throw err
  })

}

//Exporting our application....
module.exports = renderApp