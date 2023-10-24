const inquirer = require("inquirer");
const fs = require("fs");

// function to generate license badge
function generateLicenseBadge(license) {
  return `![License](https://img.shields.io/badge/license-${license}-blue)`;
}

// prompts given to the user
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
    message:
      "Enter a license for the project. Use underscore instead of space. (example: MPL_2.0)",
  },
  {
    type: "input",
    name: "contributors",
    message: "Enter contributors to the project.",
  },
  {
    type: "input",
    name: "tests",
    message: "Enter test instructions for the project.",
  },
  {
    type: "input",
    name: "github",
    message: "Enter your GitHub repository.",
  },
  {
    type: "input",
    name: "email",
    message: "Enter your email address.",
  },
];

// function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      console.log("OOPS! something went wrong:", err);
    } else {
      console.log("SUCCESS! README.md created");
    }
  });
}

// function to initialize app
function init() {
  inquirer.prompt(questions).then((userAnswers) => {
    const licenseBadge = generateLicenseBadge(userAnswers.license);
    const readmeGenerated = `
        # ${userAnswers.title}
        
        ## Description
        ${userAnswers.description}
        
        ## Table of Contents
        - [Installation](#installation)
        - [Usage](#usage)
        - [License](#license)
        - [Contributors](#contributors)
        - [Tests](#tests)
        - [Questions](#questions)

        ## Installation
        ${userAnswers.installation}

        ## Usage
        ${userAnswers.usage}

        ## License
        ${licenseBadge}

        ## Contributors
        ${userAnswers.contributors}

        ## Tests
        ${userAnswers.tests}

        ## Questions
        Email any questions to ${userAnswers.email} or visit ${userAnswers.github}
        `;
    writeToFile("README.md", readmeGenerated);
  });
}

// Function call to initialize app
init();
