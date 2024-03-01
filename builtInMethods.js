// SECTION 1: Calling methods on string or integer objects.
// Run each line of code below (either from this file or in dev tools).
// Then, in a comment, write 1-2 sentences describing what is happening, using ALL the involved vocabulary terms you've learned in this lesson so far.

// EXAMPLE
// The toLowerCase() method is called on the string "Hello World"
// No arguments are passed; toLowerCase() has one clear job which is to lowercase all letters that exist in the String
// The return value is "hello world"
"Hello World".toLowerCase();


"Hello World".includes("Hello");
// The includes() method is called on the string "Hello World"
// The argument passed is "Hello"
// The includes() method performs a case-sensitive search to determine whether the argument passed in is found within the string, returning true or false, as appropriate.
// Since "Hello World" inlcudes "Hello", the return value will be true.

"Hello World".endsWith("Hello");
// The endsWith() method is called on the string "Hello World"
// The argument passed is "Hello"
// The endsWith() method performs a case-sensitive search to determine whether a string ends with the argument passed in, returning true or false, as appropriate. 
// Since "Hello World" does not end with "Hello", the return value will be false. 


"Hello World".endsWith("rld");
// The endsWith() method is called on the string "Hello World"
// The argument passed is "rld"
// The endsWith() method performs a case-sensitive search to determine whether a string ends with the argument passed in, returning true or false, as appropriate. 
// Since "Hello World" ends with "rld", the return value will be true. 


// SECTION 2: Calling methods on variables assigned to strings.
// Declare 2 variables assigned to strings.
// Call a different built-in JavaScript method on each of your variables. 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
// Include comments above each method call explaining the impact and return value of that method.

// EXAMPLE
// The startsWith() method is called on the firstName variable, which stores the string object "Jeff". 
// The startsWith() method returns true if the data in the firstName variable starts with the argument passed in.
// In this example, the return value is true, because "Jeff" does start with "J".
// The console.log() statements prints the return value of the startsWith() method (true) to the console.
var firstName = "Jeff";
console.log(firstName.startsWith("J"));

// The endWith() method is called on the lastName variable, which stores the string object "Ewing".
// The endsWith() method returns true if the data in the lastName variable ends with the argument passed in. 
// In this example, the return value is false, because "Ewing" does not end with "s".
var lastName = "Ewing";
console.log(lastName.endsWith("s"));

var dogBreed = "Samoyed";
console.log(dogBreed.includes("mo"));

// The includes() method is called on the dogBreed variable, which stores the string object "Samoyed"
// The includes() method returns true if the data in the dogBreed variable contains the argument passed in.
// In this example, the return value is true, because "Samoyed" does contain "mo".


// SECTION 3: Calling methods on variables assigned to arrays.
// Declare 2 variables assigned to arrays.
// Call a different built-in JavaScript method on each of your variables. 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
// Include comments above each method call explaining the impact and return value of that method.

var ticketPrices = [89, 45, 67, 35, 100];
console.log(ticketPrices.toReversed())
// The toReversed() method is called on the ticketPrices variable, which stores an array of numbers.
// The arguments passed are five numbers.
// The toReversed() method returns an array with the elements in the reverse order of the original array elements. 
// In this example, the return value is [100, 35, 67, 45, 89]

var dogNames = ["Spot", "Rover", "Zoe", "Buddy", "Daisy"];
console.log (dogNames.toSorted()); 
// The toSorted() method is called on the dogNames variable, which stores an array of strings.
// The arguments passed are five strings.
// The toSorted() method returns an array with the elements sorted in ascending/alphabetical order. 
// In this example, the return value is ['Buddy', 'Daisy', 'Rover', 'Spot', 'Zoe'] 
