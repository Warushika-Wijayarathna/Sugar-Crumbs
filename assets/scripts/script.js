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
    const customerModal = new bootstrap.Modal(document.querySelector('.customer-form .modal'));

    customerButton.addEventListener('click', function (event) {
        event.preventDefault();
        mainContent.innerHTML = '';
        mainContent.appendChild(customerSection);
        customerSection.style.display = 'block';
    });

    const closeModalButtons = document.querySelectorAll('[data-bs-dismiss="modal"]');
    closeModalButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            customerModal.hide();
            mainContent.innerHTML = '';
            mainContent.appendChild(customerSection);
            customerSection.style.display = 'block';
        });
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const customerButton = document.getElementById('customer-add-btn');
    const customerModal = new bootstrap.Modal(document.querySelector('.customer-form .modal'));

    customerButton.addEventListener('click', function () {
        customerModal.show();
    });

    const closeModalButtons = document.querySelectorAll('[data-bs-dismiss="modal"]');
    closeModalButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            customerModal.hide();
        });
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
            addUpdateAndDeleteButtons();
        });
    });

    function addUpdateAndDeleteButtons() {
        const modalFooter = document.querySelector('.customer-form .modal-footer');
        if (!document.getElementById('update-btn')) {
            const updateButton = document.createElement('button');
            updateButton.type = 'button';
            updateButton.className = 'btn btn-success';
            updateButton.id = 'update-btn';
            updateButton.textContent = 'Update';
            updateButton.addEventListener('click', function () {
                // Add your update logic here
                alert('Update button clicked');
            });
            modalFooter.appendChild(updateButton);
        }

        if (!document.getElementById('delete-btn')) {
            const deleteButton = document.createElement('button');
            deleteButton.type = 'button';
            deleteButton.className = 'btn btn-danger';
            deleteButton.id = 'delete-btn';
            deleteButton.textContent = 'Delete';
            deleteButton.addEventListener('click', function () {
                // Add your delete logic here
                alert('Delete button clicked');
            });
            modalFooter.appendChild(deleteButton);
        }
    }
});

