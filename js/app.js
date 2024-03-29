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

var Store = function(location, minCustomerHr, maxCustomerHr, avgCookieCust, estimatedCookiesHr, totalDailyCookies){
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
function renderTableHeader() {
  var section = document.getElementById('sales_list');
  var table = document.createElement('table'); 
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

function renderTableFooter() {
  var table = document.getElementById('table');
  var footer = document.createElement('tfoot');
  table.appendChild(footer);

  var tr = document.createElement('tr');
  tr.setAttribute('id', 'totals');
  footer.appendChild(tr);
  var td = document.createElement('td');
  td.textContent = "Cookies Sold Per Hour";
  tr.appendChild(td);

  var columnTotal = 0;
  for(var i = 0; i < storeHours.length; i++){
    var hourTotal = 0;
    for(var j = 0; j < storeSalesHr.length; j++){
      hourTotal += parseInt(storeSalesHr[j][i]);
    }
    columnTotal += hourTotal;
    td = document.createElement('td');
    td.textContent = hourTotal;
    tr.appendChild(td);
  };

  td = document.createElement('td');
  td.textContent = columnTotal;
  tr.appendChild(td);
};

Store.prototype.renderSalesData = function() {
var table = document.getElementById('table');
var tr = document.createElement('tr');
table.appendChild(tr);

var th = document.createElement('th');
th.textContent = `${this.location}`;
tr.appendChild(th);
  
for(var i = 0; i < storeHours.length; i++){
  var sales = this.estimatedCookiesHr[i];
  var td = document.createElement('td');
  td.textContent = sales;
  tr.appendChild(td);
}

td = document.createElement('td');
td.setAttribute('class', 'total');
td.textContent = `${this.totalDailyCookies}`;
tr.appendChild(td);
};

//var newStoreForm = document.getElementById('addNewStore');
//newStoreForm.addEventListener("submit", handleSubmit);

//function handleSubmit (event){
//event.preventDefault();
//var location = event.target.location.value;
//var minCustomerHr = event.target.minCustomerHr.value;
//var maxCustomerHr = event.target.maxCustomerHr.value;
//var avgCookieCust = event.target.avgCookieCust.value;​
//var newLocation = new Store (location, minCustomerHr, maxCustomerHr, avgCookieCust, [], 0);
//newLocation. ();
//newLocation. ();
//newLocation. ();
//removeFooter();
//renderTableFooter();
//}​
function removeFooter() {
  var table = document.getElementById('table');
  table.deleteFooter();
}

(function renderAll(data){
  renderTableHeader();
  for(var i = 0; i < data.length; i++){
    data[i] = new Store(data[i][0], data[i][1], data[i][2], data[i][3], data[i][4], data[i][5]);
    //data[i].cookiesPerHour();
    //data[i].cookiesPerDay();
    data[i].renderSalesData();
  }
  renderTableFooter();
})(storeStats);
