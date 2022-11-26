// const arrays = Array(); // can use new Array too
// const arrs = []; // recommend way to create an array
// const numbers = [0, 3.14, 9.81, 37, 98.6, 100]; // array of numbers
// const fruits = ["banana", "orange", "mango", "lemon"]; // array of strings, fruits
// const vegetables = ["Tomato", "Potato", "Cabbage", "Onion", "Carrot"]; // array of strings, vegetables
// const animalProducts = ["milk", "meat", "butter", "yoghurt"]; // array of strings, products
// const webTechs = ["HTML", "CSS", "JS", "React", "Redux", "Node", "MongDB"]; // array of web technologies
// const countries = ["Finland", "Denmark", "Sweden", "Norway", "Iceland"]; // array of strings, countries
// const arr = [
//   "Asabeneh",
//   250,
//   true,
//   { country: "Finland", city: "Helsinki" },
//   { skills: ["HTML", "CSS", "JS", "React", "Python"] },
// ]; // arr containing different data types
// console.log(arr[4].skills[4]);

// let js = "JavaScript";
// const charsInJavaScript = js.split("");
// console.log(charsInJavaScript); // ["J", "a", "v", "a", "S", "c", "r", "i", "p", "t"]
// console.log(js);
// const fruits = ["banana", "orange", "mango", "lemon"]; // array of fruits
// const vegetables = ["Tomato", "Potato", "Cabbage", "Onion", "Carrot"]; // array of vegetables
// const fruitsAndVegetables = fruits.concat(vegetables); // concatenate the two arrays

// console.log(fruitsAndVegetables);
// let companiesString =
//   "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon, ";
// const companies = companiesString.split(",");

// console.log(companiesString.concat(js));

// // console.log(companies); // ["Facebook", " Google", " Microsoft", " Apple", " IBM", " Oracle", " Amazon"]
// let txt =
//   "I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.";
// const words = txt.split(" ");

// console.log(words);
// the text has special characters think how you can just get only the words
// ["I", "love", "teaching", "and", "empowering", "people.", "I", "teach", "HTML,", "CSS,", "JS,", "React,", "Python"]

// // Print the array and its length

// console.log("Numbers:", numbers);
// console.log("Number of numbers:", numbers.length);

// console.log("Fruits:", fruits);
// console.log("Number of fruits:", fruits.length);

// console.log("Vegetables:", vegetables);
// console.log("Number of vegetables:", vegetables.length);

// console.log("Animal products:", animalProducts);
// console.log("Number of animal products:", animalProducts.length);

// console.log("Web technologies:", webTechs);
// console.log("Number of web technologies:", webTechs.length);
// console.log("the index of redux is : " + webTechs.indexOf("Redux"));

// console.log("Countries:", countries);
// console.log("Number of countries:", countries.length);
// console.log(arrays.push("abcd"));
// console.log(arrays);

// const numbers = [1, 2, 3, 4, 5];
// console.log(numbers.join()); // 1,2,3,4,5

// const names = ["Asabeneh", "Mathias", "Elias", "Brook"];
// const names_number = numbers.concat(names).join();
// console.log(names_number);
const _numbers = [1, 2, 3, 4, 5, 6];
_numbers.splice(2, 4, 7, 8, 9, 11);
console.log(_numbers.splice(2, 4, 7, 8, 9, 11));
