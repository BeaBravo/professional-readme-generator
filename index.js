//DEPENDENCIES
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./generateMarkdown.js");
require("./generateMarkdown.js");


//DATA
//these are the questions prompted for the user to answer and build the different sections of the readme file
const questions = [
  {
    type: "input",
    message: "What is the title of your project?",
    name: "title",
  },
  {
    type: "input",
    message: "Give a brief description of your project",
    name: "description",
  },
  {
    type: "input",
    message: "Give some details about the installation instructions, if any",
    name: "installation",
  },
  {
    type: "input",
    message: "Usage information:",
    name: "usage",
  },
  {
    type: "input",
    message: "any notable contributions?",
    name: "contributions",
  },
  {
    type: "input",
    message: "Test instructions here: ",
    name: "testInstructions",
  },
  {
    type: "input",
    message: "what is your GitHub username",
    name: "username",
  },
  {
    type: "input",
    message: "What is your email?",
    name: "email",
  },
  {
    type: "list",
    message: "Choose your repo license",
    name: "license",
    choices: [
      "MIT",
      "Apache License 2.0",
      "GNU General Public License (GPL) v3",
      "Mozilla Public License 2.0",
      "BSD 3-Clause License",
    ],
  },
];

//HELPER FUNCTIONS

const writeToFile = (fileName, answers) => {
  //this function is used to grab the answers from the prompt and create a file with the name provided. 
  //it calls generateMarkdown function to return a string literal of the file (fromTemplate)
  //it creates a file using fs.writeFileSync and will console.log that it was successfully created to the user 
  const fromTemplate = generateMarkdown(answers);

  fs.writeFileSync(fileName, fromTemplate);
  console.log(fileName + " successfully created");
};

function init() {
  //this initializes the prompt to the user and after it calls for the function writeToFile with the responses 
  inquirer
    .prompt(questions)
    .then((response) => writeToFile("README.md", response));
}

//INITIALIZATION
init();
