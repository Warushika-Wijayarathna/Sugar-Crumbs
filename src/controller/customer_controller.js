import customer from '../model/customer_model.js';
import { validateEmail, validateMobile } from '../util/validation.js';
import {customers as customer_array} from '../db/database.js';


// Load customers from local storage or initialize an empty array
let customers = JSON.parse(localStorage.getItem('customers'));
console.log(`Customers : `,customers);

// jQuery document ready function
$(document).ready(function() {
    displayCustomers();
    initializeCustomerEdit();
});

// Display all customers
function displayCustomers() {
    const customerTableBody = $('.customer-table tbody');
    customerTableBody.empty();

    const rows = customers.map(({ _id, _name, _email, _phone, _address }) => `
        <tr>
            <td class="row-id">${_id}</td>
            <td class="row-name">${_name}</td>
            <td class="row-email">${_email}</td>
            <td class="row-phone">${_phone}</td>
            <td class="row-address">${_address}</td>
            <td class="row-actions"><button class="btn btn-danger" id="delete-customer">Delete</button></td>
        </tr>
    `).join('');

    customerTableBody.append(rows);
}



export function openCustomerModal(modal) {
    try {
        $('#customer-id2').text(generateNextCustomerId());
        modal.show();

        $('#customer-save').off('click').on('click', (event) => {
            event.preventDefault();
            saveCustomer(modal);
        });

        console.log("Modal opened successfully");
    } catch (error) {
        console.error("Error opening the modal:", error);
    }
}

function saveCustomer(modal) {
    console.log("Save button clicked"); // For debugging

    const customerId = $('#customer-id2').text();
    const customerName = $('#customer-name2').val();
    const customerEmail = $('#exampleInput').val();
    const customerPhone = $('#customer-phone2').val();
    const customerAddress = $('#customer-address2').val();

    // Validate customer data
    if (!customerName || !customerEmail || !customerPhone || !customerAddress) {
        Swal.fire({
            title: 'Error',
            text: 'Please fill in all fields.',
            icon: 'error',
            confirmButtonText: 'OK'
        });

        return;
    }
    if (!validateEmail(customerEmail)) {
        Swal.fire({
            title: 'Error',
            text: 'Please enter a valid email address.',
            icon: 'error',
            confirmButtonText: 'OK'
        });

        //clear the email field
        $('#exampleInput').val('');

        return;
    }
    if (!validateMobile(customerPhone)) {
        Swal.fire({
            title: 'Error',
            text: 'Please enter a valid phone number.',
            icon: 'error',
            confirmButtonText: 'OK'
        });

        //clear the phone field
        $('#customer-phone2').val('');

        return;
    }
    if (customers.find(customer => customer._email === customerEmail)) {
        Swal.fire({
            title: 'Error',
            text: 'A customer with this email already exists.',
            icon: 'error',
            confirmButtonText: 'OK'
        });

        //clear the email field
        $('#exampleInput').val('');

        return;
    }
    if (customers.find(customer => customer._phone === customerPhone)) {
        Swal.fire({
            title: 'Error',
            text: 'A customer with this phone number already exists.',
            icon: 'error',
            confirmButtonText: 'OK'
        });

        //clear the phone field
        $('#customer-phone2').val('');

        return;
    }

    // Create a new customer object
    const newCustomer = new customer(customerId, customerName, customerEmail, customerPhone, customerAddress);

    // Push the new customer to the customers array
    customers.push(newCustomer);
    console.log('New customer added:', newCustomer); // Log the new customer

    // Save to local storage
    saveCustomersToLocalStorage();

    // Display the updated customer list
    displayCustomers();

    // Show success message using SweetAlert
    Swal.fire(
        'Saved!',
        'The customer has been saved successfully.',
        'success'
    ).then((result) => {
        if (result.isConfirmed) {
            // Ensure modal is hidden correctly
            if (modal) {
                modal.hide();  // Using the modal instance passed to this function
                console.log("Modal hidden successfully"); // Debugging

                // Clear input fields
                resetNewCustomerForm(); // Reset the form fields
            } else {
                console.error("Modal instance is not defined"); // Debugging
            }
        }
    });
}


