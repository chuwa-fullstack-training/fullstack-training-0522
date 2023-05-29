class Shape {
  type;
  constructor(type) {
    this.type = type;
}

}

class Triangle extends Shape {
  
  constructor(a,b,c) {
    super("triangle")
    this.a = a;
    this.b = b;
    this.c = c;
  }

  getPerimeter(){
    return this.a + this.b + this.c;
  }

  getArea(){
    var p = (this.a + this.b + this.c)/2;
    return Math.sqrt(p * (p-this.a) * (p-this.b) * (p-this.c));
  }

}

class Circle extends Shape {
  
  constructor(radius) {
    super("circle")
    this.radius = radius;
  }

  getPerimeter(){
    return 2*3.14*this.radius;
  }

  getArea(){
    return 3.14 * this.radius * this.radius;;
  }

}

const triangleA = new Triangle(3,4,5);
console.log(triangleA.type);
console.log(triangleA.getPerimeter());
console.log(triangleA.getArea());

const circleA = new Circle(3);
console.log(circleA.type);
console.log(circleA.getPerimeter());
console.log(circleA.getArea());

// your code goes here
// 1. implement a method getPerimeter for Triangle class
// 2. implement a method getArea for Triangle class

// 3. implement a new class Circle. this class should inherit from Shape class, and have a radius property.
// 4. implement a method area for Circle class
// 5. implement a method circumference for Circle class

// 6. change all code above to use ES6 class syntax
