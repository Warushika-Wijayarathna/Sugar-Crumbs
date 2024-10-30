// Import necessary modules
import Product from '../model/product_model.js';
import { products as defaultProducts } from '../db/database.js';

export function reattachAddProductClick() {
    const addProductButton = $('#product-add-btn');
    addProductButton.off('click', showProductModal()).on('click', showProductModal());

}

function showProductModal() {
    $('#newProductCode').text(generateNextProductId());
    resetNewProductForm();
    new bootstrap.Modal($('.product-form-new .modal').get(0)).show();
}

// Load products from local storage or use default products if none found
let products = JSON.parse(localStorage.getItem('products')) || defaultProducts;

// Initialize on document ready
$(document).ready(function () {
    init();
});

// Function to initialize the application
function init() {
    displayProducts();
    setupProductModal();
    setupProductEdit();
}

// Function to display all products
function displayProducts() {
    const productTableBody = $('.product-table tbody');
    productTableBody.empty(); // Clear existing rows

    products.forEach(product => {
        const row = createProductRow(product);
        productTableBody.append(row);
    });
}

// Function to create a product row
function createProductRow(product) {
    return `
        <tr>
            <td class="row-id">${product._code}</td>
            <td class="row-desc">${product._description}</td>
            <td class="row-category">${product._category}</td>
            <td class="row-image" style="width: 10%; height: auto;">
                <img src="${product._image}" alt="${product._description}" style="width: 100%; aspect-ratio: auto; object-fit: cover;">
            </td>
            <td class="row-price">${product._unitPrice.toFixed(2)}</td>
            <td class="row-qty">${product._qtyOnHand}</td>
            <td class="row-actions">
                <button class="btn btn-danger">Delete</button>
            </td>
        </tr>
    `;
}

// Function to set up the product modal for adding new products
function setupProductModal() {
    const uploadBoxNew = $('#uploadBoxNew');
    const fileInputNew = $('#fileInputNew');

    initializeUploadBox(uploadBoxNew, fileInputNew);

    // Open modal and reset fields when adding a new product

    // Save product when save button is clicked
    $('#product-save').on('click', (event) => {
        event.preventDefault();
        saveProduct();
    });
}

// Function to reset the new product form
function resetNewProductForm() {
    $('#newProductDesc').val('');
    $('#newProductCategory').val('');
    $('#newProductUnitPrice').val('');
    $('#newProductQtyOnHand').val('');
    resetUploadBox($('#uploadBoxNew'));
}

// Function to initialize the upload box for new products
function initializeUploadBox(uploadBox, fileInput) {
    const browseFileButton = $('#browseFileButtonNew');

    browseFileButton.on('click', (event) => {
        event.preventDefault();
        fileInput.trigger('click');
    });

    uploadBox.on('dragover dragleave', (event) => {
        event.preventDefault();
        uploadBox.css('borderColor', event.type === 'dragover' ? '#fff' : '#ffffff');
    });

    uploadBox.on('drop', (event) => {
        event.preventDefault();
        handleFileUpload(event.originalEvent.dataTransfer.files[0], uploadBox);
    });

    fileInput.on('change', (event) => {
        handleFileUpload(event.target.files[0], uploadBox);
    });
}

// Function to handle file uploads
function handleFileUpload(file, uploadBox) {
    if (file && file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onload = function (event) {
            uploadBox.html(`
                <img src="${event.target.result}" alt="Image Preview" class="preview">
                <button class="delete-button" id="deleteButtonNew">Delete Image</button>
            `);
            $('#deleteButtonNew').on('click', () => resetUploadBox(uploadBox));
        };
        reader.readAsDataURL(file);
    } else {
        Swal.fire("Error", "Please upload an image file.", "error");
    }
}

// Function to reset the upload box
function resetUploadBox(uploadBox) {
    uploadBox.html(`
        <i class="fa-solid fa-cloud-arrow-up"></i>
        <p>Drag & Drop to Upload File</p>
        <p>OR</p>
        <button type="button" id="browseFileButtonNew">Browse File</button>
        <input type="file" id="fileInputNew" hidden>
    `);
    initializeUploadBox(uploadBox, $('#fileInputNew'));
}

// Function to generate the next product ID
function generateNextProductId() {
    const lastProduct = products[products.length - 1];
    const lastIdNumber = lastProduct ? parseInt(lastProduct._code.slice(1), 10) : 0;
    return `P${(lastIdNumber + 1).toString().padStart(3, '0')}`;
}

