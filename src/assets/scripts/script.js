////////////////////////////////////////////////////// Sidebar Toggle //////////////////////////////////////////////////////////
document.addEventListener('DOMContentLoaded', function() {
    const navItems = document.querySelectorAll('.nav-item');

    navItems.forEach(function(item) {
        item.addEventListener('mouseover', function() {
            const navLink = this.querySelector('.nav-link');
            navLink.classList.add('active');
            navLink.style.background = 'rgba(128, 128, 128, 0.7)';
            navLink.style.color = '#333333';
        });

        item.addEventListener('mouseout', function() {
            const navLink = this.querySelector('.nav-link');
            navLink.classList.remove('active');
            navLink.style.background = '';
        });
    });
});

/////////////////////////////////////////////////////////// Nav-Brand ///////////////////////////////////////////////////////////////////////////
document.addEventListener('DOMContentLoaded', function () {
    const navbarBrand = document.querySelector('.header span');

    // Set default color
    navbarBrand.style.color = '#333333';

    // Change color on hover
    navbarBrand.addEventListener('mouseover', function () {
        navbarBrand.style.color = 'rgba(128, 128, 128, 0.7)';
    });

    // Revert to default color when not hovering
    navbarBrand.addEventListener('mouseout', function () {
        navbarBrand.style.color = 'black';
    });
});

/////////////////////////////////////////////////////////// Sidebar Toggle - Selected //////////////////////////////////////////////////////////
document.addEventListener("DOMContentLoaded", function() {
    // Get all navigation links
    const nav_Links = document.querySelectorAll('.nav-link');

    nav_Links.forEach(link => {
        link.addEventListener('click', function() {
            // Remove the 'bold' class from all links
            nav_Links.forEach(nav => nav.classList.remove('bold'));

            // Add the 'bold' class to the clicked link
            this.classList.add('bold');
        });
    });
});

////////////////////////////////////////////////////// Customer Section Load //////////////////////////////////////////////////////////
document.addEventListener('DOMContentLoaded', function () {
    const customerSecButton = document.getElementById('customerBtn');
    const mainContent = document.querySelector('.main-content');
    const customerSecSection = document.querySelector('.customer');

    customerSecButton.addEventListener('click', function (event) {
        event.preventDefault();
        mainContent.innerHTML = '';
        mainContent.appendChild(customerSecSection);
        customerSecSection.style.display = 'block';
    });
});

////////////////////////////////////////////////////// Customer Add Form Load //////////////////////////////////////////////////////////
document.addEventListener('DOMContentLoaded', function () {
    const customerAddButton = document.getElementById('customer-add-btn');
    const customerAddModal = new bootstrap.Modal(document.querySelector('.customer-form .modal'));

    customerAddButton.addEventListener('click', function () {
        try {
            customerAddModal.show();
            console.log("Modal opened successfully");
        } catch (error) {
            console.error("Error opening the modal: ", error);
        }
    });

    // Add event listener for closing the modal
    document.querySelector('.modal .btn-close').addEventListener('click', function () {
        try {
            customerAddModal.hide();
            console.log("Modal closed successfully");
        } catch (error) {
            console.error("Error closing the modal: ", error);
        }
    });
});

////////////////////////////////////////////////////// Data load for Edit Customer Form //////////////////////////////////////////////////////////
document.addEventListener('DOMContentLoaded', function () {
    const tableRows = document.querySelectorAll('.customer-table tbody tr');
    const customerTableModal = new bootstrap.Modal(document.querySelector('.customer-form-edit .modal'));

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

            customerTableModal.show();
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
    const UserAddButton = document.getElementById('user-add-btn');
    const UserAddModal = new bootstrap.Modal(document.querySelector('.user-form .modal'));

    UserAddButton.addEventListener('click', function () {
        UserAddModal.show();
    });
});

