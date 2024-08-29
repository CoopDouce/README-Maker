// TODO: Create a function that returns a license badge based on which license is passed in

// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let licenseBadge;
  if (!license) {
    return ``;
  } else {
    if (license === 'MIT') {
      licenseBadge = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](${renderLicenseLink(license)})`;
    } else if (license === 'Apache') {
      licenseBadge = `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](${renderLicenseLink(license)})`;
    } else if (license === 'Mozilla') {
      licenseBadge = `[![License](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](${renderLicenseLink(license)})`;
    }
    return licenseBadge;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let licenseLink;
    if (license === 'MIT') {
      licenseLink = 'https://opensource.org/licenses/MIT';
    } else if (license === 'Apache') {
      licenseLink = 'https://opensource.org/licenses/Apache-2.0';
    } else if (license === 'Mozilla') {
      licenseLink = 'https://opensource.org/licenses/MPL-2.0';
    }
    return licenseLink
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) {
    return ``;
  } else {
    return `This Project is Licensed Under ${license}`
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}


## Description

 ${data.description}

## Table Of Contents

Use These Links to Navigate the README File:

[Installation](#installation)

[Usage](#usage)

[Contributing](#contributing)

[Tests](#tests)

[License](#license)

[Questions](#questions)

## Installation

 ${data.install}

## Usage

 ${data.usage} 

## Contributing

 ${data.contGuide}

## Tests

 ${data.testIns}

## License

 ${renderLicenseSection(data.license)}

## Questions 

 My GitHub link is: ${data.gitHub}

 My Email Address is: ${data.email}. You Can Email Me Any Extra Questions You May Have.`;

}

export default generateMarkdown;
