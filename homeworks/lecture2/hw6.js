// Algorithms

// 1. Write a function that returns the largest element in a list.
// suppose all the elements in a given list are numbers.
// iterate over the array, use a variable to keep the largest element.
function largestElement(list) {
  if (list == null || list.length == 0) {
    return null;
  }
  let largestNum = Number.NEGATIVE_INFINITY;
  for (let i = 0; i < list.length; i++) {
    if (list[i] > largestNum) {
      largestNum = list[i];
    }
  }
  return largestNum;
}

// 2. Write function that reverses a list, preferably in place.
// use 2-poiners to iterate over the array, switch elements in place.
function reverseList(list) {
  if (list === null) return;
  let left = 0;
  let right = list.length - 1;
  while (left < right) {
    temp = list[right];
    list[right] = list[left];
    list[left] = temp;
    right--;
    left++;
  }
}

// 3. Write a function that checks whether an element occurs at least twice in a list.
// use Array.filter function to filter out the element and count its occurrence.
function checkTwice(list, element) {
  const occurrence = list.filter((item) => item === element);
  return occurrence.length >= 2;
}
