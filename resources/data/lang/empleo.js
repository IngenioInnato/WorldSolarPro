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
  'es': 'EMPLEO | WORLD SOLAR PRO US',
  'en': 'CAREER | WORLD SOLAR PRO US'
}];
// Title
addLang(TitleText);

// Menu
addLang(MenuLang);
// Header
const HeaderText = [
  // {
  //   'es': 'Fundador <br> y CEO',
  //   'en': 'Founder and CEO'
  // },
  // {
  //   'es': 'Directora <br> de Operaciones',
  //   'en': 'Operational Director'
  // },
  {
    'es': 'Directora de Ventas, US',
    'en': 'US Regional Sales Director'
  },
  {
    'es': 'DIRECTOR DE VENTAS, US',
    'en': 'US Regional Sales Director'
  },
  {
    'es': 'DIRECTORA DE VENTAS de ILLINOIS, US',
    'en': 'ILLINOIS Sales Director'
  },
  {
    'es': 'DIRECTOR DE VENTAS de ILLINOIS, US',
    'en': 'Illinois Sales Director'
  },
  {
    'es': 'Consultor Energético',
    'en': 'Energy Consultant'
  },
  {
    'es': 'Manager WSP',
    'en': 'WSP Manager'
  },
  // {
  //   'es': 'Consultor Energético',
  //   'en': 'Team League'
  // },
  {
    'es': 'Team League',
    'en': 'Team League'
  },
  {
    'es': 'DIRECTOR DE VENTAS, PR',
    'en': 'PR SALES DIRECTOR'
  },
];
addLang(HeaderText)

// Sección 2
const S1Text = [{
  'es': 'Siempre nos encontramos evaluando personal nuevo para nuestra empresa, la cual ya se encuentra en los mercados de Puerto Rico y en los estados de Florida e Illinois. Por tal razón, si reside en cualquiera de estas jurisdicciones o en las cercanías de, por favor someta su resume actualizado con todas sus experiencias de trabajo, incluyendo las certificaciones relacionadas a la industria solar, como por ejemplo de electricista, eficiencia energética, ingeniería, diseño y de instalador solar.',
  'en': 'We are always considering new personnel for our company, which is already operating in the markets of Puerto Rico and the states of Florida and Illinois. For this reason, if you reside within or nearby any of these jurisdictions, please submit your updated resume with all of your past job experiences, including solar industry-related certifications such as electrician, energy efficiency, engineering, design and solar installer for example.'
}];

const S2Text = [{
    'es': '¡Forma Parte de Nuestro Equipo!',
    'en': 'Join Our Team !'
  },
  {
    'es': 'Nombre',
    'en': 'Name'
  },
  {
    'es': 'Apellido',
    'en': 'Last Name'
  },
  {
    'es': 'Email',
    'en': 'Email'
  },
  {
    'es': 'Ciudad',
    'en': 'City'
  },
  {
    'es': 'Número Telefónico',
    'en': 'Phone Number'
  },
  {
    'es': 'ENVIAR',
    'en': 'SEND'
  }
];
addLang(S2Text);

// Sección 3 Información
const S3Text = [{
    'es': 'Siempre nos encontramos evaluando personal nuevo para nuestra empresa, la cual ya se encuentra en los mercados de Puerto Rico y en los estados de Florida e Illinois. Por tal razón, si reside en cualquiera de estas jurisdicciones o en las cercanías de, por favor someta su resume actualizado con todas sus experiencias de trabajo, incluyendo las certificaciones relacionadas a la industria solar, como por ejemplo de electricista, eficiencia energética, ingeniería, diseño y de instalador solar.',
    'en': 'We are always considering new personnel for our company, which is already operating in the markets of Puerto Rico and the states of Florida and Illinois. For this reason, if you reside within or nearby any of these jurisdictions, please submit your updated resume with all of your past job experiences, including solar industry-related certifications such as electrician, energy efficiency, engineering, design and solar installer for example.'
  },
  {
    'es': 'Envia tu CV a:',
    'en': 'Send us your resume to:'
  },
  {
    'es': 'Illinois: careeril@worldsolarpro.com',
    'en': 'Illinois: careeril@worldsolarpro.com '
  },
  {
    'es': 'Florida: careerfl@worldsolarpro.com',
    'en': 'Florida: careerfl@worldsolarpro.com'
  },
  {
    'es': 'Puerto Rico: reclutamiento@worldsolarpro.com',
    'en': 'Puerto Rico: reclutamiento@worldsolarpro.com'
  },
  {
    'es': 'Thank you so much and we will be contacting you soon!',
    'en': 'Thank you so much and we will be contacting you soon!'
  }
];
addLang(S3Text);

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