console.log("TASK 6: Variables and data types");

const fullName = "Kerimkulova Sabina";
let age = 20;
const isStudent = true;
const favouriteColor = "White";

console.log("Full name:", fullName);
console.log("Age:", age);
console.log("Student:", isStudent);
console.log("Favourite colour:", favouriteColor);

console.log(typeof fullName);
console.log(typeof age);
console.log(typeof isStudent);
console.log(typeof favouriteColor);

age = 21;
console.log("New age:", age);




console.log("TASK 7: Input and a greeting");

const userName = prompt("What is your name?");

alert("Hello, " + userName + "! Welcome!");

const myGreeting = "My name is Kerimkulova Sabina, and my group is MT-2504.";
console.log(myGreeting);




console.log("TASK 8: Sum and arithmetic");

const num1 = Number(prompt("Enter the first number:"));
const num2 = Number(prompt("Enter the second number:"));

console.log("Sum:", num1 + num2);
console.log("Difference:", num1 - num2);
console.log("Product:", num1 * num2);
console.log("Quotient:", num1 / num2);
console.log("Remainder:", num1 % num2);

console.log('"12" + "5" =', "12" + "5");
console.log("12 + 5 =", Number("12") + Number("5"));




console.log("TASK 9: Strings");

const nameForTask9 = "Kerimkulova Sabina";

console.log("Full name:", fullName);
console.log("Name length:", fullName.length);
console.log("Uppercase:", fullName.toUpperCase());
console.log("Lowercase:", fullName.toLowerCase());
console.log("First three characters:", fullName.slice(0, 3));

const sentence1 = "I am a student.";
const sentence2 = "I study at Astana IT University.";
console.log(sentence1 + " " + sentence2);




console.log("TASK 10: Increment and assignment operators");

let counter = 10;

counter++;
console.log("After ++:", counter);

counter--;
console.log("After --:", counter);

counter += 5;
console.log("After += 5:", counter);

counter -= 3;
console.log("After -= 3:", counter);

counter *= 2;
console.log("After *= 2:", counter);

counter /= 4;
console.log("After /= 4:", counter);




console.log("TASK 11: Dog age calculation");

let dogAge = 2;
let humanAge = (dogAge - 2) * 4 + 21;

console.log("A dog aged " + dogAge + " years is " + humanAge + " in human years according to the formula.");

dogAge = 5;
humanAge = (dogAge - 2) * 4 + 21;

console.log("A dog aged " + dogAge + " years is " + humanAge + " in human years according to the formula.");




console.log("TASK 12: Functions");

function greetUser(name) {
    console.log("Hello, " + name + "!");
}

greetUser("Sabina");
greetUser("ya");

function calculateSum(a, b) {
    return a + b;
}

console.log("Sum:", calculateSum(5, 3));
console.log("Sum:", calculateSum(10, 7));

function calculateRectangleArea(width, height) {
    return width * height;
}

console.log("Rectangle area:", calculateRectangleArea(4, 5));
console.log("Rectangle area:", calculateRectangleArea(6, 3));



