const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const {
  getManagerName,
  getManagerId,
  getManagerEmail,
  getManagerOfficeNumber,
  getEngineerName,
  getEngineerId,
  getEngineerEmail,
  getGitHubUsername,
  getInternName,
  getInternId,
  getInternEmail,
  getInternSchool,
} = require('./utils/functions');
const path = require('path');
const fs = require('fs');

/*const OUTPUT_DIR = path.resolve(__dirname, "output")
const outputPath = path.join(OUTPUT_DIR, "team.html");

*/
const { generateTemplate } = require('./src/template.js');
const team = [];

const saveFile = () => {
  const filePath = path.join(__dirname, 'dist', 'result.html'); //file where it will save it
  const generatedOutput = generateTemplate(team);
  fs.writeFile(filePath, generatedOutput, () => {});
  console.log('Team data is saved to file.');
};

//create intern
const addIntern = () => {
  inquirer
    .prompt([
      getInternName(),
      getInternId(),
      getInternEmail(),
      getInternSchool(),
    ])
    .then((answers) => {
      const { internName, internId, internEmail, internSchool } = answers;
      // create intern object
      const intern = new Intern(
        internName,
        internId,
        internEmail,
        internSchool
      );
      team.push(intern);
      createTeam();
    });
};

//create engineer
const addEngineer = () => {
  //create an array of questions to ask
  inquirer
    .prompt([
      getEngineerName(),
      getEngineerId(),
      getEngineerEmail(),
      getGitHubUsername(),
    ])
    .then((answers) => {
      const { engineerName, engineerId, engineerEmail, githubUsername } =
        answers;
      // create Engineer object
      const engineer = new Engineer(
        engineerName,
        engineerId,
        engineerEmail,
        githubUsername
      );

      // add engineer to team array
      team.push(engineer);
      createTeam();
    });
};
//create team
const createTeam = () => {
  inquirer
    .prompt([
      {
        type: 'list',
        name: 'teamMember',
        message: 'Select the type of team member would you like to add',
        choices: [
          'Engineer',
          'Intern',
          "I don't want to add any more team members",
        ],
      },
    ])
    //give user choice and calls the selected function
    .then((answer) => {
      switch (answer.teamMember) {
        case 'Engineer':
          addEngineer();
          break;
        case 'Intern':
          addIntern();
          break;
        default:
          saveFile();
        //save into result.html
      }
    });
};

// create manager
const createManager = () => {
  inquirer
    //require details
    .prompt([
      getManagerName(),
      getManagerId(),
      getManagerEmail(),
      getManagerOfficeNumber(),
    ])
    .then((answers) => {
      const { name, id, email, officeNumber } = answers;
      const manager = new Manager(name, id, email, officeNumber);
      team.push(manager);
      //create the team
      createTeam();
    })
    .catch((error) => {
      console.log(error);
    });
};

createManager();
