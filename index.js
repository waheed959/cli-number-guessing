#! /usr/bin/env node
import inquirer from "inquirer";
// 1) Computer will generate a random number
// 2) Useer input guessing nuumber
// 3) Compare user input with computer genrated result and show result
const randomNumber = Math.floor(Math.random() * 10 + 1);
const answers = await inquirer.prompt([
    {
        name: "UserGussedNumber",
        type: "number",
        message: "Please guess a number between 1 to 10 :",
    },
]);
if (answers.UserGussedNumber === randomNumber) {
    console.log("Congratulations you gussed right number");
}
else {
    console.log("You gussed wrong number");
}
