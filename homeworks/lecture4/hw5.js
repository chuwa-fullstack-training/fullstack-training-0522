// write a function to deep clone an object with circular reference

// const data = {
//     name: 'foo',
//     child: null
// }
// data.child = data;


function deepCloneWithCircular(obj, map = new Map()) {
    if (typeof obj !== 'object' || obj === null) {
        return obj;
    }

    let copiedObj = Array.isArray(obj) ? [] : {};

    if (map.has(obj)) {
        return map.get(obj);
    }
    map.set(obj, copiedObj);

    for (let key in obj) {
        copiedObj[key] = deepCloneWithCircular(obj[key], map);
    }
    return copiedObj;
}


const data = {
    name: 'foo',
    child: null
}
data.child = data;
let copied = deepCloneWithCircular(data);
console.log(copied.child == copied);

