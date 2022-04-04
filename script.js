// query selectors
const menuButton = document.querySelector('.menu-button');
const closeButton = document.querySelector('.close');
const menu= document.querySelector('#menu');
const decoration =document.querySelector('.decoration');
const personName = document.querySelector('.owner');
const links = document.querySelectorAll('.menu-item');

//event listener

menuButton.addEventListener('click',openMenu);
closeButton.addEventListener('click',closeMenu);

//functions
function openMenu() {
    if (menu.style.display === "none") {
        menu.style.display = "block";
        menuButton.style.display="none";
        personName.style.display = "none";
        closeButton.style.display= "block"
    } else {
        menu.style.display = "none";       
    }
 
  }

  function closeMenu() {
      if(menu.style.display==="block"){
          menu.style.display = "none";
          closeButton.style.display="none";
          menuButton.style.display = "block";
          personName.style.display = "block";
      }else {
        menu.style.display = "block";     
    }
  }

 links.forEach(element =>{
     element.onclick = function(event){
         if(event.target){
             menu.style.display= "none";
             menuButton.style.display = "block";
             personName.style.display = "block";
             closeButton.style.display="none";
         }
     }
 })