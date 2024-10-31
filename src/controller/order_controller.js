import product from '../model/product_model.js';
import order from '../model/order_model.js';
import {customers as customer_array, products as default_product} from '../db/database.js';
import {generateNextCustomerId} from "./customer_controller.js";
import {user_id} from "./sign_in_controller.js";

// Display all products when the page loads
const productList = $("#product-list");
let products = JSON.parse(localStorage.getItem('products'));
console.log("Products from localStorage:", products); // Debug: check if products are loaded correctly

// Retrieve customers from localStorage
let customers = JSON.parse(localStorage.getItem('customers'));
console.log("Customers from localStorage:", customers); // Debug: check if customers are loaded correctly

let orders = JSON.parse(localStorage.getItem('orders'));


let subtotal = 0; // Track subtotal
const serviceTaxRate = 0.06; // Example service tax rate of 6%
let serviceTax = 0; // Track service tax

// Function to generate product cards
function generateProductCards() {
    productList.empty(); // Clear existing product cards
    $.each(products, function(index, product) {
        console.log("Adding product:", product); // Debug: Log each product object
        const productCard = `
            <div class="col">
                <div class="card product-card">
                    <img src="${product._image}" class="card-img-top" alt="${product._description}">
                    <div class="card-body">
                        <h5 class="card-title">${product._description}</h5>
                        <p class="card-code">${product._code}</p>
                        <p class="card-category">${product._category}</p>
                        <p class="card-text">$${product._unitPrice.toFixed(2)}</p>
                    </div>
                </div>
            </div>
        `;
        productList.append(productCard);
    });

    // Reattach event listeners to product cards
    productList.off("click", ".product-card", handleProductCardClick); // Remove previous listeners
    productList.on("click", ".product-card", handleProductCardClick);
    console.log("Event listeners reattached to product cards"); // Debug: Log reattachment
}

// Function to handle product card click
let cartItems = []; // Array to store cart items

function handleProductCardClick() {
    console.log("Product card clicked"); // Debug: Check if click event fires
    const productCard = $(this);
    const productId = productCard.find(".card-code").text();
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

        // Update cartItems array
        const cartItem = cartItems.find(item => item.id === productId);
        cartItem.quantity = quantity;
        cartItem.totalPrice = newTotalPrice;
    } else {
        console.log("Adding new item:", productTitle); // Debug: New cart item
        // If the product is not in the cart, add it as a new item
        const cartItem = `
            <li class="list-group-item d-flex justify-content-between" data-title="${productTitle}" data-id="${productId}">
                <span>${productTitle} <span class="quantity">x1</span></span>
                <span class="total-price">$${productPrice.toFixed(2)}</span>
            </li>
        `;
        $("#cart").append(cartItem);

        // Update subtotal
        subtotal += productPrice;

        // Add new item to cartItems array
        cartItems.push({
            id: productId,
            title: productTitle,
            price: productPrice,
            quantity: 1,
            totalPrice: productPrice.toFixed(2)
        });
    }

    // Calculate service tax and total payment
    serviceTax = subtotal * serviceTaxRate;
    const totalPayment = (subtotal + serviceTax).toFixed(2);

    console.log("Subtotal:", subtotal, "Service Tax:", serviceTax, "Total Payment:", totalPayment); // Debug: Display totals

    // Update subtotal, service tax, and total in the UI
    $("h6:contains('Total:') + p").text(`Subtotal: $${subtotal.toFixed(2)}`);
    $("h6:contains('Total:') + p + p").text(`Service Tax: $${serviceTax.toFixed(2)}`);
    $("h6:contains('Total Payment:')").text(`Total Payment: $${totalPayment}`);

    console.log("Cart Items:", cartItems); // Debug: Display cart items array
}

// Function to handle cart item double-click
function handleCartItemDblClick() {
    const cartItem = $(this);
    const productId = cartItem.data("id");
    const productTitle = cartItem.data("title");
    const productPrice = parseFloat(cartItem.find(".total-price").text().replace("$", "")) / parseInt(cartItem.find(".quantity").text().replace("x", ""));

    // Remove item from cartItems array
    cartItems = cartItems.filter(item => item.id !== productId);

    // Update subtotal
    const quantity = parseInt(cartItem.find(".quantity").text().replace("x", ""));
    subtotal -= productPrice * quantity;

    // Remove item from cart
    cartItem.remove();

    // Calculate service tax and total payment
    serviceTax = subtotal * serviceTaxRate;
    const totalPayment = (subtotal + serviceTax).toFixed(2);

    console.log("Subtotal:", subtotal, "Service Tax:", serviceTax, "Total Payment:", totalPayment); // Debug: Display totals

    // Update subtotal, service tax, and total in the UI
    $("h6:contains('Total:') + p").text(`Subtotal: $${subtotal.toFixed(2)}`);
    $("h6:contains('Total:') + p + p").text(`Service Tax: $${serviceTax.toFixed(2)}`);
    $("h6:contains('Total Payment:')").text(`Total Payment: $${totalPayment}`);

    console.log("Cart Items:", cartItems); // Debug: Display cart items array
}

// Attach double-click event listener to cart items
$("#cart").on("dblclick", "li", handleCartItemDblClick);

// Initial call to generate product cards
$(document).ready(function() {
    generateProductCards();
    $('#invoice-id').text(generateNextInvoiceId());
    console.log(generateNextInvoiceId());
    saveOrderToLocalStorage();
});

