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
    'es': 'CONTACTO | WORLD SOLAR PRO',
    'en': 'CONTACT | WORLD SOLAR PRO'
  }
  // Title
];  

addLang(TitleText);
// Menu
addLang(MenuLang);  

// Header
const HeaderText = [
  {
    'es': 'LET THE SUN PAY YOUR BILL',
    'en': 'LET THE SUN PAY YOUR BILL'
  }
];
addLang(HeaderText);
// Sección dos formulario
const S2Text = [
  {
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