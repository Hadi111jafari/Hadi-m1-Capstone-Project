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

const clientsData = [{
  imgSrc: './images/speaker_01.png',
  imgAlt: 'client1',
  headingh4: 'Ali',
  position: 'Professor',
  paragraph: 'I have been working with Hadi He is smart programmer',
},
{
  imgSrc: './images/speaker_02.png',
  imgAlt: 'client2',
  headingh4: 'Mark',
  position: 'Manager',
  paragraph: 'Hadi is professional developer',
},
{
  imgSrc: './images/speaker_03.png',
  imgAlt: 'client3',
  headingh4: 'Amokonyak',
  position: 'HR Manager',
  paragraph: 'The product he developed for our company is reliable',
},
{
  imgSrc: './images/speaker_04.png',
  imgAlt: 'client4',
  headingh4: 'Carolina',
  position: 'CEO of HMA company',
  paragraph: 'It was my best choice that Hadi build my company website',
},
{
  imgSrc: './images/speaker_05.png',
  imgAlt: 'client5',
  headingh4: 'Jane',
  position: 'HR Manager',
  paragraph: 'I am happy with my website build by Hadi ',
},
{
  imgSrc: './images/speaker_06.png',
  imgAlt: 'client6',
  headingh4: 'Rauf',
  position: 'Doctor',
  paragraph: 'absolutly amazing programmer',
},
];

function generateClientCard(card) {
  return `<div class="clients-container-box">
              <img src="${card.imgSrc}" alt="${card.imgAlt}">
              <div class="clients-box-inner">
                <h4>${card.headingh4}</h4>
                <div class="position">${card.position}</div>
                <div class="space-line"></div>
                <p>${card.paragraph}</p>
            </div>
          </div>`;
}

const generatedCard = clientsData.map((card) => {
  const cardContainer = document.createElement('div');
  cardContainer.innerHTML = generateClientCard(card);
  return cardContainer;
});

const clientsContainerBoxes = document.querySelector('.clients-container-boxes');

for (let i = 0; i < clientsData.length; i += 1) {
  clientsContainerBoxes.appendChild(generatedCard[i]);
}