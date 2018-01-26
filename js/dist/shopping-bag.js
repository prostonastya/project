'use strict';

var number = document.getElementById('number'); //number in header
var totalCost = document.getElementById('total'); //price in header
var min = document.getElementsByClassName('min-1');
var plus = document.getElementsByClassName('plus-1');
var empty = document.getElementsByClassName('empty')[0];
var cost = document.getElementsByClassName('cost')[0].childNodes[1]; //near buy
var remove = document.getElementsByClassName('delete');

// polyphyll for remove()
if (!Element.prototype.remove) {
    Element.prototype.remove = function remove() {
        if (this.parentNode) {
            this.parentNode.removeChild(this);
        }
    };
}

// EventListener for "+" and "-"
for (var i = 0; i < plus.length; i++) {
    plus[i].addEventListener('click', plusOne);
    plus[i].addEventListener('click', syncPrice);
}
for (var _i = 0; _i < min.length; _i++) {
    min[_i].addEventListener('click', minus);
    min[_i].addEventListener('click', syncPrice);
}

for (var _i2 = 0; _i2 < remove.length; _i2++) {
    remove[_i2].addEventListener('click', deleteItem);
}
empty.addEventListener('click', deleteAll);

function plusOne(event) {
    var count = event.target.previousSibling;
    var priceContainer = event.target.parentNode.parentNode.parentNode;
    var priceFull = priceContainer.getElementsByClassName('price-bag')[0].innerText;
    var price = +priceFull.substr(1, priceFull.length);

    count.textContent = +count.textContent + 1;
    number.textContent = +number.textContent + 1;
    totalCost.textContent = +totalCost.textContent + price;
}

function minus(event) {
    var count = event.target.nextElementSibling;
    console.log(count);
    var priceContainer = event.target.parentNode.parentNode.parentNode;
    var priceFull = priceContainer.getElementsByClassName('price-bag')[0].innerText;
    var price = +priceFull.substr(1, priceFull.length);

    count.textContent = +count.textContent - 1;
    number.textContent = +number.textContent - 1;
    totalCost.textContent = +totalCost.textContent - price;

    if (count.textContent == 0) {
        priceContainer.parentNode.remove();
    }
}

function deleteAll() {
    var bagAll = document.getElementsByClassName('bag-wrap')[0];
    bagAll.innerHTML = '';
    var infoContainer = document.createElement('p');
    infoContainer.innerText = 'Your shopping bag is empty. Use Catalog to add new items';
    bagAll.appendChild(infoContainer);
    totalCost.textContent = 0;
    number.textContent = 0;
    syncPrice();
}

function syncPrice() {
    cost.textContent = '\xA3' + totalCost.textContent;
}
function deleteItem(event) {
    var item = event.target.parentNode.parentNode.parentNode;
    var row = item.parentNode.children;
    var priceFull = item.children[1].children[1].textContent;
    var price = +priceFull.substr(1, priceFull.length);

    if (row.length > 1) {
        totalCost.textContent = +totalCost.textContent - price;
        number.textContent = +number.textContent - 1;
        item.remove();
    } else {
        totalCost.textContent = +totalCost.textContent - price;
        number.textContent = +number.textContent - 1;
        item.remove();
        deleteAll();
    }
}