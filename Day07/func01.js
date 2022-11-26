// level 01
function fullName(fn,ln){
   console.log(fn+ln); 
}
fullName('Jane ','Doe')
function addNums(a,b){
    console.log('the the sum of the two numbers',a+b)
}
addNums(2,4)

function rec(length,width){
    let area = length * width
    return console.log( 'the area of rectangle is ',area);
}
rec(5,5)
function perimeter (length , width){
    let perimeter = 2*(length + width)
    return console.log('the perimeter is ',perimeter);

}
perimeter(5,8)

function volume(length , height){
    let volume = length * height 
    console.log(' the volume of the rectangle is ', volume);

}
volume(4,5)
function areaCircle (r ){
    let area = Math.PI* r * r ;
 console.log('the area of circle', area);
}
areaCircle(4)

function circumOfCircle(r){
     let circumference = 2*(Math.PI*r)
console.log('the circumfrence of the circle is ',circumference);
}
circumOfCircle(4)

function density(mass , volume){
    let density = mass / volume;
    console.log('the density of the substance ',density);

}
density(5,7)
 function speed ( dis, time ){
    let object = dis / time;
    console.log('this speed of the object is '. object);
 }
 speed(4,6)

 function weight (mass, gravity){
    let weight = mass * gravity
    console.log('the weight of the substance', weight);
 }
 weight(6,7)
 function temperatureC(C){
let convert = (C  * 9/5) + 32
 console.log( ' the tempertaure in F ', convert);
 }
 temperatureC(25)

function BMI (weight ,height){
     let bmi = weight /(height*height);
     console.log(bmi);
if (bmi < 18){
    console.log('Underweight: BMI is less than 18.5');
}
else if ( bmi > 18.5 && bmi <= 24.9 ){
    console.log('Normal weight: BMI is 18.5 to 24.9');
}
else if (bmi <= 29.9){
    console.log('Overweight: BMI is 25 to 29.9');
}
else if (bmi > 30)
    console.log('Obese: BMI is 30 or more');
}


BMI(80,1.8)


 function Seasons(season){
    switch(season.toLowerCase()) {
        case 'spring':
         console.log('its',season);
          break;
        case 'autumn':
            console.log('its',season);
          break;
          case ' winter':
            console.log('its',season);
          break;
          case 'summer':
            console.log('its',season);
            break
        default:
            console.log(' sorry its not a season');
      }

 }

 Seasons('SPRING')

