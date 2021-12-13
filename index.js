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
//Assignment 4
//a. Validate both firstName and lastName to ensure:
//i. a minimum length of two (2) characters
function validateForm() {
  var firstName = document.getElementById("firstName");
  var lastName = document.getElementById("lastName");
  if (firstName.value.length <= 2 || lastName.value.length <= 2) {
    alert("A minimum length of two (2) characters");
    return false;
  } else {
    return true;
  }
  //Validate facilitator and constrain the possible valid values to
  //be those of the active facilitators for the course during this
  //semester. For example, if we have facilitators with the following first
  //names: “Laura”, “Fazil”, and “Harsh”, you would ensure that only
  //these values would pass validation
  const facilitator1 = Laura;
  const facilitator2 = Fazil;
  const facilitator3 = Harsh;
  document.getElementById("facilitator").innerHTML =
    "An active professor is: " + facilitator2;
  alert("Active Facilitator");
  // Change heading:
  document.getElementById("myH").innerHTML = "My Website";
}
//Assignment 5 - Part 1
async function getDegrees(url) {
  // fetch the url
  await fetch(url)
    //get your data here, and check for the response status. If it's not 200, throw an error
    .then((response) => response.json())
    .then((data) =>
      document.write(
        `My first degree was a ${data.data[0].degrees.bachelors.data.type} from ${data.data[0].degrees.bachelors.data.institution} in ${data.data[0].degrees.bachelors.data.date}`
      )
    );
}

getDegrees("./src/degrees.json");
