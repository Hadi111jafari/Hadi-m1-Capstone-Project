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
const newLocal = `       
<h2>Clients Endoursments</h2>
<div class="saparator-line"></div>
<div class="clients-container-boxes">
    <div class="row show">
        <div class="clients-container-box">
            <img src="./images/speaker_01.png" alt="client">
            <div class="clients-box-inner">
                <h4>Ali</h4>
                <div>professor</div>
                <div class="space-line"></div>
                <p>I have been working with Hadi He is smart programmer</p>
            </div>
        </div>
        <div class="clients-container-box">
            <img src="./images/speaker_02.png" alt="client">
            <div class="clients-box-inner">
                <h4>mark</h4>
                <div>manager</div>
                <div class="space-line"></div>
                <p>Hadi is pofessional developer</p>
            </div>
        </div>
    </div>
    <div class="row hidden-row">
        <div class="clients-container-box">
            <img src="./images/speaker_03.png" alt="client">
            <div class="clients-box-inner">
                <h4>Amokon</h4>
                <div>Hr manager</div>
                <div class="space-line"></div>
                <p>The product he developed for our company is reliable</p>
            </div>
        </div>
        <div class="clients-container-box">
            <img src="./images/speaker_04.png" alt="client">
            <div class="clients-box-inner">
                <h4>Corilena</h4>
                <div>Ceo of HMA company</div>
                <div class="space-line"></div>
                <p>It was my best choice that Hadi build my company website</p>
            </div>
        </div>
    </div>
    <div class="row hidden-row">
        <div class="clients-container-box">
            <img src="./images/speaker_05.png" alt="client">
            <div class="clients-box-inner">
                <h4>Jane</h4>
                <div>HR manager</div>
                <div class="space-line"></div>
                <p>I am happy with my website build by Hadi </p>
            </div>
        </div>
        <div class="clients-container-box">
            <img src="./images/speaker_06.png" alt="client">
            <div class="clients-box-inner">
                <h4>Rauf</h4>
                <div>Doctor</div>
                <div class="space-line"></div>
                <p>absolutly amazing programmer</p>
            </div>
        </div>
    </div>
    <button class="default more">MORE <img src="./images/down.png"></button>
</div>`;
const markup = newLocal;

const clientsContainer = document.querySelector('.clients-container');
clientsContainer.innerHTML = markup;
const btnMore = document.querySelector('.more');
const hiddenRows = document.querySelector('.hidden-row');

btnMore.addEventListener('click', () => {
  for (let i = 0; i < hiddenRows.length; i += 1) {
    hiddenRows[i].classList.add('show');
    btnMore.classList.remove('more');
  }
});
