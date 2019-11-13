const inquirer = require("inquirer");
const fs = require("fs");
const axios = require("axios");
const generateHTML = require("./generateHTML");
const PDF = require("html-pdf");

function buildProfile() {
    inquirer
        .prompt([
            {
                type: "input",
                name: "username",
                message: "What is your GitHub username?"
            },
            {
                type:"list",
                name: "color",
                message: "Which color do you prefer?",
                choices: ['blue','red','pink','green']
            }
        ])
        .then(function(data) {
            createFile("index.html", generateHTML.createHTML(data));
            const queryURL = `https://api.github.com/users/${data.username}`;
            axios.get(queryURL).then(function(res) {
                addToFile('index.html', generateHTML.devInfo(res));
            })
            return data;
        })

        .then(function(data) {
            const queryURL2 =  `https://api.github.com/users/${data.username}/starred`;
            axios.get(queryURL2).then(function(res){
                const starCount = res.data.length;
                finishFile('index.html', generateHTML.devInfo2(starCount));
            })
        })
}

function createFile(html, data) {
    fs.writeFile(html, data, function(err) {
        if (err) {
            return Error;
        }
    });
}

function addToFile (html, data) {
    fs.appendFile(html, data, function(err) {
        if (err) {
            return Error
        }
    });
}

function finishFile (html, data) {
    fs.appendFile(html, data, function(err) {
        if (err) {
            return Error
        }else{
            createPDF();
        }
    });
}

async function createPDF() {
    var readHTML = fs.readFileSync('index.html', 'utf8');
    var format = { format: 'A4'};

    PDF.create(readHTML, format).toFile('./devloperProfile.pdf', function (err, res) {
        if (err) return console.log(err);
        console.log(res)
    })
}

buildProfile();


