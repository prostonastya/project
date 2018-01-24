'use strict';

var hidenMenu = document.getElementsByClassName('drop-hidden');

for (var i = 0; i < hidenMenu.length; i++) {
    hidenMenu[i].addEventListener('click', selected);
}

function selected() {
    var selectedVal = event.target.innerText;
    var container = event.target.parentNode.parentNode; //li
    console.log(selectedVal);
    var value = container.getElementsByClassName('value')[0];
    console.log(value);
    value.innerText = selectedVal;

    // var text = container.childNodes[1];
    // text.style.ccsText = 'margin-top: 0px;';
}