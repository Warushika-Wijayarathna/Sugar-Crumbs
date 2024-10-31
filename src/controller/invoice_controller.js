import order from '../model/order_model.js';

let orders = JSON.parse(localStorage.getItem('orders')) || [];

// Display all orders
function displayOrders() {
    const orderTable = $('.invoice-table tbody');
    orderTable.empty();

    orders.forEach((order, index) => {
        orderTable.append(`
            <tr>
                <td>${order._invoice_id}</td>
                <td>${order._customer_id}</td>
                <td>${order._order_date}</td>
                <td>$${order._total_price}</td>
                <td>
                    <button class="btn btn-warning order-view-btn" data-index="${index}">View</button>
                </td>
            </tr>
        `);
    });
}

$(document).ready(function () {
    displayOrders();
});

// Event delegation to handle dynamically added "View" buttons
$(document).on('click', '.order-view-btn', function () {
    const index = $(this).data('index');
    const selectedOrder = orders[index];

    // Generate HTML for order items
    const orderItemsHTML = selectedOrder._order_items.map(item =>
        `<li>${item.title} - $${item.price} x ${item.quantity} = $${item.totalPrice}</li>`
    ).join('');

    // Display order details in SweetAlert
    Swal.fire({
        title: 'Order Details',
        html: `
            <p>Invoice ID: ${selectedOrder._invoice_id}</p>
            <p>User ID: ${selectedOrder._user_id}</p>
            <p>Customer ID: ${selectedOrder._customer_id}</p>
            <p>Order Date: ${selectedOrder._order_date}</p>
            <p>Order Time: ${selectedOrder._order_time}</p>
            <p>Payment Method: ${selectedOrder._payment_method}</p>
            <p>Subtotal: $${selectedOrder._sub_total}</p>
            <p>Service Tax: $${selectedOrder._service_tax}</p>
            <p>Total Price: $${selectedOrder._total_price}</p>
            <p>Products:</p>
            <ul>
                ${orderItemsHTML}
            </ul>
        `,
        confirmButtonText: 'Close'
    });
});
