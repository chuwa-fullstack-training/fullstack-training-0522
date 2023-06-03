// write a function to deep clone an object with circular reference
// 
// const data = {
//     name: 'foo',
//     child: null
// }
// data.child = data;

const cloneDeepWithLoop = (obj) => {
    // Implement the function here
}

function deepClone(obj, hash = new WeakMap()) {
    if (Object(obj) !== obj) {
      return obj; // Return non-object values as-is
    }
  
    if (hash.has(obj)) {
      return hash.get(obj); // Return the cloned object if it has already been cloned
    }
  
    const clone = Array.isArray(obj) ? [] : {};
  
    hash.set(obj, clone); // Save the cloned object to handle circular references
  
    for (const key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        clone[key] = deepClone(obj[key], hash); // Recursively clone nested objects/arrays
      }
    }
  
    return clone;
  }
  
  // Example usage:
  const obj = {
    name: "John",
  };
  
  obj.self = obj; // Create a circular reference
  
  const clonedObj = deepClone(obj);
  
  console.log(clonedObj === obj); // Output: false
  console.log(clonedObj.name);    // Output: "John"
  console.log(clonedObj);
  console.log(clonedObj.self === clonedObj); // Output: true (circular reference is maintained)
  