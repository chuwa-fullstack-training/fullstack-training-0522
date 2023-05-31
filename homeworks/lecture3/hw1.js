/** 
 * there are unlimited numbers of 1c, 5c, 25c, 50c
 * pick 48 coins to have 1 dollar
 * print out 2 solutions
 */
function pickCoins() {
    const solutions = [];

    function findSolutions(coins50, coins25, coins5, coins1) {
        if (coins50 * 50 + coins25 * 25 + coins5 * 5 + coins1 * 1 === 100) {
            solutions.push([coins50, coins25, coins5, coins1]);
            if (solutions.length === 2) {
                return;
            }
        }

        if (coins50 < 48) {
            findSolutions(coins50 + 1, coins25, coins5, coins1);
        }
        if (coins25 < 48) {
            findSolutions(coins50, coins25 + 1, coins5, coins1);
        }
        if (coins5 < 48) {
            findSolutions(coins50, coins25, coins5 + 1, coins1);
        }
        if (coins1 < 48) {
            findSolutions(coins50, coins25, coins5, coins1 + 1);
        }
    }

    findSolutions(0, 0, 0, 0);

    return solutions;
}
