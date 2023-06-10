/**
 * there are unlimited numbers of 1c, 5c, 25c, 50c
 * pick 48 coins to have 1 dollar
 * print out 2 solutions
 */

function pickCoins() {
    // implement here

    /* Backtrack used here */
    const coins = [1, 5, 25, 50];
    const res = []; // result

    // pick coins
    const pick = (temp, remain, coinIndex) => {

        // find solution
        if (remain === 0 && temp.length === 48) {
            res.push(temp);
            return; 
        }

        // no solution and end recursion
        if (temp.length >= 48 || remain < 0 || coinIndex >= coins.length) {
            return;
        }

        // pick another coin
        pick([...temp,coins[coinIndex]], remain - coins[coinIndex], coinIndex);
        
        // if the coin picked doesn't work, try next coin with larger value
        pick(temp, remain, coinIndex + 1);
    }

    pick([], 100, 0);
    return res;
}

// test 
console.log(pickCoins());
    
    
