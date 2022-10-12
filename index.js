require('dotenv').config();
const inquirer = require('inquirer');
const sequelize = require('./config/connection');
const Employee = require('./models/employee');
const Role = require('./models/role');
const Department = require('./models/department');


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
                case 'Add Role':
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
    console.log('Employee View')
    //TODO: get foreign keys set up to show Manager names instead of manager employee.id in manager_id column
    Employee.findAll()
    .then((employeeData)=> {
        employees = [];
        employeeData.forEach(employee => employees.push(employee.toJSON()));
        console.table(employees);
        goToMainMenu();
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
                message: 'Enter employee role ID'
            }, {
                name: 'empManager',
                type: 'input',
                message: 'Enter manager ID'
            }
        ])
        .then((answers) => {
            Employee.create(
                {
                    first_name: answers.firstName,
                    last_name: answers.lastName,
                    role_id: answers.empRole,
                    manager_id: answers.empManager
                })
                .then((employee) => {
                    viewAllEmployees();
                    console.log(`New employee ${employee.first_name} ${employee.last_name} added successfully`);
                    goToMainMenu();
                })
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
    //TODO: Foreign key configuration
    Role.findAll()
    .then((roleData)=> {
        roles = [];
        roleData.forEach(role => roles.push(role.toJSON()));
        console.table(roles);
        goToMainMenu();
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
                message: 'Enter department ID'
            }
        ])
        .then((answer) => {
            Role.create(
                {
                    title: answer.roleName,
                    salary: answer.roleSalary,
                    department_id: answer.roleDepartment
                })
                .then((role) => {
                    viewAllRoles();
                    console.log(`New role ${role.title} added with Role ID ${role.id}`);
                    goToMainMenu();
                })
        })
}

function viewAllDepartments() {
    //TODO: Foreign key stuff
    Department.findAll()
    .then((departmentData)=> {
        departments = [];
        departmentData.forEach(department => departments.push(department.toJSON()));
        console.table(departments);
        goToMainMenu();
    })
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
            Department.create(
                {
                    name: answer.deptName
                })
                .then((department) => {
                    viewAllDepartments();
                    console.log(`New Department ${department.name} added with Department ID ${department.id}`);
                    goToMainMenu();
                })
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