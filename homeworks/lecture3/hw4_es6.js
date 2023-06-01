class Shape {
    constructor() {
        this.type = 'shape';
    }

    getType() {
        return this.type;
    }
}

class Triangle extends Shape {
    constructor(a, b, c) {
        this.type = 'triangle';
        this.a = a;
        this.b = b;
        this.c = c;
    }

    getPerimeter() {
        return this.a + this.b + this.c;
    }
    
    getArea() {
        let s = this.getPerimeter() / 2;
        return Math.sqrt(s * (s - a) * (s - b) * (s - c));
    }
}

class Circle extends Shape {
    constructor(r) {
        this.type = 'circle';
        this.r = r;
    }

    getArea() {
        return Math.PI * this.r * this.r;
    }

    getCircumference() {
        return 2 * Math.PI * this.r;
    }
}