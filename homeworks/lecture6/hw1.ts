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

/* The error in the code is because the makeCustomer function is defined with a generic type parameter T that extends the User type, but it is returning an object literal that only includes the id property and hardcodes the type property to "customer". This violates the constraint imposed by the generic type parameter. */

// To fix the code: change the T of the reutrn type to User
function makeCustomer<T extends User>(u: T): User {
  return {
    id: u.id,
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

