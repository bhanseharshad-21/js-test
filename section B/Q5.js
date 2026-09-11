// Default Parameter
function add(a,b=5){
    console.log(a + b);
}

add(10)

// Rest Parameter
let numbers = [2,35,6,74,5,7]
function addNumbers(...numbers){
    let sum = 0;
    return sum += numbers;
    
}
console.log(addNumbers(numbers));
