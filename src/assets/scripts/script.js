////////////////////////////////////////////////////// Sidebar Toggle //////////////////////////////////////////////////////////
document.addEventListener('DOMContentLoaded', function() {
    const navItems = document.querySelectorAll('.nav-item');

    navItems.forEach(function(item) {
        item.addEventListener('mouseover', function() {
            const navLink = this.querySelector('.nav-link');
            navLink.classList.add('active');
            navLink.style.background = 'rgba(248, 187, 208, 0.51)';
        });

        item.addEventListener('mouseout', function() {
            const navLink = this.querySelector('.nav-link');
            navLink.classList.remove('active');
            navLink.style.background = '';
        });
    });
});

////////////////////////////////////////////////////// Customer Section Load //////////////////////////////////////////////////////////
document.addEventListener('DOMContentLoaded', function () {
    const customerButton = document.getElementById('customerBtn');
    const mainContent = document.querySelector('.main-content');
    const customerSection = document.querySelector('.customer');

    customerButton.addEventListener('click', function (event) {
        event.preventDefault();
        mainContent.innerHTML = '';
        mainContent.appendChild(customerSection);
        customerSection.style.display = 'block';
    });
});

////////////////////////////////////////////////////// Customer Add Form Load //////////////////////////////////////////////////////////
document.addEventListener('DOMContentLoaded', function () {
    const customerButton = document.getElementById('customer-add-btn');
    const customerModal = new bootstrap.Modal(document.querySelector('.customer-form .modal'));

    customerButton.addEventListener('click', function () {
        customerModal.show();
    });
});

////////////////////////////////////////////////////// Data load for Edit Customer Form //////////////////////////////////////////////////////////
document.addEventListener('DOMContentLoaded', function () {
    const tableRows = document.querySelectorAll('.customer-table tbody tr');
    const customerModal = new bootstrap.Modal(document.querySelector('.customer-form-edit .modal'));

    const id = document.getElementById('customer-id');
    const name = document.getElementById('customer-name');
    const email = document.getElementById('customer-email');
    const phone = document.getElementById('customer-phone');
    const address = document.getElementById('customer-address');

    tableRows.forEach(function (row) {
        row.addEventListener('click', function () {
            const customer_id = row.querySelector('.row-id').textContent;
            const customer_name = row.querySelector('.row-name').textContent;
            const customer_email = row.querySelector('.row-email').textContent;
            const customer_phone = row.querySelector('.row-phone').textContent;
            const customer_address = row.querySelector('.row-address').textContent;

            id.textContent = customer_id;
            name.value = customer_name;
            email.value = customer_email;
            phone.value = customer_phone;
            address.value = customer_address;

            customerModal.show();
        });
    });
});

////////////////////////////////////////////////////// User Section Load //////////////////////////////////////////////////////////

document.addEventListener('DOMContentLoaded', function () {
    const userButton = document.getElementById('userBtn');
    const mainContent = document.querySelector('.main-content');
    const userSection = document.querySelector('.user');

    userButton.addEventListener('click', function (event) {
        event.preventDefault();
        mainContent.innerHTML = '';
        mainContent.appendChild(userSection);
        userSection.style.display = 'block';
    });
});

////////////////////////////////////////////////////// User Add Form Load //////////////////////////////////////////////////////////
document.addEventListener('DOMContentLoaded', function () {
    const customerButton = document.getElementById('user-add-btn');
    const customerModal = new bootstrap.Modal(document.querySelector('.user-form .modal'));

    customerButton.addEventListener('click', function () {
        customerModal.show();
    });
});

////////////////////////////////////////////////////// Data load for Edit User Form //////////////////////////////////////////////////////////
document.addEventListener('DOMContentLoaded', function () {
    const tableRows = document.querySelectorAll('.user-table tbody tr');
    const customerModal = new bootstrap.Modal(document.querySelector('.user-form-edit .modal'));
    const id = document.getElementById('user-id');
    const name = document.getElementById('user-name');
    const email = document.getElementById('user-email');
    const phone = document.getElementById('user-phone');
    const address = document.getElementById('user-address');
    const salary = document.getElementById('user-salary');

    tableRows.forEach(function (row) {
        row.addEventListener('click', function () {
            const user_id = row.querySelector('.row-id').textContent;
            const user_name = row.querySelector('.row-name').textContent;
            const user_email = row.querySelector('.row-email').textContent;
            const user_phone = row.querySelector('.row-phone').textContent;
            const user_address = row.querySelector('.row-address').textContent;
            const user_salary = row.querySelector('.row-salary').textContent;

            id.textContent = user_id;
            name.value = user_name;
            email.value = user_email;
            phone.value = user_phone;
            address.value = user_address;
            salary.value = user_salary;


            customerModal.show();
        });
    });
});

////////////////////////////////////////////////////// Product Section Load //////////////////////////////////////////////////////////
document.addEventListener('DOMContentLoaded', function () {
    const productButton = document.getElementById('productBtn');
    const mainContent = document.querySelector('.main-content');
    const productSection = document.querySelector('.product');

    productButton.addEventListener('click', function (event) {
        event.preventDefault();
        mainContent.innerHTML = '';
        mainContent.appendChild(productSection);
        productSection.style.display = 'block';
    });
});

