class Customer {

  
    public get firstName(): string {
        return this._firstName;
    }
    public set firstName(value: string) {
        this._firstName = value;
    }
   
    public get lastName(): string {
        return this._lastName;
    }
    public set lastName(value: string) {
        this._lastName = value;
    }

    //Constructor

    constructor(private _firstName: string, private _lastName: string) {
       
    }

   

   
}

//lets create an instance

let myCustomer = new Customer('Nisha', 'Soni');

// myCustomer.firstName = 'Nisha';
// myCustomer.lastName = 'Soni';

console.log(myCustomer.firstName);
console.log(myCustomer.lastName);