var gettingRequest = function(s){
  return new Promise(function(resolve, reject){
  let milliseconds = s * 1000;
  setTimeout(function(){
    var requestFulfilled;
    resolve(requestFulfilled = "Took " + s + " seconds.");
  }, milliseconds)

  });
}

var findSeconds = function (s) {
  gettingRequest(s)
  .then(function(fulfilled) {
    console.log(fulfilled)
  });
}


findSeconds(8);
