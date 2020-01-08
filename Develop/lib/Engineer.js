
const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name, id, title, github){
        super(name, id, title, github);
        this.github = github;
    }
    

}
module.exports = Engineer;