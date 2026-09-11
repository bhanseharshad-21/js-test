class Emp {
    id;
    name;
    salary;

    constructor(id,name,salary){
        id= this.id;
        name= this.name;
        salary= this.salary;
    }

    displayInfo(){
        console.log(id);
        console.log(name);
        console.log(salary);
    }
}

const emp = new Emp(10,"Harshad",21000);
console.log(emp);
