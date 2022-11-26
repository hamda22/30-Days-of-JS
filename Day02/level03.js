let a =
  "You cannot end a sentence with because because because is a conjunction";
console.log(a.match("because"));
const sentence =
  "%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching";
let regex = /[^a-zA-Z ]/g;
console.log(sentence.replace(regex, ""));
let salary = 5000;
let annual = salary * 2;
let bouns = salary * 3;
console.log(
  `He earns ${salary} euro from salary per month, ${annual} euro annual bonus, ${bouns} euro online courses per month.`
);
// for (let a = 0; a <= 3; a++) {
//   console.log(a);
// }
