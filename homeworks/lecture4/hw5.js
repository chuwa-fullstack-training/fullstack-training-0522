// write a function to deep clone an object with circular reference
// 
const data = {
    name: 'foo',
    child: null
}
data.child = data;

const cloneDeepWithLoop = (obj, cloned = new Map ()) => {
    // Implement the function here
    if(typeof obj !== "object" && obj === null)
        return obj;
    //else
    if (cloned.has(obj))
        return cloned.get(obj);

    let copiedObj;
    Array.isArray(obj)? copiedObj = [] : copiedObj = {};

    cloned.set(obj, copiedObj);

    for(let key in obj){
        copiedObj[key] = cloneDeepWithLoop(obj[key], cloned);
    }
    return copiedObj;
};

let test = cloneDeepWithLoop(data);
console.log(test.child === test);