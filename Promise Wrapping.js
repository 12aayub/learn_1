//variable defined to be used in if/else statement
var isMomHappy
//variable defined as Math.random function
var happyNum = Math.random();
//if random number is less than 0.5 then mom is happy = true, if not then mom is happy = false
if (happyNum < 0.5) {
  isMomHappy = true;
} else {
  isMomHappy = false;
}

//creating a promise "willIGetNewPhone"
var willIGetNewPhone = new Promise(
//the promise is a function with the functions resolve and reject as parameters
    function (resolve, reject) {
//check if the variable isMomHappy is true/false
        if (isMomHappy) {
//if true, then set the variable phone as object with descriptors
            var phone = {brand: 'Samsung',color: 'black'};
//take variable phone and run it through resolve function to be used as a parameter for .then function
            resolve(phone);
//if isMomHappy is false
        } else {
//set variable reason as an Error object with reason message
            var reason = new Error('mom is not happy');
//error reason will be passed through reject function
            reject(reason);
        }

    }
);


// variable that calls our promise
var askMom = function () {
//promise variable
    willIGetNewPhone
//function calls resolve function
        .then(function (fulfilled) {
//displays phone variable object in console
            console.log(fulfilled);
        })
//function calls reject function
        .catch(function (error) {
//displays Error reason variable in console
            console.log(error.message);
        });
}

//calling variable to run promise result
askMom();
