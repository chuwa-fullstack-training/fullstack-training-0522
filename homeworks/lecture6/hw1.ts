// 1. why there would be error in the following code? and how to fix it?
// type User = {
//   id: number;
//   type: string;
// };

// function makeCustomer<T extends User>(u: T): T {
//   return {
//     id: u.id,
//     type: "customer",
//   } ;
// }

// 'T' could be instantiated with a different subtype of constraint 'User' with more properties than 'id' and 'type'.
// Use type assertion 'as T' to tell typescript trust the returning object as type T
type User = {
  id: number;
  type: string;
};

function makeCustomer<T extends User>(u: T): T {
  return {
    id: u.id,
    type: "customer",
  } as T;
}


// 2. fix the following code
// requirement: the function should accept either two strings or two numbers at the same time,
// so if parameters are one string and one number, it should throw an error

// function f(a: string | number, b: string | number) {
//   if (typeof a !== typeof b) {
//     throw new Error("Arguments must be both strings or both numbers");
//   }

//   if (typeof a === "string") {
//     return `${a} : ${b}`;
//   } else {
//     return a + b;
//   }
// }

// Ts Compiler will identify that Operator '+' cannot be applied to types 'number' and 'string | number' if two operands are different type.
// Can define function more specifically.
function f(a: string | number, b: string | number): string | number {
  if (typeof a === "string" && typeof b === "string") {
    return `${a} : ${b}`;
  } else if (typeof a === "number" && typeof b === "number") {
    return a + b;
  } else {
    throw new Error("Arguments must be both strings or both numbers");
  }

}

export{}