export function resetCart() {
    console.log("Resetting cart"); // Debug: Check if the method is called

    // Clear the cart items and reset total amounts
    $("#cart").empty(); // Empty the cart
    subtotal = 0; // Reset subtotal
    serviceTax = 0; // Reset service tax

    // Update UI elements to reflect the empty cart
    $('#invoice-id').text(generateNextInvoiceId());
    $("#subtotal").text(`Subtotal: $0.00`);
    $("#service-tax").text(`Service Tax: $0.00`);
    $("#total-payment").text(`Total Payment: $0.00`);

    // Reset cash input and balance display
    $("#cashAmount").val(''); // Clear cash amount input
    $("#balance").text('Balance: $0.00'); // Reset balance display

    // Re-generate product cards and reattach event listeners
    setTimeout(generateProductCards, 10); // Ensure generateProductCards is called after reset
}


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
    event.preventDefault();
    filterProducts("All");
});
$("#cakes-button").on("click", function() {
    event.preventDefault();
    filterProducts("Cake");
});
$("#cookies-button").on("click", function() {
    event.preventDefault();
    filterProducts("Cookie");
});
$("#drinks-button").on("click", function() {
    event.preventDefault();
    filterProducts("Drink");
});

// event listener for search-mobile-btn
let customer_id;
$("#search-mobile-btn").on("click", function(event) {
    event.preventDefault();
    const searchInput = $("#search-mobile").val();

    console.log("Searching for phone number:", searchInput); // Debug: Log search input

    // Find the customer by phone number
    const customer = customers.find(customer => customer._phone === searchInput);


    // Display result
    if (customer) {
        console.log("Customer found:", customer); // Debug: Log found customer
        $("#customer-tag").text(`Name: ${customer._name}\nPhone: ${customer._phone}`);
        customer_id = customer._id;
        $("#search-mobile").val(''); // Clear search input
    } else {
        console.log("Customer not found for phone number:", searchInput); // Debug: Not found
        $("#customer-tag").text(`Name: \nPhone: `);
        $("#search-mobile").val(''); // Clear search input

        // Show SweetAlert for customer not found
        Swal.fire({
            title: "Customer Not Found",
            text: `No customer found with phone number: ${searchInput}`,
            icon: "error",
            confirmButtonText: "OK"
        });
    }
});

$('#customer-add-btn-reg').on('click', function() {
    $('#customer-id2').text(generateNextCustomerId());
    $('.customer-form .modal').modal('show');
});

// formatted id
function generateNextInvoiceId() {
    let nextInvoiceId;
    if (!orders || orders.length === 0) {
        nextInvoiceId = 'I001';
    } else {
        const lastInvoice = orders[orders.length - 1];
        const lastIdNumber = lastInvoice ? parseInt(lastInvoice._invoice_id.slice(1), 10) : 0;
        nextInvoiceId = `I${(lastIdNumber + 1).toString().padStart(3, '0')}`;
    }
    return nextInvoiceId;
}

function saveOrderToLocalStorage(newOrder) {
    if (orders === null) {
        orders = [];
    }
    orders.push(newOrder);
    localStorage.setItem('orders', JSON.stringify(orders));
    console.log("Order saved to localStorage:", newOrder); // Debug: Log saved order
}

// Event listener for Enter key on Cash Amount input
$("#cashAmount").on("keypress", function(event) {
    if (event.key === "+") {
        handleOrder();
    }
});

// Event listener for Make Order button
$("#makeOrderButton").on("click", function(event) {
    event.preventDefault(); // Prevent default form submission
    handleOrder();
});

// Function to handle order processing
function handleOrder() {
    const cashAmount = parseFloat($("#cashAmount").val()); // Get cash amount input
    const totalPayment = parseFloat($("#total-payment").text().replace("Total Payment: $", "")); // Get total payment

    if (!isNaN(cashAmount) && cashAmount >= totalPayment) {
        const balance = (cashAmount - totalPayment).toFixed(2); // Calculate balance
        $("#balance").text(`Balance: $${balance}`);

        // Display success SweetAlert with balance
        Swal.fire({
            title: "Order Successful!",
            text: `Your balance is $${balance}`,
            icon: "success",
            confirmButtonText: "OK"
        });

        // Create a new order object
        let invoice_id = $('#invoice-id').text();
        let user = user_id;
        let customer = customer_id;
        let order_date = new Date().toLocaleDateString();
        let order_time = new Date().toLocaleTimeString();
        let order_items = cartItems;
        let sub_total = subtotal;
        let service_tax = serviceTax;
        let total_price = totalPayment;
        let payment_method = "Cash";
        let cash_amount = cashAmount;
        let balance_amount = parseFloat(balance);

        let newOrder = new order(
            invoice_id,
            user,
            customer,
            order_date,
            order_time,
            order_items,
            sub_total,
            service_tax,
            total_price,
            payment_method,
            cash_amount,
            balance_amount
        );

        saveOrderToLocalStorage(newOrder);

        resetCart(); // Reset the cart after successful order
    } else {
        // Display error SweetAlert if cash amount is insufficient
        Swal.fire({
            title: "Insufficient Cash",
            text: "Please enter an amount greater than or equal to the total payment.",
            icon: "error",
            confirmButtonText: "Retry"
        });
    }
}





