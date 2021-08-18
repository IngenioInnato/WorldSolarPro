function createCarousel(){
  var carouselFinanciadoras = document.querySelector('.carousel--financiadoras');
  var carousel = new Carousel(carouselFinanciadoras, true, false, [1,1,1,3,3]);
  return carousel;
}

var carouelProductos = document.querySelector('.carousel--productos');
var carousel = new Carousel(carouelProductos,true, false, [1, 1, 1, 3, 3]);
var usaEl = document.querySelectorAll('.f-usa');
var prEl = document.querySelectorAll('.f-pr');
var plansLocation = document.getElementById('location');
switch (local) {
  case 'pr':
    plansLocation.innerHTML = 'Puerto Rico';
    usaEl.forEach(el => el.remove());
    var carousel = createCarousel();
    break;
    case 'illinois':
    plansLocation.innerHTML = 'Illinois';
    prEl.forEach(el => el.remove());
    var carousel = createCarousel();
    break;
    case 'florida':
      plansLocation.innerHTML = 'Florida';
      prEl.forEach(el => el.remove());
      var carousel = createCarousel();
    break;
    case 'georgia':
      plansLocation.innerHTML = 'Georgia';
      prEl.forEach(el => el.remove());
      var carousel = createCarousel();
    break;
  default:
    window.location.href = './';
  break;
}
// observerSection.disconnect();

// var observerSection2 = new IntersectionObserver(entries => {
//   entries.forEach(entry => {
//     if(window.innerWidth > 1199){
//       if(entry.isIntersecting)  {
//         links.forEach(el => el.style.color = 'var(--white)'); 
//         menuLogo.src = './resources/img/logo/logo-light.png';
//         menuFlag.style.filter = 'invert(0)';
//       }
//     }
//   })
// });
// observerSection2.observe(header);

// var S1 = document.getElementById('S1');
// var observerS1 = new IntersectionObserver(entries => {
//   entries.forEach(entry => {
//     if(window.innerWidth > 1199){
//       if(entry.isIntersecting)  {
//         links.forEach(el => el.style.color = 'var(--white)'); 
//         menuLogo.src = './resources/img/logo/logo-light.png';
//         menuFlag.style.filter = 'invert(0)';
//       } else if((!entry.isIntersecting) && (scrollY != '0')){
//         links.forEach(el => el.style.color = 'var(--black)');
//         menuLogo.src = './resources/img/logo/logo-dark.png';
//         menuFlag.style.filter = 'invert(1)';
//       }
//     }
//   })
// },{rootMargin: '-80px'});
// observerS1.observe(S1);