// Algorithms

// 1. Write a function that returns the largest element in a list.
function largestElement(list) {
  let maxNumber = -Infinity;
  for (let i of list) {
    maxNumber = Math.max(maxNumber, i);
  }
  return maxNumber;
}
console.log(largestElement([1, 2, 5, 9, 0, 30, 14, 17]));

// 2. Write function that reverses a list, preferably in place.
function reverseList(list) {
  // implement your code here
  for (let i = 0; i < Math.floor(list.length / 2); i++) {
    const temp = list[i];
    list[i] = list[list.length - i - 1];
    list[list.length - i - 1] = temp;
  }
  return list;
}
console.log(reverseList([1, 2, 3, 4, 5, 6]));
console.log(reverseList([1, 2, 3, 4, 5]));

// 3. Write a function that checks whether an element occurs at least twice in a list.
function checkTwice(list, element) {
  let count = 0,
    i = 0;
  while (count < 2 && i < list.length) {
    if (list[i] === element) count++;
    i++;
  }
  return count >= 2;
}
console.log(checkTwice([1, 1, 2, 3, 4, 5, 5], 1));
console.log(checkTwice([1, 2, 5, 3, 4, 5, 5, 5], 5));
console.log(checkTwice([1, 2, 3], 3));
