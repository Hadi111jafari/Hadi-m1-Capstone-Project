const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
  document.querySelector('body').classList.toggle('active');
});
document.querySelectorAll('.nav-link').forEach((n) => n.addEventListener('click', () => {
  hamburger.classList.remove('active');
  navMenu.classList.remove('active');
  document.querySelector('body').classList.toggle('active');
}));
const main = document.querySelector('main');
const clientsConainer = document.querySelector('.clients-container');
main.appendChild('.clients-container');
const clientsData = [
  {
    // box1
    featuredImage: 'images/icon1.png',
    heading4: 'Nawtoz Ali',
    div: 'Professor',
    paragraph: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. At, alias?',
    boxId: 'box1',
  },
  // box2
  {
    featuredImage: 'images/icon1.png',
    heading4: 'Nawtoz Ali',
    div: 'Professor',
    paragraph: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. At, alias?',
    boxId: 'box2',
  },
  // box3
  {
    featuredImage: 'images/icon1.png',
    heading4: 'Nawtoz Ali',
    div: 'Professor',
    paragraph: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. At, alias?',
    boxId: 'box3',
  },
  // box4
  {
    featuredImage: 'images/icon1.png',
    heading4: 'Nawtoz Ali',
    div: 'Professor',
    paragraph: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. At, alias?',
    boxId: 'box4',
  },
  // box5
  {
    featuredImage: 'images/icon1.png',
    heading4: 'Nawtoz Ali',
    div: 'Professor',
    paragraph: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. At, alias?',
    boxId: 'box5',
  },
  // box6
  {
    featuredImage: 'images/icon1.png',
    heading4: 'Nawtoz Ali',
    div: 'Professor',
    paragraph: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. At, alias?',
    boxId: 'box6',
  },
];
clientsConainer.innerHTML`<div class="clients-boxes">
<div class="clients-box">
    <img src="${clientsData.featuredImage}" alt="">
    <div class="clients-box-inner">
        <h4>${clientsData.heading4}</h4>
        <div></div>
        <div class="saparator-line2"></div>
        <p>${clientsData.paragraph}</p>
    </div>
</div>`;

function clients(clientsData) {
  return `<div class="clients-boxes">
    <div class="clients-box">
        <img src="${clientsData.featuredImage}" alt="">
        <div class="clients-box-inner">
            <h4>${clientsData.heading4}</h4>
            <div></div>
            <div class="saparator-line2"></div>
            <p>${clientsData.paragraph}</p>
        </div>
    </div>`;
}