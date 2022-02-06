var f_name = prompt("First Name?")
var l_name = prompt("Last Name?")
var age = prompt("Age?")
var tall = prompt("Tall?")
var pet = prompt("Pet?")

alert("Thank you for information")


if ((f_name[0] === l_name[0]) && (20 >= age <= 30) && tall > 170 && pet[pet.length-1] === 'y') {
  console.log("Welcome comrade! You passed the Spy Test");
} else {
  console.log("Sorry, nothing to see here");
}
