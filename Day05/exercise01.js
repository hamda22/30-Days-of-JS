let array = [];
let _array = new Array();
let letters = ["a", "b", "c", "d", "e", "f", "g", "h"];
let mixedDataTypes = ["a", 1, false, [1, 2, 3], ["b", "c", "d"], undefined];
let itCompanies = [
  "Facebook",
  "Google",
  "Microsoft",
  "Apple",
  " IBM",
  "Oracle",
  "Amazon",
];

const _company = itCompanies.map((company) => {
  return company.toUpperCase();
});

if (itCompanies.includes("Facebook")) {
  console.log("company is found ");
} else {
  console.log("company doesnt exsist");
}
const countries = [
  "Albania",
  "Bolivia",
  "Canada",
  "Denmark",
  "Ethiopia",
  "Finland",
  "Germany",
  "Hungary",
  "Ireland",
  "Japan",
  "Kenya",
];

const webTechs = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "Node",
  "MongoDB",
];

console.log(letters.length);
console.log(letters[0]);
console.log(letters[4]);
console.log(letters[7]);
console.log(letters.length - 1);
console.log(_company);
console.log(itCompanies);
console.log(itCompanies.length - 1);
console.log(itCompanies.slice(0, 3));
console.log(itCompanies.slice(4, 7));
console.log(itCompanies.sort());
console.log(itCompanies.reverse());
console.log(itCompanies.shift());
console.log(itCompanies.pop());
console.log((itCompanies = Array(0)));
