const dec = document.querySelector('.dec');
const asc = document.querySelector('.asc');
const add = document.querySelector('.add');

var addTxt = document.querySelector('.addTxt')
var outPutLbl = document.querySelector('.outPutLbl');

//const fruits = ["Grapes", "Melon", "Watermelon", "Tangerine", "Lemon", "Banana", "Pineapple", "Mango", "Red Apple"];
var fruits = ["Grapes 🍇", "Melon 🍈", "Watermelon 🍉", "Tangerine 🍊", "Lemon 🍋", "Banana 🍌", "Pineapple 🍍", "Mango 🥭", "Red Apple 🍎 "];

outPutLbl.innerHTML = fruits;



add.addEventListener('click', function () {
    alert(addTxt.value + " fruit added");

    if (addTxt.value.toLowerCase() == "green apple") {
        fruits.push("Green Apple 🍏");
    }

    if (addTxt.value.toLowerCase() == "pear" ) {
        fruits.push("Pear 🍐");
    }
    if (addTxt.value.toLowerCase() == "peach") {
        fruits.push("Peach 🍑");
    }
    if (addTxt.value.toLowerCase() == "cherries") {
        fruits.push("Cherries 🍒");
    }
    if (addTxt.value.toLowerCase() == "strawberry") {
        fruits.push("Strawberry 🍓");
    }
    if (addTxt.value.toLowerCase() == "kiwi fruit") {
        fruits.push("Kiwi Fruit 🥝");
    }
    if (addTxt.value.toLowerCase() == "tomato") {
        fruits.push("Tomato 🍅");
    }

    for (var i = 0; i < fruits.length; i++) {
        console.log(fruits[i]);
    }

    outPutLbl.innerHTML = fruits;
});

asc.addEventListener('click', function () {
    alert("friuts sorted in ascending");
    var ascfruits = fruits.sort();
    outPutLbl.innerHTML = ascfruits;
});

dec.addEventListener('click', function () {
    alert("friuts decending");
    var ascfruits = fruits.sort();
    var decfruits = ascfruits.reverse();
    outPutLbl.innerHTML = decfruits;
});