require('dotenv').config();
const inquirer = require('inquirer');
const sequelize = require('./config/connection');
//const Employee = require('./models/employee')


function goToMainMenu() {
    inquirer
        .prompt([
            {
                name: 'selection',
                type: 'list',
                message: 'What would you like to do?',
                choices: ['View All Employees', 'Add Employee', 'Update Employee Role', 'View All Roles', 'Add Role', 'View All Departments', 'Add Department']
            }
        ])
        .then((answer) => {
            switch (answer.selection) {
                case 'View All Employees':
                    viewAllEmployees();
                    break;
                case 'Add Employee':
                    addEmployee();
                    break;
                case 'Update Employee Role':
                    updateEmployeeRole();
                    break;
                case 'View All Roles':
                    viewAllRoles();
                    break;
                case 'Add a Role':
                    addARole();
                    break;
                case 'View All Departments':
                    viewAllDepartments();
                    break;
                case 'Add Department':
                    addDepartment();
                    break;
            }
        })
}

function viewAllEmployees() {
    //TODO: display db data for: employee id, first name, last name, job title, department, salaries, manager
    sequelize.query('SELECT * FROM employees', (err, res) => {
        if (err) throw err;
        console.table(res);
    })
}

function addEmployee() {
    inquirer
        .prompt([
            {
                name: 'firstName',
                type: 'input',
                message: 'Enter employee first name'
            }, {
                name: 'lastName',
                type: 'input',
                message: 'Enter employee last name'
            }, {
                name: 'empRole',
                type: 'input',
                // TODO: should maybe pull from the database and look for roles to display as options, instead of accepting any input?
                message: 'Enter employee role'
            }, {
                name: 'empManager',
                type: 'input',
                message: 'Enter manager'
            }
        ])
        .then((answers) => {
            // TODO: write answers to db
            console.log(answers)
        })
}

function updateEmployeeRole() {
    inquirer
        .prompt([
            {
                name: 'empSelection',
                type: 'list',
                message: 'Select an employee to update:',
                //TODO: Get choices from database
                choices: []
            }
        ])
}

function viewAllRoles() {
    //TODO: Display roles from Database
    sequelize.query('SELECT * FROM roles', (err, res) => {
        if (err) throw err;
        console.table(res)
    })
}

function addARole() {
    inquirer
        .prompt([
            {
                name: 'roleName',
                type: 'input',
                message: 'Enter role name'
            }, {
                name: 'roleSalary',
                type: 'input',
                message: 'Enter salary'
            }, {
                name: 'roleDepartment',
                // TODO: Get roles from DB for list selection instead of input
                type: 'input',
                message: 'Enter department'
            }
        ])
        .then((answer) => {
            //TODO: Add answers to Database
            // console.log("Role added")
            console.log("INCOMPLETE")
            goToMainMenu();
        })
}

function viewAllDepartments() {
    //TODO: Display all departments currently in Database
}

function addDepartment() {
    inquirer
        .prompt([
            {
                name: 'deptName',
                type: 'input',
                message: 'Enter department name'
            }
        ])
        .then((answer) => {
            //TODO: Enter department into DB with auto-incremented ID
            // console.log('Department Added')
            console.log('INCOMPLETE');
            goToMainMenu();
        })
}

// sequelize
//     .authenticate()
//     .then(() => {
//         console.log('Connection established')
//     })
//     .catch(err => {
//         console.log('Error:', error)
//     })

goToMainMenu();