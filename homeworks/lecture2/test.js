// 6.
var a = 1;
function b() {
  function a() {}
  // a = 10;
  return;
  
}
b();
console.log(a); // 10 ??? 1