'use strict';

var inquirer = require("inquirer");

var promptList = [{
  type: 'list',
  name: 'frame',
  message: 'please choose this project template',
  choices: ['react']
}, {
  type: 'input',
  name: 'description',
  message: 'Please enter the project description: '
}, {
  type: 'input',
  name: 'author',
  message: 'Please enter the author name: '
}];

var propmpt = function propmpt() {
  return new Promise(function (resolve) {
    inquirer.prompt(promptList).then(function (answer) {
      resolve(answer);
    });
  });
};

propmpt();