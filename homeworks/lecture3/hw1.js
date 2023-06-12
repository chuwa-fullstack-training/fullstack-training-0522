/** 
 * there are unlimited numbers of 1c, 5c, 25c, 50c
 * pick 48 coins to have 1 dollar
 * print out 2 solutions
 */

let coins = [1, 5, 25, 50];
let targetSum = 100;
let numberOfCoins = 48;

function pickCoins(numOfCoins, targetSum, res, index) {
    if (targetSum == 0 && numOfCoins == 0) {
        console.log(res);
        return;
    }
    
    if (targetSum < 0 || numOfCoins < 0 || index == 4) {
        return;
    }
  
    // include current coin
    res.push(coins[index]);
    pickCoins(numOfCoins-1, targetSum-coins[index], res, index);
    res.pop(); // backtracking
  
    // exclude current coin
    pickCoins(numOfCoins, targetSum, res, index+1);
}

pickCoins(numberOfCoins,targetSum, [], 0);