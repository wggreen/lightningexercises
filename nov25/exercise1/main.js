// loop though the numbers in the 'listOfNumbers' array (using a for.. of loop)
// write a conditional statement that checks whether the number is even or odd
// if it is even print "2 is even" (plug in the current #)
// if it is odd print "3 is even" (plug in the current #)
let listOfNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
for (const singleNum of listOfNumbers) {
    if (singleNum % 2 === 0 ) {
        console.log(`${singleNum} is even`)
    } else {
        console.log(`${singleNum} is odd`)
    }
}