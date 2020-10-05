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
  // {
  //   'es': 'DIRECTOR DE VENTAS, PR',
  //   'en': 'PR SALES DIRECTOR'
  // },
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
    'es': 'Teléfono',
    'en': 'Phone'
  },
  {
    'es': 'Email',
    'en': 'Email'
  },
  {
    'es': 'Dirección',
    'en': 'Address'
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
  // {
  //   'es': 'Illinois: careeril@worldsolarpro.com',
  //   'en': 'Illinois: careeril@worldsolarpro.com '
  // },
  // {
  //   'es': 'Florida: careerfl@worldsolarpro.com',
  //   'en': 'Florida: careerfl@worldsolarpro.com'
  // },
  // {
  //   'es': 'Puerto Rico: reclutamiento@worldsolarpro.com',
  //   'en': 'Puerto Rico: reclutamiento@worldsolarpro.com'
  // },
  // {
  //   'es': 'Thank you so much and we will be contacting you soon!',
  //   'en': 'Thank you so much and we will be contacting you soon!'
  // }
];
let S3TextPr = {
  'es': 'Puerto Rico: reclutamiento@worldsolarpro.com',
  'en': 'Puerto Rico: reclutamiento@worldsolarpro.com'
}, S3TextIl = {
  'es': 'Illinois: careeril@worldsolarpro.com',
  'en': 'Illinois: careeril@worldsolarpro.com '
}, S3TextFl =   {
  'es': 'Florida: careerfl@worldsolarpro.com',
  'en': 'Florida: careerfl@worldsolarpro.com'
};
(local == "pr") ? S3Text.push(S3TextPr) : (local == "illinois") ? S3Text.push(S3TextIl) : S3Text.push(S3TextFl);
S3Text.push({
  'es': '¡MUCHAS GRACIAS Y NOS CONTACTAREMOS PRONTO!',
  'en': 'Thank you so much and we will be contacting you soon!'
});
addLang(S3Text);
// Sección 6 Testimonios
const S6Text = [
  {
    'es': 'Testimonios',
    'en': 'Testimonies'
  },
  {
    'es': 'Me siento muy contenta porque luego de una semana recibí  aproximadamente $2,000 por haber ingresado al área de consultoría energética con World Solar Pro.',
    'en': 'I feel very happy because after a week I received approximately $2,000 for having entered the energy consulting area with World Solar Pro.'
  },
  {
    'es': '– NANCY MALDONADO',
    'en': '– NANCY MALDONADO'
  },
  {
    'es': 'Trabajar desde casa era mi ilusión y con World Solar Pro US este sueño se hizo realidad. Cada semana recibo un promedio de $33,000 en 6 horas y tres cierres por mi desempeño como consultora energética.',
    'en': 'Working from home was my dream and with World Solar Pro US this dream came true. Each week I received an average of $33,000 in 6 hours and three closings for my performance as an energy consultant.'
  },
  {
    'es': '– JOSÉ MARCANO',
    'en': '– JOSÉ MARCANO'
  },
  {
    'es': 'Estuve buscando un empleo para trabajar remoto y World Solar Pro US me brindó la oportunidad de comenzar la carrera de consultoría energética con la cual hago casi $18,000 en un día!',
    'en': 'I was looking for a job to work remotely and World Solar Pro US gave me the opportunity to start a career in energy consulting with which I make almost $18,000 in one day!'
  },
  {
    'es': '- DIOSBELI CARDONA',
    'en': '- DIOSBELI CARDONA'
  },
];
addLang(S6Text);
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