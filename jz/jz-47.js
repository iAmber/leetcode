function Add(num1, num2)
{
    while(num2){
        var t = num1 ^ num2    //不进位的相加
        num2 = (num1 & num2) << 1   //同1则进位
        num1 = t
    }
    return num1
}

Add(123, 11)