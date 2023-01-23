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

function Item (itemName, Price, Quantity, imgLocation = './img/fish.jpg') {
    this.itemName = itemName;
    this.price = Price;
    this.quantity = Quantity;
    this.imgLocation = imgLocation;

    this.addItemToCart = this.addItemToCart.bind(this);
    this.removeItemToCart = this.removeItemToCart.bind(this);

    inventory.push(this);
}

Item.prototype.addItemToCart = function() {
    userCart.push([this.itemName, this.imgLocation, this.price, this.quantity = 1,]);
    renderCart();
    console.log(userCart);
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
        console.log(element);

        let container = document.createElement('section');
        container.setAttribute('id', element.itemName);
        container.setAttribute('class', 'itemBox');
        mainEl.appendChild(container);

        let itemImg = document.createElement('img');
        itemImg.setAttribute('src', element.imgLocation);
        container.appendChild(itemImg);

        let itemInfo = document.createElement('section');
        itemInfo.setAttribute('id', 'itemInfo');
        container.appendChild(itemInfo);

        let itemName = document.createElement('h4');
        itemName.innerText = element.itemName;
        itemInfo.appendChild(itemName);
        
        let itemPrice = document.createElement('h5');
        itemPrice.innerText = element.convertPriceToUSD();
        itemInfo.appendChild(itemPrice);
        
        let addToCartButton = document.createElement('button');
        addToCartButton.setAttribute('type', 'click');
        addToCartButton.setAttribute('id', 'addToCart');
        addToCartButton.innerText = 'Add to Cart';

        addToCartButton.addEventListener('click', element.addItemToCart);

        itemInfo.appendChild(addToCartButton);

        console.log(element.itemName);
    });

}

// const checkCart = (item) => {

//     userCart.forEach(element => {

//         if (element[0] === item[0]) {
//             element[3]++;
//             console.log('found item');
//         }
        
//     });
// }

const renderCart = () => {


    let cartEl = document.getElementById('cart');
    let item = userCart[userCart.length - 1];
    let subtotalEl = document.getElementById('subtotal');

    document.getElementById('checkout').style.display = 'block';
    subtotalEl.style.display = 'block';
    document.getElementById('main-container').style.margin = '0 17vw 0 1vw';

    let itemInfo = document.createElement('section');
    itemInfo.setAttribute('class', 'cartBox');
    cartEl.insertBefore(itemInfo, subtotalEl);

    let itemImg = document.createElement('img');
    itemImg.setAttribute('src', item[1]);
    itemImg.setAttribute('class', 'cartImg');
    itemInfo.appendChild(itemImg);

    let itemDetails = document.createElement('section');
    itemDetails.setAttribute('class', 'itemDetails');
    itemInfo.appendChild(itemDetails);

    let itemName = document.createElement('h5');
    itemName.innerText = item[0];
    itemDetails.appendChild(itemName);

    let itemCost = document.createElement('h5');
    itemCost.innerText = `${item[2]} x ${item[3]}`;
    itemDetails.appendChild(itemCost);

    let subtotalAmount = 0;

    userCart.forEach(element => {
        subtotalAmount += element[2];
        console.log(subtotalAmount);
    });

    subtotalAmount.toFixed(2);
    console.log(subtotalAmount);
    subtotalEl.innerText = `Sub-Total: $${subtotalAmount}`;

}

let salmonCookieOG = new Item('Salmon Cookie Original', 0.99, 9999);
let salmonCookiePB = new Item('Salmon Cookie Peanut Butter', 0.99, 9999);
let salmonCookieCC = new Item('Salmon Cookie Chocolate Chip', 0.99, 9999);
let salmonShirt = new Item('Salmon TShirt', 15.99, 4783, './img/shirt.jpg');
let salmonHat = new Item('Salmon Cookie Fitted Hat', 18.99, 5779);
let salmonSticker = new Item('Salmon Cookie Sticker', 2.99, 100);


populateStore();