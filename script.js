const ctx1 = document.getElementById('downTimeChart').getContext('2d');
new Chart(ctx1, {
    type: 'bar',
    data: {
        labels: ['PTO', 'PI', 'MIN', 'OTHER'],
        datasets: [{
            label: 'Down Time (min)',
            data: [45, 30, 20, 15],
            backgroundColor: ['#FF3333', '#FF6666', '#FF9999', '#FFCCCC'],
            borderRadius: 2,
            borderSkipped: false
        }]
    },
    options: {
        indexAxis: 'y',
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { display: false } },
        scales: { 
            x: { 
                beginAtZero: true, 
                max: 50, 
                ticks: { color: '#B0B0B0' }, 
                grid: { color: '#3A3A3A' } 
            }, 
            y: { 
                ticks: { color: '#B0B0B0' }, 
                grid: { color: '#3A3A3A' } 
            } 
        }
    }
});

const ctx2 = document.getElementById('stationChart').getContext('2d');
new Chart(ctx2, {
    type: 'bar',
    data: {
        labels: ['LH3', 'RH1', 'LH1', 'RH3'],
        datasets: [{
            label: 'Number of Stops',
            data: [5, 4, 3, 2],
            backgroundColor: ['#FFA500', '#FFB84D', '#FFD699', '#FFECCC'],
            borderRadius: 2,
            borderSkipped: false
        }]
    },
    options: {
        indexAxis: 'y',
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { display: false } },
        scales: { 
            x: { 
                beginAtZero: true, 
                max: 6, 
                ticks: { color: '#B0B0B0' }, 
                grid: { color: '#3A3A3A' } 
            }, 
            y: { 
                ticks: { color: '#B0B0B0' }, 
                grid: { color: '#3A3A3A' } 
            } 
        }
    }
});