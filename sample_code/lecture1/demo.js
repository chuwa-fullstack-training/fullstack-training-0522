foo(); // foo
fun(); // TypeError: fun is not a function

function foo() {
  console.log('ddfoo');
}

var fun = function() {
  console.log('fun');
}