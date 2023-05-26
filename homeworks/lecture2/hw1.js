/*
 * Copy the enumerable properties of p to o, and return o.
 * If o and p have a property by the same name, o's property is overwritten.
 * This function does not handle getters and setters or copy attributes.
 */
function extend(o, p) {
  // implement your code here
  for (prop in p) {
    o[prop] = p[prop];
  }
  return o;
}

const obj1 = {
  name: 'james',
  age: 30,
};

const obj2 = {
  city: 'New York',
  profession: 'Developer',
};

extend(obj1, obj2);
console.log(obj1);

/*
 * Return a new object that holds the properties of both o and p.
 * If o and p have properties by the same name, the values from o are used.
 */
function union(o, p) {
  // implement your code here
  let result = {};
  for (prop in p) {
    result[prop] = p[prop];
  }
  for (prop in o) {
    result[prop] = o[prop];
  }
  return result;
}

const obj3 = {
  name: 'james',
  age: 30,
};

const obj4 = {
  city: 'New York',
  profession: 'Developer',
};

console.log(union(obj3, obj4));

/*
 * Remove properties from o if there is not a property with the same name in p.
 * Return o.
 */
function restrict(o, p) {
  // implement your code here
  for (prop in o) {
    if (!p.hasOwnProperty(prop)) {
      delete o.prop;
    }
  }
  return o;
}
const obj5 = {
  name: 'james',
  age: 30,
};

const obj6 = {
  city: 'New York',
  profession: 'Developer',
};
console.log(restrict(obj5, obj6));
/*
 * Return a new object that holds only the properties of o that also appear
 * in p. This is something like the intersection of o and p, but the values of
 * the properties in p are discarded
 */
function intersection(o, p) {
  // implement your code here
  let result = {};
  for (prop in o) {
    if (p.hasOwnProperty(prop)) {
      result[prop] = o[prop];
    }
  }
  return result;
}

const obj7 = {
  name: 'james',
  age: 30,
  city: 'D.C.',
};

const obj8 = {
  city: 'New York',
  profession: 'Developer',
};
console.log(intersection(obj7, obj8));
