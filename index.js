// Dependencies
const fs = require('fs');
const inquirer = require('inquirer');
const generateHTML = require('./src/generateHtmlPage');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const Engineer = require('./lib/Engineer');
//function to clear the CLI
const readline = require('readline');
const clear = () => readline.cursorTo(process.stdout, 0, 0);

class Prompt {
    constructor() {
        this.teamArray = [];
    }
    getTeamArray() {
        return this.teamArray;
    }

    async questions() {
        console.clear();
        const { employeeType } = await inquirer.prompt({
            type: 'list',
            name: 'employeeType',
            message: "What empoyee type would you like to add to the team?",
            choices: ['Manager', 'Engineer', 'Intern', 'Finished entering my team info']

        });



        switch (employeeType) 
        {
            case 'Manager':// if (employeeType === 'Manager')
                {
                    const templateData = await inquirer.prompt([
                        {
                            type: 'input',
                            name: 'name',
                            message: "Please enter the manager's name",
                            validate: nameInput => {
                                if (nameInput) {
                                    return true;
                                } else {
                                    console.log("Please enter the manager's name!");
                                    return false;
                                }
                            }
                        },

                        {
                            type: 'number',
                            name: 'id',
                            message: "Please enter the manager's employee id",
                            validate: idInput => {
                                if (idInput) {
                                    return true;
                                } else {
                                    console.log("Please enter a correct answer, the employee id should be a number!");
                                    return false;
                                }
                            }
                        },
                        {
                            type: 'input',
                            name: 'email',
                            message: "Please enter the manager's email",
                            validate: emailInput => {
                                if (emailInput) {
                                    return true;
                                } else {
                                    console.log("Please enter the correct manager's email!");
                                    return false;
                                }
                            }
                        },
                        {
                            type: 'number',
                            name: 'officeNumber',
                            message: "Please enter the manager's office number",
                            validate: officeNumberInput => {
                                if (officeNumberInput) {
                                    return true;
                                } else {
                                    console.log("Please enter a correct answer, the office number should be a number!");
                                    return false;
                                }
                            }
                        },
                    ]);

                    const newManager = new Manager(templateData.name, templateData.id, templateData.email, templateData.officeNumber);
                    this.teamArray.push(newManager);
                    this.questions();
                    break;
                }

            case 'Engineer':// else if (employeeType === 'Engineer')
                {
                    const templateData = await inquirer.prompt([

                        {
                            type: 'input',
                            name: 'name',
                            message: "Please enter the engineer's name",
                            validate: nameInput => {
                                if (nameInput) {
                                    return true;
                                } else {
                                    console.log("Please enter the engineer's name!");
                                    return false;
                                }
                            }
                        },
                        {
                            type: 'number',
                            name: 'id',
                            message: "Please enter the engineer's employee id",
                            validate: idInput => {
                                if (idInput) {
                                    return true;
                                } else {
                                    console.log("Please enter a correct answer, the employee id should be a number!");
                                    return false;
                                }
                            }
                        },
                        {
                            type: 'input',
                            name: 'email',
                            message: "Please enter the engineer's email",
                            validate: emailInput => {
                                if (emailInput) {
                                    return true;
                                } else {
                                    console.log("Please enter the correct engineer's email!");
                                    return false;
                                }
                            }
                        },
                        {
                            type: 'input',
                            name: 'github',
                            message: "Please enter the engineer's github username",
                            validate: githubInput => {
                                if (githubInput) {
                                    return true;
                                } else {
                                    console.log("Please enter the correct engineer's github username!");
                                    return false;
                                }
                            }
                        }

                    ]);
                    const newEngineer = new Engineer(templateData.name, templateData.id, templateData.email, templateData.github);
                    this.teamArray.push(newEngineer);
                    this.questions();
                    break;
                }

            case 'Intern':// else if (employeeType === 'Intern') 
                {
                    const templateData = await inquirer.prompt([



                        {
                            type: 'input',
                            name: 'name',
                            message: "Please enter the intern's name",
                            validate: nameInput => {
                                if (nameInput) {
                                    return true;
                                } else {
                                    console.log("Please enter the intern's name!");
                                    return false;
                                }
                            }
                        },
                        {
                            type: 'number',
                            name: 'id',
                            message: "Please enter the intern's employee id",
                            validate: idInput => {
                                if (idInput) {
                                    return true;
                                } else {
                                    console.log("Please enter a correct answer, the employee id should be a number!");
                                    return false;
                                }
                            }
                        },
                        {
                            type: 'input',
                            name: 'email',
                            message: "Please enter the intern's email",
                            validate: emailInput => {
                                if (emailInput) {
                                    return true;
                                } else {
                                    console.log("Please enter the correct intern's email!");
                                    return false;
                                }
                            }
                        },
                        {
                            type: 'input',
                            name: 'school',
                            message: "Please enter the intern's school name",
                            validate: schoolInput => {
                                if (schoolInput) {
                                    return true;
                                } else {
                                    console.log("Please enter the correct intern school's name!");
                                    return false;
                                }
                            }
                        }

                    ]);


                    const newIntern = new Intern(templateData.name, templateData.id, templateData.email, templateData.school);
                    this.teamArray.push(newIntern);
                    this.questions();
                    break;
                }

            case 'Finished entering my team info':// else if (employeeType === 'I finished entering my team info')
                {
                    const pagehtml = generateHTML(this.getTeamArray());
                    fs.writeFile('./dist/index.html', pagehtml, err => {
                        if (err) throw new Error(err);

                        console.log('\nintex.html page created!');
                    });
                    break;
                }


        }
    }
};





// Activates prompts in CLI
clear();
const prompt = new Prompt();
prompt.questions();

module.exports = Prompt;