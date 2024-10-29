import product from '../model/product_model';
import { products } from '../db/database';

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
