var number = document.getElementById('number');//number in header
var totalCost = document.getElementById('total');//price in header
const min = document.getElementsByClassName('min-1');
const plus = document.getElementsByClassName('plus-1');
var empty = document.getElementsByClassName('empty')[0];
var cost = document.getElementsByClassName('cost')[0].childNodes[1];//near buy
var remove = document.getElementsByClassName('delete');

for (let i=0; i< plus.length; i++){
    plus[i].addEventListener('click', plusOne);
    plus[i].addEventListener('click', syncPrice);
}
for (let i=0; i< min.length; i++){
    min[i].addEventListener('click', minus)
    min[i].addEventListener('click', syncPrice);
}

for (let i=0; i< remove.length; i++){
    remove[i].addEventListener('click', deleteItem);    
}
empty.addEventListener('click', deleteAll);

function plusOne(){
    let count = event.target.previousSibling;
    let priceContainer = event.target.parentNode.parentNode.parentNode;
    let priceFull = priceContainer.getElementsByClassName('price-bag')[0].innerText;
    let price = +priceFull.substr(1,priceFull.length);

    count.textContent = +count.textContent + 1;
    number.textContent = +number.textContent + 1;
    totalCost.textContent = +totalCost.textContent + price;

}

function minus(){
    let count = event.target.nextElementSibling;
    console.log(count);
    let priceContainer = event.target.parentNode.parentNode.parentNode;
    let priceFull = priceContainer.getElementsByClassName('price-bag')[0].innerText;
    let price = +priceFull.substr(1,priceFull.length);

    count.textContent = +count.textContent - 1;
    number.textContent = +number.textContent - 1;
    totalCost.textContent = +totalCost.textContent - price;

    if(count.textContent == 0){
        priceContainer.parentNode.remove();
    }
}

function deleteAll(){
    let bagAll = document.getElementsByClassName('bag-wrap')[0];    
    bagAll.innerHTML = '';
    let infoContainer = document.createElement('p');
    infoContainer.innerText = 'Your shopping bag is empty. Use Catalog to add new items';
    bagAll.appendChild(infoContainer);
    totalCost.textContent = 0;
    number.textContent = 0;
    syncPrice();
}

function syncPrice(){
    cost.textContent =  `£${totalCost.textContent}`;
}
function deleteItem(){
    let item = event.target.parentNode.parentNode.parentNode;
    let row = item.parentNode.children;
    let priceFull = item.children[1].children[1].textContent;
    let price = +priceFull.substr(1,priceFull.length);

    if (row.length > 1){
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