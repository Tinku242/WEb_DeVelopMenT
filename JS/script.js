console.log("hello world"); // hello world in console of browser

// same functionalites like other programing languages
// basic variable declaration i.e., var , let
// example
var name = "hemanth";
let age = 12;

document.getElementById("p1").innerHTML = "hello! " + name;
document.getElementById("p2").innerHTML = "age : " + age;
console.log(age);

// artimetic operators +,-,*,/,%
// increment of age
age += 1; // like same as diffrent programming languages
console.log(age);

// users input two ways
// way one window prompt
/*
 *  let username = window.prompt("Enter the user name : ");
 * console.log(username);
 */

// user data from html to js file
document.getElementById("mybutton").onclick = function () {
  //by this function on click submit p1 id html tag changes to input
  username = document.getElementById("name").value;
  document.getElementById("p1").innerHTML = username;
};

// type conversion in javascript
// Number(), String(), Boolean()
// some examples
let x = Number("3.14");
let y = String(222);
let z1 = Boolean(""); // blank is false
let z2 = Boolean("hemanth"); // except blank any value is true
console.log(x, typeof x);
console.log(y, typeof y);
console.log(z1, typeof z1);
console.log(z2, typeof z2);

//const is variable can't be changed
const a = 10;
console.log(a);
/*
 *a = 20; // an error raise when execute
 *console.log(a);
 */

//  Math module all you know in java or python
// some comman
/*
 *    Math.
 *       floor()
 *       ceil()
 *       round()
 *       pow(num,pownum)
 *       sqrt()
 *       abs()
 *       max()
 *       min()
 *       PI
 */

/*
 * exercise - 1 
! here is the practice session now let create a folder and create
! folder(triangle) inside folder create some of files naming with
! index.html , style.css , javascript.js
! user input from either window.prompt and HTML->JS(recom)
! given triangle is right angle triangle Hypotenuse theroem 
! formula : A^2 + B^2 = C^2
! given A and B sides given by user and find C side along with area
*/


