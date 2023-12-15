//DEPENDENCIES
const inquirer = require("inquirer");
const fs = require("fs");

// fs.writeFile("README.md", "hello", (err) =>
//   err ? console.error(err) : console.log("Success!")
// );

//DATA
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
//have to stringify the data to be able to use fs.writefile

const readmeTemplate = (
  title,
  description,
  installation,
  usage,
  contributions,
  testInstructions,
  username,
  email,
  license
) => {
  //check conditions to match the template of the readme
  //
  //title must not have spaces, but should have '-' as separators
  const projectTitle = title.split(" ").join("-");

  //check for the different licenses and their info info
  //   switch (license) {
  //     case "MIT":
  //       const licenseInfo = `info about MIT`;
  //       break;
  //     case "Apache License 2.0":
  //       //info about Apache
  //       break;
  //     case "GNU General Public License (GPL) v3":
  //       //info about this
  //       break;
  //     case "Mozilla Public License 2.0":
  //       //info
  //       break;
  //     case "BSD 3-Clause License":
  //       //info
  //       break;
  //   }
  //do a switch case for the licenses

  //create a github link with the user
  const GitHubLink = `github.com/${username}`;

  //plug the different info in the template
  const readmeFile = `# ${projectTitle}

  ## Description
  ${description}
  
  ## Table of Contents (Optional)
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)
  
  ## Installation
  ${installation}
  
  ## Usage
  ${usage} 
  
  ## Credits
  ${contributions}
  
  ## License
  ${license}
  
  
  ## How to Contribute
  If you have any questions, comments, or concerns please feel free to reach me at  ${email}. If you would like to contribute to my project, you can find my repo on [${GitHubLink}](https://wwww.${GitHubLink})

  ## Tests`;

  return readmeFile;
};

const createReadMeFile = (answers) => {
  const {
    title,
    description,
    installation,
    usage,
    contributions,
    testInstructions,
    username,
    email,
    license,
  } = answers;

  const readme = readmeTemplate(
    title,
    description,
    installation,
    usage,
    contributions,
    testInstructions,
    username,
    email,
    license
  );

  console.log(typeof readme);

  fs.writeFileSync("README.md", readme);
};

inquirer.prompt(questions).then((response) => createReadMeFile(response));

//INITIALIZATION
