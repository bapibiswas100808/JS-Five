// Ternary Operator
// if else example
let age = 13;
if (age >= 18) {
  console.log("You are adult");
} else {
  console.log("You are not adult");
}

// Ternary Operator***
age >= 18 ? console.log("You are adult") : console.log("You are not adult");

// example two
let food;
if (age > 12) {
  food = "chicken";
} else {
  food = "icecream";
}
console.log(food);
console.log(`He likes to have ${food} `);
console.log(`He like to eat ${age > 12 ? "Chicken" : "Icecream"}`);

// Javascript Function
function showText() {
  console.log("some text");
}
showText();
// example two
function showName(name) {
  console.log(name);
}
showName("Adrita");
showName("Abir");

// example three
function calculateNumber(n1, n2) {
  console.log(n1 + n2);
  console.log(n1 * n2);
}
calculateNumber(5, 7);

// example 4
// function averageMark(s1, s2, s3, s4, s5) {
//   console.log((s1 + s2 + s3 + s4 + s5) / 5);
// }
// averageMark(90, 98, 95, 87, 86);

function averageMark(s1, s2, s3, s4, s5) {
  const average = (s1 + s2 + s3 + s4 + s5) / 5;
  return average;
}
// console.log(averageMark(90, 98, 95, 87, 86));
const aAverageMark = averageMark(90, 98, 95, 87, 86);
console.log(aAverageMark);
const bAverageMark = averageMark(92, 95, 90, 89, 80);
console.log(bAverageMark);

console.log(aAverageMark, bAverageMark);
