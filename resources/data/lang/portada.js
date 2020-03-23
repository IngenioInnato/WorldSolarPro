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

// addLang(HeaderLang);

// Título
const TitleText = [
  {
    'es': 'PORTADA | WORLD SOLAR PRO',
    'en': 'COVER | WORLD SOLAR PRO'
  }
];  
addLang(TitleText);

// Seccion 1 Slogan
const S1Text = [
  {
    'es': 'LET THE SUN PAY THE BILL',
    'en': 'LET THE SUN PAY THE BILL',
  }
];
addLang(S1Text);

// Sección 2 Sucursales
const S2Text = [
  {
    'es': 'Elige tu ciudad',
    'en': 'Choose your city'
  },
  {
    'es': 'Florida',
    'en': 'Florida'
  },
  {
    'es': 'Puerto Rico',
    'en': 'Puerto Rico'
  },
  {
    'es': 'Illinois',
    'en': 'Illinois'
  }
];
addLang(S2Text);

// Sección 3 Cards
const S3Text = [
  {
    'es': '¡Estás a punto de tomar la mejor decisión!',
    'en': 'You are about to make best decision!'
  },
  {
    'es': '¡Ahorre dinero, salve el planeta!',
    'en': 'Save money, save the planet!'
  }
];
addLang(S3Text);

// Sección 4 Form 
const S4Text = [
  {
    'es': '¿Cómo saber si usted cualifica?',
    'en': 'How do you know if you qualify?'
  },
  {
    'es': 'Nombre y Apellido*',
    'en': 'Name and Last name*'
  },
  {
    'es': 'Email*',
    'en': 'Email*'
  },
  {
    'es': 'Número telefónico(con código de área)*',
    'en': 'Telephone number (with area code)'
  },
  {
    'es': 'Dirección*',
    'en': 'Address*'
  },
  {
    'es': 'Ciudad*',
    'en': 'Country*'
  },
  {
    'es': 'Promedio de pago de luz mensual*',
    'en': 'Average monthly electricity payment*'
  },
  {
    'es': 'ENVIAR DATOS',
    'en': 'SEND INFO'
  },
];
addLang(S4Text)
// Sección 6 Testimonios
const S6Text = [
  {
    'es': 'Testimonios',
    'en': 'Testimonies'
  },
  {
    'es': 'Estoy muy contenta con mi sistema solar con baterías nuevo, pero más me agrada que mis instaladores me mantienen al tanto del mantenimiento que tengo que hacerle para que los equipos me duren más.',
    'en': 'I’m extremely happy with my new solar system with batteries, although I’m much more grateful for my installers because they keep me up to date in terms of the maintenance that is needed for my equipment to last.'
  },
  {
    'es': '– Odalie Colón, San Juan, PR',
    'en': '– Odalie Colón, San Juan, PR'
  },
  {
    'es': 'Conocer los equipos que son necesarios para hacer la instalación solar una realidad y retener el apoyo de mis técnicos y consultores, quienes me ayudaron a llenar el papeleo necesario para recibir mi crédito contributivo completo, hizo del proceso uno mucho menos riguroso.',
    'en': 'Getting to know all of the equipment necessary to make my solar installation a reality and having the support of my technician/consultant, who helped me out in filing all of the paper work necessary to receive my tax break in full made the process much less rigorous.'
  },
  {
    'es': '– Rupert Weber, Libertyville, IL',
    'en': '– Rupert Weber, Libertyville, IL'
  },
  {
    'es': 'El proceso con World Solar fue sumamente sencillo, identificamos justo la cantidad de energía que necesitaba de acuerdo a mi auditoría solar y luego pasamos a la fase de identificar cuáles eran los equipos que más me convenían de acuerdo a sus garantías.',
    'en': 'The process with World Solar Pro was extremely simple, as we identified just the right amount of energy that I needed according to my solar audit, subsequently going to the phase of identifying the most convenient equipment according to their warranty packages.'
  },
  {
    'es': '- José Reyes, Orlando FL',
    'en': '- José Reyes, Orlando FL'
  }
];
addLang(S6Text);

// Ejecutar añadimiento de textos
// var btnFlag = document.getElementById('flag'); 
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

// btnFlag.addEventListener('click',function(){   
//   var status = btnFlag.dataset.lang;
//   btn = btnFlag.querySelector('.flag')
//   if(status === 'es'){                                    
//     textItem.forEach((el, i) => el.innerHTML = lang[i].en);
//     btnFlag.dataset.lang = 'en';
//     btn.classList.replace('flag-en', 'flag-es');
//   } else{
//     textItem.forEach((el, i) => el.innerHTML = lang[i].es);
//     btnFlag.dataset.lang = 'es';
//     btn.classList.replace('flag-es', 'flag-en');
//   }
// });
