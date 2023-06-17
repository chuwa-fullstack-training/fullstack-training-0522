/** 
 * there are unlimited numbers of 1c, 5c, 25c, 50c
 * pick 48 coins to have 1 dollar
 * print out 2 solutions
 */
function pickCoins() {
    // implement here
  const solutions = [];

  for (let num1c = 0; num1c <= 48; num1c++) {
    for (let num5c = 0; num5c <= 9; num5c++) {
      for (let num25c = 0; num25c <= 3; num25c++) {
        const num50c = 48 - num1c - num5c - num25c;

        if (num1c * 1 + num5c * 5 + num25c * 25 + num50c * 50 === 100) {
          solutions.push({ "1c": num1c, "5c": num5c, "25c": num25c, "50c": num50c });
        }
      }
    }
  }

  return solutions;
}
