/**
 * Part 1: Creating Variables and Constants
 * In this file you should define the following variables with the exact names
 *
 * 1. fullName      -> Ziad Almuzaini
 * 2. yearOfBirth   -> May 18, 1999
 * 3. hobby         -> Aviation
 * 4. funFact       -> I have a bachelors in Communication and Entreperneurial Leadership
 * 5. image         -> https://preview.redd.it/funniest-cat-pictures-you-have-v0-cvk0vuc0hj5a1.jpg?width=3000&format=pjpg&auto=webp&s=73c395c63462f04c52e1550559dfb9809dd2a599
 */

// Part 1 answer 👇🏻 ...


let fullName = "Ziad Almuzaini"
let yearOfBirth= 1999
let hobby= "Aviation"
let funFact= "I have a bachelors in Communication and Entreperneurial Leadership"
let image= "https://preview.redd.it/funniest-cat-pictures-you-have-v0-cvk0vuc0hj5a1.jpg?width=3000&format=pjpg&auto=webp&s=73c395c63462f04c52e1550559dfb9809dd2a599"



/**
 * Part 2: String Interpolation
 * Create the following new variables that interpolate
 * the variables defined above into strings.
 *
 * 1. fullNameString      -> assign it to: My name is ${Name}
 * 2. yearOfBirthString   -> assign it to: I am {AGE}, and make sure you calculate your age from your year of birth
 * 3. hobbyString         -> assign it to: My hobby is {YOUR_HOBBY}
 * 
 * Uncomment the following lines and start interpolating.
 * You can uncomment a line by removing the // at the start
 */

// const fullNameString = `My name is ${}`;
// const yearOfBirthString =
// const hobbyString =

const fullNamestring= `my name is ${fullName}`;
const yearOfBirthString= `I am ${2024-yearOfBirth}`;
const hobbyString= `My hobby is ${hobby}`;


/**
 * Part 3: Re-assignment
 * Increment your hacker score
 * */

let stars = 0;

function incrementBy1() {
  // Increment stars by 1 👇🏻 
   stars= stars + 1
}
function decrementBy1() {
  // decrement stars by 1 👇🏻
   stars= stars - 1
}
function incrementBy2() {
  // Increment stars by 2 👇🏻
  stars = stars + 2
}
function decrementBy2() {
  // decrement stars by 2 👇🏻
  stars = stars - 2
}
