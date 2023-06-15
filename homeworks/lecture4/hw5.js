// write a function to deep clone an object with circular reference
// 
// const data = {
//     name: 'foo',
//     child: null
// }
// data.child = data;

const cloneDeepWithLoop = (obj) => {
    // Implement the function here
    let res = {}
    let stack = []
    let visited = new Set()
    stack.push([obj, res])
    while (stack.length > 0) {
        let [cur, curRes] = stack.pop()
        if (visited.has(cur)) {
            continue
        } else {
            visited.add(cur)
        }
        for (let key in cur) {
            if (typeof cur[key] == 'object') {
                curRes[key] = {}
                stack.push([cur[key], curRes[key]])
            } else {
                curRes[key] = cur[key]
            }
        }
    }
    return res
}