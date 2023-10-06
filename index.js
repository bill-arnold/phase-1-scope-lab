// Declare a variable in global scope called customerName using the var keyword.
var customerName = 'John';

// Write a function that accesses the global customerName variable and uppercases it.
function upperCaseCustomerName() {
    return customerName.toUpperCase();
}

// Write a function that, when called, declares a variable called bestCustomer in global scope and assigns it to be 'not bob'.
function setBestCustomer() {
    bestCustomer = 'not bob';
}

// See the consequences of declaring a variable in global scope by writing a new function that changes the bestCustomer variable.
function overwriteBestCustomer() {
    bestCustomer = 'still not bob';
}

// Declare a constant (using the const keyword) in global scope called leastFavoriteCustomer
const leastFavoriteCustomer = 'Alice';

// Write a function that attempts to change the constant and notice what JavaScript does when you try to change the constant.
function changeLeastFavoriteCustomer() {
    // This will result in an error. Constants cannot be reassigned.
    leastFavoriteCustomer = 'Bob';
}

console.log(upperCaseCustomerName()); 

setBestCustomer();
console.log(bestCustomer); 

overwriteBestCustomer();
console.log(bestCustomer); 

console.log(leastFavoriteCustomer); 

