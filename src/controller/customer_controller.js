import customer from '../model/customer_model.js';
import { customers } from '../db/database.js';
import { validateEmail, validateMobile } from '../util/validation.js';

//display all customers when the page loads
$(document).ready(function() {
    displayCustomers();
});


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