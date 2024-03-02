// Defining Our Own Functions
// For each exercise below, write the function according to the requirements. 
// Store the return value of the function call in a variable, and use console.log() to see the return value in the console.
// If a function takes parameters, call the function at least twice, passing different arguments each time.

// 1: Write a function named greeting that returns a string with a general greeting.
function generalGreeting() {
    var greetingMessage = "Hello, welcome to Mod 0";
    return greetingMessage
}
console.log(generalGreeting())

// 2: Write a function named customGreeting that returns a greeting WITH a specific name.
function customGreeting(specificName) {
  return  `Hello, welcome to Mod 0, ${specificName}!`
}
var student1 = customGreeting ("Kim");
var student2 = customGreeting ("Greg");

console.log(student1);
console.log(student2);

// 3: Write a function named greetPerson that takes in 3 strings, a first, middle, and last name, and returns a sentence with the full name.
function greetPerson(firstName, middleName, lastName) {
    return `Hello, welcome to Mod 0, ${firstName} ${middleName} ${lastName}!`
}
var student3 = greetPerson("Kimberly", "Michelle", "Ewing");
console.log (student3)

// 4: Write a function named square that takes in one number, and returns the square of that number.
// BONUS: Print a sentence that interpolates the return value of your square function.
function square(number) {
    var squareOfNumber = number ** 2;
    return squareOfNumber 
}
console.log(square(7))

// 5: Write a function named checkStock that satisfies the following interaction pattern:
// Hint: You will only write one checkStock function that checks the quantity and then prints the corresponding statement.

checkStock(4, "Coffee");
// => "Coffee is stocked"

checkStock(3, "Tortillas");
// => "Tortillas - running LOW"

checkStock(0, "Cheese");
// => "Cheese - OUT of stock!"

checkStock(1, "Salsa");
// => "Salsa - running LOW"

function checkStock(quantityOfIngredient,ingredient) {
    if (quantityOfIngredient === 4) {
        return `${ingredient} is stocked`
    } else if (quantityOfIngredient === 3) {
        return `${ingredient} - running LOW`
    } else if (quantityOfIngredient === 0) {
        return `${ingredient} - OUT of stock`
    } else if (quantityOfIngredient === 1) {
        return `${ingredient} - running LOW`
    }
    }
  console.log(checkStock(4,"Coffee"));
  console.log(checkStock(3,"Tortillas"));
  console.log(checkStock(0,"Cheese"));
  console.log(checkStock(1,"Salsa"));
  console.log(checkStock(0,"Coffee"));

// Another answer:
  function checkStock(quantityOfIngredient,ingredient) {
    if (quantityOfIngredient === 4) {
        return `${ingredient} is stocked`
    } else if (quantityOfIngredient === 0) {
        return `${ingredient} - OUT of stock`
    } else if (quantityOfIngredient > 0 && quantityOfIngredient < 4) {
        return `${ingredient} - running LOW`
    }
    }   
    console.log(checkStock(4,"Coffee"));
    console.log(checkStock(3,"Tortillas"));
    console.log(checkStock(0,"Cheese"));
    console.log(checkStock(1,"Salsa"));
    console.log(checkStock(0,"Coffee"));

// Another answer:
  function checkStock(quantityOfIngredient,ingredient) {
    if (quantityOfIngredient === 4) {
        return `${ingredient} is stocked`
    } else if (quantityOfIngredient === 0) {
        return `${ingredient} - OUT of stock`
    } else if (0 < quantityOfIngredient < 4) {
        return `${ingredient} - running LOW`
    }
    }
    console.log(checkStock(4,"Coffee"));
    console.log(checkStock(3,"Tortillas"));
    console.log(checkStock(0,"Cheese"));
    console.log(checkStock(1,"Salsa"));
    console.log(checkStock(0,"Coffee"));