'use strict';

var storeHours = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];
var storeSalesHr = [];
var storeStats = [
  ['Seattle', 23, 65, 6.3 , [], 0],
  ['Tokyo', 3, 24, 1.2, [], 0],
  ['Dubai', 11, 38, 3.7, [], 0],
  ['Paris', 20, 38, 2.3, [], 0],
  ['Lima', 2, 16, 4.6, [], 0]
];

var Store = function(location, minCustomerHr, maxCustomerHr, avgCookieCust){
  this.location = location;
  this.minCustomerHr = minCustomerHr;
  this.maxCustomerHr = maxCustomerHr;
  this.avgCookieCust = avgCookieCust;
  this.estimatedCookiesHr = estimatedCookiesHr;
  this.totalDailyCookies = totalDailyCookies;
};
 
Store.prototype.randomCustomerHr = function() {
  return Math.floor(Math.random() * (this.maxCustomerHr - this.minCustomerHr + 1) + this.minCustomerHr);
};

Store.prototype.estimatedCookiesHr = function() {
  for (var i = 0; i < storeHours.length; i++) {
    var cookiesSold = Math.floor(this.randomCustomerHr() * this.avgCookieCust);
    this.estimatedCookiesHr.push(cookiesSold);
  }
  storeSalesHr.push(this.estimatedCookiesHr);
};
  
Store.prototype.totalDailyCookies = function() {
    this.totalDailyCookies = 0;
    for (var i = 0; i < storeHours.length; i++) {
      this.totalDailyCookies += this.estimatedCookiesHr()[i];
    }
};

//table using a loop
function renderTableHeader() {
  var section = document.getElementById('sales_list');
  var table = document.createElement(table); 
  table.setAttribute('id', 'table');
  section.appendChild(table);

  var thead = document.createElement('thead');
  table.appendChild(thead);

  var tr = document.createElement('tr');
  thead.appendChild(tr);

  var thStore = document.createElement('th');
  thStore.textContent = '';
  tr.appendChild(thStore);

  for (var i = 0; i < storeHours.length; i++) {
    var thTime = document.createElement('th');
    thTime.textContent = `${storeHours[i]}`;
    tr.appendChild(thTime);
  }
  var thStoreTotal = document.createElement('th');
  thStoreTotal.textContent = 'Daily Total';
  tr.appendChild(thTime);
};


//event handler and listener
var newStoreForm = document.getElementById('addNewStore');
newStoreForm.addEventListener('submit',handleSubmit);

function handleSubmit (event){
event.preventDefault();
var location = event.target.location.value;
var mincusthr = event.target.location.value;
var maxcusthr = event.target.location.value;
var avgcookcust = event.target.location.value;
}

var newStoreForm = new (location, minCustHr, maxCustHr, avgCookCust);

