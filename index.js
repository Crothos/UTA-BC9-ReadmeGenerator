// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const markdown = require('./utils/generateMarkdown.js');
// TODO: Create an array of questions for user input
const questions = [
    "What is your project title?",
    "Describe your app's functionality.",
    "What are the installation instructions for your app?",
    "How will your app be used?",
    "List any contributors to your app.",
    "What testing procedures do you have?",
    "What license are you using?",
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile("README.md", JSON.stringify(response, null,), 
        (err) => err ? console.error(err) : console.log('Success!'))
}

// TODO: Create a function to initialize app
function init() {

}

// Function call to initialize app
init();
