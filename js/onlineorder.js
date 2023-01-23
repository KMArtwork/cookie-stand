'use strict';

let inventory = [];

let userPaymentInfo = {
    firstName: '',
    lastName: '',
    address: '',
    cardNumber: 0,
    cardCVV: 0,
}
let userCart = [];

let userOrder = {
    userInfo: {},
    orderedItems: [],
    specialInstructions: '',
}

function Item (itemName, Price, Quantity, imgLocation = './img/frosted-cookie.jpg') {
    this.itemName = itemName;
    this.price = Price;
    this.quantity = Quantity;
    this.imgLocation = imgLocation;
    inventory.push(this);
}

Item.prototype.addItemToCart = function() {
    userCart.push(this);
};

Item.prototype.removeItemToCart = function() {
    userCart.filter(item => item === this);
    console.log(userCart);
};

Item.prototype.convertPriceToUSD = function () {
    let formatPrice = this.price.toFixed(2);
    return `$ ${formatPrice}`;
}

const populateStore = () => {
    let mainEl = document.getElementById('main');
    inventory.forEach(element => {
        let container = document.createElement('section');
        container.setAttribute('id', element.itemName);
        container.setAttribute('class', 'itemBox');
        mainEl.appendChild(container);

        let itemName = document.createElement('h4');
        itemName.innerText = element.itemName;
        container.appendChild(itemName);
        
        let itemImg = document.createElement('img');
        itemImg.setAttribute('src', element.imgLocation);
        container.appendChild(itemImg);

        console.log(element.itemName);
    });

}

let salmonCookieOG = new Item('Salmon Cookie Original', 1, 9999);
let salmonCookiePB = new Item('Salmon Cookie Peanut Butter', 1, 9999);
let salmonCookieCC = new Item('Salmon Cookie Chocolate Chip', 1, 9999);
let salmonShirt = new Item('Salmon TShirt', 15.99, 4783, './img/shirt.jpg');
let salmonHat = new Item('Salmon Cookie Fitted Hat', 18.99, 5779);
let salmonSticker = new Item('Salmon Cookie Sticker', 2.99, 100);


populateStore();