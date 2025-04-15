// Táblázat adatainak meghatározása
const tableData = [
    [5, 10, 90, 30, 90],
    [10, 70, 20, 30, 90],
    [25, 35, 10, 75, 5],
    [25, 90, 60, 20, 70],
    [30, 70, 20, 85, 5]
];

// Diagram beállítása
const ctx = document.getElementById('myChart').getContext('2d');
const chart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Január', 'Február', 'Március', 'Április', 'Május'],
        datasets: [{
            label: 'Adatok',
            data: tableData[0], // Kezdő adat a 2021-es év első sor
            fill: false,
            borderColor: 'black',
            tension: 0.1
        }]
    },
    options: {
        scales: {
            x: {
                grid: {
                    color: 'black',
                    borderColor: 'black' // tengelyvonal színe
                },
                ticks: {
                    color: 'white'
                }
            },
            y: {
                grid: {
                    color: 'black',
                    borderColor: 'black' // tengelyvonal színe
                },
                ticks: {
                    color: 'white'
                }
            }
        }
    }
});

// A kiválasztott sor alapján frissítjük a diagramot
document.getElementById('row-select').addEventListener('change', function() {
    const selectedRow = this.value;
    chart.data.datasets[0].data = tableData[selectedRow]; // Frissítjük az adatokat
    chart.update(); // Frissítjük a diagramot
});