let orders = JSON.parse(localStorage.getItem('orders'));

// Display all orders
export function displayOrders() {
    console.log("call displayOrders function");
    let order_ = JSON.parse(localStorage.getItem('orders'));
    const orderTable = $('.invoice-table tbody');
    orderTable.empty();

    order_.forEach((order, index) => {
        orderTable.append(`
            <tr>
                <td>${order._invoice_id}</td>
                <td>${order._customer_id}</td>
                <td>${order._order_date}</td>
                <td>$${order._total_price}</td>
                <td>
                    <button class="btn btn-warning order-view-btn" data-id="I001">View</button>
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
    console.log("click view button");
    const invoiceId = $(this).data('id');
    console.log("Clicked button invoice ID:", invoiceId);

    const selectedOrder = orders.find(order => order._invoice_id === invoiceId);
    console.log("Selected Order:", selectedOrder);

    // show order items
    console.log(selectedOrder._order_items);
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

$(document).ready(function() {
    let debounceTimeout;

    $('#invoice-search').on('input', function(event) {
        clearTimeout(debounceTimeout);

        debounceTimeout = setTimeout(() => {
            const searchQuery = $(this).val().toLowerCase();
            let hasResults = false;

            $('.invoice-table tbody tr').each(function() {
                const rowText = $(this).text().toLowerCase();
                const isVisible = rowText.includes(searchQuery);
                $(this).toggle(isVisible);
                if (isVisible) hasResults = true;
            });

            // Show or hide the "No results found" message
            if (!hasResults) {
                $('.no-invoice-results').show();
            } else {
                $('.no-invoice-results').hide();
            }
        }, 300); // Adjust delay as needed
    });

    // Initially hide the "No results found" message
    $('.no-invoice-results').hide();
});

