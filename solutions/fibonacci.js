function fibonacci(num) {
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 0");
  console.log(fibonacci(0));

  console.log("");

  console.log("Expecting: 1");
  console.log(fibonacci(2));

  console.log("");

  console.log("Expecting: 55");
  console.log(fibonacci(10));

  console.log("");

  console.log("Expecting: 1");
  console.log(fibonacci(1));


}

module.exports = fibonacci;



