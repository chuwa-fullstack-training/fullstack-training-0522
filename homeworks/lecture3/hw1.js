/** 
 * there are unlimited numbers of 1c, 5c, 25c, 50c
 * pick 48 coins to have 1 dollar
 * print out 2 solutions
 */
function pickCoins() {
    const coins = [1, 5, 25, 50];
    function listAll(total, n, last) {
        if (total < n) {
            return [];
        }
        if (n == 0) {
            if (total == 0) {
                return [[]];
            }
            return [];
        }
        if (last == 0) {
            return [];
        }
        const result = [];
        const current = [];
        do {
            const subResult = listAll(total, n, last - 1);
            for (arr of subResult) {
                result.push(current.concat(arr));
            }
            current.push(coins[last - 1]);
            total -= coins[last - 1];
            --n;
        } while (total >= 0 && n >= 0);
        return result;
    }
    const result = listAll(100, 48, coins.length);
    console.log(result[0]);
    console.log(result[1]);
}
pickCoins();