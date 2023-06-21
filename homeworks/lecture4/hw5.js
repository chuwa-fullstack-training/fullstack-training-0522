// write a function to deep clone an object with circular reference
// 
const data = {
    name: 'foo',
    child: null
}
data.child = data;

const cloneDeepWithLoop = (obj, clonedMap = new Map()) => {
    // Implement the function here
    if (typeof obj !== 'object' || obj === null) {
        return obj; 
      }
    
      if (clonedMap.has(obj)) {
        return clonedMap.get(obj); 
      }
    
      const clonedObj = Array.isArray(obj) ? [] : {};
      clonedMap.set(obj, clonedObj); 
    
      for (const key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          clonedObj[key] = cloneDeepWithLoop(obj[key], clonedMap); 
        }
      }
    
      return clonedObj;
    };

console.log(cloneDeepWithLoop(data))