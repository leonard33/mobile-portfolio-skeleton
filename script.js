const modals = {
  job1: {
    title: 'Profesional Art Printing Data',
    img: './assets/post6.png',
    text: 'A daily section of daily private personalised reads no accounts or sign ups required ha been the industry standups',
    link: '<li class="item">html</li><li class="item">Bootstrap</li><li class="item">css</li><li class="item">Ruby</li>',
  },
  job2: {
    title: 'Data Dashboard Health Care',
    img: './assets/post3.svg',
    text: 'A daily section of daily private personalised reads no accounts or sign ups required ha been the industry standups',
    link: '<li class="item">html</li><li class="item">Bootstrap</li><li class="item">css</li><li class="item">Ruby</li>',
  },
  job3: {
    title: 'Website Portfolio',
    img: './assets/post4.svg',
    text: 'A daily section of daily private personalised reads no accounts or sign ups required ha been the industry standups',
    link: '<li class="item">html</li><li class="item">Bootstrap</li><li class="item">css</li><li class="item">Ruby</li>',
  },
  job4: {
    title: 'Data Dashboard Health Care',
    img: './assets/post1.svg',
    text: 'A daily section of daily private personalised reads no accounts or sign ups required ha been the industry standups',
    link: '<li class="item">html</li><li class="item">Bootstrap</li><li class="item">css</li><li class="item">Ruby</li>',
  },
  job5: {
    title: 'Profesional Art Printing Data',
    img: './assets/post7.svg',
    text: 'A daily section of daily private personalised reads no accounts or sign ups required ha been the industry standups',
    link: '<li class="item">html</li><li class="item">Bootstrap</li><li class="item">css</li><li class="item">Ruby</li>',
  },
  job6: {
    title: 'Website Portfolio',
    img: './assets/post4.svg',
    text: 'A daily section of daily private personalised reads no accounts or sign ups required ha been the industry standups',
    link: '<li class="item">html</li><li class="item">Bootstrap</li><li class="item">css</li><li class="item">Ruby</li>',
  },

};

// projects
const projects = document.querySelector('.projects');

Object.keys(modals).forEach((key) => {
  projects.innerHTML += ` <div class="${key}">
  <h2>${modals[key].title}</h2>
  <div class="info-data">
    <p class="paragraph">
    ${modals[key].text}
    </p>
  </div>
  <ul class="grid-container2">
    <li class="item1"><a href="#">html</a></li>
    <li class="item2"><a href="#">bootstrap</a></li>
    <li class="item3"><a href="#">Ruby</a></li>
  </ul>
  <button type="button" class="job-button" id="${key}">See Project</button>
</div>`;
});

// query selectors
const menuButton = document.querySelector('.menu-button');
const closeButton = document.querySelector('.close');
const menu = document.querySelector('#menu');
const personName = document.querySelector('.owner');
const links = document.querySelectorAll('.menu-item');
const modal = document.querySelector('.modal');
const closeProject = document.querySelector('.close-modal');
const popUp = document.querySelectorAll('.job-button');

// functions
function openMenu() {
  if (menu.style.display === 'none') {
    menu.style.display = 'block';
    menuButton.style.display = 'none';
    personName.style.display = 'none';
    closeButton.style.display = 'block';
  } else {
    menu.style.display = 'none';
  }
}
menuButton.addEventListener('click', openMenu);

function closeMenu() {
  if (menu.style.display === 'block') {
    menu.style.display = 'none';
    closeButton.style.display = 'none';
    menuButton.style.display = 'block';
    personName.style.display = 'block';
  } else {
    menu.style.display = 'block';
  }
}
closeButton.addEventListener('click', closeMenu);

links.forEach((element) => {
  element.onclick = function (event) {
    if (event.target) {
      menu.style.display = 'none';
      menuButton.style.display = 'block';
      personName.style.display = 'block';
      closeButton.style.display = 'none';
    }
  };
});

closeProject.onclick = function (event) {
  if (event.target) {
    modal.style.display = 'none';
  }
};

// const list = document.querySelector('#modal-list-grid');
popUp.forEach((element) => {
  element.onclick = function (event) {
    if (event.target) {
      modal.style.display = 'block';
      const uniqId = event.target.id;
      document.querySelector('.heading-modal').innerHTML = modals[uniqId].title;
      document.querySelector('.post-images').setAttribute('src', modals[uniqId].img);
      document.querySelector('.paragraph').innerHTML = modals[uniqId].text;
      document.querySelector('#modal-list-grid').innerHTML = modals[uniqId].link;
    }
  };
});