// Alap osztály a menühöz
class Menu {
    constructor(name, items) {
        this.name = name;
        this.items = items;
    }

    render() {
        const menuDiv = document.createElement('div');
        menuDiv.classList.add('menu');

        const menuTitle = document.createElement('h2');
        menuTitle.textContent = this.name;
        menuDiv.appendChild(menuTitle);

        // Menüelemek kirajzolása sortöréssel
        this.items.forEach(item => {
            const itemDiv = document.createElement('div');
            itemDiv.innerHTML = `<span>${item.name}</span> - ${item.price} Ft<br />`;
            menuDiv.appendChild(itemDiv);
        });

        const btn = document.createElement('button');
        btn.classList.add('btn');
        btn.textContent = `Válassz a ${this.name} menüből`;
        menuDiv.appendChild(btn);

        return menuDiv;
    }
}

// Speciális étkezési menü osztály (öröklődés)
class SpecialMenu extends Menu {
    constructor(name, items, discount) {
        super(name, items);  // A szülő konstruktorának meghívása
        this.discount = discount;
    }

    render() {
        const menuDiv = super.render();  // Szülő osztály render metódusa

        const discountTag = document.createElement('p');
        discountTag.textContent = `Kedvezmény: ${this.discount}%`;
        discountTag.style.textAlign = 'center';
        discountTag.style.color = '#d9534f';
        menuDiv.appendChild(discountTag);

        return menuDiv;
    }
}

// Menüelemek
const breakfastItems = [
    { id: "sli", name: 'Tojásos szendvics', price: 800 },
    { id: "sli", name: 'Pankóta', price: 1200 },
    { id: "sli", name: 'Kávé', price: 400 }
];

const lunchItems = [
    { id: "sli", name: 'Leves', price: 600 },
    { id: "sli", name: 'Grillezett csirke', price: 1500 },
    { id: "sli", name: 'Köret (rizs)', price: 300 }
];

const dessertItems = [
    { id: "sli", name: 'Sütemény', price: 600 },
    { id: "sli", name: 'Gyümölcs saláta', price: 500 },
    { id: "sli", name: 'Csokoládé mousse', price: 800 }
];

const specialItems = [
    { id: "sli", name: 'Szezonális saláta', price: 700 },
    { id: "sli", name: 'Grillezett lazac', price: 2000 },
    { id: "sli", name: 'Bélszín Steak', price: 5000 }
];

// Menü példányosítás
const breakfastMenu = new Menu("Reggeli", breakfastItems);
const lunchMenu = new Menu("Ebéd", lunchItems);
const dessertMenu = new Menu("Desszert", dessertItems);
const specialMenu = new SpecialMenu("Különleges étkezés", specialItems, 10);

// Menü kirenderelés
const menusContainer = document.getElementById('menus-container');
menusContainer.appendChild(breakfastMenu.render());
menusContainer.appendChild(lunchMenu.render());
menusContainer.appendChild(dessertMenu.render());
menusContainer.appendChild(specialMenu.render());
