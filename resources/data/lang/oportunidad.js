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
  'es': 'OPORTUNIDAD | WORLD SOLAR PRO US',
  'en': 'OPPORTUNITY | WORLD SOLAR PRO US'
}];
// Title
addLang(TitleText);

// Menu
addLang(MenuLang);
// Seccion 1
const S1 = [
  {
    'es': 'Prepárate',
    'en': 'Stand Out',
  }, 
  {
    'es': '¡Alcanza tus metas!',
    'en': ' We want to help you become prosperous.',
  },
  {
    'es': 'Únete ahora',
    'en': 'Join Now',
  }
];

addLang(S1);
// Sección 2
const S2 = [
  {
    'es': 'Consultoría Energética Innovadora',
    'en': 'Innovative Energy Consultancy',
  },
  {
    'es': 'Estamos a la vanguardia con las últimas tecnologías del mercado.',
    'en': 'We are at the forefront with the latest technologies on the market.'
  },
  {
    'es': 'Entrenamiento de excelencia',
    'en': 'Best Trainers',
  },
  {
    'es': 'Entrenamiento diario y orientación  de expertos consultores energéticos.',
    'en': 'Daily training from top energy consultants and experts to guide you on your path process.'
  },
];
addLang(S2);
// Seccion 1
const S3 = [
  {
    'es': '¿Qué estás esperando?',
    'en': 'What are you waiting for?',
  }, 
  {
    'es': '¡Decidete ahora!',
    'en': 'Go for it',
  },
  {
    'es': 'Únete',
    'en': 'Join Now',
  }
];
addLang(S3);
// S4
const S4 = [
  {
    'es': 'Grandiosas Comisiones',
    'en': 'Awesome comissions',
  },
  {
    'es': 'Obtén hasta el 70% de las ganancias de la empresa',
    'en': "WSP US Affiliates can earn up to 70% of the company's profit",
  },
]
addLang(S4);
// Sección 5
const S5 = [
  {
    'es': 'Paso 1',
    'en': 'Step 1',
  },
  {
    'es': 'Únete ahora.',
    'en': 'JOIN NOW.',
  },
  {
    'es': 'Paso 2',
    'en': 'Step 2',
  },
  {
    'es': 'Selecciona tu membresia.',
    'en': 'CHOOSE YOUR MEMBERSHIP.',
  },
  {
    'es': 'Paso 3',
    'en': '',
  },
  {
    'es': 'Comienza a entrenarte.',
    'en': 'START YOUR TRAINING.',
  },
];
addLang(S5);
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