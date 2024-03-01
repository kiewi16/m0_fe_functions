// Each example below has at least one opportunity for improvement.

// YOUR TASK:
  // Modify the code to make that improvement(s)
  // write a JS comment to explain what you changed, and why
  // make sure the code you submit WORKS - you can run this entire file 
    // using `node cleanUp.js` or copy and paste into a replit


// EX 1:
function askForName() { console.log("Hello, what is your name?") }

askForName()
// EX 1 The function syntax needs improvement. The console.log ("Hello, what is your name?") should be on the next line and followed by a ;. The closing curly bracet should be on the next line.
function asksForName() {
  console.log("Hello, what is your name?")
}
asksForName()

// EX 2:
function addThreeNums(first, second, third) {
var sum = first + second + third
return sum;
      }
      
addThreeNums(1, 2, 3);
addThreeNums(4, 2, 7);

// The code block is shortened. The return value of the addThreeNums function is printed to the console log.
function addThreeNums (first, second, third) {
  return first + second + third
}
console.log(addThreeNums(1,2,3));
console.log(addThreeNums(4,2,7));
// OR
// The code block is shortened. The return value of the function is stored in another variable in case the return values need to be used in the program again.
function addThreeNums (first, second, third) {
  return first + second + third
}
var sum1 = addThreeNums(1,2,3);
var sum2 = addThreeNums (4,2,7);

console.log(sum1);
console.log(sum2);

// EX 3:
func makeFreshPesto(){
  console.log("Buy ingredients: basil, parmesan, romano, olive oil, pine nuts, garlic, salt, pepper");
  console.log("Pulse basil and pine nuts");
  console.log("Add garlic and cheeses");
  console.log("Slowly pour in oil");
  console.log("Season");    }

makeFreshPesto();
// The function keyword is turncated and the function syntex needs improvement. The space is missing between the end parentheses and first curly bracket. The second curly bracket should be on a separate line. If this function is called/invoked, an error will occur. I corrected the function keyword. I also shortened the code.
function makeFreshPesto() { 
  console.log("Buy ingredients: basil, parmesan, romano, olive oil, pine nuts, garlic, salt, pepper");
  console.log("Pulse basil and pine nuts");
  console.log("Add garlic and cheeses");
  console.log("Slowly pour in oil");
  console.log("Season");    
}
// The code block is shortened in my second answer. 
function makeFreshPesto() {
  return "Buy ingredients: basil, parmesan, romano, olive oil, pine nuts, garlic, salt, pepper. Pulse basil and pine nuts. Add garlic and cheeses. Slowly pour in oil. Season.";
}
console.log(makeFreshPesto())

//  EX 4:
function average(num1, num2) 
  {
var sum = num1 + num2;
    var avg = sum / 2;

return avg
  }
// The code block is shortened. The return value of the average function is printed to the console log.
function average(num1,num2)
{
  return (num1 + num2) / 2
}
console.log(average(6,4))