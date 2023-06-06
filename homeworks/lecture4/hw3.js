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
    

    constructor(){
        const init = this.constructor.init;
        
        if (init) {
            return init;
        }

        //this.init = this;
        this.constructor.init = this;
    }
    
    
}
// https://stackoverflow.com/questions/1635800/javascript-best-singleton-pattern
const instance1 = new Singleton();
const instance2 = new Singleton();
console.log(instance1 === instance2);
