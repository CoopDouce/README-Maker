import inquirer from 'inquirer';
import fs, { write } from 'fs'

inquirer
 .prompt([
    {
        type: 'input',
        name: 'title',
        message: 'Please Enter the Name of Your Project',
    }, {
        type: 'input',
        name: 'description',
        message: 'Please Enter a Description of Your Project',
    }, {
        type: 'input',
        name: 'install',
        message: 'Please Enter Your Projects Installations',
    }, {
        type: 'input',
        name: 'usage',
        message: 'Please Enter Your Projects Usage Information',
    }, {
        type: 'input',
        name: 'contGuide',
        message: 'Please Enter Your Projects Contribution Guidelines',
    }, {
        type: 'input',
        name: 'testIns',
        message: 'Please Enter Your Projects Test Instructions',
    }, {
        type: 'list',
        name: 'license',
        message: 'Please Enter the Licenses of Your Project',
        choices: ['MIT', 'Mozilla', 'Apache'],
    }, {
        type: 'input',
        name: 'gitHub',
        message: 'Please Enter Your GitHub Profile Link',
    }, {
        type: 'input',
        name: 'email',
        message: 'Please Enter Your Email Address',
    }
 ])
 .then((answers) => {
    const userTemplate = fillTemplate(answers);
    writeFile(userTemplate);
 });


 function fillTemplate(answers) {
    return `# ${answers.title}


## Description
 ${answers.description}
## Table Of Contents
Use These Links to Navigate the README File:

[Installation](#installation)

[Usage](#usage)

[Contributing](#contributing)

[Tests](#tests)

[License](#license)

[Questions](#questions)

## Installation
 ${answers.install}
## Usage
 ${answers.usage} 
## Contributing
 ${answers.contGuide}
## Tests
 ${answers.testIns}
## License
 This Project uses: ${answers.license}
## Questions 
 My GitHub link is: ${answers.gitHub}

 My Email Address is: ${answers.email}`
 }

 function writeFile(README) {
    fs.writeFile('README.md', README, (err) => {
        if (err) {
            console.error("Error writing file: ", err);
        } else {
            console.log("README.md Created!")
        }
    })
 }


 // Still Needed:

 // Media for License/Implementing Markdown