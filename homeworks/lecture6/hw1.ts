// 1. why there would be error in the following code? and how to fix it?
// makeCustomer function extends user and aims to return a generatic T type,
//  but inside the function, the return value is not guaranteed to have the exact same type as T. 
// based on the return, it will return a fixed type "customer" which will result tyoe mismatch and then result in a compilation error.
type User = {
  id: number;
  type: string;
};

function makeCustomer<T extends User>(u: T): T {
  return {
    id: u.id,
    type: "customer",

  } as T // cast it to T;
}

// 2. fix the following code
// requirement: the function should accept either two strings or two numbers at the same time,
// so if parameters are one string and one number, it should throw an error
function f(a: string | number, b: string | number) {
  if ((typeof a === "string" && typeof b !== "string") || (typeof a !== "string" && typeof b === "string")) {
    throw new Error("Two parameters should be strings or numbers");
  }
  if (typeof a === "string") {
    return `${a} : ${b}`;
  } else {
    return a + b;
  }
}
