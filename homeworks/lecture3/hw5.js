/** Implement a User class with a private variable #password (Use closure, not # syntax).
 * The class should have methods to setPassword and checkPassword.
 *
 * Example:
 * const user = new User();
 * user.setPassword('123456');
 * user.checkPassword('123456'); // true
 * user.checkPassword('123'); // false
 * user.password; // undefined
 * user.setPassword('123'); // Error
 * user.checkPassword('123'); // false
 * user.password; // undefined
 */
function User() {
  // implement here
  let password = undefined;
  return {
    setPassword(pass) {
      if (password == undefined) {
        password = pass;
      } else {
        throw new Error("You can't set password twice");
      }
    },

    checkPassword(pass) {
      if (pass == password) {
        return true;
      } else {
        return false;
      }
    },
  };
}
// const user = new User();
// user.setPassword("123456");
// user.setPassword("123");
// console.log(user.password);
