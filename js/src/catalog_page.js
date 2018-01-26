const hidenMenu = document.getElementsByClassName('drop-hidden');
const mainCatalog =  document.getElementsByClassName('row')[1];
// filter catalog item by category and fashion:
const filteredCatalog = _.filter(window.catalog,{'category': 'women', 'fashion': 'Casual style'});
// sort by date:
var sortDateOld = _.sortBy(filteredCatalog, ['dateAdded']);
var sortDateNew = [];//(newest first)

for (let i=0;i < sortDateOld.length; i++){
    sortDateNew.unshift(sortDateOld[i]);
}
console.log(sortDateNew);

// droppdown
for(let i=0; i<hidenMenu.length; i++){
    hidenMenu[i].addEventListener('click', selected)
}

function selected(event){    
    var selectedVal = event.target.innerText;
    var container = event.target.parentNode.parentNode;//li    
    var value = container.getElementsByClassName('value')[0];    
    if(selectedVal == 'Not selected'){
        value.innerText = '';    
    } else{
        value.innerText = selectedVal;
    }      
}

// catalog item

for (let i=0; i< sortDateNew.length; i++){
    let item = document.createElement('div');
    item.className = 'item';

    let img = document.createElement('img');
    img.src = sortDateNew[i].thumbnail;
    img.alt = 'item-arrivals';
    item.appendChild(img);

    let hover = document.createElement('div');
    hover.className = 'text-hover';
    let link = document.createElement('a');
    link.href = 'item.html';
    link.innerText = 'View item';    
    hover.appendChild(link);
    item.appendChild(hover);

    let itemTitle = document.createElement('p');
    itemTitle.innerText = sortDateNew[i].title;
    item.appendChild(itemTitle);

    let price = document.createElement('span');
    if (sortDateNew[i].discountedPrice !== null){
        price.innerText = `£${sortDateNew[i].discountedPrice}`;

        if(sortDateNew[i].price !== sortDateNew[i].discountedPrice){            
            item.appendChild(calcDiscount(sortDateNew[i].price, sortDateNew[i].discountedPrice));            
        }         

    } else {
        price.innerText = sortDateNew[i].placeholder;
        price.classList.add('more');
    }
    if (sortDateNew[i].hasNew == true){
        price.classList.add('new-arrivals');
    }

    item.appendChild(price);
    mainCatalog.appendChild(item);
}

function calcDiscount(price, discPrice){    
    let discMsg = `£${price} - ${100 - ((discPrice * 100) / price)}%`
    let discSpan = document.createElement('span');
    discSpan.innerText = discMsg;
    return discSpan;
}


