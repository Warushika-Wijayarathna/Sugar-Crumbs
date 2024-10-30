import product from '../model/product_model.js';
import { products } from '../db/database.js';

// Display all products on document ready
$(document).ready(function() {
    displayProducts();
    initializeProductModal();
    initializeProductEdit();
});

// Function to display all products
function displayProducts() {
    const productTableBody = $('.product-table tbody');
    productTableBody.empty(); // Clear existing rows

    products.forEach(product => {
        const row = `
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
        productTableBody.append(row);
    });
}

// Function to initialize image upload for new product form
function initializeProductModal() {
    const uploadBoxNew = $('#uploadBoxNew');
    const fileInputNew = $('#fileInputNew');
    const browseFileButtonNew = $('#browseFileButtonNew');

    browseFileButtonNew.on('click', () => fileInputNew.click());

    uploadBoxNew.on('dragover', (event) => {
        event.preventDefault();
        uploadBoxNew.css('borderColor', '#fff');
    });

    uploadBoxNew.on('dragleave', () => {
        uploadBoxNew.css('borderColor', '#ffffff');
    });

    uploadBoxNew.on('drop', (event) => {
        event.preventDefault();
        handleFileNew(event.originalEvent.dataTransfer.files[0]);
        uploadBoxNew.css('borderColor', '#ffffff');
    });

    fileInputNew.on('change', (event) => {
        handleFileNew(event.target.files[0]);
    });

    function handleFileNew(file) {
        if (file && file.type.startsWith('image/')) {
            const reader = new FileReader();
            reader.onload = function(event) {
                uploadBoxNew.html(`
                    <img src="${event.target.result}" alt="Image Preview" class="preview">
                    <button class="delete-button" id="deleteButtonNew">Delete Image</button>
                `);
                $('#deleteButtonNew').on('click', resetUploadBoxNew);
            };
            reader.readAsDataURL(file);
        } else {
            alert("Please upload an image file.");
        }
    }

    function resetUploadBoxNew() {
        uploadBoxNew.html(`
            <i class="fa-solid fa-cloud-arrow-up"></i>
            <p>Drag & Drop to Upload File</p>
            <p>OR</p>
            <button id="browseFileButtonNew">Browse File</button>
            <input type="file" id="fileInputNew" hidden>
        `);
        browseFileButtonNew.on('click', () => fileInputNew.click());
        fileInputNew.on('change', (event) => handleFileNew(event.target.files[0]));
    }

    // Open modal and reset fields when adding a new product
    $('#product-add-btn').on('click', function() {
        $('#newProductCode').text(generateNextProductId());
        resetNewProductForm();
        new bootstrap.Modal($('.product-form-new .modal').get(0)).show();
    });

    // Function to reset the new product form
    function resetNewProductForm() {
        $('#newProductDesc').val('');
        $('#newProductCategory').val('');
        $('#newProductUnitPrice').val('');
        $('#newProductQtyOnHand').val('');
        resetUploadBoxNew();
    }

    // Save product function
    $('#product-save').on('click', function() {
        saveProduct();
    });
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
        alert("Please fill in all fields.");
        return;
    }

    const newProduct = new product(productId, productDescription, productCategory, productImage, productUnitPrice, productQtyOnHand);
    products.push(newProduct);
    localStorage.setItem('products', JSON.stringify(products));
    displayProducts();

    alert("Product saved successfully!");
}

// Function to initialize product edit modal
function initializeProductEdit() {
    const productModalEdit = new bootstrap.Modal($('.product-form-edit .modal').get(0));
    const tableRows = $('.product-table tbody tr');

    tableRows.on('click', function() {
        const item_code = $(this).find('.row-id').text();
        const item_description = $(this).find('.row-desc').text();
        const item_category = $(this).find('.row-category').text();
        const item_unit_price = $(this).find('.row-price').text();
        const item_qty_on_hand = $(this).find('.row-qty').text();
        const item_image = $(this).find('.row-image img').attr('src');

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

        productModalEdit.show();
    });

    $('#fileInputEdit').on('change', function() {
        const file = this.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                $('#imagePreviewEdit').attr('src', e.target.result).show();
                $('#uploadTextEdit').hide();
            };
            reader.readAsDataURL(file);
        } else {
            resetUploadBoxEdit();
        }
    });

    $('#browseFileButtonEdit').on('click', function() {
        $('#fileInputEdit').click();
    });
}

// Function to reset the upload box for editing
function resetUploadBoxEdit() {
    $('#imagePreviewEdit').hide().attr('src', '');
    $('#uploadTextEdit').show();
}

// Delete product functionality
$('.product-table').on('click', '.btn-danger', function() {
    const productId = $(this).closest('tr').find('.row-id').text();
    const confirmDelete = confirm("Are you sure you want to delete this product?");
    if (confirmDelete) {
        deleteProduct(productId);
    }
});

// Function to delete a product
function deleteProduct(productId) {
    const index = products.findIndex(product => product._code === productId);
    if (index > -1) {
        products.splice(index, 1);
        localStorage.setItem('products', JSON.stringify(products));
        displayProducts();
        alert("Product deleted successfully!");
    } else {
        alert("Product not found!");
    }
}
