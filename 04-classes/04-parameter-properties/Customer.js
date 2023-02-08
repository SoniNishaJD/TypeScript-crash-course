"use strict";
class Customer {
    //Constructor
    constructor(_firstName, _lastName) {
        this._firstName = _firstName;
        this._lastName = _lastName;
    }
    get firstName() {
        return this._firstName;
    }
    set firstName(value) {
        this._firstName = value;
    }
    get lastName() {
        return this._lastName;
    }
    set lastName(value) {
        this._lastName = value;
    }
}
//lets create an instance
let myCustomer = new Customer('Nisha', 'Soni');
// myCustomer.firstName = 'Nisha';
// myCustomer.lastName = 'Soni';
console.log(myCustomer.firstName);
console.log(myCustomer.lastName);
