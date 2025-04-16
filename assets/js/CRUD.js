// Új sor hozzáadása a táblázathoz
function addRow() {
    const table = document.getElementById("crudTable").getElementsByTagName('tbody')[0];

    // Kérjük be a felhasználótól az adatokat
    const name = prompt("Adja meg a termék nevét (min 3 karakter):");
    const category = prompt("Adja meg a kategóriát (min 3 karakter):");

    // Ellenőrizzük, hogy a név és a kategória is megfelel-e a követelményeknek
    if (name && name.length >= 3 && name.length <= 25 && category && category.length >= 3 && category.length <= 25) {
        const newRow = table.insertRow(); // Csak akkor hozzunk létre sort, ha mindkét mező valid

        const idCell = newRow.insertCell(0);
        const nameCell = newRow.insertCell(1);
        const categoryCell = newRow.insertCell(2);
        const actionCell = newRow.insertCell(3);

        const newId = table.rows.length;
        idCell.textContent = newId;

        nameCell.textContent = name;
        categoryCell.textContent = category;

        actionCell.innerHTML = `
            <button onclick="editRow(this)">Szerkesztés</button>
            <button onclick="deleteRow(this)">Törlés</button>
        `;
    } else {
        // Ha bármelyik mező hibás, nem hozunk létre sort, és hibaüzenetet dobunk
        alert("Hibás adat! A névnek legalább 3 karakternek kell lennie és legfeljebb 25 karakter hosszú lehet, és a kategória is legalább 3 karakterből és legfeljebb 25 karakterből állhat.");
    }
}

// Sor szerkesztése
function editRow(button) {
    const row = button.closest("tr");
    const nameCell = row.cells[1];
    const categoryCell = row.cells[2];

    const newName = prompt("Adja meg a termék nevét (min 3 karakter):", nameCell.textContent);
    const newCategory = prompt("Adja meg a kategóriát (min 3 karakter):", categoryCell.textContent);

    if (newName && newName.length >= 3 && newName.length <= 25 && newCategory && newCategory.length >= 3 && newCategory.length <= 25) {
        nameCell.textContent = newName;
        categoryCell.textContent = newCategory;
    } else {
        alert("Hibás adat! A névnek legalább 3 karakternek kell lennie és legfeljebb 25 karakter hosszú lehet, és a kategória is legalább 3 karakterből és legfeljebb 25 karakterből állhat.");
    }
}

// Sor törlése
function deleteRow(button) {
    const row = button.closest("tr");
    row.remove();
    reindexRows(); // Újraszámozzuk a sorokat
}

// Sorszámok újraszámozása a sor törlése után
function reindexRows() {
    const table = document.getElementById("crudTable").getElementsByTagName('tbody')[0];
    const rows = table.rows;
    for (let i = 0; i < rows.length; i++) {
        rows[i].cells[0].textContent = i + 1; // Új sorszámot állítunk be
    }
}

// Rendezés oszlop szerint
function sortTable(columnIndex) {
    const table = document.getElementById("crudTable");
    const rows = Array.from(table.rows).slice(1);
    const isAscending = table.rows[0].cells[columnIndex].classList.toggle("ascending");

    rows.sort((rowA, rowB) => {
        const cellA = rowA.cells[columnIndex].textContent.trim();
        const cellB = rowB.cells[columnIndex].textContent.trim();
        return isAscending 
            ? cellA.localeCompare(cellB) 
            : cellB.localeCompare(cellA);
    });

    rows.forEach(row => table.appendChild(row)); // A rendezett sorokat hozzáadjuk újra
}

// Szűrés a táblázatban
function searchTable() {
    const searchInput = document.getElementById("searchInput").value.toLowerCase();
    const table = document.getElementById("crudTable");
    const rows = table.getElementsByTagName("tr");

    Array.from(rows).forEach(row => {
        const cells = row.getElementsByTagName("td");
        let isMatch = false;

        Array.from(cells).forEach(cell => {
            if (cell.textContent.toLowerCase().includes(searchInput)) {
                isMatch = true;
            }
        });

        row.style.display = isMatch ? "" : "none"; // Ha találat, akkor megjelenítjük a sort, különben elrejtjük
    });
}
