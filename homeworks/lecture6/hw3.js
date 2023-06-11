/**
 * implement debounce function
 * explain: `func` will be called after `delay` ms. if `func` is called again before `delay` ms, the timer will be reset
 * @param func
 * @param delay
 */
function debounce(func, delay) {
  // your code here
  let timeoutId;

  return function (...args) {
    clearTimeout(timeoutId);

    timeoutId = setTimeout(() => {
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
  let isThrottled = false;
  let lastArgs;
  let timeoutId;

  function executeThrottled() {
    func.apply(this, lastArgs);
    isThrottled = false;
    clearTimeout(timeoutId);
  }

  return function (...args) {
    if (!isThrottled) {
      executeThrottled();
    }

    isThrottled = true;
    lastArgs = args;

    timeoutId = setTimeout(executeThrottled, delay);
  };
}
