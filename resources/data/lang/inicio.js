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
    'es': 'INICIO | WORLD SOLAR PRO',
    'en': 'HOME | WORLD SOLAR PRO'
  }
];  
// Title
addLang(TitleText);

// Menu
addLang(MenuLang);  

// HEADER
var HeaderText = [
  {
    'es': 'Energía Limpia &<br> Renovable a Tu<br> Alcance',
    'en': 'Clean & Renewable<br> Energy Within Your<br> Reach'
  }
];
for(i=1; i <=5; i++) HeaderText.push(HeaderText[0]);
addLang(HeaderText);

// Sección 1 Tarjeta

var S2Text = [
  {
    'es': 'LA ENERGÍA SOLAR PERMITE EL USO FIEL DE SU ELECTRICIDAD, ADEMÁS BRINDA AHORRO Y SEGURIDAD PARA SU HOGAR',
    'en': 'THROUGH SOLAR ENERGY YOU WILL BE ABLE TO HAVE RELIABLE SOURCE OF ENERGY, WHILE PROVIDING SAFETY AND SAVINGS TO YOUR HOME'
  },
  {
    'es': 'Te brindamos más información',
    'en': 'For  more information  click here'
  }
]; 
addLang(S2Text);

const S3Text =[
  {
    'es': '¡Ahorros indiscutibles! Con sobre 30,000 clientes satisfechos entre Puerto Rico, Florida e Illinois, con cada uno de ellos ahorrándose desde un 30% por ciento de su factura de luz en adelante.',
    'en': 'Incomparable savings! With over 30,000 satisfied clients between Puerto Rico, Florida and Illinois, with every single one saving from 30% percent onwards in their utility bill.'
  },
  {
    'es': '¡No más aumentos en su factura eléctrica! Por medio de la instalación de un sistema solar PV renovable puede planificar efectivamente su presupuesto y no sufrirá de más aumentos repentinos por el resto de su vida.',
    'en': "No more increases on your electric bill! By installing a renewable PV solar system, you can effectively plan your budget, and you won't experience any more sudden surges for the rest of your life."
  },
  {
    'es': 'Al instalar un sistema renovable el valor de cualquier propiedad asciende por un 20% por ciento como mínimo, transferible a quien desee comprar la misma ya que se considera como parte de las amenidades de la estructura.',
    'en': 'Through the installation of any renewable energy system the property value surges 20% percent as a minimum, transferable to whoever decides to purchase it because it is considered an infrastructural amenity.'
  },
  {
    'es': 'Ahorre más con un sistema de energía solar-renovable con almacenamiento, abriéndose la posibilidad de nunca más pagar por el servicio eléctrico al desconectarse por completo de la red con una instalación “off-grid”.',
    'en': 'Save even more with a solar-renewable energy system with storage, opening the possibility to never ever pay for the electric service again by completely disconnecting from the network with an “off-grid” installation. '
  },
  {
    'es': 'Aproveche los incentivos federales a través del “Internal Revenue Service” (IRS) antes de que caduquen, pudiendo obtener un retorno de su inversión (ROI, por sus siglas en inglés) de un 26% por ciento del costo del sistema solar PV instalado.',
    'en': 'Take advantage of the federal incentives available through the Internal Revenue Service (IRS) before these come to an end, with the ability to receive a return on your investment (ROI) of 26% percent off the cost of the installed solar PV system.'
  }
];
addLang(S3Text);
// Sección 4 Estadísticas
const S4Text = [
  {
    'es': 'Proyectos residenciales y comerciales certificados.',
    'en': 'Certified and completed residential and commercial projects.',
  },
  {
    'es': 'Profesionales han recibido el adiestramiento y entrenamiento de consultores de energía renovable.',
    'en': 'Professionals have received skills-set coaching and training as renewable energy consultants.',
  },
  {
    'es': 'Aliados y socios de negocio que han agilizado el crecimiento y la penetración de mercado en corto tiempo',
    'en': 'Allies and business partners that have accelerated growth and market penetration in a short period of time, .',
  },
  {
    'es': 'Oficinas regionales desde donde se pueden desprender nuestros equipos de instaladores .',
    'en': 'Regional offices from where our teams of installers and maintenance service providers can be deployed.',
  }
];
addLang(S4Text);
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

let 
btnFlag = document.querySelector('#flag');
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