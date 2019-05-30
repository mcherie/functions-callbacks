

var countdownGenerator = function (x) {
  var i = x;

  return function() {
    if (i === 0) {
      console.log(`Blast Off!`)
      i--;
    }
    else if (i === -1) {
      console.log(`Rocket is already gone, bub!`)
    }
    else {
      console.log(`T-minus ${i}`)
      i--;
    }
  }
};

var countdown = countdownGenerator(5);

countdown(); // T-minus 3...
countdown(); // T-minus 2...
countdown(); // T-minus 1...
countdown(); // Blast Off!
countdown(); // Rockets already gone, bub!
countdown(); // Rockets already gone, bub!
countdown(); // Rockets already gone, bub!
countdown(); // Rockets already gone, bub!
countdown(); // Rockets already gone, bub!