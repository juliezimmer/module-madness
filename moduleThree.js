var accountBalance = require("./convertToDollars.js");
var random = require("./randomNumber.js");

var finalBalance = accountBalance(random(100, 1000000));
 

console.log(finalBalance);

function findBalance(accountBalance, random) {
    return(accoutBalance(random));
}
    
//var accountBalance =  

module.exports = ({ 
    accountBalance: findBalance,
    name: "Account balance:" + finalBalance
});
 console.log(module.exports.name); 


