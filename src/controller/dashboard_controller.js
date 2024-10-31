import product from "../model/product_model.js";

let products = JSON.parse(localStorage.getItem('products')) || [];

// Function to update charts
function updateCharts() {
    products = JSON.parse(localStorage.getItem('products')) || [];

    // Update Pie Chart data
    let cakeCount = products.filter(product => product._category === 'Cake').length;
    let cookieCount = products.filter(product => product._category === 'Cookie').length;
    let drinkCount = products.filter(product => product._category === 'Drink').length;

    pieChart.data.datasets[0].data = [cakeCount, cookieCount, drinkCount];
    pieChart.update();

    // Update Line Chart data (example: re-fetching data)
    lineChart.data.datasets[0].data = [3000, 4000, 3500, 6000, 4500, 5000, 7000]; // Update with actual data
    lineChart.data.datasets[1].data = [2000, 3000, 2500, 4000, 3500, 4200, 6000]; // Update with actual data
    lineChart.update();
}

// Line Chart
var ctxLine = $('#lineChart').get(0).getContext('2d');
var lineChart = new Chart(ctxLine, {
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

// Pie Chart
let cakeCount = products.filter(product => product._category === 'Cake').length;
let cookieCount = products.filter(product => product._category === 'Cookie').length;
let drinkCount = products.filter(product => product._category === 'Drink').length;

var ctxPie = $('#pieChart').get(0).getContext('2d');
var pieChart = new Chart(ctxPie, {
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

// Listen for storage changes
window.addEventListener('storage', function(event) {
    if (event.key === 'products') {
        updateCharts();
    }
});
