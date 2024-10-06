/*// Get elements
const overviewBtn = document.getElementById('overview-btn');
//const salesBtn = document.getElementById('sales-btn');
//const customersBtn = document.getElementById('customers-btn');
const overview = document.getElementById('overview');
//const sales = document.getElementById('sales');
const customers = document.getElementById('customers');
const chartContainer = document.getElementById('chart-container');
const toggleChartBtn = document.getElementById('toggle-chart');

// Add event listeners
overviewBtn.addEventListener('click', () => 
    {
    overview.classList.add('active');
    sales.classList.remove('active');
    customers.classList.remove('active');
});

/*salesBtn.addEventListener('click', () => {
    sales.classList.add('active');
    overview.classList.remove('active');
    customers.classList.remove('active');
});*/

/*customersBtn.addEventListener('click', () => {
    customers.classList.add('active');
    overview.classList.remove('active');
    sales.classList.remove('active');
});*/

/*toggleChartBtn.addEventListener('click', () => {
    if (chartContainer.style.display === 'block') {
        chartContainer.style.display = 'none';
    } else {
        chartContainer.style.display = 'block';
    }
});

// Initialize chart (example using Chart.js)
const ctx = document.createElement('canvas').getContext('2d');
const chart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
        datasets: [{
            label: 'Sales',
            data: [100, 200, 300, 400, 500],
            backgroundColor: 'rgba(255,2, 10, 0.2)',
            borderColor: 'rgba(255, 2, 10, 1)',
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});

chartContainer.appendChild(ctx.canvas);*/