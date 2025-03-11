// Táblázat adatainak meghatározása
const tableData = [
    [15, 30, 50, 70, 60],
    [10, 25, 45, 65, 55],
    [20, 35, 55, 75, 65],
    [25, 40, 60, 80, 70],
    [30, 45, 65, 85, 75]
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
            borderColor: 'green',
            tension: 0.1
        }]
    }
});

// A kiválasztott sor alapján frissítjük a diagramot
document.getElementById('row-select').addEventListener('change', function() {
    const selectedRow = this.value;
    chart.data.datasets[0].data = tableData[selectedRow]; // Frissítjük az adatokat
    chart.update(); // Frissítjük a diagramot
});