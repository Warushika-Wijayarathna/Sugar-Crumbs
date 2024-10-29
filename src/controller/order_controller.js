import product from '../model/product_model.js';
import { products } from '../db/database.js';

//display all products when the page loads

const productList = $("#product-list");

// Loop through the products array and generate product cards
$.each(products, function(index, product) {
    const productCard = `
        <div class="col">
            <div class="card product-card">
                <img src="${product.image}" class="card-img-top" alt="${product.description}">
                <div class="card-body">
                    <h5 class="card-title">${product.description}</h5>
                    <p class="card-text">$${product.unitPrice.toFixed(2)}</p>
                </div>
            </div>
        </div>
    `;

    // Append the product card to the product list
    productList.append(productCard);
});

// when the user clicks on a product card, add that product to the cart(list group)

productList.on("click", ".product-card", function() {
    const productCard = $(this);
    const productTitle = productCard.find(".card-title").text();
    const productPrice = parseFloat(productCard.find(".card-text").text().replace("$", "")); // Convert price to a number

    // Check if the product already exists in the cart
    const existingCartItem = $("#cart").find(`li[data-title="${productTitle}"]`);
    if (existingCartItem.length > 0) {
        // Update quantity and total price for the existing item
        const quantitySpan = existingCartItem.find(".quantity");
        const priceSpan = existingCartItem.find(".total-price");

        let quantity = parseInt(quantitySpan.text().replace("x", ""));
        quantity += 1;

        const newTotalPrice = (productPrice * quantity).toFixed(2);

        quantitySpan.text(`x${quantity}`);
        priceSpan.text(`$${newTotalPrice}`);
    } else {
        // If the product is not in the cart, add it as a new item
        const cartItem = `
            <li class="list-group-item d-flex justify-content-between" data-title="${productTitle}">
                <span>${productTitle} <span class="quantity">x1</span></span>
                <span class="total-price">$${productPrice.toFixed(2)}</span>
            </li>
        `;
        $("#cart").append(cartItem);
    }
});


