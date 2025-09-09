// DOM element references
const pulseBtn = document.getElementById('pulse-btn');
const animatedBox = document.getElementById('animated-box');
const card = document.getElementById('card');
const cardFlipBtn = document.getElementById('card-flip-btn');
const startLoadingBtn = document.getElementById('start-loading-btn');
const stopLoadingBtn = document.getElementById('stop-loading-btn');
const spinner = document.getElementById('spinner');
const showModalBtn = document.getElementById('show-modal-btn');
const modalOverlay = document.getElementById('my-modal-overlay');
const modal = document.getElementById('my-modal');
const closeModalBtn = document.getElementById('close-modal-btn');
const rotatingImage = document.getElementById('rotating-image');
const rotateBtn = document.getElementById('rotate-btn');


// Global Scope: This variable is accessible from anywhere in this script.
let globalMessage = "I am a global variable.";

/*
 * A reusable function to toggle a CSS class on an element.
 * This is useful for triggering and removing animations.
 * @param {HTMLElement} element - The DOM element to modify.
 * @param {string} className - The class name to add or remove.
 */
function toggleCssClass(element, className) {
    if (!element) {
        console.error("Element not found:", element);
        return;
    }
    element.classList.toggle(className);
}

/*
 * A function to demonstrate scope.
 * It declares a local variable that is only accessible inside this function.
 */
function demonstrateScope() {
    // Local Scope: This variable is only accessible within this function.
    let localMessage = "I am a local variable.";
    console.log("From inside the function:", localMessage);
    console.log("Can also access the global variable:", globalMessage);
}

/*
 * A custom function that takes parameters and returns a value.
 * @param {number} num1 - The first number.
 * @param {number} num2 - The second number.
 * @returns {number} The product of the two numbers.
 */
function calculateProduct(num1, num2) {
    return num1 * num2;
}

// Event listeners to trigger CSS animations and DOM changes
if (pulseBtn && animatedBox) {
    pulseBtn.addEventListener('click', () => {
        // Reusing the toggleCssClass function to trigger the pulse animation
        toggleCssClass(animatedBox, 'is-animated');
        // Remove the class after the animation is done so it can be re-triggered
        setTimeout(() => {
            animatedBox.classList.remove('is-animated');
        }, 1200);
    });
}

if (card && cardFlipBtn) {
    // Triggering the card flip animation using the new button
    cardFlipBtn.addEventListener('click', () => {
        toggleCssClass(card, 'is-flipped');
    });
}

if (rotatingImage && rotateBtn) {
    // Starting and stopping the image rotation
    rotateBtn.addEventListener('click', () => {
        toggleCssClass(rotatingImage, 'is-rotating');
    });
}

if (spinner && startLoadingBtn && stopLoadingBtn) {
    // Starting and stopping the loading animation
    startLoadingBtn.addEventListener('click', () => {
        spinner.classList.add('is-loading');
    });
    stopLoadingBtn.addEventListener('click', () => {
        spinner.classList.remove('is-loading');
    });
}

if (showModalBtn && modalOverlay && modal && closeModalBtn) {
    // Showing the modal using custom functions
    showModalBtn.addEventListener('click', () => {
        modalOverlay.classList.add('is-visible');
        // We use a small delay to allow the overlay to fade in before the modal slides
        setTimeout(() => {
            modal.classList.add('is-visible');
        }, 50);
    });

    // Hiding the modal
    closeModalBtn.addEventListener('click', () => {
        modal.classList.remove('is-visible');
        setTimeout(() => {
            modalOverlay.classList.remove('is-visible');
        }, 300); // This timeout matches the CSS transition duration
    });
}

// Demonstrate a simple calculation and scope usage
const productResult = calculateProduct(5, 10);
console.log("The result of the calculation is:", productResult);
demonstrateScope();









