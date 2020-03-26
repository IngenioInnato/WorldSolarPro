var mobile = document.getElementById('mobile-menu');
var items = [document.querySelector('.nav-item-2'), document.querySelector('.nav-item-3'), document.querySelector('.nav-item-8')];
mobile.addEventListener('click',() => {
  if(mobile.classList.contains('hide')) { 
    mobile.classList.replace('hide', 'show');
    items.forEach(el => {
      el.classList.toggle('translatX-0')
    });
    mobile.classList.add('is-active');
  } else{ 
    mobile.classList.replace('show', 'hide');
    items.forEach(el =>  el.classList.toggle('translatX-0'));
    mobile.classList.remove('is-active');
  }
});

var navigation = document.querySelector('nav');
var header = document.querySelector('header');
var section_one = document.getElementById('S1');
var links = navigation.querySelectorAll('.nav-item-2 > a');
var menuLogo = navigation.querySelector('.nav-item-1 img');
var menuFlag = navigation.querySelector('.nav-item-8 .flag');
var footer = document.querySelector('footer');
var options = {
  // root: document.querySelector('#scrollArea'),
  rootMargin: '-10px',
  // threshold: 1.0
}
var observerSection = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(window.innerWidth > 1199){
      if(entry.isIntersecting)  {
        links.forEach(el => el.style.color = 'var(--white)'); 
        menuLogo.src = './resources/img/logo/logo-light.png';
        menuFlag.style.filter = 'invert(0)';
        navigation.style.background = 'transparent'
      } else {
        links.forEach(el => el.style.color = 'var(--black)');
        menuLogo.src = './resources/img/logo/logo-dark.png';
        menuFlag.style.filter = 'invert(1)';
        navigation.style.background = 'var(--white)'
      }
    }
  })
},options);
observerSection.observe(header);
optionsFooter = [
  {
    threshold: 1.0
  }
]
var observeFooter = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    (entry.isIntersecting)? navigation.style.zIndex = -1 : navigation.style.zIndex = 9999;
  });
},{ threshold:0.5});
observeFooter.observe(footer);