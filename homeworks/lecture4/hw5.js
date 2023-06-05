// write a function to deep clone an object with circular reference
// 
// const data = {
//     name: 'foo',
//     child: null
// }
// data.child = data;

const data = {
    name: 'foo',
    child: null
}
data.child = data;

const cloneDeepWithLoop = (obj) => {
    // Implement the function here
    const cloned = new Map();       // {orignal obj, clone}
    function deepClone(obj) {
        if(obj === null || typeof obj !== 'object') return obj;

        if(cloned.has(obj)) return cloned.get(obj);

        const clone = Array.isArray(obj) ? [] : {};
        cloned.set(obj, clone);
        for(let prop in obj) {
            if(Object.hasOwnProperty.call(obj, prop)) clone[prop] = deepClone[obj[prop]];
        }
        return clone;
    }
    return deepClone(obj);
}

const newObj = cloneDeepWithLoop(data);
console.log(newObj.child === newObj);
console.log(data);