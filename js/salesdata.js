'use strict';

import { locationSalesReports, hours } from "./app.js";

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



// renders cookies sold per hour for a given store location
function displaySalesTableData (targetElementId, arrayLocation) {
    let target = document.getElementById(targetElementId);
    
    for (let i = 0; i < 15; i++) {
        let data = document.createElement('td');
        data.innerHTML = locationSalesReports[arrayLocation][1][i];
        //console.log('Sales Report ' + data.innerHTML);
        target.appendChild(data);
    }
}


// renders total cookies sold per hour across all store locations & grand total for all stores combined
function displayHourlyTotals () {
    let hourlyTotal = 0;
    let data;
    let target;
    for (let i = 0; i < 15; i++) {
        hourlyTotal = locationSalesReports[0][1][i] + locationSalesReports[1][1][i] +  locationSalesReports[2][1][i] + locationSalesReports[3][1][i] + locationSalesReports[4][1][i];
        console.log(hourlyTotal);
        data = document.createElement('td');
        data.innerHTML = hourlyTotal;
        target = document.getElementById('totals');
        target.appendChild(data);
    }
}

// creates and displays table header elements for store hours & daily location total cookies sold
function createTableHeaders () {
    let data;
    let target;
    for (let i = 0; i <= hours.length; i++) {
        data = document.createElement('th');
        data.innerHTML = hours[i];
        target = document.getElementById('y-axis');
        target.appendChild(data);
    }
    data.innerHTML = 'Daily Location Total';
    target.appendChild(data);
}

createTableHeaders();

displaySalesTableData('seattle', 0);
displaySalesTableData('tokyo', 1);
displaySalesTableData('dubai', 2);
displaySalesTableData('paris', 3);
displaySalesTableData('lima', 4);

displayHourlyTotals();