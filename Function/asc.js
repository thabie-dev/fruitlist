module. exports =function asc(fruits){
asc.addEventListener('click', function () {
    alert("friuts sorted in ascending");
    var ascfruits = fruits.sort();
    outPutLbl.innerHTML = ascfruits;
});
}   