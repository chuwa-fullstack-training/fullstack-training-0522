/** 
 * there are unlimited numbers of 1c, 5c, 25c, 50c
 * pick 48 coins to have 1 dollar
 * print out 2 solutions
 */
function pickCoins(coins, target) {//using back tracking to find all solutions, similar to combination sum
    // implement here
    var answer = [];
    var temp = [];

    function recursion (index, sum){
        if (sum > target)
            return;
        if (sum === target){
            answer.push(temp.slice());//or([...temp]) to pass the entire array
            return;
        }

        for (let i = index; i < coins.length; i++){
            if (coins[i] > target)
                return;
            //else
            temp.push(coins[i]);
            recursion(i, sum + coins[i]);//if pass index here, the output will count all duplicate solutions with different orders
            temp.pop();//if recursion last line is over or =target, pop the last out to see if there are more solutions
        }
    }//recursion done

    recursion(0, 0);//backtraking from 0
    return answer;

}

var result = pickCoins([1,5,25,50], 100);//all the possible solutions using these 4 types of coins to have $1
for (let idx = 0; idx < result.length; idx++){
    if(result[idx].length === 48){//only the ones with 48 coins
        console.log(result[idx]);
    }
}
//3 possible solutions with 48 coins under this condition
