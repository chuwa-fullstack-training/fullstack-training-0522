/**
 * there are unlimited numbers of 1c, 5c, 25c, 50c
 * pick 48 coins to have 1 dollar
 * print out 2 solutions
 */

var coins = [1, 5, 25, 50];
var targetValue = 100;
var targetCoins = 48;

function pickCoins(targetCoins, targetValue, res, index) {
  // implement here
  if (targetValue == 0 && targetCoins == 0) {
    console.log(res);
    return;
  }
  if (targetValue < 0 || targetCoins < 0 || index == 4) {
    return;
  }

  res.push(coins[index]);
  pickCoins(targetCoins - 1, targetValue - coins[index], res, index);
  res.pop();

  pickCoins(targetCoins, targetValue, res, index + 1);
}

pickCoins(targetCoins, targetValue, [], 0);
// 3 solutions
