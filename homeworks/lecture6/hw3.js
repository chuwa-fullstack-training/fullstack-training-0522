/**
 * implement debounce function
 * explain: `func` will be called after `delay` ms. if `func` is called again before `delay` ms, the timer will be reset
 * @param func
 * @param delay
 */
function debounce(func, delay) {
  // your code here
  var timeoutID = null;

  return function(...args) {
    clearTimeout(timeoutID);

    timeoutID = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}

/**
 * implement throttle function
 * explain: `func` will be called every `delay` ms. if `func` is called again before `delay` ms, the call will be ignored
 */
function throttle(func, delay) {
  // your code here
  var timeoutID = null;
  return function(...args) {
    if(timeoutID) return;

    timeoutID = setTimeout(() => {
        func.apply(this, args);
        timeoutID = null;
    }, delay)
  }
}
