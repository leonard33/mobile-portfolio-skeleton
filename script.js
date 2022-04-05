const modals = {
    job1: {
        title: "Profesional Art Printing Data",
        img: "./assets/post6.png",
        text: "A daily section of daily private personalised reads no accounts or sign ups required ha been the industry standups",
        link: "htttp/microverse.com",
    },
    job2: {
       title: "Profesional Art Printing Data",
        img: "./assets/post3.svg",
        text: "A daily section of daily private personalised reads no accounts or sign ups required ha been the industry standups",
        link: "htttp/microverse.com",
   },
   job3: {
       title: "Profesional Art Printing Data",
        img: "./assets/post4.svg",
        text: "A daily section of daily private personalised reads no accounts or sign ups required ha been the industry standups",
        link: "htttp/microverse.com",
   },
   job4: {
       title: "Profesional Art Printing Data",
        img: "./assets/post1.svg",
        text: "A daily section of daily private personalised reads no accounts or sign ups required ha been the industry standups",
        link: "htttp/microverse.com",
   },
   job5: {
       title: "Profesional Art Printing Data",
       img: "./assets/post7.svg",
       text: "A daily section of daily private personalised reads no accounts or sign ups required ha been the industry standups",
       link: "htttp/microverse.com",
   },
   job6: {
      title: "Profesional Art Printing Data",
      img: "./assets/post4.svg",
      text: "A daily section of daily private personalised reads no accounts or sign ups required ha been the industry standups",
      link: "htttp/microverse.com",
  },

}

// query selectors
const menuButton = document.querySelector('.menu-button');
const closeButton = document.querySelector('.close');
const menu= document.querySelector('#menu');
const decoration =document.querySelector('.decoration');
const personName = document.querySelector('.owner');
const links = document.querySelectorAll('.menu-item');
const modal = document.querySelector('.modal');
const openProject = document.querySelector('#open-modal-projects');
const closeProject =document.querySelector('.close-modal');
//const modalTitle = document.querySelector('.modal-posttitle h3');
const modalImg = document.querySelector('.post-images');
const popUp = document.querySelectorAll('.job-button');

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

closeProject.onclick = function(event){
    if(event.target){
        modal.style.display="none";
    }
}

popUp.forEach(element => {
    element.onclick = function(event){
        if(event.target){
            modal.style.display="block";
            let uniqId = event.target.id;
            document.querySelector('.heading-modal').innerHTML = modals[uniqId].title;
            document.querySelector('.post-images').setAttribute('src', modals[uniqId].img);
            document.querySelector('.paragraph').innerHTML = modals[uniqId].text;
        }
    }
});
