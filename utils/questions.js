const questions = [
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
    ],},
    {
    type: 'input',
    message: "Enter your Github username.",
    name: 'github',
    },
    {
    type: 'input',
    message: "Enter your email address.",
    name: 'email',
    },
];


module.exports = questions;