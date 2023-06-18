/**
 * implement debounce function
 * explain: `func` will be called after `delay` ms. if `func` is called again before `delay` ms, the timer will be reset
 * @param func
 * @param delay
 */
function debounce(func, delay) {
  // your code here
  let timeout;
  clearTimeout(timeout); // clear any previous timeout 
  return function(...args) {
   
    
    timeout = setTimeout(() => {
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

  let flag = false;

  return function(...args) {
    if (!flag) {
      // goes to original func
      func.apply(this, args);
      flag = true;

      setTimeout(() => {
        flag = false;
      }, delay);
    }
  };
}
