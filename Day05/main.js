// import { countries } from "./countries.js";
// import { webTechs } from "./webtechs.js";

// console.log(countries);
// console.log(webTechs);

let text =
  "I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.";
console.log(text.replace(".", ""));
text = text.split(" ");
console.log(Array.isArray(text));
console.log(text.length);

const shoppingCart = ["Milk", "Coffee", "Tea", "Honey"];

console.log(shoppingCart.unshift("Meat"));
console.log(shoppingCart.pop());
console.log(shoppingCart.push("Sugar"));
console.log(shoppingCart);
const frontEnd = ["HTML", "CSS", "JS", "React", "Redux"];
const backEnd = ["Node", "Express", "MongoDB"];
let fullStack = frontEnd.concat(backEnd);

console.log(fullStack);
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
