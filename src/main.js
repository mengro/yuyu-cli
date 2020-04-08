const inquirer = require("inquirer")

const promptList = [
  {
    type: 'list',
    name: 'frame',
    message: 'please choose this project template',
    choices: ['react']
  },
  {
    type: 'input',
    name: 'description',
    message: 'Please enter the project description: '
  },
  {
    type: 'input',
    name: 'author',
    message: 'Please enter the author name: '
  }
]

const propmpt = () => {
  return new Promise(resolve => {
    inquirer
      .prompt(promptList)
      .then(answer => {
        resolve(answer);
      })
  })
}

propmpt()