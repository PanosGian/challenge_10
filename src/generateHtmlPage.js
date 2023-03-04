// Packages
const Intern = require('../lib/Intern');
const Manager = require('../lib/Manager');
const Engineer = require('../lib/Engineer');

// Generates manager card
const createManager = managerTitle => { return managerTitle.map(manager => { 
        return `<div class="col">
        <div class="card shadow-lg" style="width: 18rem;">
            <div class="card-body identity">
                <h5 class="card-title">${manager.getName()}</h5>
                <h6 class="card-title"><svg xmlns=" http://www.w3.org/TR/SVG" width="16" height="16"
                        fill="currentColor" class="bi bi-cup-fill" viewBox="0 0 16 16">
                        <path
                            d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"/>
                            </svg> Manager</h6>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">Id: ${manager.getId()}</li>
                <li class="list-group-item">Email: <a href="mailto:">${manager.getEmail()}</a></li>
                <li class="list-group-item">Office number: ${manager.getOfficeNumber()}</li>
            </ul>
        </div>
    </div>`
    }
    ).join('');
};

// Generates intern card
const createIntern = internTitle => { return internTitle.map( intern => {
    return `<div class="col">
    <div class="card shadow-lg" style="width: 18rem;">
        <div class="card-body identity">
            <h5 class="card-title">${intern.getName()}</h5>
            <h6 class="card-title"><svg xmlns=" http://www.w3.org/TR/SVG" width="16" height="16" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16">
            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/>
            </svg>  Intern</h6>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">Id: ${intern.getId()}</li>
            <li class="list-group-item">Email: <a href="mailto:">${intern.getEmail()}</a></li>
            <li class="list-group-item">School: ${intern.getSchool()}</li>
        </ul>
    </div>
    </div>`
    }
    ).join('');
};

// Generates engineer card
//http://www.w3.org/2000/svg

const createEngineer = engineerTitle => { return engineerTitle.map(engineer => {
    return `<div class="col">
    <div class="card shadow-lg" style="width: 18rem;">
        <div class="card-body identity">
            <h5 class="card-title">${engineer.getName()}</h5>
            <h6 class="card-title"><svg xmlns=" http://www.w3.org/TR/SVG" width="16" height="16" fill="currentColor" class="bi bi-wrench" viewBox="0 0 16 16">
                <path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492zM5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0z"/> <path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52l-.094-.319zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115l.094-.319z"/>
                </svg>  Engineer</h6>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">Id: ${engineer.getId()}</li>
            <li class="list-group-item">Email: <a href="mailto:">${engineer.getEmail()}</a></li>
            <li class="list-group-item">GitHub: <a target="_blank" href="https://github.com/${engineer.getGithub()}">${engineer.getGithub()}</a></li>
        </ul>
    </div>
</div>`
}).join('');
};



// Generates cards
const createCards = teamArray => {
    let cardsArray = [];
    const managerTitle = teamArray.filter(team => {
        return team.getRole() === 'Manager';
    });
    const engineerTitle = teamArray.filter(team => {
        return team.getRole() === 'Engineer';
    });
    const internTitle = teamArray.filter(team => {
        return team.getRole() === 'Intern';
    });


    if (managerTitle) {
        cardsArray.push(createManager(managerTitle));
    } 
    if (engineerTitle) {
        cardsArray.push(createEngineer(engineerTitle));
    } 
    if (internTitle) {
        cardsArray.push(createIntern(internTitle));
    }

    return cardsArray.join('');
    };



    
// Generates HTML Page
module.exports = cardsArray => {
  return ` 
  <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>My Team</title>
    <link rel="stylesheet" type="text/css" href="style.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" 
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
</head>

<body>
    <header>
        <h1>My Team</h1>
    </header>

    <main class="container my-5">

        <div class="row">

            ${createCards(cardsArray)}

        </div>

    </main>
</body>

</html>
    `;
  };
  