class Shape {
  constructor() {
    this.type = "shape";
  }

  getType() {
    return this.type;
  }
}

class Triangle extends Shape {
  constructor(a, b, c) {
    super();
    this.type = "triangle";
    this.a = a;
    this.b = b;
    this.c = c;
  }

  getPerimeter() {
    return this.a + this.b + this.c;
  }

  // I use Heron's Formula for calculating the area
  getArea() {
    const s = (this.a + this.b + this.c) / 2;
    const area = Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));
    return area;
  }
}

class Circle extends Shape {
  constructor(radius) {
    super();
    this.type = "circle";
    this.radius = radius;
  }

  getArea() {
    return Math.PI * this.radius ** 2;
  }

  getCircumference() {
    return 2 * Math.PI * this.radius;
  }
}

// test case
const triangle = new Triangle(3, 4, 5);
console.log(triangle.getType()); // 'triangle'
console.log(triangle.getPerimeter()); // 12
console.log(triangle.getArea()); // 6

const circle = new Circle(3);
console.log(circle.getType()); // 'circle'
console.log(circle.getArea()); // 28.274333882308138
console.log(circle.getCircumference()); // 18.84955592153876

// your code goes here
// 1. implement a method getPerimeter for Triangle class
// 2. implement a method getArea for Triangle class

// 3. implement a new class Circle. this class should inherit from Shape class, and have a radius property.
// 4. implement a method area for Circle class
// 5. implement a method circumference for Circle class

// 6. change all code above to use ES6 class syntax
