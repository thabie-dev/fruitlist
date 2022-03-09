const fruits = ["Grapes 🍇", "Melon 🍈", "Watermelon 🍉", "Tangerine 🍊", "Lemon 🍋", "Banana 🍌", "Pineapple 🍍", "Mango 🥭", "Red Apple 🍎 "];


 function makeList(){
     let listData =[
         'Grapes 🍇', 
         'Melon 🍈',
         'Watermelon 🍉',
         'Tangerine 🍊', 
         'Lemon 🍋', 
         'Banana 🍌', 
         'Pineapple 🍍',
         'Mango 🥭', 
         'Red Apple 🍎'

     ],

  
      // Make a container element for the list
    listContainer = document.createElement('item'),
    // Make the list
    listElement = document.createElement('fruits'),
    // Set up a loop that goes through the items in listItems one at a time
    numberOfListItems = listData.length,
    listItem,
    i;

    // Add it to the page
    document.getElementsByTagName('item')[0].appendChild(listContainer);
    listContainer.appendChild(listElement);

    for (i = 0; i < numberOfListItems; ++i) {
        // create an item for each one
        listItem = document.createElement('li');

        // Add the item text
        listItem.innerHTML = listData[i];

        // Add listItem to the listElement
        listElement.appendChild(listItem);
    }

    
    //add new fruits
    const list = document.querySelector('ul');
    const input = document.querySelector('input');
    const button= document.querySelector('button');
    button.onclick = function() {
        let myItem =input.value;
        input.value ='';

    const listItem =document.createElement('li');
    const listText =document.createElement('spa');
    const listBtn =document.createElement('button');
    
    listItem.appendChild(listText);
    listText.textContent = myItem;
    listItem.appendChild(listBtn);
    listBtn.textContent = 'delete';
    list.appendChild(listItem);

    listBtn.onclick = function(e){
        list.removeChild(listItem);
    }
    input.focus();
    }   
}

//ascending and descending 
    
function myFunction1(){
  value.sort();
    document.getElementById("values").innerHTML = value;
}

function myFunction2(){
    value.sort();
    value.reverse();
    document.getElementById("values").innerHTML = value;
}


// Usage
makeList();


