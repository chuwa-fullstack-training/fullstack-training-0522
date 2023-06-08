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
    this.setPassword = function(p) {
        if (password !== undefined) {
            console.error("Error cannot redefine password");
            return;
        }
        if (typeof p != "string") {
            console.error("password must be a string");
            return;
        }
        password = p;
    }
    this.checkPassword = function(p) {
        return password === p;
    }
}

User.prototype.constructor = User;