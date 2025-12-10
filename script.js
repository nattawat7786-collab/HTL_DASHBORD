// กราฟที่ 1: Top 5 Down Time Section - แนวนอน
const ctx1 = document.getElementById('downTimeChart').getContext('2d');
new Chart(ctx1, {
    type: 'bar',
    data: {
        labels: ['STN10', 'STN20', 'STN30', 'STN40', 'STN50', 'STN60', 'STN70', 'STN80'],
        datasets: [{
            label: 'Down Time (min)',
            data: [45, 40, 35, 30, 25, 20, 15, 10],
            backgroundColor: ['#FF3333', '#FF4444', '#FF6666', '#FF8888', '#FF9999', '#FFAAAA', '#FFCCCC', '#FFDDDD'],
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

// กราฟที่ 2: Top 5 Down Time Station - แนวตั้ง
const ctx2 = document.getElementById('stationChart').getContext('2d');
new Chart(ctx2, {
    type: 'bar',
    data: {
        labels: ['STN10', 'STN20', 'STN30', 'STN40', 'STN50', 'STN60', 'STN70', 'STN80'],
        datasets: [{
            label: 'Number of Stops',
            data: [8, 7, 6, 5, 4, 3, 2, 1],
            backgroundColor: ['#FFA500', '#FFB84D', '#FFC266', '#FFCC80', '#FFD699', '#FFE0B3', '#FFECCC', '#FFF5E6'],
            borderRadius: 2,
            borderSkipped: false
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { display: false } },
        scales: { 
            x: { 
                ticks: { color: '#B0B0B0' }, 
                grid: { color: '#3A3A3A' } 
            }, 
            y: { 
                beginAtZero: true, 
                max: 10, 
                ticks: { color: '#B0B0B0' }, 
                grid: { color: '#3A3A3A' } 
            } 
        }
    }
});