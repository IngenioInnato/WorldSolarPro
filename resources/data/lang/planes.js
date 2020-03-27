var lang = [];
// Añadir idioma
function addLang(el) {
  el.forEach(elm => lang.push(elm));
  return true;
}
// =============
// Obtener idioma del navegador
let idioma = window.navigator.languages ? window.navigator.languages[0] : null;
idioma = idioma || window.navigator.language || window.navigator.browserLanguage || window.navigator.userLanguage;
let userLang = idioma;
if (userLang.indexOf('-') !== -1) userLang = userLang.split('-')[0];
if (userLang.indexOf('_') !== -1) userLang = userLang.split('_')[0];
// ============================
const TitleText = [{
  'es': 'PLANES Y SERVICIOS | WORLD SOLAR PRO',
  'en': 'PLANS AND SERVICES | WORLD SOLAR PRO'
}];
// Title
addLang(TitleText);

// Menu
addLang(MenuLang);

// Header
const HeaderText = [{
  'es': 'PLANES Y SERVICIOS Puerto Rico / Illinois / Orlando',
  'en': 'PLANS AND SERVICES Puerto Rico / Illinois / Orlando'
}];
addLang(HeaderText);
// Sección 1 Nuestros Productos
const S1Text = [{
  'es': 'Conoce nuestros productos y servicios somos una empresa con más de 10 años de alto crecimiento ',
  'en': 'Browse through our exclusive lines of products and services. The renewable energy and solar markets have maintained an accelerated growth pace for over 10 years.'
}];
addLang(S1Text)
  // Sección 2 Financiamiento
const S2Text = [{
    'es': 'Financiamiento',
    'en': 'Financing'
  },
  {
    'es': 'A continuación, algunas de las entidades bancarias con las cuales contamos con relaciones estrechas para agilizar el proceso de adquirir un buen financiamiento y de bajo costo para usted durante su transición a fuentes de energías verdes y renovables.',
    'en': 'The following is a list of the banking institutions with which we have established and close-knit relationships with, in order to acquire a low cost and reasonable financing for your transition to green and renewable energies.'
  }
];
addLang(S2Text);

// Sección 3 Productos
const S3Text = [{
  'es': 'Conoce nuestros productos y servicios . Trabajamos con las mejores marcas del mercado',
  'en': 'Browse through our exclusive lines of products and services. Our systems are each installed with the best and latest models available on the market.'
}]
addLang(S3Text);

// Seccion 4 Placas instaladas Dos imágenes de placas instaladas

// Sección 5 Llama ahora
const S5Text = [{
  'es': '¡LLAMA AHORA!',
  'en': ' CALL TODAY FOR MORE INFORMATION!'
}];
addLang(S5Text);

// Footer
addLang(FooterLang);
var html = document.querySelector('html');
var textItem = document.querySelectorAll('[name="text"]');

if (userLang == 'es') {
  textItem.forEach((el, i) => el.innerHTML = lang[i].es);
  html.setAttribute('lang', 'es');
} else if (userLang == 'en') {
  textItem.forEach((el, i) => el.innerHTML = lang[i].en);
  html.setAttribute('lang', 'en');
} else {
  textItem.forEach((el, i) => el.innerHTML = lang[i].en);
  html.setAttribute('lang', 'en');
}

let btnFlag = document.querySelector('#flag');
btnFlag.addEventListener('click', function() {
  var status = btnFlag.dataset.lang;
  btn = btnFlag.querySelector('.flag')
  if (status === 'es') {
    textItem.forEach((el, i) => el.innerHTML = lang[i].en);
    btnFlag.dataset.lang = 'en';
    btn.classList.replace('flag-en', 'flag-es');
    html.setAttribute('lang', 'en');

  } else {
    textItem.forEach((el, i) => el.innerHTML = lang[i].es);
    btnFlag.dataset.lang = 'es';
    btn.classList.replace('flag-es', 'flag-en');
    html.setAttribute('lang', 'es');
  }
});