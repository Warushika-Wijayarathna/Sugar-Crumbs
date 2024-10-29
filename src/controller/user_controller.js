import user from '../model/user_model.js';
import { users } from '../db/database.js';

// display all users
$(document).ready(function() {
    displayUsers();
});

function displayUsers() {
    const userTableBody = $('.user-table tbody');
    userTableBody.empty(); // Clear existing rows

    users.forEach(user => {
        let row = `
            <tr>
                <td class="row-id">${user.id}</td>
                <td class="row-username">${user.username}</td>
                <td class="row-email">${user.email}</td>
                <td class="row-password"><input type="password" class="form-control" value="${user.password}" readonly></td>                
                <td class="row-actions"> <button class="btn btn-danger">Delete</button> </td>
            </tr>
        `;
        userTableBody.append(row);
    });
}