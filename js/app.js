'use strict';

const hours = ['6AM', '7AM', '8AM', '9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM', '6PM', '7PM'];

function generateRandomNumberOfCustomers (min, max) {
    // console.log(min, max);
    return Math.round(Math.random() * (max - min) + min);
}

const seattle = {
    location: 'Seattle',
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
        };
        this.salesReport.push(`Total: ${this.totalCookiesSold}`);
    },
}

const tokyo = {
    location: 'Tokyo',
    minHourlyCustomers: 3,
    maxHourlyCustomers: 24,
    avgCookiesPerCustomer: 1.2,
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
        };
        this.salesReport.push(`Total: ${this.totalCookiesSold}`);
    },
}

const dubai = {
    location: 'Dubai',
    minHourlyCustomers: 11,
    maxHourlyCustomers: 38,
    avgCookiesPerCustomer: 3.7,
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
        };
        this.salesReport.push(`Total: ${this.totalCookiesSold}`);
    },
}

const paris = {
    location: 'Paris',
    minHourlyCustomers: 20,
    maxHourlyCustomers: 38,
    avgCookiesPerCustomer: 2.3,
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
        };
        this.salesReport.push(`Total: ${this.totalCookiesSold}`);
    },
}

const lima = {
    location: 'Lima',
    minHourlyCustomers: 2,
    maxHourlyCustomers: 16,
    avgCookiesPerCustomer: 4.6,
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
        };
        this.salesReport.push(`Total: ${this.totalCookiesSold}`);
    },
}

const locations = [seattle, tokyo, dubai, paris, lima];

let locationSalesReports = [];

function compileSalesReports () {
    locations.forEach(loc => locationSalesReports.push([loc.location, loc.salesReport]) )
}

seattle.generateCustomersPerHour();
seattle.generateCookiesPerHour();
seattle.calculateTotalCookiesSold();
seattle.generateSalesReport();
console.log(seattle);

tokyo.generateCustomersPerHour();
tokyo.generateCookiesPerHour();
tokyo.calculateTotalCookiesSold();
tokyo.generateSalesReport();
console.log(tokyo);

dubai.generateCustomersPerHour();
dubai.generateCookiesPerHour();
dubai.calculateTotalCookiesSold();
dubai.generateSalesReport();
console.log(dubai);

paris.generateCustomersPerHour();
paris.generateCookiesPerHour();
paris.calculateTotalCookiesSold();
paris.generateSalesReport();
console.log(paris);

lima.generateCustomersPerHour();
lima.generateCookiesPerHour();
lima.calculateTotalCookiesSold();
lima.generateSalesReport();
console.log(lima);

compileSalesReports();
console.log(locationSalesReports);

function displaySalesData () {
    let target = document.getElementById('seattle');
    let information = document.createElement('p')
    information.innerHTML = locationSalesReports[0];
    target.appendChild(information);
};

displaySalesData();