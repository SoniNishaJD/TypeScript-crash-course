class Customer{

    firstName: string;
    lastName: string;

    //Constructor

    constructor(firstname:string, lastName:string){
        this.firstName = firstname;
        this.lastName = lastName;
    }
}

//lets create an instance

let myCustomer = new Customer('Nisha','Soni');

// myCustomer.firstName = 'Nisha';
// myCustomer.lastName = 'Soni';

console.log(myCustomer.firstName);
console.log(myCustomer.lastName);