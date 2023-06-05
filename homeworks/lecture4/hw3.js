/** implement Singleton pattern in both ES5 and ES6
 * https://en.wikipedia.org/wiki/Singleton_pattern
 *
 * Example:
 * const instance1 = new Singleton();
 * const instance2 = new Singleton();
 * console.log(instance1 === instance2); // Output: true
 */

/* singleton pattern:
 * Declaring all constructors of the class to be private
 * Providing a static method that returns a reference to the instance
 * The instance is usually stored as a private static variable
 */
// ES5 implementaiton: here we use IIFE to implement
var SingletonES5 = (function () {
  var instance;

  function createInstance() {
    var obj = { name: "Singleton Instance" };
    return obj;
  }

  return {
    getInstance: function () {
      if (!instance) {
        instance = createInstance();
      }
      return instance;
    },
  };
})();

let instance1 = SingletonES5.getInstance();
let instance2 = SingletonES5.getInstance();

console.log(instance1 === instance2); // true

// ES6 implementaiton: here we use class
class SingletonES6 {
  constructor() {
    if (!SingletonES6.instance) {
      this.name = "Singleton Instance";
      SingletonES6.instance = this;
    }
    return SingletonES6.instance;
  }
}
let instance3 = new SingletonES6();
let instance4 = new SingletonES6();

console.log(instance3 === instance4); // true
