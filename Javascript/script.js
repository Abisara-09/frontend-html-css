// alert is used to show message and it wants until a user presses on OK 
alert("Only 2 mins left to complete the test. Hurry up!");

//prompt(msg, [default])
//it has OK/Cancel button 
/* var age = parseInt(prompt("what's your age?"))
console.log(typeof age)
if(age >= 18)
{
          console.log("user is eligible")
}
else{
          console.log("user not eligible")
} */


/* var radius = parseInt(prompt("radius"))
console.log(typeof radius);
var area = 3.14 + radius + radius;
console.log("area of the circle is: ", area) */

var length = parseInt(prompt("length:"))
var breadth = parseInt(prompt("breadth:"))
console.log( length, breadth);
var areaOfRect = 2 * (length + breadth)
console.log("area of rectangle is:", areaOfRect);

/*confrim : it returns a true and false*/
var isClassTomorrow = confirm("is there any class tomorrow")
console.log(isClassTomorrow);