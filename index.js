const dec = document.querySelector('.dec');
const asc = document.querySelector('.asc');
const show = document.querySelector('.show');

var outPutLbl = document.querySelector('.outPutLbl');

const fruits = ["Grapes 🍇", "Melon 🍈", "Watermelon 🍉", "Tangerine 🍊", "Lemon 🍋", "Banana 🍌", "Pineapple 🍍", "Mango 🥭", "Red Apple 🍎 "];

//show fruits 
show.addEventListener('click', function () {
    alert("friuts added");
    outPutLbl.innerHTML = fruits;
});
 //ascending 
asc.addEventListener('click', function () {
    alert("friuts sorted in ascending");
    var ascfruits = fruits.sort();
    outPutLbl.innerHTML = ascfruits;
});
//descending 
dec.addEventListener('click', function () {
    alert("friuts decending");
    var ascfruits = fruits.sort();
    var decfruits = ascfruits.reverse();
    outPutLbl.innerHTML = decfruits;
});
 