////////////////////////////////////////////////////// Data load for Edit User Form //////////////////////////////////////////////////////////
document.addEventListener('DOMContentLoaded', function () {
    const tableRows = document.querySelectorAll('.user-table tbody tr');
    const userTableModal = new bootstrap.Modal(document.querySelector('.user-form-edit .modal'));
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

            userTableModal.show();
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
    const productAddButton = document.getElementById('product-add-btn');
    const productAddModal = new bootstrap.Modal(document.querySelector('.product-form-new .modal'));

    productAddButton.addEventListener('click', function () {
        productAddModal.show();
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
    const registerButton = document.getElementById('cash-registerBtn');
    const mainContent = document.querySelector('.main-content');
    const registerSection = document.querySelector('.cash-register');

    registerButton.addEventListener('click', function (event) {
        event.preventDefault();
        mainContent.innerHTML = '';
        mainContent.appendChild(registerSection);
        registerSection.style.display = 'block';
    });
});


////////////////////////////////////////////////////// Customer Add Form Load for Cash Register //////////////////////////////////////////////////////////
document.addEventListener('DOMContentLoaded', function () {
    try {
        const custButton = document.getElementById('customer-add-btn-reg');
        const custModal = new bootstrap.Modal(document.querySelector('.customer-form .modal'));

        custButton.addEventListener('click', function () {
            custModal.show();
        });
    } catch (error) {
        console.error('Error loading customer form:', error);
    }
});

////////////////////////////////////////////////////// Data for arrays //////////////////////////////////////////////////////////

let products = [
    { code: "P001", description: "Chocolate Cake", unitPrice: 20.00, qtyOnHand: 40, image: "https://www.labonelfinebaking.shop/wp-content/uploads/2021/02/CLASSIC-CHOCOLATE-CAKE.jpg" },
    { code: "P002", description: "Vanilla Cupcake", unitPrice: 5.00, qtyOnHand: 100, image: "https://hips.hearstapps.com/del.h-cdn.co/assets/18/07/1518475314-vanilla-cupcake-horizontal-.jpg?crop=0.667xw:1.00xh;0.199xw,0&resize=1200:*" },
    { code: "P003", description: "Strawberry Tart", unitPrice: 12.00, qtyOnHand: 25, image: "https://static.toiimg.com/thumb/55435839.cms?width=1200&height=900" },
    { code: "P004", description: "Lemon Cheesecake", unitPrice: 15.00, qtyOnHand: 30, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYhIH3gaoVMTsWxza5WuBAJlVJUJJGVpCi6w&s" },
    { code: "P005", description: "Carrot Cake", unitPrice: 18.00, qtyOnHand: 20, image: "https://www.rainbownourishments.com/wp-content/uploads/2023/03/vegan-carrot-cake-1.jpg" },
    { code: "P006", description: "Red Velvet Cake", unitPrice: 22.00, qtyOnHand: 15, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrw5Aqhuo-gAqBJp9HsA1NUUcAUIYE76EPIA&s" },
    { code: "P007", description: "Blueberry Muffin", unitPrice: 8.00, qtyOnHand: 60, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxwriYjJ0IX6I9kkpo0rDCDzPff-GrkSX4zw&s" },
    { code: "P008", description: "Apple Pie", unitPrice: 25.00, qtyOnHand: 10, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmQ7JyEum073tMWX4Nt9nahFPEcmKmdGvlhg&s" }
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

//////////////////////////////////////////////////////////////////////// Table data display //////////////////////////////////////////////////////////

// Function to display products in a table
function displayProducts() {
    const productTableBody = document.querySelector('.product-table tbody');
    productTableBody.innerHTML = ''; // Clear existing rows

    products.forEach(product => {
        let row = `
            <tr>
                <td class="row-id">${product.code}</td>
                <td class="row-desc">${product.description}</td>
                <td class="row-image" style="width: 10%; height: auto;" ><img src="${product.image}" alt="${product.description}" style="width: 100%;
    aspect-ratio: auto;
    object-fit: cover;"></td>
                <td class="row-price">${product.unitPrice.toFixed(2)}</td>
                <td class="row-qty">${product.qtyOnHand}</td>
                <td class="row-actions"> <button class="btn btn-danger">Delete</button> </td>
            </tr>
        `;
        productTableBody.innerHTML += row;
    });
}

// Function to display customers in a table
function displayCustomers() {
    const customerTableBody = document.querySelector('.customer-table tbody');
    customerTableBody.innerHTML = ''; // Clear existing rows

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
        customerTableBody.innerHTML += row;
    });
}

/////////////////////////////////////////////////////////////////////// Saving Data///////////////////////////////////////////////

// Function to display users in a table
function displayUsers() {
    const userTableBody = document.querySelector('.user-table tbody');
    userTableBody.innerHTML = ''; // Clear existing rows

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
        userTableBody.innerHTML += row;
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
document.getElementById('product-add-btn').addEventListener('click', function() {
    let newProduct = {
        code: document.getElementById('productCode').value,
        description: document.getElementById('productDesc').value,
        image: document.getElementById('productImage').value, // Assuming an input for image URL
        unitPrice: parseFloat(document.getElementById('productUnitPrice').value),
        qtyOnHand: parseInt(document.getElementById('productQtyOnHand').value),

    };
    addProduct(newProduct);
    // Hide modal, clear form, etc.
});

////////////////////////////////////////////////////// Product cards load ////////////////////////////////////////////

// Select the product list container
const productList = document.getElementById("product-list");

// Loop through the products array and generate product cards
products.forEach(product => {
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
    productList.innerHTML += productCard;
});

////////////////////////////////////////////////////// Invoice Section Load //////////////////////////////////////////////////////////
document.addEventListener('DOMContentLoaded', function () {
    const invoiceButton = document.getElementById('invoiceBtn');
    const mainContent = document.querySelector('.main-content');
    const invoiceSection = document.querySelector('.invoice');

    invoiceButton.addEventListener('click', function (event) {
        event.preventDefault();
        mainContent.innerHTML = '';
        mainContent.appendChild(invoiceSection);
        invoiceSection.style.display = 'block';
    });
});

////////////////////////////////////////////////////// Dashboard Section Load //////////////////////////////////////////////////////////
document.addEventListener('DOMContentLoaded', function () {
    const dashboardButton = document.getElementById('dashboardBtn');
    const mainContent = document.querySelector('.main-content');
    const dashboardSection = document.querySelector('.dashboard');

    // Function to load the dashboard section
    function loadDashboard() {
        mainContent.innerHTML = ''; // Clear existing content
        mainContent.appendChild(dashboardSection); // Append dashboard section
        dashboardSection.style.display = 'block'; // Show the dashboard section
    }

    // Load the dashboard when the page is fully loaded
    loadDashboard();

    // Event listener for dashboard button click (if needed)
    dashboardButton.addEventListener('click', function (event) {
        event.preventDefault(); // Prevent default button action
        loadDashboard(); // Call the function to load dashboard
    });
});

////////////////////////////////////////////////////////////////// Charts ////////////////////////////////////////////////////////////

// Line Chart
var ctxLine = document.getElementById('lineChart').getContext('2d');
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
var ctxPie = document.getElementById('pieChart').getContext('2d');
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

document.addEventListener('DOMContentLoaded', function() {
    const signInBtn = document.getElementById('signInBtn');
    const signOutBtn = document.getElementById('signOutBtn');

    signInBtn.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent form submission

        // Make header, aside, and main content visible
        document.getElementById('header').style.display = 'block';
        document.getElementById('aside').style.display = 'block';
        document.getElementById('main-content').style.display = 'block';

        // Optionally, hide the login page
        document.querySelector('.login-page').style.display = 'none';
    });

    signOutBtn.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default action

        // Hide header, aside, and main content
        document.getElementById('header').style.display = 'none';
        document.getElementById('aside').style.display = 'none';
        document.getElementById('main-content').style.display = 'none';

        // Show the login page
        document.querySelector('.login-page').style.display = 'flex';
    });
});


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

window.addEventListener('resize', function() {
    const logElement = document.getElementById('log');
    if (window.innerWidth >= 768 && window.innerWidth < 992) {
        logElement.classList.remove('col-md-4', 'col-md-2', 'col-md-1');
        logElement.classList.add('col-md-3');
    } else if (window.innerWidth >= 576 && window.innerWidth < 768) {
        logElement.classList.remove('col-md-4', 'col-md-3', 'col-md-1');
        logElement.classList.add('col-md-2');
    } else if (window.innerWidth < 576) {
        logElement.classList.remove('col-md-4', 'col-md-3', 'col-md-2');
        logElement.classList.add('col-md-1');
    } else {
        logElement.classList.remove('col-md-3', 'col-md-2', 'col-md-1');
        logElement.classList.add('col-md-4');
    }
});

// Initial check to set the correct class on page load
window.dispatchEvent(new Event('resize'));