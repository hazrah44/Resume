//Welcomes the visitor with an alert
//declared a function named greetUser()
function greetUser() {
  alert("WELCOME TO YOUR ALERT BOX!!!!!");
  //   Prompts the visitor for his/her name
  //Displays the users name with an alert
  let person = prompt("Please enter your name");
  alert("Hello and welcome to this web site " + person);
  //Asks the visitor to enter two numbers with a prompt

  //They can enter one number with one prompt and the second
  //number with a second prompt, or you can ask them to enter them in
  //one prompt, separated by a space or comma
  //Uses a function (that you create) to add these two visitor entered numbers
  //and adds them together and returns the result to the visitor with an alert.
  //Concatenate the result of adding their two numbers together at the end of
  //this phrase: “The sum of your two numbers is: [result]
  let p1 = Number(prompt("Please enter one number"));
  let p2 = Number(prompt("Please enter second number"));
  let result = Number(p1 + p2);
  alert("The sum of your two numbers is: " + result);

  //Add conditional logic (if/else):
  //a. If the result of adding the two numbers together is greater than 10:
  //i. Alert: “That is a big number.”
  //b. If the result of adding the two numbers together is less than or
  //equal to 10:
  //i. Alert: “That is a small number.”
  if (result >= 10) {
    alert("That is a big number.");
  } else {
    alert("That is a small number.");
  }
  //Add a loop:
  //a. Prompt the user and ask if they want to add two numbers again, if
  //they do (check for yes/no):
  //i. Let the user provide two numbers again and produce the
  //result with an alert (steps 4-7 repeat)
  //b. If they don’t want to continue adding numbers:
  //i. Thank the visitor for using the program and stop.
  let txt;
  let r = confirm("Press a button!");
  if (r == true) {
    txt = "You check OK! If you want to play again!!!";
    let p1 = Number(prompt("Please enter one number"));
    let p2 = Number(prompt("Please enter second number"));
    let result = Number(p1 + p2);
    alert("The sum of your two numbers is: " + result);
  } else {
    txt = "You check Cancel! If you don’t want to continue adding numbers";
    alert("Thank the visitor for using the program and stop.");
  }
  document.getElementById("demo").innerHTML = txt;
}
