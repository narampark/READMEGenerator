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
    name: "contributions",
    message: "Enter contributions to the project.",
  },
  {
    type: "input",
    name: "test",
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
function init() {
  inquirer.prompt(questions).then((userAnswers) => {
    const readmeGenerated = `
        # ${userAnswers.title}
        
        ## Description
        ${userAnswers.description}
        
        ## Table of Contents
        - Installation(#installation)
        - Usage(#usage)
        - License(#license)
        - Contributions(#contributions)
        - Tests(#tests)
        - Questions(#questions)

        ## Installation
        ${userAnswers.installation}

        ## Usage
        ${userAnswers.usage}

        ## License
        This application is covered under the ${userAnswers.license} license.

        ## Contributions
        ${userAnswers.contributions}

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
