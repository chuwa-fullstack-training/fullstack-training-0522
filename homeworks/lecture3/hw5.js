/** Implement a User class with a private variable #password (Use closure, not # syntax).
 * The class should have methods to setPassword and checkPassword.
 *

 */
function User() {
  let passwordExists = false;

  this.setPassword = function (inputPassword) {
    if (passwordExists) {
      throw new Error("Password exists.");
    } else {
      password = inputPassword;
      passwordExists = true;
    }
  };

  this.checkPassword = function (inputPassword) {
    return inputPassword == password;
  };
}

// test case
const user = new User();
user.setPassword("123456");
console.log(user.checkPassword("123456")); // true
console.log(user.checkPassword("123")); // false
console.log(user.password); // undefined
user.setPassword("123"); // error
console.log(user.checkPassword("123")); // false
console.log(user.password); // undefined
