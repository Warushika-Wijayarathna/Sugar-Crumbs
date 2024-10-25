////////////////////////////////////////////////////// Sidebar Toggle //////////////////////////////////////////////////////////
$(document).ready(function() {
    $('.nav-item').on('mouseover', function() {
        const navLink = $(this).find('.nav-link');
        navLink.addClass('active');
        navLink.css({
            'background': 'rgba(128, 128, 128, 0.7)',
            'color': '#333333'
        });
    });

    $('.nav-item').on('mouseout', function() {
        const navLink = $(this).find('.nav-link');
        navLink.removeClass('active');
        navLink.css('background', '');
    });
});

/////////////////////////////////////////////////////////// Nav-Brand ///////////////////////////////////////////////////////////////////////////
$(document).ready(function () {
    const navbarBrand = $('.header span');

    // Set default color
    navbarBrand.css('color', '#333333');

    // Change color on hover
    navbarBrand.on('mouseover', function () {
        navbarBrand.css('color', 'rgba(128, 128, 128, 0.7)');
    });

    // Revert to default color when not hovering
    navbarBrand.on('mouseout', function () {
        navbarBrand.css('color', 'black');
    });
});

/////////////////////////////////////////////////////////// Sidebar Toggle - Selected //////////////////////////////////////////////////////////
$(document).ready(function() {
    const nav_Links = $('.nav-link');

    nav_Links.on('click', function() {
        // Remove the 'bold' class from all links
        nav_Links.removeClass('bold');

        // Add the 'bold' class to the clicked link
        $(this).addClass('bold');
    });
});

////////////////////////////////////////////////////// Customer Section Load //////////////////////////////////////////////////////////

$(document).ready(function () {
    const customerButton = $('#customerBtn');
    const mainContent = $('.main-content');
    const customerSection = $('.customer');

    customerButton.on('click', function (event) {
        event.preventDefault();
        mainContent.empty();
        mainContent.append(customerSection);
        customerSection.show();
    });
});

////////////////////////////////////////////////////// Customer Add Form Load //////////////////////////////////////////////////////////
$(document).ready(function () {
    const customerAddButton = $('#customer-add-btn');
    const customerAddModal = new bootstrap.Modal($('.customer-form .modal').get(0));

    customerAddButton.on('click', function () {
        try {
            customerAddModal.show();
            console.log("Modal opened successfully");
        } catch (error) {
            console.error("Error opening the modal: ", error);
        }
    });

    // Add event listener for closing the modal
    $('.modal .btn-close').on('click', function () {
        try {
            customerAddModal.hide();
            console.log("Modal closed successfully");
        } catch (error) {
            console.error("Error closing the modal: ", error);
        }
    });
});

////////////////////////////////////////////////////// Data load for Edit Customer Form //////////////////////////////////////////////////////////
$(document).ready(function () {
    const tableRows = $('.customer-table tbody tr');
    const customerTableModal = new bootstrap.Modal($('.customer-form-edit .modal').get(0));

    const id = $('#customer-id');
    const name = $('#customer-name');
    const email = $('#customer-email');
    const phone = $('#customer-phone');
    const address = $('#customer-address');

    tableRows.on('click', function () {
        const customer_id = $(this).find('.row-id').text();
        const customer_name = $(this).find('.row-name').text();
        const customer_email = $(this).find('.row-email').text();
        const customer_phone = $(this).find('.row-phone').text();
        const customer_address = $(this).find('.row-address').text();

        id.text(customer_id);
        name.val(customer_name);
        email.val(customer_email);
        phone.val(customer_phone);
        address.val(customer_address);

        customerTableModal.show();
    });
});

////////////////////////////////////////////////////// User Section Load //////////////////////////////////////////////////////////
$(document).ready(function () {
    const userButton = $('#userBtn');
    const mainContent = $('.main-content');
    const userSection = $('.user');

    userButton.on('click', function (event) {
        event.preventDefault();
        mainContent.empty();
        mainContent.append(userSection);
        userSection.show();
    });
});

////////////////////////////////////////////////////// User Add Form Load //////////////////////////////////////////////////////////
$(document).ready(function () {
    const UserAddButton = $('#user-add-btn');
    const UserAddModal = new bootstrap.Modal($('.user-form .modal').get(0));

    UserAddButton.on('click', function () {
        UserAddModal.show();
    });
});

