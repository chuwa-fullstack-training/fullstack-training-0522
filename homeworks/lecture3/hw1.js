/** 
 * there are unlimited numbers of 1c, 5c, 25c, 50c
 * pick 48 coins to have 1 dollar
 * print out 2 solutions
 */
function pickCoins() {
    // implement here
    let count = 0;
    let result = [];
    for(let coin1=0; coin1<=48; coin1++) {
        for(let coin2=0; coin2<=Math.floor((100-coin1)/5); coin2++) {
            for(let coin3=0; coin3<=Math.floor((100-coin1-5*coin2)/25); coin3++) {
                let coin4 = Math.floor((100-coin1-5*coin2-25*coin3)/50);
                if (count === 2) {
                    return result;
                }
                if(coin1 + coin2 + coin3 + coin4 === 48) {
                    count++;
                    result.push({'1c': coin1, '5c': coin2, '25c': coin3, '50c': coin4});
                }
            }
        }
    }
}
console.log(pickCoins());
