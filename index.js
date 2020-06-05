const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

const writeToFile = util(fs.writeFile);


function promptUser() {
    return inquirer.prompt([
        {
            type: "input",
            name: "Github Username",
            message: "Enter Github Username"
        },
        {
            type: "input",
            name: "Title",
            message: "What is your project title?"
        },
        {
            type: "input",
            name: "Description",
            message: "What is your project about?"
        },
        {
            type: "input",
            name: "Table of Contents",
            message: "Add table of contents"
        },
        {
            type: "input",
            name: "Installations",
            message: "What is being installed?"
        },

        {
            type: "input",
            name: "Usage",
            message: "what is this project used for?"
        },
        {
            type: "input",
            name: "License",
            message: "Enter the license for this project"
        },
        {
            type: "input",
            name: "Contributors",
            message: "Enter anyone who helped"
        },

        {
            type: "input",
            name: "Tests",
            message: "What tests were run?"
        },
        {
            type: "input",
            name: "Questions",
            message: "Enter any questions you have to answer in the future."
        },


    ]);
}
function init() {
    console.log(data)
    try {
        const data = await promptUser();

        const writeToFile = generateMarkdown(data);

        await writeToFile("index.js");

        console.log();
    } catch (err) {
        console.log(err);
    }
}
writeToFile();
init();

    
    })
