// jest tests for shapes
import { Triangle, Circle, Square } from '../lib/shapes.js';

describe('Shape classes', () => {
  describe('Triangle', () => {
    it('should render a triangle SVG string', () => {
      const color = 'green';
      const triangle = new Triangle(color);
      expect(triangle.render()).toEqual(`<polygon points="150, 18 244, 182 56, 182" fill="${color}" />`);
    });
  });

  describe('Circle', () => {
    it('should render a circle SVG string', () => {
      const color = 'red';
      const circle = new Circle(color);
      expect(circle.render()).toEqual(`<circle cx="150" cy="100" r="80" fill="${color}" />`);
    });
  });

  describe('Square', () => {
    it('should render a square SVG string', () => {
      const color = 'blue';
      const square = new Square(color);
      expect(square.render()).toEqual(`<rect x="35" y="60" width="230" height="230" fill="${color}" />`);
    });
  });
});
