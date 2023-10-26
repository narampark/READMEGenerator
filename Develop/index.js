const inquirer = require("inquirer");
const fs = require("fs");

const badgeLicenses = {
  "Apache 2.0 License": "Apache_2.0",
  "GNU General Public License v3.0": "GPLv3",
  "MIT License": "MIT",
  "BSD 2-Clause License": "BSD_2--Clause",
  "BSD 3-Clause License": "BSD_3--Clause",
  "Boost Software 1.0 License": "Boost_1.0",
  "Eclipse Public License 1.0": "EPL_1.0",
  "Creative Commons Zero v1.0 Universal License": "CC0_1.0",
};

// function to generate license badge
function generateLicenseBadge(license) {
  const badgeURL = badgeLicenses[license];
  return `![License](https://img.shields.io/badge/License-${badgeURL}-blue.svg)`;
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
    type: "list",
    name: "license",
    message: "Choose the license for the project",
    choices: [
      "Apache 2.0 License",
      "GNU General Public License v3.0",
      "MIT License",
      "BSD 2-Clause License",
      "BSD 3-Clause License",
      "Boost Software 1.0 License",
      "Creative Commons Zero v1.0 Universal License",
      "Eclipse Public License 1.0",
    ],
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
    const readmeGenerated = `# ${userAnswers.title}
${licenseBadge}
        
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
This project is licensed under the ${userAnswers.license}.

## Contributors
${userAnswers.contributors}

## Tests
${userAnswers.tests}

## Questions
Email any questions to ${userAnswers.email} or visit ${userAnswers.github}`;
    writeToFile("README.md", readmeGenerated);
  });
}

// Function call to initialize app
init();
