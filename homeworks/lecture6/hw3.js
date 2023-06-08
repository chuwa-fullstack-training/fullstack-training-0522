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
    timeoutID = setTimeout(() => func.apply(this, arguments), delay)
  }
}

// let counter = 0;
// let incrementCounter = debounce(() => { counter++; console.log(counter); }, 3000);

// incrementCounter();
// incrementCounter();
// incrementCounter();


/**
 * implement throttle function
 * explain: `func` will be called every `delay` ms. if `func` is called again before `delay` ms, the call will be ignored
 */
function throttle(func, delay) {
  // your code here

}
