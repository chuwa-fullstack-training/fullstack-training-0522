// write a function to deep clone an object with circular reference
//
const data = {
  name: 'foo',
  child: null,
};
data.child = data;

const cloneDeepWithLoop = (obj, cloned = new WeakMap()) => {
  // Implement the function here
  if (obj === null || typeof obj !== 'object') {
    return obj;
  }
  // Check if the object has already been cloned
  if (cloned.has(obj)) {
    return cloned.get(obj);
  }
  // Create a new object/array based on the type of the original object
  const clone = Array.isArray(obj) ? [] : {};

  // Register the clone in the map to handle circular references
  cloned.set(obj, clone);
  // Clone all properties recursively
  for (let key in obj) {
    clone[key] = cloneDeepWithLoop(obj[key], cloned);
  }

  return clone;
};

const clonedData = cloneDeepWithLoop(data);
console.log(clonedData.child === clonedData); // true
