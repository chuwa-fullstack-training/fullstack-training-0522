function Shape() {
    this.type = 'shape';
}

Shape.prototype.getType = function() {
    return this.type;
}

function Triangle(a, b, c) {
    this.type = 'triangle';
    this.a = a;
    this.b = b;
    this.c = c;
}

function Circle(radius) {
    this.type = 'circle';
    this.radius = radius;
}

Triangle.prototype = Object.create(Shape.prototype);
Triangle.prototype.constructor = Triangle;

Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;

// if getPerimeter is defined before Triangle.prototype is overwritten with Object.create(Shape.prototype),
// it will erase the getPerimeter method from Triangle.prototype. 

Triangle.prototype.getPerimeter = function(){
    return this.a + this.b + this.c;
}
Triangle.prototype.getArea = function(){
    var p = this.a + this.b + this.c;

    return Math.sqrt(p * (p-this.a) * (p-this.b) * (p-this.c));
}

Circle.prototype.getPerimeter = function(){
    return 2*3.14*this.radius;
}
Circle.prototype.getArea = function(){
    return 3.14 * this.radius * this.radius;
}


const triangleA = new Triangle(3,4,5);
console.log(triangleA.getType());
console.log(triangleA.getPerimeter());
console.log(triangleA.getArea());

const circleA = new Circle(3);
console.log(circleA.getType());
console.log(circleA.getPerimeter());
console.log(circleA.getArea());

// your code goes here
// 1. implement a method getPerimeter for Triangle class
// 2. implement a method getArea for Triangle class

// 3. implement a new class Circle. this class should inherit from Shape class, and have a radius property.
// 4. implement a method area for Circle class
// 5. implement a method circumference for Circle class

// 6. change all code above to use ES6 class syntax