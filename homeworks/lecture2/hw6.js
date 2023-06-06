// Algorithms

// 1. Write a function that returns the largest element in a list.
function largestElement(list) {
  // implement your code here
  var max = Number.MIN_VALUE;
  for (let i in list) {
    if (i >= max) {
      max = i;
    }
  }
  return max;
}

// 2. Write function that reverses a list, preferably in place.
function reverseList(list) {
  // implement your code here
  var i = 0,
    n = list.length,
    middle = Math.floor(n / 2),
    temp = null;
  for (; i < middle; i += 1) {
    temp = list[i];
    list[i] = list[n - 1 - i];
    list[n - 1 - i] = temp;
  }
}

// 3. Write a function that checks whether an element occurs at least twice in a list.
function checkTwice(list, element) {
  // implement your code here
  var count = 0;
  for (let i in list) {
    if (i === element) {
      count++;
    }
  }
  if (count < 2) {
    return false;
  }
  return true;
}
