# MySQL-Employee-Tracker

## Description

A command-line tool for to allow displaying and editing information from an SQL database by navigating menus and answering prompts. It makes use of mySQL2, Sequelize, and inquirer.


## Future Development
I'm only stopping here due to time retraints, rather than lack of ideas for improvement.
- Currently the console.table displays do not have the most readable formats. With some SQL tinkering, we could JOIN tables and have, for example, manager names displayed instead of manager_ids, and display columns AS more user-friendly headings.
- Currently there is no validation of responses, and crashes *are* possible if invalid inputs are used (say, entering a string for salary). A stop-gap would have been to use inquirer validation, but a better option in most cases would be to not make the question an input opportunity at all, and instead have (again, as an example) the user select the employee to edit from a list of employees in the database instead of needing to know and properly enter their employee ID.
- It would also not be very difficult to make even command line displays more visually appealing, with anything from more console.log messages to give things heading and more line breaks all the way up to ASCII art. However, this was de-prioritized while there was still so much to do toward functionality.