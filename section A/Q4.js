function filterEvenNumbers(arr){
    let b = arr.filter((arr)=>{
        return arr%2==0
    })
    console.log(b);
    
}

let array = [5,4,7,8,9,10,3,11]
filterEvenNumbers(array)