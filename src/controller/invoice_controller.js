
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
            <p>Invoice ID: <strong>${selectedOrder._invoice_id}</strong></p>
            <p>User ID: <strong>${selectedOrder._user_id}</strong></p>
            <p>Customer ID: <strong>${selectedOrder._customer_id}</strong></p>
            <p>Order Date: <strong>${selectedOrder._order_date}</strong></p>
            <p>Order Time: <strong>${selectedOrder._order_time}</strong></p>
            <p>Payment Method: <strong>${selectedOrder._payment_method}</strong></p>
            <p>Subtotal: <strong>$${selectedOrder._sub_total}</strong></p>
            <p>Service Tax: <strong>$${selectedOrder._service_tax}</strong></p>
            <p>Total Price: <strong>$${selectedOrder._total_price}</strong></p>
            <p>Balance: <strong>$${selectedOrder._balance}</strong></p>
            <p>Products:</p>
            <ul>
                ${orderItemsHTML}
            </ul>
        `,
        confirmButtonText: 'Close',
        customClass: {
            popup: 'custom-popup',  // Custom class for styling
            title: 'custom-title',   // Custom class for title
            htmlContainer: 'custom-html-container', // Custom class for HTML container
        },
        background: '#f7f7f7', // Optional background color
        width: '600px', // Optional width
    });
});

