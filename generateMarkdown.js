// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case "MIT":
      return (licenseBadge = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`);
    case "Apache License 2.0":
      return (licenseBadge = `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`);
    case "GNU General Public License (GPL) v3":
      //info about this
      return (licenseBadge = `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`);
    case "Mozilla Public License 2.0":
      return (licenseBadge = `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`);
    case "BSD 3-Clause License":
      return (licenseBadge = `[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`);
    case "":
      return (licenseBadge = "");
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case "MIT":
      return (licenselink = `(https://choosealicense.com/licenses/mit/)`);
    case "Apache License 2.0":
      //info about Apache
      return (licenselink = `(https://choosealicense.com/licenses/apache-2.0/)`);
    case "GNU General Public License (GPL) v3":
      //info about this
      return (licenselink = `(https://www.gnu.org/licenses/gpl-3.0)`);
    case "Mozilla Public License 2.0":
      return (licenselink = `(https://opensource.org/licenses/MPL-2.0)`);
    case "BSD 3-Clause License":
      return (licenselink = `(https://opensource.org/licenses/BSD-3-Clause)`);
    case "":
      return (licenselink = "");
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  //check for the different licenses and their info info
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
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
  } = data;

  //check conditions to match the template of the readme
  //
  //title must not have spaces, but should have '-' as separators
  const projectTitle = title.split(" ").join("-");

  //create a github link with the user
  const GitHubLink = `github.com/${username}`;

  //get License link and badge
  const badge = renderLicenseBadge(license);
  const licenseLink = renderLicenseLink(license);

  //plug the different info in the template
  const readmeFile = `# ${projectTitle}
  
  ${badge}
  
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
  This application is covered under [${license}]${licenseLink} license
  
  
  ## How to Contribute
  If you have any questions, comments, or concerns please feel free to reach me at  ${email}. If you would like to contribute to my project, you can find my repo on [${GitHubLink}](https://wwww.${GitHubLink})

  ## Tests`;
  return readmeFile;
}

module.exports = generateMarkdown;