////////////////////////////////////////////////////// Data load for Edit User Form //////////////////////////////////////////////////////////
$(document).ready(function () {
    const tableRows = $('.user-table tbody tr');
    const userTableModal = new bootstrap.Modal($('.user-form-edit .modal').get(0));

    const id = $('#user-id');
    const name = $('#user-name');
    const email = $('#user-email');
    const phone = $('#user-phone');
    const address = $('#user-address');
    const salary = $('#user-salary');

    tableRows.on('click', function () {
        const user_id = $(this).find('.row-id').text();
        const user_name = $(this).find('.row-name').text();
        const user_email = $(this).find('.row-email').text();
        const user_phone = $(this).find('.row-phone').text();
        const user_address = $(this).find('.row-address').text();
        const user_salary = $(this).find('.row-salary').text();

        id.text(user_id);
        name.val(user_name);
        email.val(user_email);
        phone.val(user_phone);
        address.val(user_address);
        salary.val(user_salary);

        userTableModal.show();
    });
});

////////////////////////////////////////////////////// Product Section Load //////////////////////////////////////////////////////////
$(document).ready(function () {
    const productButton = $('#productBtn');
    const mainContent = $('.main-content');
    const productSection = $('.product');

    productButton.on('click', function (event) {
        event.preventDefault();
        mainContent.empty();
        mainContent.append(productSection);
        productSection.show();
    });
});

////////////////////////////////////////////////////// Product Add Form Load //////////////////////////////////////////////////////////
$(document).ready(function () {
    const productAddButton = $('#product-add-btn');
    const productAddModal = new bootstrap.Modal($('.product-form-new .modal').get(0));

    productAddButton.on('click', function () {
        productAddModal.show();
    });
});

//////////////////////////////////////////////////////// Invoice Section Load/////////////////////////////////////////////////////////////////////////

$(document).ready(function () {
    const invoiceButton = $('#invoiceBtn');
    const mainContent = $('.main-content');
    const invoiceSection = $('.invoice');

    invoiceButton.on('click', function (event) {
        event.preventDefault();
        mainContent.empty();
        mainContent.append(invoiceSection);
        invoiceSection.show();
    });
});

////////////////////////////////////////////////////// Image Upload for New Product Form //////////////////////////////////////////////////////////

const uploadBoxNew = $('#uploadBoxNew');
const fileInputNew = $('#fileInputNew');
const browseFileButtonNew = $('#browseFileButtonNew');

browseFileButtonNew.on('click', () => {
    fileInputNew.click();
});

uploadBoxNew.on('dragover', (event) => {
    event.preventDefault();
    uploadBoxNew.css('borderColor', '#fff');
});

uploadBoxNew.on('dragleave', () => {
    uploadBoxNew.css('borderColor', '#ffffff');
});

uploadBoxNew.on('drop', (event) => {
    event.preventDefault();
    const file = event.originalEvent.dataTransfer.files[0];
    handleFileNew(file);
    uploadBoxNew.css('borderColor', '#ffffff');
});

fileInputNew.on('change', (event) => {
    const file = event.target.files[0];
    handleFileNew(file);
});

