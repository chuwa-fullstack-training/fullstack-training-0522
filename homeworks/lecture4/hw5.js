// write a function to deep clone an object with circular reference
// here i referred to an article on Stack Overflow.

function deepCloneWithCircular(obj, cloned = new WeakMap()) {
  if (typeof obj !== "object" || obj === null) {
    return obj; // Base case: return non-object values directly
  }

  if (cloned.has(obj)) {
    return cloned.get(obj); // Return the cloned object if already cloned
  }

  const clone = Array.isArray(obj) ? [] : {}; // Create a new empty object or array

  cloned.set(obj, clone); // Store the cloned object in the map

  for (let key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      clone[key] = deepCloneWithCircular(obj[key], cloned); // Recursively clone nested properties
    }
  }

  return clone;
}

const circularObj = {
  name: "foo",
  child: null,
};
circularObj.child = circularObj;

const clonedData = deepCloneWithCircular(data);
console.log(clonedData);
console.log(clonedData.child === clonedData); // true
