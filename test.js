var newArray= [];

function findPair(a,b) {
  for (i = 0; i < a.length; i++) {
    var first = a[i];
    for (j = i+1; j < a.length; j++) {
      var second = a[j];

      if ((first + second) == b) {


      newArray.push([i, j];
      }
    }
  }
    }
    console.log(newArray);
    var array = [25,25,10];

    findPair(array,50);
