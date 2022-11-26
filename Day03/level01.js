// exercise level 01 day 3
let firstName, lastName, country, city, age, isMarried, year;
firstName = "Hamda";
lastName = "Elmi";
country = "Somaliland";
city = "Hargeysa";
age = 30;
year = 2002;

console.log(typeof firstName);
console.log(typeof age);
console.log(typeof year);
console.log(10 == "10");
console.log(parseInt("9.8") == 10);

// truthy values
console.log(100 === 100);
console.log("a" === "a");
console.log("b" == "b");

// falsy values
console.log("b" == "");
console.log(4 === "4");
let a = "python";
let b = "jargon";
console.log(a.length != b.length);
let h = prompt("enter hours");
let ph = prompt("enter rate per hour:");
let c = h * ph;
let d = confirm("this is your weekly earning " + c);
console.log("enter hours:" + h);
console.log("enter rate per hour:" + ph);

let dargon = "dargon";
let python = "python";
let u =
  dargon.includes("on") && python.includes("on")
    ? "there is ' on' in python and dragon"
    : "there is no ' on' in both python and dragon";
console.log(u);
