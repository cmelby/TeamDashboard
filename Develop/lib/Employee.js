
function Employee(name, id, title) {
    this.name = name;
    this.id = id;
    this.title = title;

    this.getName = function() {
        console.log(this.name);
    }

    this.getId = function() {
        console.log(this.id);
    }

    this.getEmail = function() {
        console.log(this.email);
    }

    this.getRole = function() {
        console.log(this.role);
    }
}
module.exports = Employee;