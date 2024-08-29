import inquirer from 'inquirer';
import fs, { write } from 'fs';
import generateMarkdown from './utils/generateMarkdown.js';

const fileName = 'YourREADME.md'

const questions = [
    'Please Enter the Name of Your Project',
    'Please Enter a Description of Your Project',
    'Please Enter Your Projects Installations',
    'Please Enter Your Projects Usage Information',
    'Please Enter Your Projects Contribution Guidelines',
    'Please Enter Your Projects Test Instructions',
    'Please Enter the Licenses of Your Project',
    'Please Enter Your GitHub Profile Link',
    'Please Enter Your Email Address'
];


  function writeFile(fileName, data) {
    fs.writeFile(fileName, (data), (err) => {
        if (err) {
            console.error("Error writing file: ", err);
        } else {
            console.log("README.md Created!")
        }
    })
 }

function init() {
    inquirer
    .prompt([
        {
            type: 'input',
            name: 'title',
            message: 'Please Enter the Name of Your Project',
            validate: function (answer) {
                if (answer.length < 1) {
                    return console.log("A valid project title is required.");
                }
                return true;
            },
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
     .then((data) => {
        const markdown = generateMarkdown(data);
        writeFile(fileName, markdown);
     });
};

init()