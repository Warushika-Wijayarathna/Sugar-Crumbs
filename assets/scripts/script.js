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

document.addEventListener('DOMContentLoaded', function () {
    const customerButton = document.getElementById('customer-add-btn');
    const customerModal = new bootstrap.Modal(document.querySelector('.customer-form .modal'));

    customerButton.addEventListener('click', function () {
        customerModal.show();
    });
});

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

document.addEventListener('DOMContentLoaded', function () {
    const customerButton = document.getElementById('user-add-btn');
    const customerModal = new bootstrap.Modal(document.querySelector('.user-form .modal'));

    customerButton.addEventListener('click', function () {
        customerModal.show();
    });
});

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







