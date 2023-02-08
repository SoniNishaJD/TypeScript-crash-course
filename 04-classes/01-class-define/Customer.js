var Customer = /** @class */ (function () {
    //Constructor
    function Customer(firstname, lastName) {
        this.firstName = firstname;
        this.lastName = lastName;
    }
    return Customer;
}());
//lets create an instance
var myCustomer = new Customer('Nisha', 'Soni');
// myCustomer.firstName = 'Nisha';
// myCustomer.lastName = 'Soni';
console.log(myCustomer.firstName);
console.log(myCustomer.lastName);
