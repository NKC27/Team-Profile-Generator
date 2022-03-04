const inquirer = require('inquirer');
const fs = require('fs');

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const generateTeam = require('./src/generateTeam')


const team = [];
const managerQuestions = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Please enter the team manager\'s name?',
        },
        {
            type: 'input',
            name: 'id',
            message: 'Please enter team manager\'s id?',
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please enter the team manager\'s email?',
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: 'Please enter the team manager\'s office number?',
        },
        {
            type: 'list',
            name: 'addMember',
            message: 'Please select the team member you would like to add?',
            choices: ['Engineer', 'Intern', 'No more team members to add, Exit'],
        }
    ])
    .then((managerAnswers) => {
    
        const manager = new Manager(managerAnswers.id, managerAnswers.name, managerAnswers.email, managerAnswers.officeNumber)
        team.push(manager)
        switch(managerAnswers.addMember) {
            case 'Engineer':
                engineerQuestions();
                break;
            case 'Intern':
                internQuestions();
                break;
            default: 
            writeToFile('dist/index.html', generateTeam(team))
        }
    });
};

const engineerQuestions = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Please enter the engineer\'s name?',
        },
        {
            type: 'input',
            name: 'id',
            message: 'Please enter the engineer\'s id?',
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please enter the engineer\'s email address?',
        },
        {
            type: 'input',
            name: 'github',
            message: 'Please enter the engineer\'s GitHub username?',
        },
        {
            type: 'list',
            name: 'addMember',
            message: 'What type of team member would you like to add next?',
            choices: ['Engineer', 'Intern', 'No more team members to add, Exit'],
            
        }
    ])
    .then((engineerAnswers) => {
        const engineer = new Engineer(engineerAnswers.id, engineerAnswers.name, engineerAnswers.email, engineerAnswers.github)
        team.push(engineer)
        switch(engineerAnswers.addMember) {
            case 'Engineer':
                engineerQuestions();
                break;
            case 'Intern':
                internQuestions();
                break;
            default: 
            writeToFile('dist/index.html', generateTeam(team))
        }
    })
};

const internQuestions = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Please enter the intern\'s name?'
        },
        {
            type: 'input',
            name: 'id',
            message: 'Please enter the intern\'s id?'
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please enter the intern\'s email address?'
        },
        {
            type: 'input',
            name: 'school',
            message: 'Please enter the intern\'s school?'
        },
        {
            type: 'list',
            name: 'addMember',
            message: 'What type of team member would you like to add next?',
            choices: ['Engineer', 'Intern', 'No more team members to add, Exit'],
        }
    ])
    .then((internAnswers) => {
        const intern = new Intern(internAnswers.id, internAnswers.name, internAnswers.email, internAnswers.school)
        team.push(intern)
        switch(internAnswers.addMember){

            case 'Engineer':
                engineerQuestions();
                break;

            case 'Intern':
                internQuestions();
                break;
                
            default:
                writeToFile('dist/index.html', generateTeam(team))
        }
    })
}

managerQuestions();


function writeToFile(filename, data) {
    fs.writeFile(filename, data, (err) => {
        if(err) throw err;
        console.log('file saved and complete')
    });
};