import user from '../model/user_model.js';
import { users } from '../db/database.js';
import {validateEmail} from "../util/validation.js";

$(document).ready(function() {
    loadUsersFromLocalStorage();
    displayUsers();

    const UserAddModal = new bootstrap.Modal($('.user-form .modal').get(0));
    const userTableModal = new bootstrap.Modal($('.user-form-edit .modal').get(0));

    // Add User Button Click - Clear fields, generate user ID, and show modal
    $('#user-add-btn').on('click', function() {
        clearFields(addUserFields);
        addUserFields.id.text(generateUserId()); // Set the generated ID // Set the generated ID
        UserAddModal.show();

        $('#user-save').on('click', function() {
            const newUser = new user(
                addUserFields.id.text(),
                addUserFields.username.val(),
                addUserFields.email.val(),
                addUserFields.password.val()
            );
            // validate email
            if (!validateEmail(newUser._email)) {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops!',
                    text: 'Invalid email address.'
                });
                return;
            }

            // email already exists
            if (users.some(user => user._email === newUser._email)) {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops!',
                    text: 'Email already exists.'
                });
                return;
            }

            users.push(newUser);
            displayUsers();
            saveUsersToLocalStorage();
            UserAddModal.hide();

            // SweetAlert success message
            Swal.fire({
                icon: 'success',
                title: 'User added successfully!',
                showConfirmButton: false,
                timer: 1500
            });
        });
    });

    // Event delegation for Edit User Button - Clear fields, load data, and show modal
    $('.user-table').on('click', '.edit-user-btn', function () {
        const row = $(this).closest('tr');
        populateEditUserFields(row);
        userTableModal.show();
    });

    // Save users to localStorage after any data modifications
    $(window).on('beforeunload', saveUsersToLocalStorage);
});

// Load users from localStorage if available
function loadUsersFromLocalStorage() {
    const storedUsers = JSON.parse(localStorage.getItem('users'));
    if (storedUsers) {
        users.length = 0; // Clear existing array without changing reference
        users.push(...storedUsers);
    }
}

// Display all users in the table
function displayUsers() {
    const userTableBody = $('.user-table tbody');
    userTableBody.empty();

    users.forEach(user => {
        const row = `
            <tr>
                <td class="row-id">${user._id}</td>
                <td class="row-username">${user._username}</td>
                <td class="row-email">${user._email}</td>
                <td class="row-password"><input type="password" class="form-control" value="${user._password}" readonly></td>                
                <td class="row-actions"> <button class="btn btn-success edit-user-btn">Update</button> </td>
            </tr>
        `;
        userTableBody.append(row);
    });
}

// Field selectors for Add and Edit forms
const addUserFields = {
    id: $('#user-id2'),
    username: $('#user-name2'),
    email: $('#user-email2'),
    password: $('#user-password2')
};

const editUserFields = {
    id: $('#user-id'),
    username: $('#user-name'),
    email: $('#user-email'),
    password: $('#user-password')
};

// Populate Edit User fields based on selected row data
function populateEditUserFields(row) {
    clearFields(editUserFields);

    editUserFields.id.text(row.find('.row-id').text());
    editUserFields.username.val(row.find('.row-username').text());
    editUserFields.email.val(row.find('.row-email').text());
    editUserFields.password.val(''); // Clear password field for security
}

// Utility function to clear form fields
function clearFields(fields) {
    Object.values(fields).forEach(field => {
        if (field.is('input')) {
            field.val('');
        } else {
            field.text('');
        }
    });
}

// Save users to localStorage
function saveUsersToLocalStorage() {
    localStorage.setItem('users', JSON.stringify(users));
}

// user-update button click event
$('#user-update').on('click', function() {
    const userId = editUserFields.id.text();
    const userIndex = users.findIndex(user => user._id === userId);

    if (userIndex === -1) {
        Swal.fire({
            icon: 'error',
            title: 'Oops!',
            text: 'User not found.'
        });
        return;
    }

    const updatedUser = new user(
        userId,
        editUserFields.username.val(),
        editUserFields.email.val(),
        editUserFields.password.val()
    );

    users[userIndex] = updatedUser;
    displayUsers();
    saveUsersToLocalStorage();

    $('.user-form-edit .modal').modal('hide');

    // SweetAlert success message
    Swal.fire({
        icon: 'success',
        title: 'User updated successfully!',
        showConfirmButton: false,
        timer: 1500
    });
});

// Generate unique user ID based on the last user's ID in the users array
function generateUserId() {
    if (users.length === 0) return 'U001'; // Start from U001 if no users exist
    const lastUserId = users[users.length - 1]._id;
    const newUserId = parseInt(lastUserId.substr(1)) + 1;
    return `U${newUserId.toString().padStart(3, '0')}`; // Pads with zeros, e.g., U001
}

$(document).ready(function() {
    let debounceTimeout;

    $('#user-search').on('input', function(event) {
        clearTimeout(debounceTimeout);

        debounceTimeout = setTimeout(() => {
            const searchQuery = $(this).val().toLowerCase();
            let hasResults = false;

            $('.user-table tbody tr').each(function() {
                const rowText = $(this).text().toLowerCase();
                const isVisible = rowText.includes(searchQuery);
                $(this).toggle(isVisible);
                if (isVisible) hasResults = true;
            });

            // Show or hide the "No results found" message
            if (!hasResults) {
                $('.no-user-results').show();
            } else {
                $('.no-user-results').hide();
            }
        }, 300); // Adjust delay as needed
    });

    // Initially hide the "No results found" message
    $('.no-user-results').hide();
});
