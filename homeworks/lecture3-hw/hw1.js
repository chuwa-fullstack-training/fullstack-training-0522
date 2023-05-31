/** 
 * there are unlimited numbers of 1c, 5c, 25c, 50c
 * pick 48 coins to have 1 dollar
 * print out 2 solutions
 */
function pickCoins() {
    // implement here
    // 1*x+5*y+25*p+50*q = 100, x+y+p+q = 48
    // 1*35+5*13, 1*45+5*1+25*2, 1*40+5*7+25*1
    // brute force
    for (let i = 35; i <= 48; i += 1){
        for (let j = 0; j <= 48-i; j += 1){
            for (let m = 0; m <= 48-i-j; m += 1){
                for (let n = 0; n <= 48-m-i-j; n += 1){
                    if (i+j+m+n < 48){
                        continue;
                    }
                    if (i+5*j+25*m+50*n > 100){
                        break;
                    }
                    if (i+j+m+n === 48 && i+5*j+25*m+50*n===100){
                        console.log(i,j,m,n);
                    }
                }
            }
        }
    }
}
