var lang = [];
// Añadir idioma
function addLang(el){
  el.forEach(elm => lang.push(elm)); return true;
}
// =============
// Obtener idioma del navegador
let idioma = window.navigator.languages ? window.navigator.languages[0] : null;idioma = idioma || window.navigator.language || window.navigator.browserLanguage || window.navigator.userLanguage;
let userLang = idioma;
if (userLang.indexOf('-') !== -1) userLang = userLang.split('-')[0];
if (userLang.indexOf('_') !== -1) userLang = userLang.split('_')[0];
// ============================
const TitleText = [
  {
    'es': 'POSTULANTES | WORLD SOLAR PRO US',
    'en': 'APPLICANTS | WORLD SOLAR PRO US'
  }
];  
// Title
addLang(TitleText);

// Menu
addLang(MenuLang);  
// HEADER
const HeaderText = [
  {
    'es':'Postulantes',
    'en':'Applicants'
  }
];
addLang(HeaderText);  

// Sección 1
const S1 = [
  {
    'es': 'World Solar Pro US busca reclutar candidatos bilingües inglés-español competentes, comprometidos, motivados, entusiastas para trabajar como consultor / gerente enérgico con al menos un año de experiencia en el área de ventas, disposición para asistir a sesiones de capacitación, con auto propio. y teléfono inteligente ¡Tenemos sucursales en Florida, Chicago y Massachusetts!',
    'en': 'World Solar Pro US is seeking to recruit competent, committed, self motivated , enthusiastic and bilingual English-Spanish candidates to work as an energetic consultant / manager with at least one year of experience in sales area, willingness to attend training sessions, with own car and smart phone.We have branches in Florida, Chicago and Massachusetts!'
  }
];
addLang(S1);

// Sección 2
const S2 = [
  {
    'es': 'Ven y Únete a nuestra familia World Solar Pro',
    'en': 'Come and join our World Solar Pro family'
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
    'es': 'Enviar',
    'en': 'Send'
  }
]
addLang(S2);
// Sección 3
const S3 = [
  {
    'es': '¿Qué esperas? ¡Vamos por más!',
    'en': '¿Qué esperas? ¡Vamos por más!'
  }
]
addLang(S3);

// Footer
addLang(FooterLang);
var html = document.querySelector('html');
var textItem = document.querySelectorAll('[name="text"]');

if(userLang == 'es'){
  textItem.forEach((el, i) => el.innerHTML = lang[i].es);
  html.setAttribute('lang', 'es');
}
else if (userLang == 'en'){
  textItem.forEach((el, i) => el.innerHTML = lang[i].en);
  html.setAttribute('lang', 'en');
}

else{ 
  textItem.forEach((el, i) => el.innerHTML = lang[i].en);
  html.setAttribute('lang', 'en');
}

let btnFlag = document.querySelector('#flag');
btnFlag.addEventListener('click',function(){   
  var status = btnFlag.dataset.lang;
  btn = btnFlag.querySelector('.flag')
  if(status === 'es'){                                    
    textItem.forEach((el, i) => el.innerHTML = lang[i].en);
    btnFlag.dataset.lang = 'en';
    btn.classList.replace('flag-en', 'flag-es');
    html.setAttribute('lang', 'en');

  } else{
    textItem.forEach((el, i) => el.innerHTML = lang[i].es);
    btnFlag.dataset.lang = 'es';
    btn.classList.replace('flag-es', 'flag-en');
    html.setAttribute('lang', 'es');
  }
});