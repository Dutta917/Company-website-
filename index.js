let listbar = document.getElementById('navbar-shorter');
let listshort = document.getElementById('listforshort');
var boxcontent = document.getElementById('boxcontent');
var buttons = document.getElementsByClassName('bold-text');

listbar.addEventListener('click', () => {
    if(listbar.className == "fa-solid fa-bars"){
        listbar.className= "fa-solid fa-xmark";
        boxcontent.style.display = "flex";
        listshort.style.display = "flex";
    }else{
        listbar.className = "fa-solid fa-bars";
        listshort.style.display = "none";
        boxcontent.style.display = "none";
    }
})

