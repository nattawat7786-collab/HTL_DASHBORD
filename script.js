// กราฟที่ 1: Top 5 Down Time Section - แนวนอน
const ctx1 = document.getElementById('downTimeChart').getContext('2d');
new Chart(ctx1, {
    type: 'bar',
    data: {
        labels: ['STN10', 'STN20', 'STN30', 'STN40', 'STN50'],
        datasets: [{
            label: 'Down Time (min)',
            data: [45, 40, 35, 30, 25],
            backgroundColor: ['#FF3333', '#FF5555', '#FF7777', '#FF9999', '#FFBBBB'],
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
                ticks: { color: '#B0B0B0', font: { size: 16 } }, 
                grid: { color: '#3A3A3A' } 
            }, 
            y: { 
                ticks: { color: '#B0B0B0', font: { size: 16 } }, 
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
        labels: ['STN10', 'STN20', 'STN30', 'STN40', 'STN50'],
        datasets: [{
            label: 'Number of Stops',
            data: [8, 7, 6, 5, 4],
            backgroundColor: ['#FFA500', '#FFB84D', '#FFC266', '#FFD699', '#FFE0B3'],
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
                ticks: { color: '#B0B0B0', font: { size: 16 } }, 
                grid: { color: '#3A3A3A' } 
            }, 
            y: { 
                beginAtZero: true, 
                max: 10, 
                ticks: { color: '#B0B0B0', font: { size: 16 } }, 
                grid: { color: '#3A3A3A' } 
            } 
        }
    }
});