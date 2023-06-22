// Basic Types
let id: number = 5;
let company: string = 'Traversy Media';
let isPublished: boolean = true;
let x: any = 'Hello';

// you can initialize a variable without a value
let age: number;
age = 30;

// arrays
let ids: number[] = [1, 2, 3, 4, 5];
let arr: any[] = [1, true, 'Hello'];

// tuple - structure matters
let person: [number, string, boolean] = [1, 'Brad', true];
// tuple array
let employee: [number, string][];
employee = [
    [1, 'Brad'],
    [2, 'John'],
    [3, 'Jill'],
];

// union
let pid: string | number;
pid = '22';
pid = 22;

// enum
enum Direction1 {   
    Up = 1,
    Down,
    Left,
    Right,
}

console.log(Direction1.Left); // 3

enum Direction2 {
    Up = 'Up',
    Down = 'Down',
    Left = 'Left',
    Right = 'Right',
}

// objects
type User = {
    id: number,
    name: string,
};

const user: User = {
    id: 1,
    name: 'John',
};

// type assertion - two ways
let cid: any = 1;
// let customerId = <number>cid;
let customerId = cid as number;

// functions
function addNum(x: number, y: number): number {
    return x + y;
}

// void
function log(message: string | number): void {
    console.log(message);
}   

// interfaces - usually used with objects
interface UserInterface {
    readonly id: number, // can't be changed
    name: string,
    age?: number, // optional
}

const user1: UserInterface = {
    id: 1,
    name: 'John',
};

// interface can't be used with primitive or union types
type Point = number | string;

// interface for functions
interface MathFunc {
    (x: number, y: number): number,
}

const add: MathFunc = (x: number, y: number): number => x + y;
const sub: MathFunc = (x: number, y: number): number => x - y;

// classes implement interfaces
class Person implements PersonInterface {
    // public, private, protected (public by default)
    //private id: number; // only accessible inside the class
    protected id: number; // only accessible inside the class and subclasses
    name: string;

    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }

    register() {
        return `${this.name} is now registered`;
    }
}

interface PersonInterface {
    id: number,
    name: string,
    register(): string,
}


// inheritance - subclass inherits from superclass
class Employee extends Person {
    position: string;

    constructor(id: number, name: string, position: string) {
        super(id, name); // calls the parent constructor
        this.position = position;
    }
}