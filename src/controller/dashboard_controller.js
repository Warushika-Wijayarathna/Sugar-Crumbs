import product from "../model/product_model.js";

let products = JSON.parse(localStorage.getItem('products')) || [];
let customers = JSON.parse(localStorage.getItem('customers')) || [];
let orders = JSON.parse(localStorage.getItem('orders')) || [];

$(document).ready(function () {
    function initializeCharts() {
        // Line Chart
        var ctxLine = $('#lineChart').get(0).getContext('2d');

        // Destroy previous line chart instance if it exists
        if (window.lineChart instanceof Chart) {
            window.lineChart.destroy();
        }

        // Compute daily sales from orders
        const dailySales = orders.reduce((sales, order) => {
            const date = new Date(order._order_date).toLocaleDateString(); // Format date
            sales[date] = (sales[date] || 0) + order._total_price;
            return sales;
        }, {});

        // Extract dates and sales into separate arrays
        const labels = Object.keys(dailySales).sort(); // Sorted dates
        const data = labels.map(date => dailySales[date]);

        window.lineChart = new Chart(ctxLine, {
            type: 'line',
            data: {
                labels: labels, // Use dynamic dates
                datasets: [{
                    label: 'Daily Sales',
                    data: data, // Use computed daily sales
                    borderColor: 'rgb(75, 192, 192)',
                    tension: 0.1
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        display: true
                    }
                },
                scales: {
                    x: {
                        title: {
                            display: true,
                            text: 'Date'
                        }
                    },
                    y: {
                        title: {
                            display: true,
                            text: 'Sales Amount'
                        },
                        beginAtZero: true
                    }
                }
            }
        });

        // Calculate counts for each product category
        let cakeCount = products.filter(product => product._category === 'Cake').length;
        let cookieCount = products.filter(product => product._category === 'Cookie').length;
        let drinkCount = products.filter(product => product._category === 'Drink').length;

        // Pie Chart
        var ctxPie = $('#pieChart').get(0).getContext('2d');

        // Destroy previous pie chart instance if it exists
        if (window.pieChart instanceof Chart) {
            window.pieChart.destroy();
        }

        window.pieChart = new Chart(ctxPie, {
            type: 'pie',
            data: {
                labels: ['Cake', 'Cookie', 'Drinks'],
                datasets: [{
                    label: 'Top Categories',
                    data: [cakeCount, cookieCount, drinkCount],
                    backgroundColor: [
                        'rgb(255, 99, 132)',
                        'rgb(54, 162, 235)',
                        'rgb(255, 206, 86)',
                    ]
                }]
            },
            options: {
                responsive: true
            }
        });
    }

    // Initial load of charts
    initializeCharts();

    // Function to reload the charts when `products` data changes in localStorage
    function reloadCharts() {
        products = JSON.parse(localStorage.getItem('products')) || [];
        customers = JSON.parse(localStorage.getItem('customers')) || [];
        orders = JSON.parse(localStorage.getItem('orders')) || [];
        initializeCharts();
        updateDashboard();
    }

    // Reload charts when the reload button is clicked
    $('#reloadButton').click(function (event) {
        event.preventDefault();
        reloadCharts();
    });

    // Automatically reload the charts if localStorage `products` is updated
    window.addEventListener('storage', function (event) {
        if (event.key === 'products') {
            reloadCharts();
        }
    });

    function updateDashboard() {
        const totalOrders = orders.length; // Replace with actual logic to get total orders
        const totalCustomers = customers.length;
        const totalIncome = orders.reduce((total, order) => total + order._total_price, 0);

        $('#total-orders').text(totalOrders);
        $('#total-customers').text(totalCustomers);
        $('#total-income').text(totalIncome.toFixed(2));
    }

    updateDashboard();

    const main_content = $('.main-content');

    $('#new-customer').on('click', function (event) {
        // Hide all sections
        main_content.children().hide();

        // Clone the section instead of moving it
        const sectionElement = $('.customer').clone();

        // Append the cloned section to main_content
        main_content.append(sectionElement);

        // Show the cloned section
        sectionElement.show();
    });

});

// Function to format the current date
$(document).ready(function() {
    // Get current date
    const currentDate = new Date();
    const day = currentDate.getDate();
    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"];
    const month = monthNames[currentDate.getMonth()];
    const year = currentDate.getFullYear();
    const dayOfWeekNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const dayOfWeek = dayOfWeekNames[currentDate.getDay()];

    // Update the calendar widget
    $('#current-day').text(day);
    $('#current-date').text(year);
    $('#current-month').text(month);
});