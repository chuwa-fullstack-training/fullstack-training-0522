/** 
 * there are unlimited numbers of 1c, 5c, 25c, 50c
 * pick 48 coins to have 1 dollar
 * print out 2 solutions
 */
function pickCoins() {
    // implement here
    let ans = []

    function rec(count1, count5, count25, count50, number, total){
        if (ans.length > 1){
            return
        }
        if (number === 0 && total === 0){ 
            let temp = [count1, count5, count25, count50]
            if (ans.length === 0){
                ans.push(temp)
                console.log(`solution is ${count1}, ${count5}, ${count25}, ${count50}`)
            }
            for (ele of ans){
                if (ele.toString() === temp.toString()){
                    return
                }
            } 
            ans.push(temp)
            console.log(`solution is ${count1}, ${count5}, ${count25}, ${count50}`)
            return
        }
        else if (number < 0 || total < 0){
            return
        }
        else {
            rec(count1+1, count5, count25, count50, number-1, total-1)
            rec(count1, count5+1, count25, count50, number-1, total-5)
            rec(count1, count5, count25+1, count50, number-1, total-25)
            rec(count1, count5, count25, count50+1, number-1, total-50)
        }

    }

    return rec(0,0,0,0,48,100)
   
}

pickCoins()
