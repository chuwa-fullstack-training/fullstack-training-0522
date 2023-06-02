function Shape() {
    this.type = 'shape';
}

Shape.prototype.getType = function() {
    return this.type;
}

const shapeInstance = new Shape();
console.log(shapeInstance.type);
console.log(shapeInstance.getType());

function Triangle(a, b, c) {
    this.type = 'triangle';
    this.a = a;
    this.b = b;
    this.c = c;
}

Triangle.prototype = Object.create(Shape.prototype);
Triangle.prototype.constructor = Triangle;

// your code goes here

// 1. implement a method getPerimeter for Triangle class
// 2. implement a method getArea for Triangle class

Triangle.prototype.getPerimeter = function() {
    return this.a + this.b + this.c;
}
Triangle.prototype.getArea = function() {
    let s = (this.a + this.b + this.c) / 2;
    return Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));
}
const triangleInstance = new Triangle (1, 3, 3);
console.log(triangleInstance.type);
console.log(triangleInstance.getType());
console.log(triangleInstance.getPerimeter());
console.log(triangleInstance.getArea());

// 1. implement a method getPerimeter for Triangle class
// 2. implement a method getArea for Triangle class

// 3. implement a new class Circle. this class should inherit from Shape class, and have a radius property.
// 4. implement a method area for Circle class
// 5. implement a method circumference for Circle class

function Circle(radius) {
    this.type = 'circle';
    this.radius = radius;
}

Circle.prototype = Object.create(Shape.prototype);//extends
Circle.prototype.constructor = Circle;//constructor points to the functional object itself
//methods
Circle.prototype.area = function() {
    return Math.PI * this.radius * this.radius;
}
Circle.prototype.circumference = function() {
    return 2 * Math.PI * this.radius;
}

const circleInstance = new Circle(1);
console.log(circleInstance.type);
console.log(circleInstance.getType());
console.log(circleInstance.area());
console.log(circleInstance.circumference());

// output:
// shape
// shape
// triangle
// triangle
// 7
// 1.479019945774904
// circle
// circle
// 3.141592653589793
// 6.283185307179586
// 6. change all code above to use ES6 class syntax
