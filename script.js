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
// กราฟที่ 3: Hourly Output Trend
const ctx3 = document.getElementById('outputTrendChart').getContext('2d');
new Chart(ctx3, {
    type: 'line',
    data: {
        labels: ['08:00', '09:00', '10:00', '11:00', '12:00'],
        datasets: [
            {
                label: 'Actual Output',
                data: [20, 45, 70, 95, 120],
                borderColor: '#00FF00',
                backgroundColor: 'transparent',
                tension: 0.4
            },
            {
                label: 'Target Output',
                data: [25, 50, 75, 100, 125],
                borderColor: '#FFA500',
                borderDash: [5, 5],
                backgroundColor: 'transparent',
                tension: 0.4
            }
        ]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                labels: {
                    color: '#B0B0B0',
                    font: { size: 14 }
                }
            }
        },
        scales: {
            x: {
                ticks: {
                    color: '#B0B0B0',
                    font: { size: 14 }
                },
                grid: { color: '#3A3A3A' }
            },
            y: {
                beginAtZero: true,
                ticks: {
                    color: '#B0B0B0',
                    font: { size: 14 }
                },
                grid: { color: '#3A3A3A' }
            }
        }
    }
});
// กราฟที่ 4: Cycle Time Trend
const ctx4 = document.getElementById('cycleTrendChart').getContext('2d');
new Chart(ctx4, {
    type: 'line',
    data: {
        labels: ['08:00', '09:00', '10:00', '11:00', '12:00'],
        datasets: [
            {
                label: 'Actual Cycle Time (sec)',
                data: [78, 80, 85, 90, 88],
                borderColor: '#FF00FF',
                backgroundColor: 'transparent',
                tension: 0.4
            },
            {
                label: 'Standard Cycle Time',
                data: [75, 75, 75, 75, 75],
                borderColor: '#FFFF00',
                borderDash: [5, 5],
                backgroundColor: 'transparent',
                tension: 0.4
            }
        ]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                labels: {
                    color: '#B0B0B0',
                    font: { size: 14 }
                }
            }
        },
        scales: {
            x: {
                ticks: {
                    color: '#B0B0B0',
                    font: { size: 14 }
                },
                grid: { color: '#3A3A3A' }
            },
            y: {
                beginAtZero: false,
                ticks: {
                    color: '#B0B0B0',
                    font: { size: 14 }
                },
                grid: { color: '#3A3A3A' }
            }
        }
    }
});

