/**
 * implement debounce function
 * explain: `func` will be called after `delay` ms. if `func` is called again before `delay` ms, the timer will be reset
 * @param func
 * @param delay
 */
function debounce(func, delay) {
  // your code here
  let timeoutID;
  return function() {
    clearTimeout(timeoutID);
    timeoutID = setTimeout(() => {
      // return what func returns
      return func.apply(this, arguments);     // using arguments
    }, delay)
  }
}

let counter = 0;
let incrementCounter = debounce(() => { counter++; console.log(counter); }, 3000);
incrementCounter();
incrementCounter();
incrementCounter();


/**
 * implement throttle function
 * explain: `func` will be called every `delay` ms. if `func` is called again before `delay` ms, the call will be ignored
 */
function throttle(func, delay) {
  // your code here
  let lastCall = 0;
  return function(...args) {
    const now = new Date().getTime();
    if (now - lastCall > delay) {
      lastCall = now;
      return func.apply(this, args);          // using ...args
    } else {
      return;
    }
  }
}

let printName = throttle((name) => name, 5000);
console.log(printName("Aaron"));
console.log(printName("Bob"));
console.log(printName("Charlie"));