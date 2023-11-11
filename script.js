//Theatre logic for calculating the cost of a ticket


const GENERAL_ADMISSION_TICKET_COST = 20;
const CHILD_AND_SENIOR_TICKET_COST = 10;
const MANTINEE_DISCOUNT = -3;

function buyTicket() {
  const age = prompt("How old are you?");
  let cost = getBaseTicketCost(age);
  const isMatinee = prompt("Are you attending a mantinee show?");
  if (isMatinee.toLowerCase() === "yes" || isMatinee.toLowerCase() === "y") {
    cost = cost - MANTINEE_DISCOUNT;
    alert("Your ticket cost is: $ " + cost);
  }
  if (isMatinee.toLowerCase() === "no" || isMatinee.toLowerCase() === "n") {
    cost = GENERAL_ADMISSION_TICKET_COST;
    alert("Your ticket cost is: $ " + cost);
  } else {
    alert("Please answer yes or no.");
}



  function getBaseTicketCost(age) {
    if (age === "") {
        return alert("Please enter a number.");
    } 
    else if (age <= 12 || age >= 65) {
      console.log("age: ", age);
      return alert("Your ticket cost is: $" + CHILD_AND_SENIOR_TICKET_COST);
    } else {
      return GENERAL_ADMISSION_TICKET_COST;
    }
  }
}
