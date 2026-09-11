function findMax(array){
    let max = array[0];
    for (let i = 1; i < array.length; i++) {
        if (array[i]>max) {
            max = array[i];
        }
        
    }
    console.log(max);
    
}

let numbers = [5,4,7,8,9,36,10,3,11]
findMax(numbers)