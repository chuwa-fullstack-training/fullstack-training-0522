/**
 * implement debounce function
 * explain: `func` will be called after `delay` ms. if `func` is called again before `delay` ms, the timer will be reset
 * @param func
 * @param delay
 */
function debounce(func, delay) {
  let pending = 0;
  return function(...args) {
      ++pending;
      setTimeout(() => { if (!--pending) func(...args); }, delay);
  }
}

/**
 * implement throttle function
 * explain: `func` will be called every `delay` ms. if `func` is called again before `delay` ms, the call will be ignored
 */
function throttle(func, delay) {
  let throttle = false;
  return function(...args) {
    if (!throttle) {
      throttle = true;
      func(...args);
      setTimeout(() => (throttle = false), delay);
    }
  }
}

// note: using code from my leetcode submissions for both questions:
// var throttle = function(fn, t) {
//   var state = 0;
//   var savedArgs;
//   function call(...args) {
//     state = 1;
//     fn(...args);
//     setTimeout(() => {
//         if (state == 2) {
//             call(...savedArgs);
//         } else {
//             state = 0;
//         }
//     }, t);
//   }
//   return function(...args) {
//       if (!state) {
//           call(...args);
//       } else {
//           state = 2;
//           savedArgs = args;
//       }
//   }
// };