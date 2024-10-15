// store hours information
const storeHours = {
    open: 9, // store opens at 9 am
    close: 18 // store closes at 6 pm (24-hour format)
};

// display store status based on the current time
function displayStoreStatus() {
    const now = new Date();
    const currentHour = now.getHours();
    const storeStatusElement = document.getElementById("store-status");

    if (currentHour >= storeHours.open && currentHour < storeHours.close) {
        storeStatusElement.textContent = "we are currently open!";
        storeStatusElement.style.color = "green";
    } else {
        storeStatusElement.textContent = "sorry, we are closed now.";
        storeStatusElement.style.color = "red";
    }
}

// prices for cakes
const cakePrices = {
    "Chocolate": { Small: 600, Medium: 800, Large: 1000 },
    "Red Velvet": { Small: 650, Medium: 850, Large: 1050 },
    "Vanilla": { Small: 500, Medium: 700, Large: 900 },
    "Birthday": { Small: 750, Medium: 950, Large: 1200 },
    "Wedding": { Small: 2000, Medium: 3000, Large: 4000 },
    "Cupcakes": { Small: 50 } // price per cupcake, minimum order of 6
};

// calculate total price based on flavor, size, and quantity
function calculateTotalPrice() {
    const flavor = document.getElementById("flavor").value;
    const size = document.getElementById("size").value;
    const quantity = parseInt(document.getElementById("quantity").value, 10);
    let totalPrice = 0;

    if (flavor === "Cupcakes") {
        // cupcakes pricing (per piece), minimum order of 6
        totalPrice = cakePrices.Cupcakes.Small * Math.max(quantity, 6);
    } else {
        // calculate total based on selected flavor and size
        const pricePerCake = cakePrices[flavor][size];
        totalPrice = pricePerCake * quantity;
    }

    return totalPrice;
}

// handle form submission
function handleFormSubmit(event) {
    event.preventDefault(); // prevent form from refreshing the page

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const flavor = document.getElementById("flavor").value;
    const size = document.getElementById("size").value;
    const design = document.getElementById("design").value;
    const quantity = document.getElementById("quantity").value;
    const totalPrice = calculateTotalPrice();

    alert(`thank you, ${name}! your order for ${quantity} ${size} ${flavor} cakes with ${design} design has been placed.\ntotal price: ₱${totalPrice}.\na confirmation email will be sent to ${email}.`);
}

// event listeners
document.addEventListener("DOMContentLoaded", () => {
    displayStoreStatus();
    document.getElementById("cake-order-form").addEventListener("submit", handleFormSubmit);
});