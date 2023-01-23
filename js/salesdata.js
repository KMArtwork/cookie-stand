'use strict';

import { locationSalesReports, hours, locations, Store } from "./app.js";

let newStoreEl = document.getElementById('newStoreForm');

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
    let target = document.getElementById('totals');

    // checks to see if footer row already has <td> elements with totals, if it does, removes all cells except for the first one (the <th> cell)
    if (target.cells.length > 1) {
        console.log('removing old data');
        do {
            target.removeChild(target.lastChild);
        } while (target.cells.length > 1);
    }
    //populates footer row with <td> elements that display the total sales
    for (let i = 0; i < 15; i++) {
        hourlyTotal = 0;
        for (let j = 0; j < locationSalesReports.length; j++) {
            hourlyTotal += locationSalesReports[j][1][i];
        }
        // console.log(hourlyTotal);
        data = document.createElement('td');
        data.innerHTML = hourlyTotal;
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

function createNewStoreData (event) {
    let newStore = new Store(event.target.storeLocation.value, event.target.minCustomers.value, event.target.maxCustomers.value, event.target.avgCookies.value);
        // generates store information
        newStore.generateCustomersPerHour();
        newStore.generateCookiesPerHour();
        newStore.calculateTotalCookiesSold();
        newStore.generateSalesReport();
    // console.log(newStore);

    // adds relevant store information to array of sales information for all stores
    locationSalesReports.push([newStore.location, newStore.salesReport]);
}

function addStoreToTable (event) {
    // prevents page from refreshing 
    event.preventDefault();
    let tableEl = document.getElementById('tableBody');
    // prevents adding of duplicate cities
    for (let i = 0; i < locationSalesReports.length; i++) {
        if (event.target.storeLocation.value.toUpperCase() == locationSalesReports[i][0].toUpperCase()) {
            alert('City already exists');
            newStoreEl.storeLocation.value = '';
            return;
        }
    };
    // creates new Store object & generates relative information
    createNewStoreData(event);
    // creates new row in table body
    let newTableRow = document.createElement('tr');
    newTableRow.setAttribute('id', event.target.storeLocation.value);
    newTableRow.setAttribute('class', 'label x-axis')
    tableEl.appendChild(newTableRow);
    // adds new header to new row
    let newTableHeader = document.createElement('th');
    newTableHeader.innerText = event.target.storeLocation.value;
    newTableRow.appendChild(newTableHeader);
    // 'createNewStoreData' function adds relevant information to 'locationSalesReport' array. Since we invoke 'createNewStoreData' inside of this function, the newest element of the 'locationSalesReport' array will be what we need to add to the table: arr.length - 1
    let salesArr = locationSalesReports[locationSalesReports.length - 1];
    // console.log(salesArr);
    for (let i = 0; i < 15; i++) {
        let data = document.createElement('td');
        data.innerText = salesArr[1][i];
        newTableRow.appendChild(data);
    }
    displayHourlyTotals();
    newStoreEl.reset();
}

newStoreEl.addEventListener('submit', addStoreToTable);

createTableHeaders();

displaySalesTableData('seattle', 0);
displaySalesTableData('tokyo', 1);
displaySalesTableData('dubai', 2);
displaySalesTableData('paris', 3);
displaySalesTableData('lima', 4);

displayHourlyTotals();