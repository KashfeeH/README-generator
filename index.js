const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
  {
    type: 'input',
    name: 'title',
    message: "Enter a title for your project"
  },
  {
    type: 'input',
    name: 'description',
    message: "Enter a description for your project",
  },
  {
    type: 'input',
    name: 'installation',
    message: "Enter Installation Instructions",
  },
  {
    type: 'input',
    name: 'usage',
    message: "Enter Usage Information",
  },
  {
    type: 'checkbox',
    name: 'license',
    message: "Choose a License",
    choices: [
        "Apache",
        "Boost",
        "ISC",
        "MIT",
    ]
  },
  {
    type: 'input',
    name: 'contribution',
    message: "Enter Contribution Guidelines",
  },
  {
    type: 'input',
    name: 'test', 
    message: 'What command should be run to run tests?',
    default: 'npm test'
  },
  {
    type: 'input',
    name: 'email',
    message: "Enter your email",
  },
];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();