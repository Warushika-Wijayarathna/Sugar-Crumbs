//call nav-link active when hovering whlie hovering nav nav-pills card-header-pills ul items
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

    const tableRows = document.querySelectorAll('.customer-table tbody tr');
    tableRows.forEach(function (row) {
        row.addEventListener('click', function () {
            customerModal.show();
        });
    });
});





