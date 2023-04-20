//if and if... else

//a
var age = prompt("Kindly enter your age: ");
if (age > 25) {
  alert("You are above 25 years old.");
} else if (age == 25) {
  alert("You are 25 years old.");
} else if (age < 25 && age > 0) {
  alert("You are below 25 years old.");
} else {
  alert("No age entered.");
}

//b
var num = prompt("Kindly enter a number that is less than 100: ");
if (num < 100 && num > 0) {
  alert("You entered " + num + ". It is less than 100.");
} else if (num == 100) {
  alert("You entered 100.");
} else if (num > 100) {
  alert("You a number that is greater than 100.");
} else {
  alert("No number entered.");
}

//Loops
document.write(
  "<h3> 2. Construct for loops that meets the following tasks: </h3>"
);
document.write("<p> a) Print the numbers 0-30, one number per line. </p>");
for (var i = 0; i <= 30; i++) {
  document.write("<span> </span>" + i + "<br>");
}

document.write(
  "<p>b) Print only the even values from 0-40, one number per line. </p>"
);
for (var i = 0; i <= 40; i++) {
  if (i % 2 === 0) {
    document.write("<span> </span>" + i + "<br>");
  }
}

document.write(
  "<p> c) Print the numbers 40 to 10 in descending order, but only if the numbers are multiples of 3. </p>"
);

for (var i = 40; i >= 10; i--) {
  if (i % 3 === 0) {
    document.write("<span> </span>" + i + "<br>");
  }
}
