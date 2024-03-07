// file for user input which requires inquirer
import inquirer from 'inquirer';
import fs from 'fs';
import SVGGenerator from './svgGenerator.js';

class SVG {
  constructor() {
    this.text = '';
    this.textColor = '';
    this.shape = '';
    this.shapeColor = '';
  }

  async run() {
    try {
      const answers = await this.promptDetails();
      this.text = answers.text;
      this.textColor = answers.textColor;
      this.shape = answers.shape;
      this.shapeColor = answers.shapeColor;
      const svgGenerator = new SVGGenerator(this.text, this.textColor, this.shape, this.shapeColor);
      const svgContent = svgGenerator.generateSVG();
      fs.writeFileSync('logo.svg', svgContent);
      console.log('Generated logo.svg');
    } catch (err) {
      console.error('An error occurred:', err);
    }
  }

  promptDetails() {
    return inquirer.prompt([
      {
        type: 'input',
        name: 'text',
        message: 'Enter logo text (up to 3 characters):',
        validate: input => input.length <= 3 ? true : 'Text must be up to 3 characters.'
      },
      {
        type: 'input',
        name: 'textColor',
        message: 'Enter the text color:',
      },
      {
        type: 'list',
        name: 'shape',
        message: 'Choose a shape:',
        choices: ['triangle', 'circle', 'square']
      },
      {
        type: 'input',
        name: 'shapeColor',
        message: 'Enter the shape color:',
      }
    ]);
  }
}

export default SVG;
