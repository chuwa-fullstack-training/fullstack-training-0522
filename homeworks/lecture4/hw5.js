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
    const cloned = [];       // {orignal obj, clone}
    function deepClone(obj) {
        if(obj === null || typeof obj !== 'object') return obj;

        const found = cloned.find((item) => item.original === obj);
        if(found) return found.clone;

        const clone = Array.isArray(obj) ? [] : {};
        cloned.push({ original: obj, clone });
        for(let prop in obj) {
            if(Object.hasOwnProperty.call(obj, prop)) clone[prop] = deepClone(obj[prop]);
        }
        return clone;
    }
    return deepClone(obj);
}

const newObj = cloneDeepWithLoop(data);
console.log(newObj);
console.log(data);