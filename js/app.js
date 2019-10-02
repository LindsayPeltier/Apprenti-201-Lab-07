'use strict';

//constructor 
var Store = function(location, minCustHr, maxCustHr, avgCookCust) {
  this.location = location;
  this.minCustHr = minCustHr;
  this.maxCustHr = maxCustHr;
  this.avgCookCust = avgCookCust;
};

var Seattle = new Store ('Seattle', 23, 65, 6.3);
var Tokyo = new Store ('Tokyo', 3, 24, 1.2);
var Dubai = new Store ('Dubai', 11, 38, 3.7);
var Paris = new Store ('Paris', 20, 38, 2.3);
var Lima = new Store ('Lima', 2, 16, 4.6);

Store.prototype.renderStore = render;
function render(){
}

//table 
  var table = document.createElement('table'); 

  var row1 = document.createElement('tr'); 
  var td1 = document.createElement('td'); 
  td1.textContent = this.location[0]; 
  
  var td2 = document.createElement('td'); 
  td2.textContent = this.[];
 
  row1.appendChild(td1);  
  row1.appendChild(td2); 
  
  table.appendChild(row1); 
  
  _______.appendChild(table); 


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




