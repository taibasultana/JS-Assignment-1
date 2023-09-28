function isLGSeven(number){
    const difference = number-7;
    const double = number * 2;
    if(difference < 7){
        return (difference);
    }
    else{
        return (double);
    }
}
    console.log(isLGSeven(6));
    console.log(isLGSeven(-15));
    console.log(isLGSeven(15));

