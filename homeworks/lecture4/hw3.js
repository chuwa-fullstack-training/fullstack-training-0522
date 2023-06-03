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
      if (typeof Singleton.instance === "object") {
        return Singleton.instance;
      }
  
      // Add your initialization code here
      this.data = [];
  
      Singleton.instance = this;
    }
  
    // Add your methods here
    addItem(item) {
      this.data.push(item);
    }
  
    getData() {
      return this.data;
    }
  }
  
  // Usage
  const instance1 = new Singleton();
  const instance2 = new Singleton();
  
  instance1.addItem("Item 1");
  instance2.addItem("Item 2");
  
  console.log(instance1.getData()); // Output: ["Item 1", "Item 2"]
  console.log(instance2.getData()); // Output: ["Item 1", "Item 2"]
  console.log(instance1 === instance2); // Output: true
  