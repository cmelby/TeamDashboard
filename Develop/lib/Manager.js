const Employee = require("./Employee");

class Manager extends Employee {
    constructor(name, id, title, github){
        super(name, id, title, github);
        this.officeNumber = officeNumber;
    }
    

}
module.exports = Manager;