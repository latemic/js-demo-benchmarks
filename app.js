var Benchmark = require('benchmark');
var suite = new Benchmark.Suite;

// add tests
suite.add('Sergii', function() {
  for (var n = 1; n <= 1000; n++) {
    var output = '';
    if (n % 3 === 0) {
       output += 'fiz'
    }
    if (n % 5 === 0) {
      output += 'baz'
    }
    output || n
    // console.log(output || n);
  }
})
.add('Denys', function() {
  let a = [];
  a[0] = 'fizzbuzz';
  a[3] = a[6] = a[9] = a[12] = 'fizz';
  a[5] = a[10] = 'buzz';
  [...Array(1000).keys()].map(i => a[++i%15]||i); // console.log removed to clear tests results
})
// add listeners
.on('cycle', function(event) {
  console.log(String(event.target));
})
.on('complete', function() {
  console.log('Fastest is ' + this.filter('fastest').map('name'));
})
// run async
.run({ 'async': true });