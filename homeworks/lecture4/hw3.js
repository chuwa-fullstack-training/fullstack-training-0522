/** implement Singleton pattern in both ES5 and ES6
 * https://en.wikipedia.org/wiki/Singleton_pattern
 * 
 * Example:
 * const instance1 = new Singleton();
 * const instance2 = new Singleton();
 * console.log(instance1 === instance2); // Output: true
 */

// your code here
// ES5
var Singleton = (function () {
    // store the instance of the singleton object
    var instance;

    // constructor
    function Singleton() {
        // if the instance already exists, return it
        if (instance) {
            return instance;
        }
        // otherwise, create a new instance
        instance = this;
    }

    return Singleton;
})();

// ES6
class Singleton {
    constructor() {
        if (!Singleton.instance) {
            Singleton.instance = this;
        }
        return Singleton.instance;
    }
}

// Test
const instance1 = new Singleton();
const instance2 = new Singleton();
console.log(instance1 === instance2); // Output: true