var words = ["ground", "control", "to", "major", "tom"];

var length = map(words, function(word) {
  return word.length;
});
console.log(length)

function map(values, cb) {
  const newArray = []
  /**
   * 1. For each element in the array
   * 2. Apply the callback function to get the transformed value
   * 3. Add the transformed value to the new array
   */
  values.forEach(function (value) {
    var newValue = cb(value);
    newArray.push(newValue)
  })
   return newArray ;
}



var toUpperCase = map(words, function(word) {
  return word.toUpperCase();
});
console.log(toUpperCase)

function map(values, cb) {
  const newArray = []
  values.forEach(function (value) {
    var newValue = cb(value);
    newArray.push(newValue)
  })
   return newArray ;
}



var reversed = map(words, function(word) {
  return word.split('').reverse().join('');
});
console.log(reversed)

function map(values, cb) {
  const newArray = []
  values.forEach(function (value) {
    var newValue = cb(value);
    newArray.push(newValue)
  })
   return newArray ;
}

