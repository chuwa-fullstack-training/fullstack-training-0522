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

Triangle.prototype = Object.create(Shape.prototype);
Triangle.prototype.constructor = Triangle;

// your code goes here
// 1. implement a method getPerimeter for Triangle class
Triangle.prototype.getPerimeter = function() {
    let a = this.a || NaN;
    let b = this.b || NaN;
    let c = this.c || NaN;
    return a + b + c;
};

// 2. implement a method getArea for Triangle class
Triangle.prototype.getArea = function() {
    let a = this.a || NaN;
    let b = this.b || NaN;
    let c = this.c || NaN;
    let sP = (a + b + c) / 2;
    return sP != NaN ? Math.sqrt(sP * (sP - a) * (sP - b) * (sP - c)) : NaN;
};

// 3. implement a new class Circle. this class should inherit from Shape class, and have a radius property.
function Circle(radius) {
    this.type = "circle"
    this.radius = radius;
}
Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;

// 4. implement a method area for Circle class
Circle.prototype.getArea = function() {
    return Math.PI * Math.pow(this.radius, 2);
};

// 5. implement a method circumference for Circle class
Circle.prototype.getCircumference = function() {
    return this.radius * 2 * Math.PI;
};

// 6. change all code above to use ES6 class syntax
class Shape {
    #type;

    constructor(type) {
        this.#type = type;
    }

    getType() {
        return this.#type;
    }
}

class Triangle extends Shape {
    #a;
    #b;
    #c;

    constructor(a, b, c) {
        super('triangle');
        this.#a = a;
        this.#b = b;
        this.#c = c;
    }

    getPerimeter() {
        let a = this.#a || NaN;
        let b = this.#b || NaN;
        let c = this.#c || NaN;
        return a + b + c;
    }

    getArea() {
        let a = this.a || NaN;
        let b = this.b || NaN;
        let c = this.c || NaN;
        let sP = (a + b + c) / 2;
        return sP != NaN ? Math.sqrt(sP * (sP - a) * (sP - b) * (sP - c)) : NaN;
    }
}

class Circle extends Shape {
    #radius;

    constructor(radius) {
        super('circle');
        this.#radius = radius;
    }

    getArea() {
        return Math.PI * Math.pow(this.#radius, 2);
    }

    getCircumference() {
        return this.#radius * 2 * Math.PI;
    }
}