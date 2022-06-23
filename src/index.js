console.log('project is up')

// 👉 TASK 1- Select the following elements from the DOM:

// A- BUTTONS
const launchButton = document.querySelector('#launchButton')
const confirmButton = document.querySelector('#confirmButton')
const cancelButton = document.querySelector('#cancelButton')

// B- MESSAGES
const successMessage = document.querySelector('.success')
const failureMessage = document.querySelector('.failure')

// C- MODAL
const modal = document.querySelector('.modal')

//Debugger Statement - to check that all variables are what we want
// debugger; - did not work in lecture

// 👉 TASK 2- Demo handling click events on button#launchButton, using:
//  A- HTML inside index.html
// See line 19 in index.html with onclick=""

//  B- The DOM's element.onclick attribute
// Writing this overwrites the HTML onclick="" - see above
launchButton.onclick = function(event){
    console.log('Using .onclick');
};

//  C- element.addEventListener('click', callback)
// Best way of adding the onclick
launchButton.addEventListener('click', function(event){
    console.log('Using the .addEventListener');
});

document.addEventListener('click', (event) => {
    // console.log('Clicking on the document');
    if(event.target === launchButton){
        console.log('You clicked the launch button!');
    }
    else{
        console.log('You clicked something else!');
    };
});

Array.from(document.links).forEach((link) => {
    link.addEventListener('click', (event) => {
        console.log(`Disrupting the default behavior of "${event.target.textContent}"`)
        event.preventDefault(); 
        // The above code prevents the hyperlinks to function from the index.HTML
    })
})

// 👉 TASK 3- Create a function that launches!
// It should open the confirmation modal.
// Add it as an event listener for click events on the launch button.
launchButton.addEventListener('click', function(event){
    modal.classList.remove('off');
    // Making the text disappear after clicking the Launch! button again
    successMessage.classList.add('off');
    failureMessage.classList.add('off');
})

// Different way of doing code above:
function launch(event){
    modal.classList.remove('off');
    // Making the text disappear after clicking the Launch! button again
    successMessage.classList.add('off');
    failureMessage.classList.add('off');
}

launchButton.addEventListener('click', launch)

// 👉 TASK 4- Create a function to confirm the launch.
// It should close the modal and display a success report.
// Add it as a listener for clicks on the confirmation button.
confirmButton.addEventListener('click', (event) => {
    modal.classList.add('off');
    successMessage.classList.remove('off');
})

// Another way of doing the code above:
function confirm(event){
    modal.classList.add('off');
    successMessage.classList.remove('off');
}

confirmButton.addEventListener('click', confirm)

// 👉 TASK 5- Create a function to cancel the launch.
// It should close the modal and display a failure report.
// Add it as a listener for clicks on the cancellation button.
cancelButton.addEventListener('click', (event) => {
    modal.classList.add('off');
    failureMessage.classList.remove('off');
})

// 👉 TASK 6- Create a function that closes the modal if
// the user hits the Escape key on their keyboard.
// Add it as an event listener for 'keydown' events on document.


// 👉 TASK 7- Add to ALL ELEMENTS ON THE PAGE an event listener for click events.
// It should console.log the target 🎯 of the event.
// It should also console.log the CURRENT target 🧭 of the event.
// Play with stopPropagation and stopImmediatePropagation.


// 👉 TASK 8- [STRETCH] Create helper functions to make the code
// more readable in tasks 3, 4, 5, 6
function openModal() {

}

function closeModal() {

}

function killReports() {

}


// 👉 TASK 9- [STRETCH] Using the mouseover event on 'document',
// log to the console the X and Y coordinates
// of the mouse pointer, as it moves over the screen.
