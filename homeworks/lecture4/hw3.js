/** implement Singleton pattern in both ES5 and ES6
 * https://en.wikipedia.org/wiki/Singleton_pattern
 *
 * Example:
 * const instance1 = new Singleton();
 * const instance2 = new Singleton();
 * console.log(instance1 === instance2); // Output: true
 */

// your code here
class Singleton {
  constructor() {
    if (!Singleton.instance) {
      Singleton.instance = this;
    }
    return Singleton.instance;
  }
}

const instance1 = new Singleton();
const instance2 = new Singleton();
console.log(instance1 === instance2);

var Singleton2 = (function () {
  var instance;

  function createInstance() {
    var object = new Object();
    return object;
  }
  return {
    getInstance: () => {
      if (!instance) instance = createInstance();
      return instance;
    },
  };
})();

var instance3 = Singleton2.getInstance();
var instance4 = Singleton2.getInstance();
console.log(instance3 === instance4);
