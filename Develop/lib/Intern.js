
const Employee = require("./Employee");

class Intern extends Employee {
    constructor(name, id, title, school){
        super(name, id, title);
        this.school = school;
    }
    
    getSchool() {

    }

    getRole() {
        
    }

}
module.exports = Intern;