let array = [5,4,7,8,9,10,3,11]

//map
let square = array.map((array)=>{
    return array*array;
})
console.log(square);

//filter
let filterOddNumbers = array.filter((array)=>{
    return array % 2 != 0;
})
console.log(filterOddNumbers);

// reduce 
let sum = array.reduce((total,array)=>{
    return total += array;
},0)
console.log(sum);