function handleFileNew(file) {
    if (file && file.type.startsWith('image/')) {
        const reader = new FileReader();

        reader.onload = function (event) {
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

    const browseFileButtonNew = $('#browseFileButtonNew');
    const fileInputNew = $('#fileInputNew');

    browseFileButtonNew.on('click', () => fileInputNew.click());
    fileInputNew.on('change', (event) => handleFileNew(event.target.files[0]));
}

////////////////////////////////////////// Product Edit Form Load //////////////////////////////////////////
$(document).ready(function () {
    const tableRows = $('.product-table tbody tr');
    const productModalEdit = new bootstrap.Modal($('.product-form-edit .modal').get(0));
    const code = $('#editProductCode');
    const description = $('#editProductDesc');
    const category = $('#editProductCategory');
    const unitPrice = $('#editProductUnitPrice');
    const qtyOnHand = $('#editProductQtyOnHand');
    const uploadBoxEdit = $('#uploadBoxEdit');
    const imagePreviewEdit = $('#imagePreviewEdit');
    const uploadTextEdit = $('#uploadTextEdit');
    const fileInputEdit = $('#fileInputEdit');

    function resetUploadBoxEdit() {
        imagePreviewEdit.hide().attr('src', '');
        uploadTextEdit.show();
    }

    tableRows.on('click', function () {
        const item_code = $(this).find('.row-id').text();
        const item_description = $(this).find('.row-desc').text();
        const item_category = $(this).find('.row-category').text();
        const item_unit_price = $(this).find('.row-price').text();
        const item_qty_on_hand = $(this).find('.row-qty').text();
        const item_image = $(this).find('.row-image img').attr('src');

        code.val(item_code);
        description.val(item_description);
        category.val(item_category);
        unitPrice.val(item_unit_price);
        qtyOnHand.val(item_qty_on_hand);

        if (item_image) {
            imagePreviewEdit.attr('src', item_image).show();
            uploadTextEdit.hide();
        } else {
            resetUploadBoxEdit();
        }

        productModalEdit.show();
    });

    fileInputEdit.on('change', function () {
        const file = fileInputEdit.get(0).files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function (e) {
                imagePreviewEdit.attr('src', e.target.result).show();
                uploadTextEdit.hide();
            };
            reader.readAsDataURL(file);
        } else {
            resetUploadBoxEdit();
        }
    });

    $('#browseFileButtonEdit').on('click', function () {
        fileInputEdit.click();
    });
});

////////////////////////////////////////////////////// Cash Register Section Load //////////////////////////////////////////////////////////
$(document).ready(function () {
    const registerButton = $('#cash-registerBtn');
    const mainContent = $('.main-content');
    const registerSection = $('.cash-register');

    registerButton.on('click', function (event) {
        event.preventDefault();
        mainContent.empty();
        mainContent.append(registerSection);
        registerSection.show();
    });
});

////////////////////////////////////////////////////// Customer Add Form Load for Cash Register //////////////////////////////////////////////////////////
$(document).ready(function () {
    try {
        const custButton = $('#customer-add-btn-reg');
        const custModal = new bootstrap.Modal($('.customer-form .modal').get(0));

        custButton.on('click', function () {
            custModal.show();
        });
    } catch (error) {
        console.error('Error loading customer form:', error);
    }
});

////////////////////////////////////////////////////// Data for arrays //////////////////////////////////////////////////////////

let products = [
    { code: "P001", description: "Chocolate Cake", category: "Cake",unitPrice: 20.00, qtyOnHand: 40, image: "https://www.labonelfinebaking.shop/wp-content/uploads/2021/02/CLASSIC-CHOCOLATE-CAKE.jpg" },
    { code: "P002", description: "Vanilla Cupcake", category: "Cake",unitPrice: 5.00, qtyOnHand: 100, image: "https://hips.hearstapps.com/del.h-cdn.co/assets/18/07/1518475314-vanilla-cupcake-horizontal-.jpg?crop=0.667xw:1.00xh;0.199xw,0&resize=1200:*" },
    { code: "P003", description: "Strawberry Tart", category: "Cake",unitPrice: 12.00, qtyOnHand: 25, image: "https://static.toiimg.com/thumb/55435839.cms?width=1200&height=900" },
    { code: "P004", description: "Lemon Cheesecake", category: "Cake",unitPrice: 15.00, qtyOnHand: 30, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYhIH3gaoVMTsWxza5WuBAJlVJUJJGVpCi6w&s" },
    { code: "P005", description: "Carrot Cake", category: "Cake",unitPrice: 18.00, qtyOnHand: 20, image: "https://www.rainbownourishments.com/wp-content/uploads/2023/03/vegan-carrot-cake-1.jpg" },
    { code: "P006", description: "Red Velvet Cake", category: "Cake",unitPrice: 22.00, qtyOnHand: 15, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrw5Aqhuo-gAqBJp9HsA1NUUcAUIYE76EPIA&s" },
    { code: "P007", description: "Blueberry Muffin", category: "Cake",unitPrice: 8.00, qtyOnHand: 60, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxwriYjJ0IX6I9kkpo0rDCDzPff-GrkSX4zw&s" },
    { code: "P008", description: "Apple Pie", category: "Cake",unitPrice: 25.00, qtyOnHand: 10, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmQ7JyEum073tMWX4Nt9nahFPEcmKmdGvlhg&s" }
];

let customers = [
    { id: "C001", name: "William Defoe", email: "william@example.com", phone: "12312312", address: "123 Street" },
    { id: "C002", name: "Jane Smith", email: "jane@example.com", phone: "45645645", address: "456 Avenue" },
    { id: "C003", name: "Tom Hardy", email: "tom@example.com", phone: "78978978", address: "789 Boulevard" },
    { id: "C004", name: "Emily Blunt", email: "emily@example.com", phone: "11223344", address: "112 Street" },
    { id: "C005", name: "Scarlett Johansson", email: "scarlett@example.com", phone: "22334455", address: "223 Avenue" },
    { id: "C006", name: "Chris Hemsworth", email: "chris@example.com", phone: "33445566", address: "334 Boulevard" },
    { id: "C007", name: "Robert Downey", email: "robert@example.com", phone: "44556677", address: "445 Road" },
    { id: "C008", name: "Natalie Portman", email: "natalie@example.com", phone: "55667788", address: "556 Lane" }
];

let users = [
    { id: "U001", name: "John Doe", email: "john@example.com", phone: "12312312", address: "456 Avenue", salary: 5000 },
    { id: "U002", name: "Jane Roe", email: "jane@example.com", phone: "23423423", address: "567 Boulevard", salary: 4500 },
    { id: "U003", name: "Chris Evans", email: "chris@example.com", phone: "34534534", address: "678 Street", salary: 6000 },
    { id: "U004", name: "Emma Watson", email: "emma@example.com", phone: "45645645", address: "789 Avenue", salary: 5500 },
    { id: "U005", name: "Tom Holland", email: "tom@example.com", phone: "56756756", address: "890 Road", salary: 4000 },
    { id: "U006", name: "Brie Larson", email: "brie@example.com", phone: "67867867", address: "901 Lane", salary: 6200 },
    { id: "U007", name: "Mark Ruffalo", email: "mark@example.com", phone: "78978978", address: "123 Plaza", salary: 4800 },
    { id: "U008", name: "Zendaya Maree", email: "zendaya@example.com", phone: "89089089", address: "456 Terrace", salary: 5200 }
];

/////////////////////////////////////////////////////////////////////// Table data display //////////////////////////////////////////////////////////

// Function to display products in a table
function displayProducts() {
    const productTableBody = $('.product-table tbody');
    productTableBody.empty(); // Clear existing rows

    products.forEach(product => {
        let row = `
            <tr>
                <td class="row-id">${product.code}</td>
                <td class="row-desc">${product.description}</td>
                <td class="row-category">${product.category}</td>
                <td class="row-image" style="width: 10%; height: auto;" ><img src="${product.image}" alt="${product.description}" style="width: 100%;
    aspect-ratio: auto;
    object-fit: cover;"></td>
                <td class="row-price">${product.unitPrice.toFixed(2)}</td>
                <td class="row-qty">${product.qtyOnHand}</td>
                <td class="row-actions"> <button class="btn btn-danger">Delete</button> </td>
            </tr>
        `;
        productTableBody.append(row);
    });
}

// Function to display customers in a table
function displayCustomers() {
    const customerTableBody = $('.customer-table tbody');
    customerTableBody.empty(); // Clear existing rows

    customers.forEach(customer => {
        let row = `
            <tr>
                <td class="row-id">${customer.id}</td>
                <td class="row-name">${customer.name}</td>
                <td class="row-email">${customer.email}</td>
                <td class="row-phone">${customer.phone}</td>
                <td class="row-address">${customer.address}</td>
                <td class="row-actions"> <button class="btn btn-danger">Delete</button> </td>
            </tr>
        `;
        customerTableBody.append(row);
    });
}

/////////////////////////////////////////////////////////////////////// Saving Data///////////////////////////////////////////////

// Function to display users in a table
function displayUsers() {
    const userTableBody = $('.user-table tbody');
    userTableBody.empty(); // Clear existing rows

    users.forEach(user => {
        let row = `
            <tr>
                <td class="row-id">${user.id}</td>
                <td class="row-name">${user.name}</td>
                <td class="row-email">${user.email}</td>
                <td class="row-phone">${user.phone}</td>
                <td class="row-address">${user.address}</td>
                <td class="row-salary">${user.salary}</td>
                <td class="row-actions"><button class="btn btn-danger">Delete</button> </td>
            </tr>
        `;
        userTableBody.append(row);
    });
}

// Call these functions to initially load the tables
displayProducts();
displayCustomers();
displayUsers();


// Function to add a new product
function addProduct(product) {
    products.push(product);
    displayProducts(); // Refresh the product table
}

// Function to add a new customer
function addCustomer(customer) {
    customers.push(customer);
    displayCustomers(); // Refresh the customer table
}

// Function to add a new user
function addUser(user) {
    users.push(user);
    displayUsers(); // Refresh the user table
}

// Example: Adding a new product from a form
$('#product-save').on('click', function() {
    let newProduct = {
        code: $('#newProductCode').val(),
        description: $('#newProductDesc').val(),
        category: $('#newProductCategory').val(),
        image: $('#fileInputNew').val(),
        unitPrice: parseFloat($('#newProductUnitPrice').val()),
        qtyOnHand: parseInt($('#newProductQtyOnHand').val())
    };

    let success = addProduct(newProduct);

    if (success) {
        alert("Product saved successfully!");
    } else {
        alert("Failed to save the product. Please try again.");
    }
});

// Example: Adding a new customer from a form
$('#customer-save').on('click', function() {
    let newCustomer = {
        id: $('#customer-id2').val(),
        name: $('#customer-name2').val(),
        email: $('#exampleInput').val(),
        phone: $('#customer-phone2').val(),
        address: $('#customer-address2').val()
    };

    // Adding a callback to handle success or failure
    addCustomer(newCustomer, function(success) {
        if (success) {
            alert("Customer saved successfully!");
        } else {
            alert("Failed to save the customer. Please try again.");
        }
    });
});

// Example: Adding a new user from a form
$('#user-save').on('click', function() {
    let newUser = {
        id: $('#user-id2').val(),
        name: $('#user-name2').val(),
        email: $('#user-email2').val(),
        phone: $('#user-phone2').val(),
        address: $('#user-address2').val(),
        salary: parseFloat($('#user-salary2').val())
    };

    // Adding a callback to handle success or failure
    addUser(newUser, function(success) {
        if (success) {
            alert("User saved successfully!");
        } else {
            alert("Failed to save the user. Please try again.");
        }
    });
});


////////////////////////////////////////////////////// Dashboard Section Load //////////////////////////////////////////////////////////
$(document).ready(function () {
    const dashboardButton = $('#dashboardBtn');
    const mainContent = $('.main-content');
    const dashboardSection = $('.dashboard');

    // Function to load the dashboard section
    function loadDashboard() {
        mainContent.empty(); // Clear existing content
        mainContent.append(dashboardSection); // Append dashboard section
        dashboardSection.show(); // Show the dashboard section
    }

    // Load the dashboard when the page is fully loaded
    loadDashboard();

    // Event listener for dashboard button click (if needed)
    dashboardButton.on('click', function (event) {
        event.preventDefault(); // Prevent default button action
        loadDashboard(); // Call the function to load dashboard
    });
});

////////////////////////////////////////////////////////////////// Charts ////////////////////////////////////////////////////////////

// Line Chart
var ctxLine = $('#lineChart').get(0).getContext('2d');
var lineChart = new Chart(ctxLine, {
    type: 'line',
    data: {
        labels: ['Oct 11', 'Oct 15', 'Oct 19', 'Oct 25', 'Nov 1', 'Nov 5', 'Nov 11'],
        datasets: [{
            label: 'Selected Period',
            data: [3000, 4000, 3500, 6000, 4500, 5000, 7000],
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1
        },
            {
                label: 'Comparison',
                data: [2000, 3000, 2500, 4000, 3500, 4200, 6000],
                borderColor: 'rgb(255, 99, 132)',
                tension: 0.1
            }]
    },
    options: {
        responsive: true
    }
});

// Pie Chart
var ctxPie = $('#pieChart').get(0).getContext('2d');
var pieChart = new Chart(ctxPie, {
    type: 'pie',
    data: {
        labels: ['Grocery', 'Fruits', 'Vegetables', 'Others'],
        datasets: [{
            label: 'Top Categories',
            data: [43, 31, 15, 11],
            backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(54, 162, 235)',
                'rgb(255, 206, 86)',
                'rgb(75, 192, 192)'
            ]
        }]
    },
    options: {
        responsive: true
    }
});


///////////////////////////////////////////////////////////////////////////////////////http ////////////////////////////////////////////////////

// document.addEventListener('DOMContentLoaded', function() {
//     try {
//         const sections = document.querySelectorAll('section');
//         const navLinks = document.querySelectorAll('.nav-link');
//
//         function showSection(targetId) {
//             sections.forEach(section => {
//                 section.style.display = section.classList.contains(targetId) ? 'block' : 'none';
//             });
//         }
//
//         navLinks.forEach(link => {
//             link.addEventListener('click', function(event) {
//                 try {
//                     event.preventDefault();
//                     const targetId = this.id.replace('Btn', '');
//                     showSection(targetId);
//                     // Update the URL without reloading the page
//                     history.pushState(null, '', `#${targetId}`);
//                 } catch (error) {
//                     console.error('Error handling click event:', error);
//                 }
//             });
//         });
//
//         // Show the section based on the URL hash when the page loads
//         const initialSectionId = window.location.hash.replace('#', '');
//         if (initialSectionId) {
//             showSection(initialSectionId);
//         } else {
//             // Default to showing the dashboard section if no hash is present
//             showSection('dashboard');
//         }
//     } catch (error) {
//         console.error('Error during DOMContentLoaded:', error);
//     }
// });


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

$(document).ready(function() {
    const signInBtn = $('#signInBtn');
    const signOutBtn = $('#signOutBtn');

    signInBtn.on('click', function(event) {
        event.preventDefault(); // Prevent form submission

        // Make header, aside, and main content visible
        $('#header').show();
        $('#aside').show();
        $('#main-content').show();

        // Optionally, hide the login page
        $('.login-page').hide();
    });

    signOutBtn.on('click', function(event) {
        event.preventDefault(); // Prevent default action

        // Hide header, aside, and main content
        $('#header').hide();
        $('#aside').hide();
        $('#main-content').hide();

        // Show the login page
        $('.login-page').css('display', 'flex');
    });
});


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

$(window).on('resize', function() {
    const logElement = $('#log');
    if ($(window).width() >= 768 && $(window).width() < 992) {
        logElement.removeClass('col-md-4 col-md-2 col-md-1').addClass('col-md-3');
    } else if ($(window).width() >= 576 && $(window).width() < 768) {
        logElement.removeClass('col-md-4 col-md-3 col-md-1').addClass('col-md-2');
    } else if ($(window).width() < 576) {
        logElement.removeClass('col-md-4 col-md-3 col-md-2').addClass('col-md-1');
    } else {
        logElement.removeClass('col-md-3 col-md-2 col-md-1').addClass('col-md-4');
    }
});

// Initial check to set the correct class on page load
$(window).trigger('resize');

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
$(document).ready(function() {
    const signInBtn = $('#signInBtn');
    const signOutBtn = $('#signOutBtn');

    signInBtn.on('click', function(event) {
        event.preventDefault(); // Prevent form submission

        // Make header, aside, and main content visible
        $('#header').show();
        $('#aside').show();
        $('#main-content').show();

        // Optionally, hide the login page
        $('.login-page').hide();
    });

    signOutBtn.on('click', function(event) {
        event.preventDefault(); // Prevent default action

        // Hide header, aside, and main content
        $('#header').hide();
        $('#aside').hide();
        $('#main-content').hide();

        // Show the login page
        $('.login-page').css('display', 'flex');
    });

    // Add a toggle button in the header
    const header = $('.header nav .container-fluid');
    const toggleButton = $('<button>').addClass('btn btn-primary').html('<i class="fa-solid fa-bars"></i>').hide(); // Initially hidden
    header.append(toggleButton);

    // Add event listener for the toggle button
    toggleButton.on('click', function() {
        const aside = $('.aside');
        if (aside.is(':visible')) {
            aside.hide();
        } else {
            aside.show();
        }
    });

    // Add event listener for window resize
    $(window).on('resize', function() {
        const aside = $('.aside');
        if ($(window).width() <= 768) {
            aside.hide();
            toggleButton.show();
        } else {
            aside.show();
            toggleButton.hide();
        }
    });

    // Initial check to set the correct display on page load
    $(window).trigger('resize');
});

$(document).ready(function() {
    const aside = $('.aside');
    if (aside.length) {
        aside.hide();
    }
});

function adjustChartLayout() {
    const chartsSection = $('#charts-section');
    if ($(window).width() <= 768) {
        chartsSection.addClass('vertical-align');
    } else {
        chartsSection.removeClass('vertical-align');
    }
}

// Adjust layout on page load
adjustChartLayout();

// Adjust layout on window resize
$(window).on('resize', adjustChartLayout);

//////////////////////////////////////////////////////// Product cards load ////////////////////////////////////////////

// Select the product list container
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

