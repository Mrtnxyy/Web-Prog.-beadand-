// Alap objektumorientált JavaScript kód

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

        const menuList = document.createElement('ul');
        menuList.classList.add('menu-list');

        this.items.forEach(item => {
            const menuItem = document.createElement('li');
            menuItem.innerHTML = `<span>${item.name}</span> - ${item.price} Ft`;
            menuList.appendChild(menuItem);
        });

        menuDiv.appendChild(menuList);

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
        this.discount = discount; // Kedvezmény
    }

    // Render metódus felülbírálása, hogy a kedvezményt is megjelenítse
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

// Példányosítsunk néhány menüt
const breakfastItems = [
    { name: 'Tojásos szendvics', price: 800},
    { name: 'Pankóta', price: 1200 },
    { name: 'Kávé', price: 400 }
];

const lunchItems = [
    { name: 'Leves', price: 600 },
    { name: 'Grillezett csirke', price: 1500 },
    { name: 'Köret (rizs)', price: 300 }
];

const dessertItems = [
    { name: 'Sütemény', price: 600 },
    { name: 'Gyümölcs saláta', price: 500 },
    { name: 'Csokoládé mousse', price: 800 }
];

const specialItems = [
    { name: 'Szezonális saláta', price: 700 },
    { name: 'Grillezett lazac', price: 2000 }
];

const breakfastMenu = new Menu("Reggeli", breakfastItems);
const lunchMenu = new Menu("Ebéd", lunchItems);
const dessertMenu = new Menu("Desszert", dessertItems);

// Speciális menü (kedvezménnyel)
const specialMenu = new SpecialMenu("Különleges étkezés", specialItems, 10);

// A menük hozzáadása az oldalhoz
const menusContainer = document.getElementById('menus-container');
menusContainer.appendChild(breakfastMenu.render());
menusContainer.appendChild(lunchMenu.render());
menusContainer.appendChild(dessertMenu.render());
menusContainer.appendChild(specialMenu.render());
