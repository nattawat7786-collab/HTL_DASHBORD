// ===== WebSocket Connection =====
let ws;
let reconnectInterval;
let connectionStatus = 'disconnected';

function connectWebSocket() {
    // สร้าง WebSocket Connection
    const protocol = window.location.protocol === 'https:' ? 'wss:' : 'ws:';
    const wsUrl = `${protocol}//${window.location.host}`;
    
    ws = new WebSocket(wsUrl);
    
    ws.onopen = () => {
        console.log('✅ Connected to server');
        connectionStatus = 'connected';
        updateConnectionStatus();
        clearInterval(reconnectInterval);
    };
    
    ws.onmessage = (event) => {
        try {
            const data = JSON.parse(event.data);
            updateDashboard(data);
        } catch (err) {
            console.error('❌ Error parsing data:', err);
        }
    };
    
    ws.onerror = (error) => {
        console.error('❌ WebSocket error:', error);
        connectionStatus = 'error';
        updateConnectionStatus();
    };
    
    ws.onclose = () => {
        console.log('📴 Disconnected from server');
        connectionStatus = 'disconnected';
        updateConnectionStatus();
        
        // Auto reconnect ทุก 3 วินาที
        reconnectInterval = setInterval(() => {
            console.log('🔄 Reconnecting...');
            connectWebSocket();
        }, 3000);
    };
}

// ===== Update Connection Status Indicator =====
function updateConnectionStatus() {
    const statusElement = document.querySelector('.header-time');
    if (!statusElement) return;
    
    const now = new Date();
    const timeString = now.toLocaleString('en-GB', {
        weekday: 'short',
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    });
    
    let statusIcon = '';
    if (connectionStatus === 'connected') {
        statusIcon = '🟢';
    } else if (connectionStatus === 'error') {
        statusIcon = '🔴';
    } else {
        statusIcon = '🟡';
    }
    
    statusElement.textContent = `${statusIcon} ${timeString}`;
}

// ===== Update Dashboard with Real-time Data =====
function updateDashboard(data) {
    console.log('📊 Updating dashboard:', data);
    
    // อัพเดท block values
    updateBlockValue('.block-daily-plan .block-value', data.dailyPlan);
    updateBlockValue('.block-actual .block-value', data.actual);
    updateBlockValue('.block-line-stop .block-value', data.lineStop);
    updateBlockValue('.block-Line-Oparation .block-value', data.lineOperation);
    updateBlockValue('.block-CYCLE-Time .block-value', data.cycleTime);
    updateBlockValue('.efficiency-large', data.efficiency + '%');
    updateBlockValue('.block-Status-large', data.status);
    
    // อัพเดทสี Status
    updateStatusColor(data.status);
    
    // อัพเดทเวลา
    updateConnectionStatus();
}

// ===== Update Single Block Value =====
function updateBlockValue(selector, value) {
    const element = document.querySelector(selector);
    if (element) {
        // เพิ่ม animation effect
        element.style.opacity = '0.5';
        setTimeout(() => {
            element.textContent = value;
            element.style.opacity = '1';
        }, 100);
    }
}

// ===== Update Status Color =====
function updateStatusColor(status) {
    const statusElement = document.querySelector('.block-Status-large');
    const statusBlock = document.querySelector('.block-Status');
    
    if (statusElement && statusBlock) {
        if (status === 'Run') {
            statusElement.style.color = '#00FF00';
            statusBlock.style.background = '#1A4A2A';
            statusBlock.style.borderLeft = '4px solid #00FF00';
        } else {
            statusElement.style.color = '#FF3333';
            statusBlock.style.background = '#5A1A1A';
            statusBlock.style.borderLeft = '4px solid #FF3333';
        }
    }
}

// ===== Initialize Charts (เหมือนเดิม) =====
const ctx1 = document.getElementById('downTimeChart').getContext('2d');
const downTimeChart = new Chart(ctx1, {
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

const ctx2 = document.getElementById('stationChart').getContext('2d');
const stationChart = new Chart(ctx2, {
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

const ctx3 = document.getElementById('outputTrendChart').getContext('2d');
const outputChart = new Chart(ctx3, {
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

const ctx4 = document.getElementById('cycleTrendChart').getContext('2d');
const cycleChart = new Chart(ctx4, {
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

// ===== Start Application =====
console.log('🚀 Starting HTL Dashboard...');
connectWebSocket();
updateConnectionStatus();

// อัพเดทเวลาทุกนาที
setInterval(updateConnectionStatus, 60000);