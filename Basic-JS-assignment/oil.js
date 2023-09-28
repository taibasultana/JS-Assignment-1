function oilCalculator(dieselLitre, petrolLitre, octanelitre){
    const dieselPrice = 114;
    const petrolPrice = 130;
    const octanePrice = 135;

    const diesel = dieselPrice * dieselLitre;
    const petrol = petrolPrice * petrolLitre;
    const octane = octanePrice * octanelitre;

    
    const oilPrice = diesel + petrol + octane;
    return oilPrice;
}

const oilPrice = oilCalculator(2, 2, 5);
console.log(oilPrice);