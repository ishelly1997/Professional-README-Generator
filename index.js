// TODO: Include packages needed for this application
var inquirer = require('inquirer');
var fs = require('fs')

var generateMarkdown = require('./utils/generateMarkdown')
// TODO: Create an array of questions for user input
const questions = [
    {
        name: 'title',
        type: 'input',
        message: 'Project Title:'

    },
    {
        name: 'description',
        type: 'input',
        message: 'Project Description:'
    },
    {
        name:'installInst',
        type:'input',
        message:'Installation Instructions:'
    },
    {
        name:'license',
        type:'list',
        choices:['MIT','GPL','Apache']
    },
    {
        name: 'gitHub',
        type: 'input',
        message: 'Enter your GitHub username:'
    },
    {
        name:'email',
        type:'input',
        message:'Enter your email address:'
    }
];

// TODO: Create a function to write README file
function writeToFile(data) {
    return fs.writeFileSync('sampleReadMe.md',data)
}

// TODO: Create a function to initialize app
function init() {
inquirer
  .prompt(questions)
  .then((answers) => {
    console.log(answers)
writeToFile(generateMarkdown(answers))
})
  .catch((error) => {
    if (error) {
        console.log(error)
    }
  });
}

// Function call to initialize app
init();
