const {
  getManagerTemplate,
  getEngineerTemplate,
  getInternTemplate,
} = require("../utils/templates");

// create the team
const generateTeam = (team) => {
  const manager = team
    .filter((person) => person.getRole() === "Manager")
    .map((manager) => getManagerTemplate(manager));

  const engineer = team
    .filter((person) => person.getRole() === "Engineer")
    .map((engineer) => getEngineerTemplate(engineer))
    .join("");

  const intern = team
    .filter((person) => person.getRole() === "Intern")
    .map((intern) => getInternTemplate(intern))
    .join("");

  html = [manager, engineer, intern];

  return html.join("");
};

const generateTemplate = (team) => {
  return `
    <!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Team Profile Generator</title>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
            <link rel="stylesheet" href="style.css">
        </head>
        <body>
            <div class="container-fluid">
                <div class="row">
                    <div class="col-12 jumbotron mb-3 team-heading">
                        <h1 class="text-center">My Team</h1>
                    </div>
                </div>
            </div>
            <div class="container">
                <div class="row">
                    <div class="team-area col-12 d-flex justify-content-center">
                        ${generateTeam(team)}
                    </div>
                </div>
            </div>
        </body>
    </html>
        `;
};

module.exports = { generateTemplate };
