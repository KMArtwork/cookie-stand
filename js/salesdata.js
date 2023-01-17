'use strict';

import { locationSalesReports } from "./app.js";

// function displaySalesData (targetElement, arrayLocation) {
//     let target = document.getElementById(targetElement);
//     let header = document.createElement('h2');
//     header.innerHTML = locationSalesReports[arrayLocation][0];
//     target.appendChild(header);
//     let list = document.createElement('ul');
//     target.appendChild(list);
    

//     for (let i = 0; i < 15; i++) {
//         let data = document.createElement('li');
//         data.innerHTML = locationSalesReports[arrayLocation][1][i];
//         console.log(data.innerHTML);
//         list.appendChild(data);
//     }
// }

function displaySalesTableData (targetElementId, arrayLocation) {
    let target = document.getElementById(targetElementId);
    
    for (let i = 0; i < 15; i++) {
        let data = document.createElement('td');
        data.innerHTML = locationSalesReports[arrayLocation][1][i];
        console.log('Sales Report ' + data.innerHTML);
        target.appendChild(data);
    }
}

displaySalesTableData('seattle', 0);
displaySalesTableData('tokyo', 1);
displaySalesTableData('dubai', 2);
displaySalesTableData('paris', 3);
displaySalesTableData('lima', 4);