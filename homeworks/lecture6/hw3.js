
function print(){
  console.log('test');
}
var delay = 1000;

/**
 * implement debounce function
 * explain: `func` will be called after `delay` ms. if `func` is called again before `delay` ms, the timer will be reset
 * @param func
 * @param delay
 */
let timer;
function debounce(func, delay) {
  // your code here
  clearTimeout(timer);
  timer = setTimeout(func, delay);
  let current = new Date();
  console.log(current.getSeconds());
}

let test1 = setInterval(() => debounce(print, delay), 2000);//function will never print out anything if <1000
//clearInterval(test1);

/**
 * implement throttle function
 * explain: `func` will be called every `delay` ms. if `func` is called again before `delay` ms, the call will be ignored
 */
let ignored = false;
function throttle(func, delay) {
  // your code here
  let current = new Date();
  console.log(current.getSeconds());
  if(ignored)
    return;

  ignored = true;

  setTimeout(() => {
    func();
    ignored = false;} , delay);
}
let test2 = setInterval(() => throttle(print, delay), 200);//every 5 times print out once
//clearInterval(test2);