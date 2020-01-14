const Employee = require("./Employee")

class Manager extends Employee{
constructor(phonenumber){
    super(name, id, title);
    this.phonenumber = phonenumber
}
getRole(){
    return("Manager");
}
}