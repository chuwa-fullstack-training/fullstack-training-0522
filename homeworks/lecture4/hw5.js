// write a function to deep clone an object with circular reference
// 
const data = {
    name: 'foo',
    child: null
}
data.child = data;

const cloneDeepWithLoop = (obj, hashmap = new WeakMap()) => {
    // Implement the function here
    if (hashmap.has(obj)) {
        return hashmap.get(obj);
    }else{
        return obj;
    }

}