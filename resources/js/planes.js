var carouselFinanciadoras = document.querySelector('.carousel--financiadoras');
var carousel = new Carousel(carouselFinanciadoras, true, false, [1,1,1,3,3]);

var carouelProductos = document.querySelector('.carousel--productos');
var carousel = new Carousel(carouelProductos,true, false, [1, 1, 1, 3, 3]);
observerSection.disconnect()

var S1 = document.getElementById('S1');
var observerS1 = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(window.innerWidth > 1199){
      if(entry.isIntersecting)  {
        links.forEach(el => el.style.color = 'var(--white)'); 
        menuLogo.src = './resources/img/logo/logo-light.png';
        menuFlag.style.filter = 'invert(0)';
      } else {
        links.forEach(el => el.style.color = 'var(--black)');
        menuLogo.src = './resources/img/logo/logo-dark.png';
        menuFlag.style.filter = 'invert(1)';
      }
    }
  })
},{rootMargin: '0 0 -80px 0',threshold: [0, 0.25, 0.5, 0.75, 1]});
observerS1.observe(S1);