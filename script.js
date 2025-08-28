let userName = prompt("Welcome to Fashion Hub! Enter your name:");
let userAge = parseInt(prompt("Enter your age:"));
let welcomeMsg = document.getElementById("welcome-msg");

if (userAge >= 18) {
    welcomeMsg.textContent = `Hello ${userName}, enjoy shopping our latest collection!`;
} else {
    welcomeMsg.textContent = `Hello ${userName}, please explore our kid-friendly section.`;
}


function calculateTotal(cart) {
    return cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
}

function formatProduct(name, price) {
    return `${name} - $${price}`;
}
