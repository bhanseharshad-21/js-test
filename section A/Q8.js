function totalSales(arr){
    return arr.reduce((sum,arr)=>{
        return sum += arr.price;
    },0)    
}

let Sales = [
    {
        pname:"TV",
        price:3456
    },
    {
        pname:"Laptop",
        price:75446
    },
    {
        pname:"PC",
        price:3666
    },
    {
        pname:"Keyboard",
        price:3455
    },
    {
        pname:"Mouse",
        price:3684
    }
]

console.log(totalSales(Sales));
