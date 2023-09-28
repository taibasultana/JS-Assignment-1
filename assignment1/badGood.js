function findingBadData(array){
    let count = 0
    for(let i = 0; i<=array.length;i++){
        if(array[i]<0){
            count++;
        }
    }
    return count;
}

console.log(findingBadData([1, 2, 3]))
console.log(findingBadData([2, -5, -7, -13]))
console.log(findingBadData([-4, -9, -5, -33, -55]))