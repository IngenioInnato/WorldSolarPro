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
  'es': 'POLÍTICAS DE PRIVACIDAD | WORLD SOLAR PRO US',
  'en': 'PRIVACY POLICY | WORLD SOLAR PRO US'
}];
// Title
addLang(TitleText);

// Menu
addLang(MenuLang);

// Sección 1
var S1Text = [{
  'es': 'POLÍTICAS DE PRIVACIDAD',
  'en': 'PRIVACY POLICY'
}, {
  'es': `<strong>I. World Solar Pro US</strong> <br><br><br><br>

  World Solar Pro US es una empresa de energía renovable que se especializa en la venta, instalación y mantenimiento de equipos generadores de energía solar renovable para dueños de hogar y negocios.<br><br>
  
  Como una empresa de responsabilidad limitada registrada en el Estado Libre Asociado de Puerto Rico, World Solar Pro US, LLC. Se encuentra bajo la dirección de su socio mayoritario, la Sr. Francisco Hernández.<br><br>
  
   
  
  <strong>II. Definiciones</strong><br><br><br><br>
  
  Aplicabilidad de Acuerdo – Todos los empelados e interacciones en redes sociales, páginas de internet o sub-páginas de World Solar Pro US están automáticamente sujetas a su análisis por cumplimiento y aplicación del acuerdo presente.<br><br>
  
  Términos de Servicio – El siguiente es un acuerdo legal entre el usuario y World Solar Pro US y su personal.<br><br>
  
  Utilización – Al utilizar o interactuar con la página de World Solar Pro US en Facebook, el usuario indica que ha leído y entendido los términos de uso y políticas de privacidad aquí expuestas, dando su consentimiento de adherirse a todos los términos y condiciones del acuerdo.<br><br>
   
  
  <strong>III. Uso de Plataformas de Facebook & Redes Sociales</strong><br><br><br><br>
  
  La página oficial de Facebook de World Solar Pro US se utilizará exclusivamente para propósitos de mercadeo.<br><br>
  
  Cualquier información adquirida o suministrada que sirva como fuentes para prospectos a través de las páginas solo serán utilizadas por la empresa.<br><br>
  
  El acto de acosar o “trolear” está prohibido en las cuentas de las páginas, sub-páginas o cualquier otra herramienta de medios utilizados por la empresa.<br><br>
  
  El uso de lenguaje sugestivo sexual o material explícito está prohibido en la página electrónica, en las cuentas de redes sociales o en cualquier otro medio utilizado para propósitos de mercadeo.<br><br>
  
  El uso de lenguaje soez, expresiones denigrantes, agresividad o lenguaje sugestivo con tonos raciales y discriminatorios está prohibido a través de las plataformas digitales e impresas.<br><br>
  
   
  
  <strong>IV. Información de Identificación Personal (PII, por sus siglas en inglés)</strong><br><br><br><br>
  
  Toda la información de identificación personal (PII) recolectada, ya sean primer nombre, apellidos, correos electrónicos y/o direcciones se almacenarán de una manera segura por World Solar Pro US, LLC.<br><br>
  
  La información demográfica será canalizada internamente de manera exclusiva y no se compartirá, se comunicará o divulgará en ninguna forma o parcialmente a terceros.<br><br>
  
   
  
  <strong> V. Política de Privacidad</strong><br><br><br><br>
  
  World Solar Pro US, LLC implementa y regularmente mantiene procedimientos razonables y adecuados para la protección de información personal en cumplimiento con las leyes aplicables.<br><br><br><br>
  
   
  
  <strong>VI. Términos & Condiciones</strong><br><br>
  
  World Solar Pro US diligentemente opera su propia página electrónica, cuentas de redes sociales, y marca y materiales de mercadeo de manera protectora cuando se trata de la seguridad de PIIs, por sus siglas en inglés, y de información demográfica.<br><br>
  
  De algún usuario no estar de acuerdo con las políticas, términos y condiciones encontrados aquí, el o ella deberá dar por terminada cualquier tipo de comunicación con World Solar Pro US inmediatamente.<br><br>
  
   
  
  <strong>VII. Jurisdicción</strong><br><br>
  
  Cualquier violación como consecuencia de actividades ilegales de “hackeo”, hurto o diseminación de data almacenada a través de las plataformas digitales de World Solar Pro US serán castigadas por la ley, siendo procesadas y enjuiciadas bajo el marco legal del Estado Libre Asociado de Puerto Rico.`,
  'en': `<strong>I. World Solar Pro US</strong><br><br>

  World Solar Pro US is a renewable energy company that specializes in the sale, installation and maintenance of renewable solar energy generating equipment for home and business owners.<br><br>
  
  As a limited liability company registered in the Commonwealth of Puerto Rico, World Solar Pro US, LLC. It is under the direction of its majority partner, Mr. Francisco Hernández.
  <br><br>
   
  
  <strong>II. Definitions<strong><br><br>
  
  Applicability of Agreement - All employees and interactions on social networks, Internet pages or sub-pages of World Solar Pro US are automatically subject to analysis by compliance and application of this agreement.<br><br>
  
  Terms of Service - The following is a legal agreement between the user and World Solar Pro US and its staff.<br><br>
  
  Use - By using or interacting with the World Solar Pro US Facebook page, the user indicates that he has read and understood the terms of use and privacy policies set forth herein, giving his consent to adhere to all the terms and conditions of the agreement.<br><br>
  
  <strong>III. Use of Facebook Platforms & Social Networks<strong><br><br>
  
  The official World Solar Pro US Facebook page will be used exclusively for marketing purposes.<br><br>
  
  Any information acquired or supplied that serves as sources for prospects through the pages will only be used by the company.<br><br>
  
  The act of harassing or "trolling" is prohibited in the accounts of the pages, sub-pages or any other media tool used by the company.
  <br><br>
  The use of suggestive sexual language or explicit material is prohibited on the website, on social media accounts or in any other medium used for marketing purposes.<br><br>
  
  The use of foul language, demeaning expressions, aggressiveness or suggestive language with racial and discriminatory tones is prohibited through digital and printed platforms.<br><br>
   
  
  <strong>IV. Personally Identifiable Information (PII)<strong><br><br>
  
  All collected Personally Identifiable Information (PII), be it first name, last name, emails and / or addresses will be securely stored by World Solar Pro US, LLC.<br><br>
  
  Demographic information will be channeled internally exclusively and will not be shared, communicated or disclosed in any way or partially to third parties.<br><br>
   
  
  <strong>V. Privacy Policy<strong><br><br>
  
  World Solar Pro US, LLC implements and regularly maintains reasonable and adequate procedures for the protection of personal information in compliance with applicable laws.<br><br>
  
   
  
  <strong>Terms & Conditions<strong><br><br>
  
  World Solar Pro US diligently operates its own website, social media accounts, and brand and marketing materials in a protective manner when it comes to the security of PIIs, and demographic information.<br><br>
  
  If any user does not agree with the policies, terms and conditions found here, he or she must terminate any communication with World Solar Pro US immediately.<br><br>
  
   
  
  <strong>VII. Jurisdiction<strong><br><br>
  
  Any violation as a consequence of illegal activities of "hacking", theft or dissemination of data stored through the World Solar Pro US digital platforms will be punished by law, being prosecuted and prosecuted under the legal framework of the Commonwealth of Puerto Rico.`
}]
addLang(S1Text);
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