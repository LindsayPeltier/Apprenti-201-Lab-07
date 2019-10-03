'use strict';

var storeHours = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm']

function Store(location, minCustHr, maxCustHr, avgCookCust){
  this.location = location;
  this.minCustHr = minCustHr;
  this.maxCustHr = maxCustHr;
  this.avgCookCust = avgCookCust;
  };
 
Store.prototype.randomCustNumber = function(){
  return Math.floor(Math.random() * (this.maxCustHr - this.minCustHr + 1) + this.minCustHr);
  };

Store.prototype.estCookHr = function() {
  var cookiesPerHour = [];
  for (var i = 0; i < 14; i++) {
    cookiesPerHour.push(Math.round(this.randomCustNumber() * this.avgCookCust));
  }
  return cookiesPerHour;
  };

  var Seattle = new Store('Seattle', 23, 65, 6.3);
  var Tokyo = new Store('Tokyo', 3, 24, 1.2);
  var Dubai = new Store('Dubai', 11, 38, 3.7);
  var Paris = new Store('Paris', 20, 38, 2.3);
  var Lima = new Store('Lima', 2, 16, 4.6);

//table using a loop
  var table = document.createElement(table); 
  var tbody = document.createElement(tbody);
    table.appendChild(tbody);
  var tfoot = document.createElement(tfoot);
    table.appendChild(tfoot);
  var thead = document.createElement(thead);
    table.appendChild(thead);

  for (var i = 0; i<6;i++){
    var tr = document.createElement(tr);
    tbody.appendChild(tr);}
  
  for (var j=0; j<17; j++){
    var tr = document.createElement(td);
    tr.appendChild(td);}

  body.appendChild(table);

  document.write('<table>' + + '</table>')
 

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

