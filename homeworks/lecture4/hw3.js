/** implement Singleton pattern in both ES5 and ES6
 * https://en.wikipedia.org/wiki/Singleton_pattern
 *
 * Example:
 * const instance1 = new Singleton();
 * const instance2 = new Singleton();
 * console.log(instance1 === instance2); // Output: true
 */
// your code here
// ES5 implementaiton: here we use class
function SingletonES5() {
  if (SingletonES5._instance) {
    return SingletonES5._instance;
  } else {
    SingletonES5._instance = this;
  }
}

let instance1 = new SingletonES5();
let instance2 = new SingletonES5();
console.log(instance1 === instance2);
// ES6 implementaiton: here we use class
class SingletonES6 {
  constructor() {
    if (!SingletonES6._instance) {
      SingletonES6._instance = this;
    }
    return SingletonES6._instance;
  }
}
let instance3 = new SingletonES6();
let instance4 = new SingletonES6();

console.log(instance3 === instance4);
