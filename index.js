// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const markdown = require('./utils/generateMarkdown.js');
// TODO: Create an array of questions for user input
const questions = [
    "What is your project title?",
    "Describe your app's functionality.",
    "What are the installation instructions for your app?",
    "Describe how to use your app.",
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

inquirer.prompt([
    {
      type: 'input',
      message: 'What is your project title?',
      name: 'title',
    },
    {
      type: 'input',
      message: "Describe your app and its functionality.",
      name: 'description',
    },
    {
        type: 'input',
        message: "What are your app's installation instructions?",
        name: 'installation',
    },
    {
        type: 'input',
        message: "Describe how to use your app.",
        name: 'usage',
    },
    {
        type: 'input',
        message: "Who were the other contributors to your app?",
        name: 'contributors',
    },
    {
        type: 'input',
        message: "Explain any necessary tests.",
        name: 'tests',
    },
    {
      type: 'checkbox',
      message: 'Choose a license for your app.',
      name: 'license',
      choices: [
        'MIT', 'ISC','Unlicense', 'zLib',
      ],
    },
  ])
  .then((data) => {console.log(data);

fs.writeFile('log.txt', JSON.stringify(data, null,), (err) => err ? console.error(err) : console.log("No problems"))});