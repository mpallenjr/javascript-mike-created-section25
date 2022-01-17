/*
// Coding Challenge #1
// Mark and John are trying to compare their BMI (Body Mass Index), which is
// calculated using the formula:
// BMI = mass / height ** 2 = mass / (height * height) (mass in kg
// and height in meter).
// Your tasks:
// 1. Store Mark's and John's mass and height in variables
// 2. Calculate both their BMIs using the formula (you can even implement both
// versions)
// 3. Create a Boolean variable 'markHigherBMI' containing information about
// whether Mark has a higher BMI than John.
// Test data:
// § Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
// m tall.
// § Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
// m tall.
// GOOD LUCK � 

let markMass;
let markHeight;
let johnMass;
let johnHeight;

markMass = 78;
markHeight = 1.69;

johnMass = 92;
johnHeight = 1.95;

let markBmi = markMass / markHeight ** 2;
let johnBmi = johnMass / johnHeight ** 2;

console.log("Data 1:", markBmi, johnBmi)
console.log(markBmi > johnBmi)

if (markBmi > johnBmi) {
  console.log(`Mark's BMI (${markBmi}) is higher than John's (${johnBmi})!`)
} else {

  console.log(`John's BMI (${johnBmi}) is higher than Mark's (${markBmi})!`)
}

markMass = 95;
markHeight = 1.88;

johnMass = 85;
johnHeight = 1.76;

markBmi = markMass / markHeight ** 2;
johnBmi = johnMass / johnHeight ** 2;

console.log("Data 2:", markBmi, johnBmi)
console.log(markBmi > johnBmi)
/*
/// Solution ///

// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn =1.95;

const massMark = 95;
const heightMark = 1.88;
const massJohn = 85;
const heightJohn =1.76;

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / heightJohn ** 2;
const markHigherBMI = BMIMark > BMIJohn;

console.log(BMIMark, BMIJohn, markHigherBMI); 





/////////////

// Use the BMI example from Challenge #1, and the code you already wrote, and
// improve it.
// Your tasks:
// 1. Print a nice output to the console, saying who has the higher BMI. The message
// is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
// 2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
// BMI (28.3) is higher than John's (23.9)!"
// Hint: Use an if/else statement �
// GOOD LUCK � 


if (markBmi > johnBmi) {
  console.log(`Mark's BMI (${markBmi}) is higher than John's (${johnBmi})!`)
} else {

  console.log(`John's BMI (${johnBmi}) is higher than Mark's (${markBmi})!`)
}
*/