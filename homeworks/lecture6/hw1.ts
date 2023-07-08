// 1. why there would be error in the following code? and how to fix it?

type User = {
  id: number;
  type: string;
};

function makeCustomer<T extends User>(u: T): T {
  return {
    id: u.id,
    type: "customer",
  };
}

/* The code will result in an error because the function makeCustomer is trying to return an object that extends the type T, which is a generic type that extends User. However, the returned object is not guaranteed to have the same shape as T.

To fix the code: explicitly define the return type of the makeCustomer function to ensure it matches the input type T. In the modified code, the spread operator (...u) is used to copy all the properties of the input object u. This ensures that the returned object will have the same properties as u and also includes the updated type property. Now the code will compile without any errors. */

function makeCustomer<T extends User>(u: T): T {
  return {
    ...u, // Spread the properties of 'u'
    type: "customer",
  };
}


// 2. fix the following code
// requirement: the function should accept either two strings or two numbers at the same time,
// so if parameters are one string and one number, it should throw an error
function f(a: string | number, b: string | number) {
  if (typeof a === "string") {
    return `${a} : ${b}`;
  } else {
    return a + b;
  }
}

/* To fix the code, you can add a runtime check at the beginning of the function to verify that both a and b have the same type. If they have different types (one string and one number), you can throw an error. */
function f(a: string | number, b: string | number) {
  if (typeof a !== typeof b) {
    throw new Error("Both parameters must have the same type");
  }

  if (typeof a === "string") {
    return `${a} : ${b}`;
  } else {
    return a + b;
  }
}

console.log(f("hello", "world")); // hello : world
console.log(f(1, 2)); // 3



