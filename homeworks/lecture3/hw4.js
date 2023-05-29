function Shape() {
  this.type = "shape";
}

Shape.prototype.getType = function () {
  return this.type;
};

function Triangle(a, b, c) {
  this.type = "triangle";
  this.a = a;
  this.b = b;
  this.c = c;
}

Triangle.prototype = Object.create(Shape.prototype);
Triangle.prototype.constructor = Triangle;

// your code goes here
// 1. implement a method getPerimeter for Triangle class
// 2. implement a method getArea for Triangle class

Triangle.prototype.getPerimeter = function () {
  return this.a + this.b + this.c;
};
Triangle.prototype.getArea = function () {
  const p = this.getPerimeter() / 2;
  return Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c)).toFixed(2);
};
/*--------------------- output------------------*/
const triangle1 = new Triangle(5, 12, 13);
console.log(
  "for 5, 12, 13, perimeter is ",
  triangle1.getPerimeter(),
  ", Area is ",
  triangle1.getArea()
);

const triangle2 = new Triangle(6, 10, 12);
console.log(
  "for 6, 10, 12, perimeter is ",
  triangle2.getPerimeter(),
  ", Area is ",
  triangle2.getArea()
);
// 3. implement a new class Circle. this class should inherit from Shape class, and have a radius property.
// 4. implement a method area for Circle class
// 5. implement a method circumference for Circle class

function Circle(r) {
  this.type = "circle";
  this.r = r;
  //   test for make radius property private
  //   var r = r;
  //   this.getPerimeter = function () {
  //     return "Perimeter test, " + (Math.PI * 2 * r).toFixed(2);
  //   };
  //   this.getArea = function () {
  //     return "Area test, " + (Math.PI * Math.pow(r, 2)).toFixed(2);
  //   };
}

Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;
Circle.prototype.getPerimeter = function () {
  return (Math.PI * 2 * this.r).toFixed(2);
};

Circle.prototype.getArea = function () {
  return (Math.PI * Math.pow(this.r, 2)).toFixed(2);
};
/*--------------------- output------------------*/
const circle1 = new Circle(5);
console.log("inheritance Shape():", circle1.getType());
console.log(
  "for r = ",
  circle1.r,
  "perimeter is ",
  circle1.getPerimeter(),
  ", Area is ",
  circle1.getArea()
);
// 6. change all code above to use ES6 class syntax

class TriangleClass extends Shape {
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

  getArea() {
    const p = this.getPerimeter() / 2;
    return Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c)).toFixed(2);
  }
}

const triangle3 = new TriangleClass(5, 12, 13);
console.log("class Output for", triangle3.getType());
console.log(
  "for 5, 12, 13, perimeter is ",
  triangle3.getPerimeter(),
  ", Area is ",
  triangle3.getArea()
);

const triangle4 = new TriangleClass(6, 10, 12);
console.log(
  "for 6, 10, 12, perimeter is ",
  triangle4.getPerimeter(),
  ", Area is ",
  triangle4.getArea()
);

class CircleClass extends Shape {
  constructor(r) {
    super();
    this.r = r;
  }
  getPerimeter = function () {
    return (Math.PI * 2 * this.r).toFixed(2);
  };

  getArea = function () {
    return (Math.PI * Math.pow(this.r, 2)).toFixed(2);
  };
}

const circle2 = new Circle(5);
console.log("class Output for", circle2.getType());
console.log(
  "for r = ",
  circle2.r,
  "perimeter is ",
  circle2.getPerimeter(),
  ", Area is ",
  circle2.getArea()
);
