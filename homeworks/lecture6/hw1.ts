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
/*
 * The compiler raises an error because the returned object is not necessarily of type T.
 * Type T could contain more properties than type User.
 * We can fix this either by making the return type of the function to be `User`,
 * or by copying all properties from `u` into the new object.
 */

// 2. fix the following code
// requirement: the function should accept either two strings or two numbers at the same time,
// so if parameters are one string and one number, it should throw an error
function f(a: string | number, b: string | number) {
  if (typeof a === "string" && typeof b === "string") {
    return `${a} : ${b}`;
  } else if (typeof a === "number" && typeof b === "number") {
    return a + b
  } else {
    throw new Error("Parameters must be of the same type.");
  }
}
