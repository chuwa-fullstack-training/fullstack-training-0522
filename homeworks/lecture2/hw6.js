// Algorithms

// 1. Write a function that returns the largest element in a list.
function largestElement(list) {
  // implement your code here
  let max_result = Number.NEGATIVE_INFINITY;
  for (element of list) {
    if (max_result < element) {
      max_result = element;
    }
  }
  return max_result;
}

// 2. Write function that reverses a list, preferably in place.
function reverseList(list) {
  // implement your code here
  let result = [];
  const length = list.length;
  for (let i = 0; i < length; i++) {
    element = list.pop();
    result.push(element);
  }
  return result;
}

// 3. Write a function that checks whether an element occurs at least twice in a list.
function checkTwice(list1, element) {
  // implement your code here
  var count = 0;
  const n = list1.length;
  console.log(list1);
  for (let j = 0; j < n; j++) {
    if (list1[j] == element) {
      count++;
    }
  }
  return count >= 2;
}

const example1 = [1, 3, 5, 2, 6, 1, 1];

console.log(largestElement(example1));

const example2 = [1, 3, 5, 2, 6, 1, 1];
console.log(reverseList(example2));

const example3 = [1, 3, 5, 2, 6, 1, 1];
console.log(checkTwice(example3, 1));
