import product from '../model/product_model.js';
import { products } from '../db/database.js';

// Display all products when the page loads
const productList = $("#product-list");
let subtotal = 0; // Track subtotal
const serviceTaxRate = 0.06; // Example service tax rate of 6%
let serviceTax = 0; // Track service tax

// Loop through the products array and generate product cards
$.each(products, function(index, product) {
    console.log("Adding product:", product); // Debug: Log each product object
    const productCard = `
        <div class="col">
            <div class="card product-card">
                <img src="${product.image}" class="card-img-top" alt="${product.description}">
                <div class="card-body">
                    <h5 class="card-title">${product.description}</h5>
                    <p class="card-category">${product.category}</p>
                    <p class="card-text">$${product.unitPrice.toFixed(2)}</p>
                </div>
            </div>
        </div>
    `;
    productList.append(productCard);
});

// Filter function to display only selected category products
function filterProducts(category) {
    $(".product-card").each(function() {
        const productCard = $(this).closest(".col");
        const productCategory = productCard.find(".card-category").text();

        // Show or hide based on category match or 'All' selection
        if (category === "All" || productCategory === category) {
            productCard.removeClass("d-none");
        } else {
            productCard.addClass("d-none");
        }
    });
}

// Event listeners for category buttons
$("#all-button").on("click", function() {
    filterProducts("All");
});
$("#cakes-button").on("click", function() {
    filterProducts("Cake");
});
$("#cookies-button").on("click", function() {
    filterProducts("Cookie");
});
$("#drinks-button").on("click", function() {
    filterProducts("Drink");
});

// When the user clicks on a product card, add that product to the cart
productList.on("click", ".product-card", function() {
    console.log("Product card clicked"); // Debug: Check if click event fires
    const productCard = $(this);
    const productTitle = productCard.find(".card-title").text();
    const productPrice = parseFloat(productCard.find(".card-text").text().replace("$", "")); // Convert price to a number

    // Check if the product already exists in the cart
    const existingCartItem = $("#cart").find(`li[data-title="${productTitle}"]`);
    if (existingCartItem.length > 0) {
        console.log("Updating existing item:", productTitle); // Debug: Existing cart item
        // Update quantity and total price for the existing item
        const quantitySpan = existingCartItem.find(".quantity");
        const priceSpan = existingCartItem.find(".total-price");

        let quantity = parseInt(quantitySpan.text().replace("x", ""));
        quantity += 1;

        const newTotalPrice = (productPrice * quantity).toFixed(2);

        quantitySpan.text(`x${quantity}`);
        priceSpan.text(`$${newTotalPrice}`);

        // Update subtotal
        subtotal += productPrice;
    } else {
        console.log("Adding new item:", productTitle); // Debug: New cart item
        // If the product is not in the cart, add it as a new item
        const cartItem = `
            <li class="list-group-item d-flex justify-content-between" data-title="${productTitle}">
                <span>${productTitle} <span class="quantity">x1</span></span>
                <span class="total-price">$${productPrice.toFixed(2)}</span>
            </li>
        `;
        $("#cart").append(cartItem);

        // Update subtotal
        subtotal += productPrice;
    }

    // Calculate service tax and total payment
    serviceTax = subtotal * serviceTaxRate;
    const totalPayment = (subtotal + serviceTax).toFixed(2);

    console.log("Subtotal:", subtotal, "Service Tax:", serviceTax, "Total Payment:", totalPayment); // Debug: Display totals

    // Update subtotal, service tax, and total in the UI
    $("h6:contains('Total:') + p").text(`Subtotal: $${subtotal.toFixed(2)}`);
    $("h6:contains('Total:') + p + p").text(`Service Tax: $${serviceTax.toFixed(2)}`);
    $("h6:contains('Total Payment:')").text(`Total Payment: $${totalPayment}`);
});

// Cart empty check with navigation confirmation
$(document).ready(function() {
    const mainContent = $('.main-content');
    const cart = $('#cart'); // Assuming cart is a ul element

    // Reusable function to handle button clicks
    function setupButton(buttonSelector, sectionSelector) {
        const button = $(buttonSelector);
        const section = $(sectionSelector);

        button.on('click', function(event) {
            event.preventDefault();
            console.log("Button clicked:", buttonSelector); // Debug: Button click
            if (cart.children().length > 0) {
                Swal.fire({
                    icon: 'warning',
                    title: 'Cart is not empty',
                    text: 'Are you sure you want to navigate away?',
                    showCancelButton: true,
                    confirmButtonText: 'Yes',
                    cancelButtonText: 'No'
                }).then((result) => {
                    if (result.isConfirmed) {
                        console.log("Navigation confirmed, emptying cart"); // Debug: Confirm navigation
                        mainContent.empty();
                        mainContent.append(section);
                        section.show();
                        cart.empty(); // Empty the cart
                        subtotal = 0; // Reset subtotal
                        serviceTax = 0; // Reset service tax
                        $("h6:contains('Total:') + p").text(`Subtotal: $${subtotal.toFixed(2)}`);
                        $("h6:contains('Total:') + p + p").text(`Service Tax: $${serviceTax.toFixed(2)}`);
                        $("h6:contains('Total Payment:')").text(`Total Payment: $${subtotal.toFixed(2)}`);
                    }
                });
            } else {
                console.log("Cart is empty, navigating directly"); // Debug: Cart empty, no confirmation needed
                mainContent.empty();
                mainContent.append(section);
                section.show();
            }
        });
    }

    // Call the reusable function for each button/section pair
    setupButton('#customerBtn', '.customer');
    setupButton('#productBtn', '.product');
    setupButton('#cash-registerBtn', '.cash-register');
    setupButton('#userBtn', '.user');
    setupButton('#invoiceBtn', '.invoice');
    setupButton('#dashboardBtn', '.dashboard');
});
