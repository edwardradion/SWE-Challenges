// use this template for your fizzbuzz code

function fizzbuzz(numbers) {
  // assume numbers is an array of integers.  fizzbuzz should return a new
  // array where multiples of 3s and 5s become "Fizz" "Buzz" or "FizzBuzz"
  // using numbers.map()
  // YOUR CODE HERE
  let newArray = numbers.map(x => {
    if (x % 3 == 0 && x % 5 == 0) {
      return "fizzbuzz";
    } else if (x % 3 == 0) {
      return "fizz";
    } else if (x % 5 == 0) {
      return "buzz";
    } else return x;
  });
  return newArray;
}

// here's a test case to see if you got it right
// DON'T CHANGE THIS
function test() {
  let arr = [];
  for (let i = 1; i < 101; i++) {
    console.log(i);
    arr.push(i);
  }
  let updatedArray = fizzbuzz(arr);
  updatedArray.forEach(element => {
    console.log(element);
  });
}

test();
