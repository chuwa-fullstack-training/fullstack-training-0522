/*
 * Copy the enumerable properties of p to o, and return o.
 * If o and p have a property by the same name, o's property is overwritten.
 * This function does not handle getters and setters or copy attributes.
 */
function extend(p, o) {
  for (const key in p) {
    if (o.hasOwnProperty(key)) {
      o[key] = p[key];
    } else {
      o[key] = p[key];
    }
  }
  return o;
}

// test case:
const p = { a: 1, b: 2 };
const o = { b: 3, c: 4 };
const result = extend(p, o);
console.log(result);

/*
 * Return a new object that holds the properties of both o and p.
 * If o and p have properties by the same name, the values from o are used.
 */
function union(o, p) {
  let mergedObj = { ...o };

  for (const key in p) {
    if (!mergedObj.hasOwnProperty(key)) {
      mergedObj[key] = p[key];
    }
  }
  return mergedObj;
}

// test case
const arr1 = { a: 1, b: 2 };
const arr2 = { c: 3, d: 4, b: 3 };
const res_merge = union(arr2, arr1);
console.log(res_merge);

/*
 * Remove properties from o if there is not a property with the same name in p.
 * Return o.
 */
function restrict(o, p) {
  for (const key in o) {
    if (!p.hasOwnProperty(key)) {
      delete o[key];
    }
  }
  return o;
}

const arr3 = { a: 1, b: 2 };
const arr4 = { c: 3, d: 4, b: 3 };
const res_restrict = restrict(arr4, arr3);
console.log(result);

/*
 * Return a new object that holds only the properties of o that also appear
 * in p. This is something like the intersection of o and p, but the values of
 * the properties in p are discarded
 */
function intersection(o, p) {
  let intersectObj = { ...o };
  for (const key in o) {
    if (!p.hasOwnProperty(key)) {
      delete intersectObj[key];
    }
  }
  return intersectObj;
}

const arr5 = { a: 1, b: 2 };
const arr6 = { a: 3, b: 4, c: 3 };
const res_intersect = intersection(arr6, arr5);
console.log(res_intersect); // returns {a: 3, b: 4}
