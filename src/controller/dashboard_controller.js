import product from "../model/product_model.js";

let products = JSON.parse(localStorage.getItem('products')) || [];

$(document).ready(function () {
    function initializeCharts() {
        // Line Chart
        var ctxLine = $('#lineChart').get(0).getContext('2d');

        // Destroy previous line chart instance if it exists
        if (window.lineChart instanceof Chart) {
            window.lineChart.destroy();
        }

        window.lineChart = new Chart(ctxLine, {
            type: 'line',
            data: {
                labels: ['Oct 11', 'Oct 15', 'Oct 19', 'Oct 25', 'Nov 1', 'Nov 5', 'Nov 11'],
                datasets: [{
                    label: 'Selected Period',
                    data: [3000, 4000, 3500, 6000, 4500, 5000, 7000],
                    borderColor: 'rgb(75, 192, 192)',
                    tension: 0.1
                },
                    {
                        label: 'Comparison',
                        data: [2000, 3000, 2500, 4000, 3500, 4200, 6000],
                        borderColor: 'rgb(255, 99, 132)',
                        tension: 0.1
                    }]
            },
            options: {
                responsive: true
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
        initializeCharts();
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
});
