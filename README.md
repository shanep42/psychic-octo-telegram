# MySQL-Employee-Tracker

## Description

A command-line tool for to allow displaying and editing information from an SQL database by navigating menus and answering prompts. It makes use of mySQL2, Sequelize, and inquirer.

## Screenshots

![screenshot](/assets/images/screenshot.png)

Also see a video demonstration of its current functionality [here](https://watch.screencastify.com/v/XATAMyaHJxtttXnalfWc)

## Installation and Usage

Currently this is only a command line application, and must be run locally on a machine with SQL installed and configured. After pulling the code, run 'npm i' from the terminal to install package dependencies and run the schema.sql to establish the company_db database, and run the seeds.sql if you don't want it to be empty - you can add your own roles, departments, and employees later through the application.

This project uses dotenv for confidentiality. **You will need to create a .env file at the root level of the file structure**, with your SQL username and password, like so: <br>
![credentials](/assets/images/dotenv%20example.png)


## Future Development
I consider this project working but far from complete, and I'm only stopping here due to time retraints, rather than lack of ideas for improvement.

- Currently the console.table displays do not have the most readable formats. With some SQL tinkering, we could JOIN tables and have, for example, manager names displayed instead of manager_ids, and display columns AS more user-friendly headings.
- Currently there is no validation of responses, and crashes *are* possible if invalid inputs are used (say, entering a string for salary). A stop-gap would have been to use inquirer validation, but a better option in most cases would be to not make the question an input opportunity at all, and instead have (again, as an example) the user select the employee to edit from a list of employees in the database instead of needing to know and properly enter their employee ID.
- It would also not be very difficult to make even command line displays more visually appealing, with anything from more console.log messages to give things heading and more line breaks all the way up to ASCII art. However, this was de-prioritized while there was still so much to do toward functionality.