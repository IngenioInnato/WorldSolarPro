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
    'es': 'CONÓCENOS | WORLD SOLAR PRO US',
    'en': 'KNOW US | WORLD SOLAR PRO US'
  }
];  
// Title
addLang(TitleText);
// Menu
addLang(MenuLang);  

// Header
const HeaderText = [
  {
    'es': 'LET THE SUN PAY YOUR BILLS',
    'en': 'LET THE SUN PAY YOUR BILLS'
  }
];
for(i=1; i <= 2; i++) HeaderText.push(HeaderText[0]);
addLang(HeaderText);

// Sección 1 ¿Quiénes somos?
const S1Text = [
  {
    'es': '<span class="text-primary" style="font-size: inherit;">World Solar Pro</span> es una empresa fundada por ingenieros eléctricos y auditores energéticos hace más de una década atrás con el fin de proveer los sistemas solares y renovables más modernos, trayéndolos, instalándolos y ofreciendo el mantenimiento y servicio óptimo.',
    'en': '<span class="text-primary" style="font-size: inherit;">World Solar Pro</span> is an enterprise that was founded by electric engineers and energy auditors over a decade ago with the ultimate goal of providing the most advanced solar and renewable energy systems, bringing, installing and offering the optimal maintenance and service.'
  }
];
addLang(S1Text);

// Sección 2 Misión Visión
const S2Text = [
  {
    'es': '<span class="text-primary" style="font-size: inherit;">Visión: </span>Sistemáticamente ofrecer el mejor valor para nuestros clientes en cuanto a productos de calidad instalados de energía renovable trata, complementando los mismos con un servicio y mantenimiento impecable que aumenten nuestro impacto en los mercados de Puerto Rico y Estados Unidos.',
    'en': '<span class="text-primary" style="font-size: inherit;">Vision: </span>To systematically offer our customers the greatest value in terms of the renewable energy equipment that is installed, complementing these with an impeccable service and maintenance that increases our impact in the Puerto Rican and U.S. markets.'
  },
  {
    'es': '<span class="text-secondary" style="font-size: inherit;">Misión: </span>Rejuvenecer el planeta Tierra por medio del ofrecimiento, instalación y mantenimiento de equipos de energía renovable y paneles fotovoltaicos (PV, por sus siglas en inglés), impactando todos los estratos sociales y reduciendo las huellas de carbono de millones de familias.',
    'en': '<span class="text-secondary" style="font-size: inherit;">Mission: </span>To rejuvenate planet Earth though the offer, installation and maintenance of renewable energy equipment and photovoltaic (PV) panels, impacting the entire social strata, thus reducing the carbon footprint of millions of families.'
  }
];
addLang(S2Text);
// Sección 3 Proyecto Residenciales
const S3Text = [
  {
    'es': 'Sobre 2,500 proyectos residenciales y comerciales certificados y completados entre los diversos mercados.', 
    'en': 'Over 2,500 certified and completed residential and commercial projects in very diverse markets.'
  }
];
addLang(S3Text);
// Sección 4 Profesionales 
const S4Text = [
  {
    'es': 'Más de 1,000 profesionales han recibido el adiestramiento y entrenamiento de consultores de energía renovable, instaladores y de auditores energéticos, asegurando un servicio de primera en todo momento.',
    'en': 'More than 1,000 professionals have received skills-set coaching and training as renewable energy consultants, installers and energy auditors, ensuring first-rate services at every moment.'
  }
];
addLang(S4Text);
// Sección 5 Aliados
const S5Text = [
  {
    'es': '10 aliados y socios de negocio que han agilizado el crecimiento y la penetración de mercado en corto tiempo, haciendo de World Solar Pro la empresa diversa que se adapta a sus necesidades energéticas.',
    'en': '10 allies and business partners that have accelerated growth and market penetration in a short period of time, making World Solar Pro the diverse enterprise that adapts to your energy needs.'
  }
];
addLang(S5Text);
//  Sección 6 Oficinas
const S6Text = [
  {
    'es': 'Contamos con 3 oficinas regionales en 3 jurisdicciones desde donde se pueden desprender nuestros equipos de instaladores y de servicios de mantenimiento para su comodidad y solución inmediata',
    'en': 'Having 3 regional offices in 3 jurisdictions from where our teams of installers and maintenance service providers can be deployed, your convenience and immediate needs resolution is a given.'
  }
];
addLang(S6Text);

// Footer
addLang(FooterLang);
var html = document.querySelector('html');
var textItem = document.querySelectorAll('[name="text"]');

if(userLang == 'es'){
  textItem.forEach((el, i) => el.innerHTML = lang[i].es);
  html.setAttribute('lang', 'es');
  zE(() => $zopim(() => $zopim.livechat.setLanguage('es'))); //Zopim
}
else if (userLang == 'en'){
  textItem.forEach((el, i) => el.innerHTML = lang[i].en);
  html.setAttribute('lang', 'en');
  zE(() => $zopim(() => $zopim.livechat.setLanguage('en'))); //Zopim
}

else{ 
  textItem.forEach((el, i) => el.innerHTML = lang[i].en);
  html.setAttribute('lang', 'en');
  zE(() => $zopim(() => $zopim.livechat.setLanguage('en'))); //Zopim
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
    zE(() => $zopim(() => $zopim.livechat.setLanguage('en'))); //Zopim
  } else{
    textItem.forEach((el, i) => el.innerHTML = lang[i].es);
    btnFlag.dataset.lang = 'es';
    btn.classList.replace('flag-es', 'flag-en');
    html.setAttribute('lang', 'es');
    zE(() => $zopim(() => $zopim.livechat.setLanguage('es'))); //Zopim
  }
});