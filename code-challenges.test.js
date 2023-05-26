// ASSESSMENT 3: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence.

// a) Create a test with expect statements for each of the variables provided.
describe("fibIt", () => {
  it("array that accumulates the sum of each index and the two before it", () => {
    expect(fibIt(fibLength1)).toEqual([1, 1, 2, 3, 5, 8])
    expect(fibIt(fibLength2)).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55])
  })
})

const fibLength1 = 6
// Expected output: [1, 1, 2, 3, 5, 8]

const fibLength2 = 10
// Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

// b) Create the function that makes the test pass.
const fibIt = (num) => {
  let arr = [1, 1]
  for(let i = 2; i < num ; i++) {
    arr.push(arr[i - 2] + arr[i - 1])
  }
  return arr
}
fibIt(fibLength1)
fibIt(fibLength2)
// Pseudo code:
// create arrow function with one parameter
// define variable with array containing [1, 1] because those are always in the fib array
// create for loop 
// add the value of the current index positions -1, and -2 and push them to the existing array
// return array

// --------------------2) Create a function that takes in an object and returns an array of the values sorted from least to greatest.
// Hint: Check out this resource: Object.values() https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Object/values

// a) Create a test with expect statements for each of the variables provided.
describe("sortIt", () => {
  it("sort object properties by value", () => {
    expect(sortIt(studyMinutesWeek1)).toEqual([15, 15, 20, 30, 30, 60, 90])
    expect(sortIt(studyMinutesWeek2)).toEqual([10, 15, 20, 45, 60, 65, 100])
  })
})

const studyMinutesWeek1 = {
  sunday: 90,
  monday: 30,
  tuesday: 20,
  wednesday: 15,
  thursday: 30,
  friday: 15,
  saturday: 60
}
// Expected output: [15, 15, 20, 30, 30, 60, 90]

const studyMinutesWeek2 = {
  sunday: 100,
  monday: 10,
  tuesday: 45,
  wednesday: 60,
  thursday: 20,
  friday: 15,
  saturday: 65
}
// Expected output: [10, 15, 20, 45, 60, 65, 100]

// b) Create the function that makes the test pass.
const sortIt = (input) => {
 return Object.values(input).sort((a, b) => (a-b))
}
sortIt(studyMinutesWeek1)
sortIt(studyMinutesWeek2)
// Pseudo code:
// create arrow function with one input
// invoke Object.values() on the input
// sort the resulting array by numeric value and return it

// --------------------3) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

// a) Create a test with expect statements for each of the variables provided.
describe("sumIt", () => {
  it("array that accumulates the sum of each index and the one before it", () => {
    expect(sumIt(accountTransactions1)).toEqual([100, 83, 60, 51])
    // expect(sumIt(accountTransactions2)).toEqual([250, -89, 100, -96])
    expect(sumIt(accountTransactions3)).toEqual([])
  })
})

const accountTransactions1 = [100, -17, -23, -9]
// Expected output: [100, 83, 60, 51]

const accountTransactions2 = [250, -89, 100, -96]
// Expected output: [250, 161, 261, 165]

const accountTransactions3 = []
// Expected output: []

// b) Create the function that makes the test pass.
const sumIt = (input) => {
  let arr = []
  arr.push(input[0])
  for(let i = 1; i < input.length ; i++) {
    console.log(arr);
    arr.push(input[i] + arr[i - 1])
  }
  
  return arr
}

  sumIt(accountTransactions1)
  sumIt(accountTransactions2)
  sumIt(accountTransactions3)
// Pseudo code: 
// create arrow function with 1 parameter
// create a for loop
// assign an array to equal the first value of the input array
// push the value of the current index of the input + the value of the last `arr` index, into the `arr` array.
// return result after iteration is complete
