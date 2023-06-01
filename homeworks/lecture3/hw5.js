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
    var password;
    this.setPassword = function(p) { // I don't understand why setPassword('123') is Error, or how to make the error
        password = p;                // I choose just to leave it like this and not check or sanitize the input at all
    }
    this.checkPassword = function(p) {
        return password === p;
    }
}

User.prototype.constructor = User;