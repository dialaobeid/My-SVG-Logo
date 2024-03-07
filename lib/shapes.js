// File that exports `Triangle`, `Circle`, and `Square` classes
class Shape {
  constructor(color) {
    this.color = color;
  }

  setColor(color) {
    this.color = color;
  }

  getColor() {
    return this.color;
  }

  render() {
    throw new Error('Render method must be implemented by subclass');
  }
}

class Triangle extends Shape {
  render() {
    return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`;
  }
}

class Circle extends Shape {
  render() {
    return `<circle cx="150" cy="100" r="80" fill="${this.color}" />`;
  }
}

class Square extends Shape {
  render() {
    return `<rect x="35" y="60" width="230" height="230" fill="${this.color}" />`;
  }
}

export { Triangle, Circle, Square };
