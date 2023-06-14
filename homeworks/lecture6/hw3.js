/**
 * implement debounce function
 * explain: `func` will be called after `delay` ms. if `func` is called again before `delay` ms, the timer will be reset
 * @param func
 * @param delay
 */
function debounce(func, delay) {
  let timeoutID;
  return function (...args) {
    clearTimeout(timeoutID); // use `clearTimeout` to reset the timer
    timeoutID = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}

// test
// function testFunc() {
//   console.log("Debounce function called.");
// }

// const callDebounce = debounce(testFunc, 3000);
// callDebounce(); // schedule the testFunct to be called in 3s.
// callDebounce(); // reset the timer

/**
 * implement throttle function
 * explain: `func` will be called every `delay` ms. if `func` is called again before `delay` ms, the call will be ignored
 */
function throttle(func, delay) {
  // your code here
  let timeoutID;
  let lastCallTime = 0;

  return function (...args) {
    const currTime = Date.now();
    if (currTime - lastCallTime >= delay) {
      lastCallTime = currTime;
      func.apply(this, args);
    } else {
      clearTimeout(timeoutID);
      timeoutID = setTimeout(() => {
        lastCallTime = currentTime;
        func.apply(this, args);
      }, delay - (currTime - lastCallTime));
    }
  };
}

// test
function testFunc2() {
  console.log("Throttle function called.");
}

const callThrottle = throttle(testFunc2, 2000);
callThrottle();
