//Theatre logic for calculating the cost of a ticket


const GENERAL_ADMISSION_TICKET_COST = 20;
const CHILD_AND_SENIOR_TICKET_COST = 10;
const MANTINEE_DISCOUNT = 3;
let GOING_TO_MATINEE = true;
let age = 0;
let cost = 0;
let isMatinee = "";

function checkMatinee(){
    isMatinee = prompt("Are you attending a mantinee show?");
    if (isMatinee !== "yes" && isMatinee!== "y" && isMatinee!== "no" && isMatinee!== "n") {
        alert("Please enter a value yes or no.");
        checkMatinee();
    } 
   } 

function getAge(){
    age = prompt("How old are you?");
     let checkAge = parseInt(age);
     console.log("age: ", checkAge);
    if (isNaN(checkAge)){
        alert("Please enter a number.");
        getAge();
    } 
}

function getCost(isMatinee){
    if (isMatinee.toLowerCase() === "no" || isMatinee.toLowerCase() === "n") {
        //cost = GENERAL_ADMISSION_TICKET_COST;
        console.log("no mantinee : ", cost);
        GOING_TO_MATINEE = false;
        if(age >= 13 || age <= 64) {
            cost = GENERAL_ADMISSION_TICKET_COST;
            GOING_TO_MATINEE = false;
            // set going to matinee to false
      }
      else if (isMatinee.toLowerCase() === "yes" || isMatinee.toLowerCase() === "y") {
        GOING_TO_MATINEE = true;
        console.log("yes mantinee your cost is: ", cost, GOING_TO_MATINEE);
        if ((age<= 12 || age >= 65)) {
          cost = CHILD_AND_SENIOR_TICKET_COST - MANTINEE_DISCOUNT; 
        } 
        else {
            cost = GENERAL_ADMISSION_TICKET_COST - MANTINEE_DISCOUNT;
            // console.log("cost; ", cost, GOING_TO_MATINEE);
            // return    cost;
        }
     }
    }
}
function getBaseTicketCost(age) {
    if (age === "") {
         alert("Please enter a number, example: 25."); g
        getBaseTicketCost(age); 
    } 
     if ((age <= 12 || age >= 65) && (GOING_TO_MATINEE === true)) {
      console.log("senior discount age: ", age, cost);
      cost = CHILD_AND_SENIOR_TICKET_COST - MANTINEE_DISCOUNT;
      return alert("Discount alert #1, your base ticket cost is: $" + cost);
    } 
    else if ((age <= 12 || age >= 65) && (GOING_TO_MATINEE === false)) {
        console.log("senior discount age: ", age, cost);
        cost = CHILD_AND_SENIOR_TICKET_COST;

        return alert("Discount alert #2, your base ticket cost is: $" + cost);
    }
    else if (GOING_TO_MATINEE === false){
        console.log("senior discount age: ", age, cost);
        cost = GENERAL_ADMISSION_TICKET_COST ;

        return alert("Your base ticket cost is: $" + cost);
 }
 if (age >= 13 && age <= 64 && GOING_TO_MATINEE === true) {
    console.log("middle aged", age, cost);
    cost = GENERAL_ADMISSION_TICKET_COST - MANTINEE_DISCOUNT;
        alert("Hi middle aged customer, your base ticket cost is: $" + cost);
      }
      else{
        cost = GENERAL_ADMISSION_TICKET_COST;
        alert("Hi defualt user going to matinee, Your base ticket cost is: $" + cost);
      }
}
function buyTicket() {
    checkMatinee();
    getAge();    
    getCost(isMatinee);
    getBaseTicketCost(age);
    //age = 65; 
    //console.log("isMatinee: ", isMatinee.toString());
    //console.log("sending getbase ticket cost fution now", age);
    
    // call getBaseTicketCost to calculate the cost of the ticket
    //console.log("cost return value: ", cost);  
//   console.log("ismatinee: ", isMatinee.toString());
 
    // cost = GENERAL_ADMISSION_TICKET_COST - MANTINEE_DISCOUNT;
    //update Going_to_matinee to true
  }
//    else {
//     alert("Please answer yes or no.");
//     buyTicket();
//     console.log("no mantinee click again or enter again: ", cost);
//     //Let them try again this is an infite loop if they just keep clicking ok :) 
//     }


// let timeNow =  new Date().toLocaleString();
// var today = new Date();   
// document.getElementById("time").innerHTML = today.toLocaleString;
// I'd like to parse the date but this would be more for a receipt so future work.

