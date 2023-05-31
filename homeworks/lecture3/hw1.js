/** 
 * there are unlimited numbers of 1c, 5c, 25c, 50c
 * pick 48 coins to have 1 dollar
 * print out 2 solutions
 */
function pickCoins() {
    // implement here
    const coins = [1, 5, 25, 50];
    const amount = 48;
    const sum = 100;
    const res = [];

    function dfs(curSum, curCnt, path, u) {
        if(curSum > sum || curCnt > amount) return;
        
        if(curSum == sum && curCnt == amount) {
            res.push(path.slice());
            return;
        }

        for(let i = u; i < coins.length; i++) {
            path.push(coins[i]);
            dfs(curSum + coins[i], curCnt + 1, path, i);
            path.pop();
        }
    }

    dfs(0, 0, [], 0);
    return res;
}

console.log(pickCoins());         // Output all solutions.