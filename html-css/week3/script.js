console.log("Hello");

// Select the button
const orderBtn = document.querySelector(".password");

//To check that the button is selected
console.log(orderBtn);

// Create a variable and set the default value to false
let hasBeenToggled = false;

//To check that the button is selected
console.log(orderBtn);

// Add eventListener
orderBtn.addEventListener("mouseover", PopupMessage);


function PopupMessage() {

    //display form
    if (hasBeenToggled === false) {
        hasBeenToggled = true;
        document.querySelector(".password-popup-message").style.visibility = "visible";

    } else {
        // cancel and hide form
        hasBeenToggled = false;
        document.querySelector(".password-popup-message").style.visibility = "hidden";

    } // End of else statement

}; // End of function function showOrderForm
