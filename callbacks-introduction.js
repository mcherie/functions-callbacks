// The second argument/parameter is expected to be a function
function findWaldo(arr, found) {
  // arr.forEach(function(element) {

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === "Waldo") {
      found(i);   // execute callback
      // var WaldosIndex;
      // WaldosIndex = [i]
    }
  }
}


function actionWhenFound(i) {

  console.log("Found Waldo at index " + i + "!");
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);