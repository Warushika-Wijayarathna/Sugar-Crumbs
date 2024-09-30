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
            const customer_id = row.querySelector('.cust-row-id').textContent;
            const customer_name = row.querySelector('.cust-row-name').textContent;
            const customer_email = row.querySelector('.cust-row-email').textContent;
            const customer_phone = row.querySelector('.cust-row-phone').textContent;
            const customer_address = row.querySelector('.cust-row-address').textContent;

            id.value = customer_id;
            name.value = customer_name;
            email.value = customer_email;
            phone.value = customer_phone;
            address.value = customer_address;

            customerModal.show();
        });
    });
});






