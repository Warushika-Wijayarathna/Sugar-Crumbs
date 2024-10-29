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
var ctxPie = $('#pieChart').get(0).getContext('2d');
var pieChart = new Chart(ctxPie, {
    type: 'pie',
    data: {
        labels: ['Cake', 'Cookie', 'Drinks', 'Others'],
        datasets: [{
            label: 'Top Categories',
            data: [43, 31, 15, 11],
            backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(54, 162, 235)',
                'rgb(255, 206, 86)',
                'rgb(75, 192, 192)'
            ]
        }]
    },
    options: {
        responsive: true
    }
});
