var gettingRequest = function(s){
  return new Promise(function(resolve, reject){
  let milliseconds = s * 1000;
  setTimeout(function(){}, milliseconds)
    var requestFulfilled;
    resolve(requestFulfilled = "Took " + s + " seconds.");
  });
}

var findSeconds = function (s) {
  gettingRequest(s)
  .then(function(fulfilled) {
    console.log(fulfilled)
  });
}


findSeconds(8);
