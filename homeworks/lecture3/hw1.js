/**
 * there are unlimited numbers of 1c, 5c, 25c, 50c
 * pick 48 coins to have 1 dollar
 * print out 2 solutions
 */
// use backtracking to find out all the values
function pickCoins() {
  const coins = [1, 5, 25, 50];
  let res = [];

  function backtrack(currCombination, remainingValue, index) {
    // find a solution
    if (remainingValue == 0 && currCombination.length == 48) {
      res.push(currCombination);
      return;
    }
    // base case: ending recursion
    if (
      currCombination.length >= 48 ||
      remainingValue < 0 ||
      index >= coins.length
    ) {
      return;
    }
    // including current coin value
    backtrack(
      currCombination.concat(coins[index]),
      remainingValue - coins[index],
      index
    );
    // excluding current coin value, move to the next one
    backtrack(currCombination, remainingValue, index + 1);
  }

  backtrack([], 100, 0);
  return res;
}

console.log(pickCoins()); // 3 solutions
