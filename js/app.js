'use strict';

const hours = ['6AM', '7AM', '8AM', '9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM', '6PM', '7PM'];

function generateRandomNumberOfCustomers (min, max) {
    // console.log(min, max);
    return Math.round(Math.random() * (max - min) + min);
}

function Store(location, minHourlyCustomers, maxHourlyCustomers, avgCookiesPerCustomer) {
    this.location = location;
    this.minHourlyCustomers = minHourlyCustomers;
    this.maxHourlyCustomers = maxHourlyCustomers;
    this.avgCookiesPerCustomer = avgCookiesPerCustomer;
    this.customersPerHour = [];
    this.cookiesPerHour = [];
    this.totalCookiesSold = 0;
    this.salesReport = [];
}

Store.prototype.generateCustomersPerHour = function () {
        
    for (let i = 0; i < 14; i++) {
        this.customersPerHour.push(Math.round(generateRandomNumberOfCustomers(this.minHourlyCustomers, this.maxHourlyCustomers))); 
    }
    //console.log('Customers ' + this.customersPerHour);
};

Store.prototype.generateCookiesPerHour = function () {

    for (let i = 0; i < 14; i++) {
        this.cookiesPerHour.push(Math.round(this.customersPerHour[i] * this.avgCookiesPerCustomer)); 
    }
    //console.log('Cookies ' + this.cookiesPerHour);
};

Store.prototype.calculateTotalCookiesSold = function () {
    let grandTotal = 0;
    this.cookiesPerHour.forEach(total => grandTotal += total );
    this.totalCookiesSold = grandTotal;
};

Store.prototype.generateSalesReport = function () {
    for(let i = 0; i < 14; i++) {
        this.salesReport.push([/*${hours[i]}:*/`${this.cookiesPerHour[i]} Cookies`])
    };
    this.salesReport.push(`${this.totalCookiesSold} Cookies`);
};

let seattle = new Store('Seattle', 23, 65, 6.3);
let tokyo = new Store('Tokyo', 3, 24, 1.2);
let dubai = new Store('Dubai', 11, 38, 3.7);
let paris = new Store('Paris', 20, 38, 2.3)
let lima = new Store('Lima', 2, 16, 4.6);

/*const seattle = {
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
            this.salesReport.push([`${this.cookiesPerHour[i]} Cookies`])
        };
        this.salesReport.push(`${this.totalCookiesSold} Cookies`);
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
            this.salesReport.push([`${this.cookiesPerHour[i]} Cookies`])
        };
        this.salesReport.push(`${this.totalCookiesSold} Cookies`);
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
            this.salesReport.push([`${this.cookiesPerHour[i]} Cookies`])
        };
        this.salesReport.push(`${this.totalCookiesSold} Cookies`);
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
            this.salesReport.push([`${this.cookiesPerHour[i]} Cookies`])
        };
        this.salesReport.push(`${this.totalCookiesSold} Cookies`);
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
            this.salesReport.push([`${hours[i]}: ${this.cookiesPerHour[i]} Cookies`])
        };
        this.salesReport.push(`${this.totalCookiesSold} Cookies`);
    },
}*/

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


export { locationSalesReports };