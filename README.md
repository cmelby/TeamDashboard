# Team Dashboard

Team Dashboard is a Node CLI application that takes in information about employees and generates an HTML webpage that displays summaries for each person on the team. Managers want quick access to their team's basic info such as email, gitHub usernames, and ID's. By prompts prompting the user for information about the team manager and then information about the team members, the user can build a quick and convenient dashboard to access information. The user can input any number of team members and roles. Once the user has entered all members on the team the application generate an HTML file they can then access on the browser. Each card will display the following information:

- Employee Name
- Employee Title
- Employee Email
- Employee ID
- Engineers will have their gitHub username displayed
- Managers will have their office number displayed
- Interns will have their school displayed

## Demo
![Site](/Assets/appDemo(1).gif) 

## Requirements 

There are a few things that are required for this application. You will need to intsall the following: npm, inquirer, and node. Once these are installed in your CLI you will run the application by entering node AddTeam.js. Follow the prompts until all questions have been answered or you would no longer like to add anymore team members, then open the team.html file that is generated in the output directory. 

 
## Technologies Used
- Node.js - Used for package managment and to execute JavaScript code outside of a browser to build command line tool for server-side scripting.
- Jest - Used to test and build Javascript classes and methods.
- Inquirer - npm package installed by node used to promt user for employee info.
- Javascript - Used to base functionality of functions and prompts within the application.
- ES6 - Used to build prompts, functions, methods, and classes.  
- HTML - Used to generate HTML to be displayed in the browser.
- CSS - Used to style html elements.
- Git - Version control system to track changes to source code
- GitHub - Hosts repository that can be deployed to GitHub Pages
 
## Code Snippet

Using regular expression to pattern match across multiple html file templates allows for better modularity. In this case we are using the constructor function RegExp that provides runtime compilation of the regular expression. By creating templates this application will have greater felxibility at scale. That is if a smaller startup wants to use the application for their team, by using templates instead of hard coding the file each time, as their team grows they wont have to go backtrack to reconfigure thier code as much.

```js
function createTemplate(template, key, value) {
  const replace = new RegExp("{{"+key+"}}");
  const newTemplate = template.replace(replace, value);
  return newTemplate;
}

```

## Code Snippet
Using classes as well as our templates again allows for greater modularity. Each piece can be built upon in the future and simply referenced elsewhere in the code or in other files by requiring the file that it lives on. In this way we are setting the base of our application to be more scalable.

```js
class Employee {
    constructor (name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
        
        
    }
    getName() {
        return this.name;
    }

    getId() {
        return this.id;
    }

    getEmail() {
        return this.email;
    }

    getRole() {
        return "Employee";
    }
}

module.exports = Employee;


```



## Built With
* [Node.js](https://nodejs.org/en/)
* [npmjs](https://docs.npmjs.com/)
* [Jest](https://jestjs.io/docs/en/getting-started)
* [Inquirer](https://www.npmjs.com/package/inquirer)
* [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
* [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
* [Boostrap](https://getbootstrap.com/)

## Authors

**Chris Melby**
- [LinkedIn](https://www.linkedin.com/in/chris-melby-71106b126/)
- [Link to Github](https://github.com/cmelby)
- [Portfolio](https://cmelby.github.io/portfolio/)
