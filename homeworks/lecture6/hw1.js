function makeCustomer(u) {
    return {
        id: u.id,
        type: "customer",
    };
}
// In line 7, we define the return type to be T, but typescript cannot sure the return type is T or not,
//so we need assert it as T.
// 2. fix the following code
// requirement: the function should accept either two strings or two numbers at the same time,
// so if parameters are one string and one number, it should throw an error
function f(a, b) {
    if (typeof a === "string" && typeof b === "string") {
        return "".concat(a, " : ").concat(b);
    }
    else if (typeof a === "number" && typeof b === "number") {
        return a + b;
    }
    else {
        throw new Error("Neither two strings nor numbers");
    }
}
console.log(f(1, 2));
console.log(f("a", "b"));
console.log(f("c", 3));
