// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');
// TODO: Create an array of questions for user input
const questions = require("./utils/questions")
// TODO: Create a function to write README file
function writeToFile(data) {
    console.log(data)
    fs.writeFile("ReadmeCustom.md", generateMarkdown(data), err => console.log(err));
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(writeToFile);
}

// Function call to initialize app
init();
