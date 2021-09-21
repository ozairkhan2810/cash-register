var billAmount = document.querySelector("#bill-amount");
var cashGiven = document.querySelector("#cash-given");
var checkButton = document.querySelector("#check-button");
var message = document.querySelector("#error-message");
var noOfNotes = document.querySelectorAll(".no-of-notes");

const notes = [2000, 500, 100, 20, 10, 5, 1];

checkButton.addEventListener("click", function validateBillAndCashAmount() {
    message.style.display = "none";
    if( billAmount.value > 0) {
        if(cashGiven.value >= billAmount.value) {
            const amountToBeReturned = cashGiven.value - billAmount.value;
            calculateChange(amountToBeReturned);
        } else {
            showMessage("Cash given should be same or more than bill amount");
        }
    } else {
        showMessage("Invalid bill amount");
    }
});

function calculateChange(amountToBeReturned) {
    for(let i=0; i<notes.length; i++) {
        const numberOfNotes = Math.trunc(amountToBeReturned / notes[i]);
        amountToBeReturned %= notes[i];
        noOfNotes[i].innerText = numberOfNotes;
    }
}

function showMessage(msg) {
    message.style.display = "block";
    message.innerText = msg;
}