// Function to save the new product
function saveProduct() {
    const productId = $('#newProductCode').text();
    const productDescription = $('#newProductDesc').val();
    const productCategory = $('#newProductCategory').val();
    const productImage = $('#uploadBoxNew img').attr('src');
    const productUnitPrice = parseFloat($('#newProductUnitPrice').val());
    const productQtyOnHand = parseInt($('#newProductQtyOnHand').val());

    if (!productDescription || !productCategory || !productImage || isNaN(productUnitPrice) || isNaN(productQtyOnHand)) {
        Swal.fire("Error", "Please fill in all fields.", "error");
        return;
    }

    const newProduct = new Product(productId, productDescription, productCategory, productImage, productUnitPrice, productQtyOnHand);
    products.push(newProduct);
    localStorage.setItem('products', JSON.stringify(products)); // Update local storage
    displayProducts(); // Refresh displayed products

    Swal.fire("Success", "Product saved successfully!", "success");
}

// Function to set up the product edit modal
function setupProductEdit() {
    const productModalEdit = new bootstrap.Modal($('.product-form-edit .modal').get(0));
    const productTableBody = $('.product-table tbody');

    productTableBody.on('click', 'tr', function () {
        populateEditForm($(this));
        productModalEdit.show();
    });

    $('#fileInputEdit').on('change', function () {
        const file = this.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function (e) {
                $('#imagePreviewEdit').attr('src', e.target.result).show();
                $('#uploadTextEdit').hide();
            };
            reader.readAsDataURL(file);
        } else {
            resetUploadBoxEdit();
        }
    });

    $('#browseFileButtonEdit').on('click', (event) => {
        event.preventDefault();
        $('#fileInputEdit').click();
    });
}

// Function to populate the edit form with existing product data
function populateEditForm(row) {
    const item_code = row.find('.row-id').text();
    const item_description = row.find('.row-desc').text();
    const item_category = row.find('.row-category').text();
    const item_unit_price = row.find('.row-price').text();
    const item_qty_on_hand = row.find('.row-qty').text();
    const item_image = row.find('.row-image img').attr('src');

    $('#editProductCode').text(item_code);
    $('#editProductDesc').val(item_description);
    $('#editProductCategory').val(item_category);
    $('#editProductUnitPrice').val(item_unit_price);
    $('#editProductQtyOnHand').val(item_qty_on_hand);

    if (item_image) {
        $('#imagePreviewEdit').attr('src', item_image).show();
        $('#uploadTextEdit').hide();
    } else {
        resetUploadBoxEdit();
    }
}

// Function to reset the upload box for editing
function resetUploadBoxEdit() {
    $('#imagePreviewEdit').hide().attr('src', '');
    $('#uploadTextEdit').show();
}

// Delete product functionality with SweetAlert
$('.product-table').on('click', '.btn-danger', function () {
    const productId = $(this).closest('tr').find('.row-id').text(); // Get the ID of the product to delete
    deleteProduct(productId);
});

// Function to delete a product with SweetAlert confirmation
function deleteProduct(productId) {
    const index = products.findIndex(product => product._code === productId);

    if (index === -1) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Product not found!',
        });
        return;
    }

    // Use SweetAlert for confirmation
    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#d33',
        cancelButtonColor: '#3085d6',
        confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
        if (result.isConfirmed) {
            products.splice(index, 1);
            localStorage.setItem('products', JSON.stringify(products)); // Update local storage
            displayProducts(); // Refresh product display
            Swal.fire('Deleted!', 'Your product has been deleted.', 'success');

            $('.product-form-edit .modal').modal('hide'); // Correct way to hide the modal
        }
    });
}

// Handle deletion from the edit modal
$('#product-delete').on('click', function () {
    const productId = $('#editProductCode').text(); // Get the ID of the product to delete
    deleteProduct(productId);
});

// Function to update products to local storage

$('#product-update').on('click', function () {
    const productId = $('#editProductCode').text();
    const productDescription = $('#editProductDesc').val();
    const productCategory = $('#editProductCategory').val();
    const productImage = $('#imagePreviewEdit').attr('src');
    const productUnitPrice = parseFloat($('#editProductUnitPrice').val());
    const productQtyOnHand = parseInt($('#editProductQtyOnHand').val());

    if (!productDescription || !productCategory || !productImage || isNaN(productUnitPrice) || isNaN(productQtyOnHand)) {
        Swal.fire("Error", "Please fill in all fields.", "error");
        return;
    }

    const index = products.findIndex(product => product._code === productId);
    products[index]._description = productDescription;
    products[index]._category = productCategory;
    products[index]._image = productImage;
    products[index]._unitPrice = productUnitPrice;
    products[index]._qtyOnHand = productQtyOnHand;

    updateProductsToLocalStorage();
    displayProducts();
    Swal.fire("Success", "Product updated successfully!", "success");
    //hide the modal
    $('.product-form-edit .modal').modal('hide');
});
function updateProductsToLocalStorage() {
    localStorage.setItem('products', JSON.stringify(products));
}
