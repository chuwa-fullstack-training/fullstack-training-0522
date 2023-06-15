// write a function to deep clone an object with circular reference
// 
// const data = {
//     name: 'foo',
//     child: null
// }
// data.child = data;

/* Use WeakMap - keys and values, however, the keys must be objects.

The function takes two parameters: obj (the object to be cloned) and map (a WeakMap used to store original objects as keys and their cloned counterparts as values). The map parameter has a default value of a new WeakMap() if no value is provided. */
const cloneDeepWithLoop = (obj, map = new WeakMap()) => {
    // Implement the function here

    // The function checks if the obj is null or not an object. If it is, the function returns it as is since there's no need to clone it.
    if (obj === null || typeof obj !== 'object') return obj;
    console.log("obj: ", obj);

    // It then checks if the obj is already present in the map using the has method. If it exists, it means the object has already been cloned previously, so the function retrieves the clone from the map using the get method and returns it.
    if (map.has(obj)) {
        console.log("map.get(obj): ", map.get(obj));
        return map.get(obj);
    }

    // If the obj hasn't been cloned before, the function creates a new empty object newObj that will serve as the clone.
    const newObj = {};

    // The obj and newObj are then stored in the map using the set method. This allows the function to handle circular references by referencing the cloned objects in subsequent recursive calls.
    map.set(obj, newObj);

    for (let key in obj) {
        // check if the property is an own property of the obj to avoid cloning inherited properties
        console.log("key: ", key);
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            // For each property, the function recursively calls cloneDeepWithLoop on the property value and assigns the cloned value to the corresponding property in the newObj.
            newObj[key] = cloneDeepWithLoop(obj[key], map);
            console.log("newObj[key]: ", newObj[key]);
        }
    }

    return newObj;
}

// test
const data = {
    name: 'foo',
    child: null
}
data.child = data;
const clonedData = cloneDeepWithLoop(data);
console.log(clonedData === data); // false  
console.log(clonedData.name); // foo
console.log(clonedData.child); // { name: 'foo', child: [Circular] }
console.log(clonedData.child === clonedData); // true  
