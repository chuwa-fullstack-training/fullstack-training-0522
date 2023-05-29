/**
 * there are unlimited numbers of 1c, 5c, 25c, 50c
 * pick 48 coins to have 1 dollar
 * print out 2 solutions
 */

const coins = [1, 5, 25, 50];
const solutions = [];

function pickCoins() {
  // implement here
  for (let i = 0; i <= 48; i++) {
    for (let j = 0; j <= 20; j++) {
      for (let k = 0; k <= 4; k++) {
        for (let l = 0; l <= 2; l++) {
          if (
            i + j + k + l === 48 &&
            i + 5 * j + 25 * k + 50 * l === 100 &&
            solutions.length < 2
          ) {
            solutions.push([i, j, k, l]);
          }
          if (solutions.length === 2) return solutions;
        }
      }
    }
  }
}

console.log(pickCoins());
