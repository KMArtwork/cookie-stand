'use strict';

const hours = ['6AM', '7AM', '8AM', '9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM', '6PM', '7PM']
function generateRandomNumberOfCustomers (min, max) {
    // console.log(min, max);
    return Math.round(Math.random() * (max - min) + min);
}

const seattle = {
    minHourlyCustomers: 23,
    maxHourlyCustomers: 65,
    avgCookiesPerCustomer: 6.3,
    customersPerHour: [],
    cookiesPerHour: [],
    totalCookiesSold: 0,
    salesReport: [],

    generateCustomersPerHour: function () {
        
        for (let i = 0; i < 14; i++) {
            this.customersPerHour.push(Math.round(generateRandomNumberOfCustomers(this.minHourlyCustomers, this.maxHourlyCustomers))); 
        }
        console.log('Customers ' + this.customersPerHour);
    },

    generateCookiesPerHour: function () {

        for (let i = 0; i < 14; i++) {
            this.cookiesPerHour.push(Math.round(this.customersPerHour[i] * this.avgCookiesPerCustomer)); 
        }
        console.log('Cookies ' + this.cookiesPerHour);
    },

    calculateTotalCookiesSold: function () {
        let grandTotal = 0;
        this.cookiesPerHour.forEach(total => grandTotal += total );
        this.totalCookiesSold = grandTotal;
    },

    generateSalesReport: function () {
        for(let i = 0; i < 14; i++) {
            this.salesReport.push([`${hours[i]}: ${this.cookiesPerHour[i]} cookies`])
        }
    },
}

seattle.generateCustomersPerHour();
seattle.generateCookiesPerHour();
seattle.calculateTotalCookiesSold();
seattle.generateSalesReport();
console.log(seattle);