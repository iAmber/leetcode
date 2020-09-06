/**
 * 一只青蛙一次可以跳上1级台阶，也可以跳上2级……它也可以跳上n级。
 * 求该青蛙跳上一个n级的台阶总共有多少种跳法。
 */

/**
    F(N)= F(N-1) + F(N-2) + ... + F(1)
        = F(N-1) + F(N-1)
        = 2F(N-1)
*/

function jumpFloorII(number){
    if(number <= 1) return 1
    return 2 * jumpFloorII(number - 1)
}
