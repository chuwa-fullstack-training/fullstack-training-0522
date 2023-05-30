// function Shape() {
//     this.type = 'shape';
// }

// Shape.prototype.getType = function() {
//     return this.type;
// }

// function Triangle(a, b, c) {
//     this.type = 'triangle';
//     this.a = a;
//     this.b = b;
//     this.c = c;
// }

// Triangle.prototype = Object.create(Shape.prototype);
// Triangle.prototype.constructor = Triangle;

// // your code goes here
// // 1. implement a method getPerimeter for Triangle class
// Triangle.prototype.getPerimeter = function(){
//     return this.a+this.b+this.c;
// }
// Triangle(1,2,3).getPerimeter();



// 2. implement a method getArea for Triangle class

// 3. implement a new class Circle. this class should inherit from Shape class, and have a radius property.
// 4. implement a method area for Circle class
// 5. implement a method circumference for Circle class

// 6. change all code above to use ES6 class syntax



class Shape {
    constructor(){
        this.type = 'shape';
    }
    get getType(){
        return this.type;
    }
}

class Triangle{
    constructor(a,b,c){
        this.type = 'triangle';
        this.a = a;
        this.b = b;
        this.c = c;
    }
    getPerimeter() {
        return this.a+this.b+this.c;
    }
    getArea(){
        return this.a*this.b*this.c;
    }
}

class radius extends Shape{
    constructor(radius){
        super();
        this.radius = radius;
    }
    area() {
        return Math.PI * this.radius*this.radius;
    }
    circumference(){
        return 2*Math.PI*this.radius;
    }
}

let triangle = new Triangle(1,3,3);
console.log(triangle.getPerimeter());
console.log(triangle.getArea());
console.log(triangle.type);

let r = new radius(1);
console.log(r.area());
console.log(r.circumference());