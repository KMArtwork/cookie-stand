'use strict';

import { locationSalesReports } from "./app.js";

function displaySalesData (targetElement, arrayLocation) {
    let target = document.getElementById(targetElement);
    let header = document.createElement('h2');
    header.innerHTML = locationSalesReports[arrayLocation][0];
    target.appendChild(header);
    let list = document.createElement('ul');
    target.appendChild(list);
    

    for (let i = 0; i < 15; i++) {
        let data = document.createElement('li');
        data.innerHTML = locationSalesReports[0][1][i];
        console.log(data.innerHTML);
        list.appendChild(data);
    }
}

displaySalesData('seattle', 0);
displaySalesData('tokyo', 1);
displaySalesData('dubai', 2);
displaySalesData('paris', 3);
displaySalesData('lima', 4);