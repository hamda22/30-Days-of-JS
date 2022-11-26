if (condition) {
    //this part of code runs for truthy condition
  }
  Example:
  
  let nums = 3
  if (nums > 0) {
    console.log(`${num} is a positive number`)
  }
  //  3 is a positive number
  let isRaining = true
if (isRaining) {
  console.log('Remember to take your rain coat.')
  // syntax
if (condition) {
    // this part of code runs for truthy condition
  } else {
    // this part of code runs for false condition
  }
}
let num = 3
if (num > 0) {
  console.log(`${num} is a positive number`)
} else {
  console.log(`${num} is a negative number`)
}
//  3 is a positive number

num = -3
if (num > 0) {
  console.log(`${num} is a positive number`)
} else {
  console.log(`${num} is a negative number`)
}
//  -3 is a negative number

let isRainings = true
if (isRainings) {
  console.log('You need a rain coat.')
} else {
  console.log('No need for a rain coat.')
}
// You need a rain coat.

isRaining = false
if (isRaining) {
  console.log('You need a rain coat.')
} else {
  console.log('No need for a rain coat.')
}
// No need for a rain coat.
let a = 0
if (a > 0) {
  console.log(`${a} is a positive number`)
} else if (a < 0) {
  console.log(`${a} is a negative number`)
} else if (a == 0) {
  console.log(`${a} is zero`)
} else {
  console.log(`${a} is not a number`)
} 