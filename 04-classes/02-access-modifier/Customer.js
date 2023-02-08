var Customer = /** @class */ (function () {
    //Constructor
    function Customer(firstname, lastName) {
        this._firstName = firstname;
        this._lastName = lastName;
    }
    Object.defineProperty(Customer.prototype, "firstName", {
        get: function () {
            return this._firstName;
        },
        set: function (value) {
            this._firstName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Customer.prototype, "lastName", {
        get: function () {
            return this._lastName;
        },
        set: function (value) {
            this._lastName = value;
        },
        enumerable: false,
        configurable: true
    });
    return Customer;
}());
//lets create an instance
var myCustomer = new Customer('Nisha', 'Soni');
// myCustomer.firstName = 'Nisha';
// myCustomer.lastName = 'Soni';
console.log(myCustomer.firstName);
console.log(myCustomer.lastName);
