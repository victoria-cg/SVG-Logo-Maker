//plan: get user input for SVG options using inquirer
//imports inquirer package to use in this module
const inquirer = require("inquirer");

//creates an array of objects that will ask questions to the user with inquirer
//the object will name will be stored as its key and the value will be user response to the question
let promptQuestions = [
 {
    type: "input",
    message: "What logo text do you want? (3 character maximum)",
    name: "text",
 },
 {
    type: "input",
    message: "What text color do you want? (color name or hex code)",
    name: "textColor",
 },
 {
    type: "input",
    message: "What logo shape do you want (circle, triangle, or square)?",
    name: "shape",
 },
 {
    type: "input",
    message: "What shape color do you want? (color name or hex code)",
    name: "shapeColor",
 }
];

//async function awaits fulfillment of user input promise and then returns that information
const askForUserInput = async () => {
    const userInput = await inquirer.prompt(promptQuestions);
    return userInput;
};

//Export information from askForUserInput so that it can be used by index.js and the rest of the userInput.js code can stay encapusulated in this JS file
module.exports =askForUserInput;
