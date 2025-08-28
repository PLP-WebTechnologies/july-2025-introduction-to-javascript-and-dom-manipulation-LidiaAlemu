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


let products = [
    {name: "T-Shirt", price: 25},
    {name: "Jeans", price: 50},
    {name: "Jacket", price: 100}
];

let productsList = document.getElementById("products-list");
products.forEach(product => {
    let li = document.createElement("li");
    li.textContent = formatProduct(product.name, product.price);
    productsList.appendChild(li);
});


let cart = [];
let checkoutBtn = document.getElementById("checkout-btn");
checkoutBtn.addEventListener("click", () => {
    
    let randomProduct = products[Math.floor(Math.random() * products.length)];
    cart.push({ ...randomProduct, quantity: 1 });

    
    let cartTotal = document.getElementById("cart-total");
    cartTotal.textContent = "Total: $" + calculateTotal(cart);

    
    document.getElementById("store-header").classList.toggle("highlight");
});
