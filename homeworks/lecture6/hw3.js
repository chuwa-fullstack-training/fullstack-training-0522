/**
 * implement debounce function
 * explain: `func` will be called after `delay` ms. if `func` is called again before `delay` ms, the timer will be reset
 * @param func
 * @param delay
 */

// The returned timeoutID is a positive integer value which identifies the timer created by the call to setTimeout(). This value can be passed to clearTimeout() to cancel the timeout.
function debounce(func, delay) {
  let timeoutID;
  /* The ...args parameter in the returned function is used to capture any arguments that are passed when this function is called. 
  These arguments are then passed along to func when it's finally invoked.*/
  return function(...args){
    if(timeoutID){
      clearTimeout(timeoutID);
    }

    timeoutID = setTimeout(()=>{func(...args)}, delay);  
  }
}

/**
 * implement throttle function
 * explain: `func` will be called every `delay` ms. if `func` is called again before `delay` ms, the call will be ignored
 */
function throttle(func, delay) {
  let lastCall = 0;

  return function(...args) {
    const now = new Date().getTime();
    if(now - lastCall< delay){
      return;
    }
    lastCall = now;
    setTimeout(()=>{func(...args), delay}); ???
  }
}
