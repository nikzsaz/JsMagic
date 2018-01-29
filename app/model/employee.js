var mongoose = require('mongoose');

//employee schema
var employeeSchema = mongoose.Schema({
    EmpNo : {
        type : String,
        required : true
    },
    FirstName : {
        type : String,
        required : true
    },
   LastName : {
        type : String,
        required : true
    },
    Age :{
        type : String,
        required : true
    },
    Gender : {
        type : String
    },
    Skill :{
        type : String
    },
    Phone : {
        type : String 
    },
    Email : {
        type : String
    },
    Salary : {
        type : String
    },
    create_date : {
        type : Date,
        default : Date.now
    }
});

var Employee = module.exports = mongoose.model('Employee',employeeSchema,'employee');

//Get  employee
module.exports.getEmployee = function(callback,limit){
    Employee.find(callback).limit(limit);
}

