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
    let hasPswd = false;
    this.setPassword = function(newPassword) {
        if (hasPswd) {
            throw new Error('password is alread definded')
        }
        hasPswd = true
        password = newPassword;
      };
    
      this.checkPassword = function(inputPassword) {
        return password === inputPassword;
      };

}
const user = new User();
user.setPassword('123456');
console.log(user.checkPassword('123456')); // Output: true
console.log(user.checkPassword('123')); // Output: false
console.log(user.password); // Output: undefined
user.setPassword('123'); // Throws an error
console.log(user.checkPassword('123')); // Output: false
console.log(user.password); // Output: undefined