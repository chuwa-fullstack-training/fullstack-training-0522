/*
 * Copy the enumerable properties of p to o, and return o.
 * If o and p have a property by the same name, o's property is overwritten.
 * This function does not handle getters and setters or copy attributes.
 */
var obj1 = {
    a: 1,
    b: 2,
    d: function () {
      console.log(666);
    },
  },
  obj2 = {
    b: 3,
    c: 4,
    d: function () {
      console.log(777);
    },
  };

function extend(o, p) {
  // implement your code here
  for (let i in p) {
    o[i] = p[i];
  }
  return o;
}

// console.log("before extend():", obj1);
// console.log("after extend():", extend(obj1, obj2));

/*
 * Return a new object that holds the properties of both o and p.
 * If o and p have properties by the same name, the values from o are used.
 */
function union(o, p) {
  // implement your code here
  let obj3 = o;
  const KEY_SET = new Set(Object.keys(o));
  for (let i in p) {
    if (!KEY_SET.has(i)) {
      obj3[i] = p[i];
    }
  }
  return obj3;
}

// console.log("union():", union(obj1, obj2));

/*
 * Remove properties from o if there is not a property with the same name in p.
 * Return o.
 */
function restrict(o, p) {
  // implement your code here
  const KEY_SET = new Set(Object.keys(p));
  for (let i in o) {
    if (!KEY_SET.has(i)) {
      delete o[i];
    }
  }
  return o;
}

// console.log("before restrict():", obj1);
// console.log("after restrict():", restrict(obj1, obj2));

/*
 * Return a new object that holds only the properties of o that also appear
 * in p. This is something like the intersection of o and p, but the values of
 * the properties in p are discarded
 */
function intersection(o, p) {
  // implement your code here
  let obj3 = {};
  const KEY_SET = new Set(Object.keys(p));
  for (let i in o) {
    if (KEY_SET.has(i)) {
      obj3[i] = o[i];
    }
  }
  return obj3;
}

// console.log("intersection():", intersection(obj1, obj2));
