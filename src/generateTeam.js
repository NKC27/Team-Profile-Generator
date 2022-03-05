const Manager = require('../lib/Manager');
const Engineer = require('../lib/Engineer')
const Intern = require('../lib/Intern')


function generateCards(team) {
  let cards = []
  for(let i = 0; i < team.length; i++) {
    const teamArray = team[i];
    switch(teamArray.getRole()) {

      case 'Manager':
        const manager = new Manager(teamArray.id, teamArray.name, teamArray.email, teamArray.officeNumber);
        cards.push(generateManagerCard(manager));
        break;

      case 'Engineer':
        const engineer = new Engineer(teamArray.id, teamArray.name, teamArray.email, teamArray.github);
        cards.push(generateEngineerCard(engineer));
        break;
        
      case 'Intern':
        const intern = new Intern(teamArray.id, teamArray.name, teamArray.email, teamArray.school);
        cards.push(generateInternCard(intern));
        break;
    }
  }
  return cards.join(``)
}

let generateManagerCard = (Manager) => {
  return `
  <div class="card m-1 shadow" style="width: 20rem">
    <div class='card-header bg-primary'>
      <h3 class="card-title text-white">${Manager.getName()}</h3>
      <h6 class="card-text text-white"><i class="fa fa-coffee"></i> ${Manager.getRole()}</h6>
    </div>
    <div class="card-body">
      <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${Manager.getId()}</li>
        <li class="list-group-item">Email: ${Manager.getEmail()}</li>
        <li class="list-group-item">Office Number: ${Manager.getOfficeNumber()}</li>
      </ul>
    </div>
  </div>
  `
}

let generateEngineerCard = (Engineer) => {
  return `
  <div class="card m-1 shadow" style="width: 20rem">
    <div class='card-header bg-primary'>
      <h3 class="card-title text-white">${Engineer.getName()}</h3>
      <h6 class="card-text text-white"><i class="fa fa-glasses"></i> ${Engineer.getRole()}</h6>
    </div>
    <div class="card-body">
      <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${Engineer.getId()}</li>
        <li class="list-group-item">Email: ${Engineer.getEmail()}</li>
        <li class="list-group-item">GitHub: ${Engineer.getGithub()}</li>
      </ul>
    </div>
  </div>
  `
};

let generateInternCard = (Intern) => {
  return `
  <div class="card m-1 shadow" style="width: 20rem">
    <div class='card-header bg-primary'>
      <h3 class="card-title text-white">${Intern.getName()}</h3>
      <h6 class="card-text text-white"><i class="fa fa-graduation-cap"></i> ${Intern.getRole()}</h6>
    </div>
    <div class="card-body">
      <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${Intern.getId()}</li>
        <li class="list-group-item">Email: ${Intern.getEmail()}</li>
        <li class="list-group-item">School: ${Intern.getSchool()}</li>
      </ul>
    </div>
  </div>
  `
}

function generateTeam(team) {
  console.log(team)
return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="https://use.fontawesome.com/515a6e138a.css">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
  <script src="https://use.fontawesome.com/515a6e138a.js"></script>
  <title>My Team</title>
</head>
<body>
<div class="jumbotron jumbotron-fluid bg-danger">
  <div class="container">
    <h1 class="display-3 text-center text-white p-5">My Team</h1>
  </div>
</div>
<div class="d-flex flex-row flex-wrap justify-content-center">
${generateCards(team)}
</div>
</body>
</html>
    `
}

module.exports = generateTeam;