// write a function to deep clone an object with circular reference
// 
// const data = {
//     name: 'foo',
//     child: null
// }
// data.child = data;

const cloneDeepWithLoop = (obj) => {
    let objs = [];
    let clones = [];
    function cloneDeep(obj) {
        if (typeof obj == "object") {
            if (Array.isArray(obj)) {
                return obj.map(cloneDeep);
            }
            for (let i = 0; i < objs.length; ++i) {
                if (obj === objs[i]) {
                    return clones[i];
                }
            }
            let clone = {};
            objs.push(obj);
            clones.push(clone);
            Object.entries(obj).forEach((entry) => (clone[entry[0]] = cloneDeep(entry[1])));
            return clone;
        }
        return obj;
    }
    return cloneDeep(obj);
}