// Q9
class AgeError extends Error{
    constructor(){
        super()
        this.name = "Age Limit"
        this.message = "You are under age."
    }
}

// Q10
function validAge(age){
    try {
        if (age<18) {
            throw new AgeError();   
        }else{
            console.log("Welcome User");
            
        }
    } catch (error) {
        console.log(error.name + " " + error.message);
    }
}

validAge(34)