// Generate next customer ID
export function generateNextCustomerId() {
    const lastCustomer = customers[customers.length - 1];
    const lastIdNumber = lastCustomer ? parseInt(lastCustomer._id.slice(1), 10) : 0;
    return `C${(lastIdNumber + 1).toString().padStart(3, '0')}`;
}

// Initialize customer edit modal functionality
function initializeCustomerEdit() {
    const customerTableModal = new bootstrap.Modal($('.customer-form-edit .modal').get(0));

    $('.customer-table').on('click', 'tbody tr', function() {
        const customerData = $(this).find('td');
        $('#customer-id').text(customerData.eq(0).text());
        $('#customer-name').val(customerData.eq(1).text());
        $('#customer-email').val(customerData.eq(2).text());
        $('#customer-phone').val(customerData.eq(3).text());
        $('#customer-address').val(customerData.eq(4).text());

        customerTableModal.show();
    });
}

// Attach deleteCustomer function to the "Delete" button using event delegation
$('.customer-table').on('click', '#delete-customer', function() {
    const customerId = $(this).closest('tr').find('.row-id').text(); // Get the ID of the customer to delete
    deleteCustomer(customerId);
});

// Delete customer function
function deleteCustomer(customerId) {
    // Find the index of the customer with the specified ID
    const customerIndex = customers.findIndex(customer => customer._id === customerId);

    if (customerIndex === -1) {
        alert("Customer not found.");
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
        confirmButtonText: 'Yes, delete it!',
        cancelButtonText: 'Cancel'
    }).then((result) => {
        if (result.isConfirmed) {
            // Remove the customer from the array
            customers.splice(customerIndex, 1);

            // Save to local storage
            saveCustomersToLocalStorage();

            // Update the displayed customer list
            displayCustomers();

            // Show success message
            Swal.fire(
                'Deleted!',
                'The customer has been deleted.',
                'success'
            );
            console.log(`Customer with ID ${customerId} deleted successfully.`);

            $('.customer-form-edit .modal').modal('hide'); // Correct way to hide the modal
        }
    });
}

// Handle deletion from the edit modal
$('#customer-delete').on('click', function() {
    const customerId = $('#customer-id').text(); // Get the ID of the customer to delete
    deleteCustomer(customerId);
});

// Function to save customers to local storage
function saveCustomersToLocalStorage() {
    localStorage.setItem('customers', JSON.stringify(customers));
}

function resetNewCustomerForm() {
    $('#customer-name2').val('');
    $('#exampleInput').val('');
    $('#customer-phone2').val('');
    $('#customer-address2').val('');
}

function updateCustomer() {
    console.log("Update button clicked"); // For debugging
    const customerId = $('#customer-id').text();
    const customerName = $('#customer-name').val();
    const customerEmail = $('#customer-email').val();
    const customerPhone = $('#customer-phone').val();
    const customerAddress = $('#customer-address').val();

    // Validate customer data
    if (!customerName || !customerEmail || !customerPhone || !customerAddress) {
        Swal.fire({
            title: 'Error',
            text: 'Please fill in all fields.',
            icon: 'error',
            confirmButtonText: 'OK'
        });
        return;
    }

    if (!validateEmail(customerEmail)) {
        Swal.fire({
            title: 'Error',
            text: 'Please enter a valid email address.',
            icon: 'error',
            confirmButtonText: 'OK'
        });

        //clear the email field
        $('#customer-email').val('');

        return;
    }

    if (!validateMobile(customerPhone)) {
        Swal.fire({
            title: 'Error',
            text: 'Please enter a valid phone number.',
            icon: 'error',
            confirmButtonText: 'OK'
        });

        //clear the phone field
        $('#customer-phone').val('');

        return;
    }

    if (customers.find(customer => customer._email === customerEmail && customer._id !== customerId)) {
        Swal.fire({
            title: 'Error',
            text: 'A customer with this email already exists.',
            icon: 'error',
            confirmButtonText: 'OK'
        });

        //clear the email field
        $('#customer-email').val('');

        return;
    }

    if (customers.find(customer => customer._phone === customerPhone && customer._id !== customerId)) {
        Swal.fire({
            title: 'Error',
            text: 'A customer with this phone number already exists.',
            icon: 'error',
            confirmButtonText: 'OK'
        });

        //clear the phone field
        $('#customer-phone').val('');

        return;
    }

    const customerIndex = customers.findIndex(customer => customer._id === customerId);
    customers[customerIndex]._name = customerName;
    customers[customerIndex]._email = customerEmail;
    customers[customerIndex]._phone = customerPhone;
    customers[customerIndex]._address = customerAddress;

    // Save to local storage
    saveCustomersToLocalStorage();

    displayCustomers();
    $('.customer-form-edit .modal').modal('hide'); // Correctly hide the modal

    // Show success message using SweetAlert
    Swal.fire({
        title: 'Updated!',
        text: 'The customer has been updated successfully.',
        icon: 'success',
        confirmButtonText: 'OK'
    }).then(() => {
        $('.customer-form-edit .modal').modal('hide'); // Correctly hide the modal
    });
}

