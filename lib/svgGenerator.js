// File that combines user inputs into a complete SVG file content
import { Triangle, Circle, Square } from './shapes.js';

class SVGGenerator {
  constructor(text, textColor, shapeType, shapeColor) {
    this.text = text;
    this.textColor = textColor;
    this.shape = this.createShape(shapeType, shapeColor);
  }

  createShape(shapeType, shapeColor) {
    switch (shapeType.toLowerCase()) {
      case 'circle':
        return new Circle(shapeColor);
      case 'square':
        return new Square(shapeColor);
      case 'triangle':
        return new Triangle(shapeColor);
      default:
        throw new Error(`Unknown shape type: ${shapeType}`);
    }
  }

  generateSVG() {
    const svgHeader = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">\n`;
    const shapeSVG = `  ${this.shape.render()}\n`;
    const textSVG = `  <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>\n`;
    const svgFooter = `</svg>`;

    return svgHeader + shapeSVG + textSVG + svgFooter;
  }
}

export default SVGGenerator;
