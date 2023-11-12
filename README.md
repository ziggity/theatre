# theatre
 Scenario:
    Welcome to the Magical Mystery Theater! Your mission is to develop a simple JavaScript-based system to handle ticket purchases for our guests. The ticket price depends on the age of the guest and the show time. Here are the rules:

    The general admission ticket price is $20.
    If the guest is under 12 or over 65, they qualify for a discounted ticket price of $10.
    If the guest is attending a matinee show, they get an additional $3 off any ticket price.

Tasks to Complete this Challenge:
Create an HTML file named theater.html. In this file, include a button element that the user can click to purchase a ticket. Set up an initial script tag where you'll be writing your JavaScript code.
Declare two global constants for the general admission ticket price and the discounted ticket price.
Write a function named buyTicket(). This function should ask the user for their age (use prompt()) and calculate the initial ticket price based on the user's age. Display the ticket price to the user using alert(). Hint: You'll need to use an if statement to check the user's age and determine the ticket price. Don't forget to call your buyTicket() function when the user clicks the button.
Refactor your code. Extract the code responsible for calculating the base ticket price based on age to a new function named getBaseTicketCost(age). This new function should take age as a parameter and return the appropriate ticket price. You should then call this function from within buyTicket().
Add a matinee discount. Ask the user if they are attending a matinee show (use prompt() again), and if so, apply a $3 discount to their ticket price. Hint: You'll need to use another if statement to check the user's response and apply the discount if necessary. Consider declaring another global constant for the matinee discount.

# Check it out here live: https://brown-joceline-34.tiiny.site/