// Function to bind customer events
export function bindCustomerEvents() {

    $('#customer-add-btn').off('click').on('click', (event) => {
        const customerAddModalElement = $('.customer-form .modal').get(0);
        const customerAddModal = customerAddModalElement ? new bootstrap.Modal(customerAddModalElement) : null;
        event.preventDefault();
        $('#customer-id2').text(generateNextCustomerId());
        openCustomerModal(customerAddModal);
    });

    // row selection and edit form
    const customerModalEdit = new bootstrap.Modal($('.customer-form-edit .modal').get(0));
    const customerTableBody = $('.customer-table tbody');

    customerTableBody.off('click').on('click', 'tr', function() {
        const customerData = $(this).find('td');
        $('#customer-id').text(customerData.eq(0).text());
        $('#customer-name').val(customerData.eq(1).text());
        $('#customer-email').val(customerData.eq(2).text());
        $('#customer-phone').val(customerData.eq(3).text());
        $('#customer-address').val(customerData.eq(4).text());

        customerModalEdit.show();
    });

    // Delete customer functionality
    $('.customer-table').off('click').on('click', '.btn-danger', function () {
        const customerId = $(this).closest('tr').find('.row-id').text(); // Get the ID of the customer to delete
        deleteCustomer(customerId);
    });

    // Additional event bindings for customer edit and delete buttons
    $('#customer-delete').off('click').on('click', function () {
        const customerId = $('#editCustomerCode').text();
        deleteCustomer(customerId);
    });

    $('#customer-update').off('click').on('click', function () {
        updateCustomer(); // Assuming you have an updateCustomer function
    });
}

// Function to unbind customer events
export function unbindCustomerEvents() {
    const customerTableBody = $('.customer-table tbody');

    $('#customer-add-btn').off('click');
    customerTableBody.off('click', 'tr');
    $('.customer-table').off('click', '.btn-danger');
    $('#customer-delete').off('click');
    $('#customer-update').off('click');
}

$(document).ready(function() {
    let debounceTimeout;

    $('#customer-search').on('input', function(event) {
        clearTimeout(debounceTimeout);

        debounceTimeout = setTimeout(() => {
            const searchQuery = $(this).val().toLowerCase();
            let hasResults = false;

            $('.customer-table tbody tr').each(function() {
                const rowText = $(this).text().toLowerCase();
                const isVisible = rowText.includes(searchQuery);
                $(this).toggle(isVisible);
                if (isVisible) hasResults = true;
            });

            // Show or hide the "No results found" message
            if (!hasResults) {
                $('.no-customer-results').show();
            } else {
                $('.no-customer-results').hide();
            }
        }, 300); // Adjust delay as needed
    });

    // Initially hide the "No results found" message
    $('.no-customer-results').hide();
});






