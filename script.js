//Boton de NAV

var mainListDiv = document.getElementById("mainListDiv"),
    mediaButton = document.getElementById("mediaButton");

mediaButton.onclick = function () {
    
    "use strict";
    
    mainListDiv.classList.toggle("show_list");
    mediaButton.classList.toggle("active");
    
};
const myButton = document.getElementById('myButton');
myButton.addEventListener('click', function() {
  const mySection = document.getElementById('mySection');
  mySection.scrollIntoView({ behavior: 'smooth' });
});








