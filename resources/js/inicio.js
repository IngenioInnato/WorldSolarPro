// Activar carouseles
var carouselHeader = document.querySelector('.carousel--header');
var carousel = new Carousel(carouselHeader, true, false, [1,1,1,1,1]);

var carouselEquipos = document.querySelector('.carousel--productos');
var carousel = new Carousel(carouselEquipos, true, false, [1, 1, 1, 3, 3])

var carouselTestimonios = document.querySelector('.carousel--testimonios');
var carousel = new Carousel(carouselTestimonios, true, false, [1,1,1,1,1]);
// ==================

// Contador
var S4 = document.getElementById('S4');
var counterValue = [2500, 1000, 10, 3];
var observeS4 = new IntersectionObserver(entries => {
  entries.forEach((entry, i) => {
    if(entry.isIntersecting){
      // links.forEach(el => el.style.color = 'var(--white)'); 
      // menuLogo.src = './resources/img/logo/logo-light.png';
      // menuFlag.style.filter = 'invert(0)';
      for(var i = 1; i <= 4; i++){
        var counter = `.counter-${i}`;
        var setNumbers;
        (i == 1) ? setNumbers = new Counter(counter, 2000, counterValue[i - 1], '1000'):
        (i == 2) ?  setNumbers = new Counter(counter, 500, counterValue[i - 1], '1000'):
        setNumbers = new Counter(counter, 0, counterValue[i - 1], '1000');
      }
    } 
    // else{
      //   links.forEach(el => el.style.color = 'var(--black)');
      //   menuLogo.src = './resources/img/logo/logo-dark.png';
      //   menuFlag.style.filter = 'invert(1)';
      // }
    });
  }, {rootMargin: '-10px'})
  observeS4.observe(S4);
  // ========
  // Boton Sección 2
var botonS2 = document.querySelector('#S2 .btn-wsp');
var atribute = botonS2.getAttribute("href") + '?location=' + local;
botonS2.setAttribute('href', atribute);