function publicBusFare(Cost){
    const people = 65;
    const reservedBus = 50;
    const busRemaining = 15;
    const publicBus = 4;

    const peopleCost = Cost * publicBus;

    return peopleCost;

}

const peopleCost =  publicBusFare(250);
console.log([peopleCost]);



