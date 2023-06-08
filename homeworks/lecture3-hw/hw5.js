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
    var Password = '';
    var setFlag = 0
    function setPassword(s) {
        if (setFlag === 0){
            Password = s
            setFlag = 1
            return;
        }else{
            console.log("Error: can not set password again");
            return -1;
        }
    }
        
    function checkPassword(s) {
        return s === Password;
    }

    return {
        setPassword: setPassword,
        checkPassword: checkPassword
    };
    
}