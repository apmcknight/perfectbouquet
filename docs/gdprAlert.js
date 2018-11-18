// Developed by Adam McKnight, in November of 2018.

let exitButton = document.querySelector('#gdprAlert>#gdprButton'); //Links the GDPR Alert Button to JavaScript
const gdprAlert = document.querySelector('#gdprWindow') //Links the GDPR Alert Window itself to JavaScript, this element does not change.

// Function sets the display value of CSS to 'none', which hides the 
// GDPR Alert Window. — Function is called/envoked in the HTML itself.

function closeAlertWindow(){
    gdprAlert.style.display = 'none';
}

