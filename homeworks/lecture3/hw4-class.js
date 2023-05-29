// your code goes here

// 6. change all code above to use ES6 class syntax

class Shape {
    type;

    constructor(){
        this.type = 'shape';
    }

    getType(){
        return this.type;
    }
}//if #type: return undefined
var shapeInstance = new Shape();
console.log(shapeInstance.type);
console.log(shapeInstance.getType());

// 1. implement a method getPerimeter for Triangle class
// 2. implement a method getArea for Triangle class

class Triangle extends Shape {
    a;
    b;
    c;
    type;

    constructor(a, b, c) {
        super();
        this.type = 'triangle';
        this.a = a;
        this.b = b;
        this.c = c;   
    }

    getPerimeter() {
        return (this.a + this.b + this.c);
    }

    getArea() {
        //Heron's formula
        let s = (this.a + this.b + this.c) / 2;
        return Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));
    }
}
var triangleInstance = new Triangle (1, 3, 3);
console.log(triangleInstance.type);
console.log(triangleInstance.getType());
console.log(triangleInstance.getPerimeter());
console.log(triangleInstance.getArea());

// 3. implement a new class Circle. this class should inherit from Shape class, and have a radius property.
// 4. implement a method area for Circle class
// 5. implement a method circumference for Circle class

class Circle extends Shape {
    radius;
    type;

    constructor(radius){
        super();
        this.type = 'circle';
        this.radius = radius;
    }

    area() {
        return Math.PI * this.radius * this.radius;
    }

    circumference() {
        return 2 * Math.PI * this.radius;
    }
}

var circleInstance = new Circle (1);
console.log(circleInstance.type);
console.log(circleInstance.getType());
console.log(circleInstance.area());
console.log(circleInstance.circumference());
