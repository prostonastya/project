'use strict';

var hidenMenu = document.getElementsByClassName('drop-hidden');
var mainCatalog = document.getElementsByClassName('row')[1];
// filter catalog item by category and fashion:
var filteredCatalog = _.filter(window.catalog, { 'category': 'women', 'fashion': 'Casual style' });
// sort by date:
var sortDateOld = _.sortBy(filteredCatalog, ['dateAdded']);
var sortDateNew = []; //(newest first)

for (var i = 0; i < sortDateOld.length; i++) {
    sortDateNew.unshift(sortDateOld[i]);
}
console.log(sortDateNew);

// droppdown
for (var _i = 0; _i < hidenMenu.length; _i++) {
    hidenMenu[_i].addEventListener('click', selected);
}

function selected(event) {
    var selectedVal = event.target.innerText;
    var container = event.target.parentNode.parentNode; //li    
    var value = container.getElementsByClassName('value')[0];
    if (selectedVal == 'Not selected') {
        value.innerText = '';
    } else {
        value.innerText = selectedVal;
    }
}

// catalog item

for (var _i2 = 0; _i2 < sortDateNew.length; _i2++) {
    var item = document.createElement('div');
    item.className = 'item';

    var img = document.createElement('img');
    img.src = sortDateNew[_i2].thumbnail;
    img.alt = 'item-arrivals';
    item.appendChild(img);

    var hover = document.createElement('div');
    hover.className = 'text-hover';
    var link = document.createElement('a');
    link.href = 'item.html';
    link.innerText = 'View item';
    hover.appendChild(link);
    item.appendChild(hover);

    var itemTitle = document.createElement('p');
    itemTitle.innerText = sortDateNew[_i2].title;
    item.appendChild(itemTitle);

    var price = document.createElement('span');
    if (sortDateNew[_i2].discountedPrice !== null) {
        price.innerText = '\xA3' + sortDateNew[_i2].discountedPrice;

        if (sortDateNew[_i2].price !== sortDateNew[_i2].discountedPrice) {
            item.appendChild(calcDiscount(sortDateNew[_i2].price, sortDateNew[_i2].discountedPrice));
        }
    } else {
        price.innerText = sortDateNew[_i2].placeholder;
        price.classList.add('more');
    }
    if (sortDateNew[_i2].hasNew == true) {
        price.classList.add('new-arrivals');
    }

    item.appendChild(price);
    mainCatalog.appendChild(item);
}

function calcDiscount(price, discPrice) {
    var discMsg = '\xA3' + price + ' - ' + (100 - discPrice * 100 / price) + '%';
    var discSpan = document.createElement('span');
    discSpan.innerText = discMsg;
    return discSpan;
}