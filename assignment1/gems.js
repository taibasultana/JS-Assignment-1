function gemsToDiamond(number1,number2,number3){
   
    const frnd1 = 21;
    const frnd2 = 32;
    const frnd3 = 43;

    const diamond = frnd1*number1+frnd2*number2+frnd3*number3;

    if(diamond<=1000){
       return diamond;
    }
    else(diamond > 2*1000);{
        return diamond-2000;
    }

}

console.log(gemsToDiamond(1,1,1));
console.log(gemsToDiamond(20,200,50));
console.log(gemsToDiamond(100,5,1));