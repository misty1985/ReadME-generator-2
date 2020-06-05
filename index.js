const questions = [
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


]


function writeToFile(fileName, data) {
}

function init() {

}

init();


// promptUser()
//     .then(function (answers) {
//         const html = generateHTML(answers);

//         return writeFileAsync("index.html", html);
//     })
//     .then(function () {
//         console.log("Successfully wrote to index.html");
//     })
//     .catch(function (err) {
//         console.log(err);
//     });