////////////////////////////////////////////////////// Product Add Form Load //////////////////////////////////////////////////////////
document.addEventListener('DOMContentLoaded', function () {
    const customerButton = document.getElementById('product-add-btn');
    const customerModal = new bootstrap.Modal(document.querySelector('.product-form-new .modal'));

    customerButton.addEventListener('click', function () {
        customerModal.show();
    });
});


////////////////////////////////////////////////////// Image Upload for New Product Form //////////////////////////////////////////////////////////

const uploadBoxNew = document.getElementById('uploadBoxNew');
const fileInputNew = document.getElementById('fileInputNew');
const browseFileButtonNew = document.getElementById('browseFileButtonNew');

browseFileButtonNew.addEventListener('click', () => {
    fileInputNew.click();
});

uploadBoxNew.addEventListener('dragover', (event) => {
    event.preventDefault();
    uploadBoxNew.style.borderColor = '#fff';
});

uploadBoxNew.addEventListener('dragleave', () => {
    uploadBoxNew.style.borderColor = '#ffffff';
});

uploadBoxNew.addEventListener('drop', (event) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    handleFileNew(file);
    uploadBoxNew.style.borderColor = '#ffffff';
});

fileInputNew.addEventListener('change', (event) => {
    const file = event.target.files[0];
    handleFileNew(file);
});

function handleFileNew(file) {
    if (file && file.type.startsWith('image/')) {
        const reader = new FileReader();

        reader.onload = function (event) {
            uploadBoxNew.innerHTML = `
                <img src="${event.target.result}" alt="Image Preview" class="preview">
                <button class="delete-button" id="deleteButtonNew">Delete Image</button>
            `;

            document.getElementById('deleteButtonNew').addEventListener('click', resetUploadBoxNew);
        };

        reader.readAsDataURL(file);
    } else {
        alert("Please upload an image file.");
    }
}

function resetUploadBoxNew() {
    uploadBoxNew.innerHTML = `
        <i class="fa-solid fa-cloud-arrow-up"></i>
        <p>Drag & Drop to Upload File</p>
        <p>OR</p>
        <button id="browseFileButtonNew">Browse File</button>
        <input type="file" id="fileInputNew" hidden>
    `;

    const browseFileButtonNew = document.getElementById('browseFileButtonNew');
    const fileInputNew = document.getElementById('fileInputNew');

    browseFileButtonNew.addEventListener('click', () => fileInputNew.click());
    fileInputNew.addEventListener('change', (event) => handleFileNew(event.target.files[0]));
}

////////////////////////////////////////// Product Edit Form Load //////////////////////////////////////////

document.addEventListener('DOMContentLoaded', function () {
    const tableRows = document.querySelectorAll('.product-table tbody tr');
    const productModalEdit = new bootstrap.Modal(document.querySelector('.product-form-edit .modal'));
    const code = document.getElementById('editProductCode');
    const description = document.getElementById('editProductDesc');
    const unitPrice = document.getElementById('editProductUnitPrice');
    const qtyOnHand = document.getElementById('editProductQtyOnHand');
    const uploadBoxEdit = document.getElementById('uploadBoxEdit');
    const imagePreviewEdit = document.getElementById('imagePreviewEdit');
    const uploadTextEdit = document.getElementById('uploadTextEdit');
    const fileInputEdit = document.getElementById('fileInputEdit');

    function resetUploadBoxEdit() {
        imagePreviewEdit.style.display = 'none';
        imagePreviewEdit.src = '';
        uploadTextEdit.style.display = 'block';
    }

    tableRows.forEach(function (row) {
        row.addEventListener('click', function () {
            const item_code = row.querySelector('.row-id').textContent;
            const item_description = row.querySelector('.row-desc').textContent;
            const item_unit_price = row.querySelector('.row-price').textContent;
            const item_qty_on_hand = row.querySelector('.row-qty').textContent;
            const item_image = row.querySelector('.row-image img')?.getAttribute('src');

            code.value = item_code;
            description.value = item_description;
            unitPrice.value = item_unit_price;
            qtyOnHand.value = item_qty_on_hand;

            if (item_image) {
                imagePreviewEdit.src = item_image;
                imagePreviewEdit.style.display = 'block';
                uploadTextEdit.style.display = 'none';
            } else {
                resetUploadBoxEdit();
            }

            productModalEdit.show();
        });
    });

    fileInputEdit.addEventListener('change', function () {
        const file = fileInputEdit.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function (e) {
                imagePreviewEdit.src = e.target.result;
                imagePreviewEdit.style.display = 'block';
                uploadTextEdit.style.display = 'none';
            };
            reader.readAsDataURL(file);
        } else {
            resetUploadBoxEdit();
        }
    });

    document.getElementById('browseFileButtonEdit').addEventListener('click', function () {
        fileInputEdit.click();
    });
});

////////////////////////////////////////////////////// Product Section Load //////////////////////////////////////////////////////////
document.addEventListener('DOMContentLoaded', function () {
    const registerButton = document.getElementById('registerBtn');
    const mainContent = document.querySelector('.main-content');
    const registerSection = document.querySelector('.cash-register');

    registerButton.addEventListener('click', function (event) {
        event.preventDefault();
        mainContent.innerHTML = '';
        mainContent.appendChild(registerSection);
        registerSection.style.display = 'block';
    });
});

