// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "Enter a title of the project.",
  },
  {
    type: "input",
    name: "description",
    message: "Enter a description of the project.",
  },
  {
    type: "input",
    name: "tableOfContents",
    message: "Enter a table of contents for the project.",
  },
  {
    type: "input",
    name: "installation",
    message: "Enter installation instructions for the project.",
  },
  {
    type: "input",
    name: "usage",
    message: "Enter usage information for the project.",
  },
  {
    type: "input",
    name: "license",
    message: "Enter a license for the project.",
  },
  {
    type: "input",
    name: "contribution",
    message: "Enter contributions to the project.",
  },
  {
    type: "input",
    name: "test",
    message: "Enter test instructions for the project.",
  },
  {
    type: "input",
    name: "questions",
    message: "Enter your GitHub repository and email address.",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      console.log("OOPS! something went wrong:", err);
    } else {
      console.log("SUCCESS! README.md created");
    }
  });
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
