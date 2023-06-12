/** implement Singleton pattern in both ES5 and ES6
 * https://en.wikipedia.org/wiki/Singleton_pattern
 * 
 * Example:
 * const instance1 = new Singleton();
 * const instance2 = new Singleton();
 * console.log(instance1 === instance2); // Output: true
 */

class Singleton {
  constructor() {
    // check if an instance of Singleton already exists
    if (typeof Singleton.instance === 'object') {
      return Singleton.instance;
    }

    Singleton.instance = this;

    // return this newly created one
    return this;
  }
}

const instance1 = new Singleton();
const instance2 = new Singleton();
console.log(instance1 === instance2); // Output: true
