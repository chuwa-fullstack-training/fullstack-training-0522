// write a function to deep clone an object with circular reference
//
// const data = {
//     name: 'foo',
//     child: null
// }
// data.child = data;

const cloneDeepWithLoop = (obj, map = new WeakMap()) => {
  // Implement the function here
  if (obj instanceof Date) return new Date(obj);
  if (obj instanceof RegExp) return new RegExp(obj);

  if (map.has(obj)) {
    return map.get(obj);
  }

  const allDesc = Object.getOwnPropertyDescriptors(obj);
  const cloneObj = Object.create(Object.getPrototypeOf(obj), allDesc);
  map.set(obj, cloneObj);

  for (const key of Reflect.ownKeys(obj)) {
    const value = obj[key];
    cloneObj[key] =
      value instanceof Object && typeof value !== "function"
        ? cloneDeepWithLoop(value, map)
        : value;
  }
  return cloneObj;
};
