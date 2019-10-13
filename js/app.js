'use strict';

var storeHours = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];

function Store(location, minCustomerHr, maxCustomerHr, avgCookieCust){
  this.location = location;
  this.minCustomerHr = minCustomerHr;
  this.maxCustomerHr = maxCustomerHr;
  this.avgCookieCust = avgCookieCust;
  this.estimatedCookiesHr = [];
  this.totalDailyCookies = [];
  };
 
Store.prototype.randomCustomerHr = function(){
  return Math.floor(Math.random() * (this.maxCustomerHr - this.minCustomerHr + 1) + this.minCustomerHr);
  };

Store.prototype.estimatedCookiesHr = function() {
  var result = [];
    for (var i = 0; i < storeHours.length; i++){
      result.push(Math.floor(this.randomCustomerHr() * this.avgCookieCust));
    }
  return result;
  };
  
Store.prototype.totalDailyCookies = function() {
    var cookieSum = 0;
    for (var i = 0; i < storeHours.length; i++){
      cookieSum += this.estimatedCookiesHr()[i];
    }
  return cookieSum;
  };

var Seattle = new Store('Seattle', 23, 65, 6.3);
var Tokyo = new Store('Tokyo', 3, 24, 1.2);
var Dubai = new Store('Dubai', 11, 38, 3.7);
var Paris = new Store('Paris', 20, 38, 2.3);
var Lima = new Store('Lima', 2, 16, 4.6);

//table using a loop
var section = document.getElementById('sales_list');
var table = document.createElement(table); 
section.appendChild(table);
var thead = document.createElement(thead);
table.appendChild(thead);
var tbody = document.createElement(tbody);
thead.appendChild(tbody);
var tfoot = document.createElement(tfoot);
tbody.appendChild(tfoot);

for (var i = 0; i<6; i++){
  var tr = document.createElement(tr);
  tbody.appendChild(tr);}

for (var j=0; j<17; j++){
  var tr = document.createElement(td);
  tr.appendChild(td);}


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

