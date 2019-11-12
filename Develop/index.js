const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const axios = require("axios");

const writeFileAsync = util.promisify(fs.writeFile);

function promptUser() {
    return inquirer.prompt([
      {
        type: "input",
        name: "name",
        message: "What is your GitHub user name?"
      },
      {
        type: "input",
        name: "color",
        message: "Which color do you prefer?"
      }
    ]);
  }

function writeToFile(fileName, data) {
 
}

promptUser();

