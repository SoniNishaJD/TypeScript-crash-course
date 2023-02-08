class Customer {

    private _firstName: string;
    public get firstName(): string {
        return this._firstName;
    }
    public set firstName(value: string) {
        this._firstName = value;
    }
    private _lastName: string;
    public get lastName(): string {
        return this._lastName;
    }
    public set lastName(value: string) {
        this._lastName = value;
    }

    //Constructor

    constructor(firstname: string, lastName: string) {
        this._firstName = firstname;
        this._lastName = lastName;
    }

   

   
}

//lets create an instance

let myCustomer = new Customer('Nisha', 'Soni');

// myCustomer.firstName = 'Nisha';
// myCustomer.lastName = 'Soni';

console.log(myCustomer.firstName);
console.log(myCustomer.lastName);