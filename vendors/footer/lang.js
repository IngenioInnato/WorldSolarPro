const FooterLang = [{
  es: "pr" == local ? "481 Calle Ing. Fernando Calder Ortiz, San Juan, 00918, Puerto Rico.<br>• (787)-708-6996.<br>" : "illinois" == local ? "3400 W Stonegate Blvd UNIT 101, Arlington Heights, IL 60005.<br>• (224)-342-1031.<br>• (224)-342-1004.<br>" : "georgia" == local ? "WeWork 1155 Perimeter Center West.<br>• (762) 261-00-60.<br>• (762) 261-01-47.<br>" : "20 North Orange Ave. 11th Floor Suite 1100 Orlando, FL 32801.<br>• (786)-796-0453.<br>",
  en: "pr" == local ? "481 Calle Ing. Fernando Calder Ortiz, San Juan, 00918, Puerto Rico.<br>• (787)-708-6996.<br>" : "illinois" == local ? "3400 W Stonegate Blvd UNIT 101, Arlington Heights, IL 60005.<br>• (224)-342-1031.<br>• (224)-342-1004.<br>" : "georgia" == local ? "1155 Perimeter Center W, Atlanta, GA 30338.<br>• (762) 261-00-60.<br>• (762) 261-01-47.<br>" : "20 North Orange Ave. 11th Floor Suite 1100 Orlando, FL 32801.<br>• (786)-796-0453.<br>"
}, {
  es: "E-mail:<br>info@worldsolarpro.com",
  en: "E-mail:<br>info@worldsolarpro.com"
}, {
  es: "SÍGUENOS",
  en: "FOLLOW US"
}, {
  es: "Facebook",
  en: "Facebook"
}, {
  es: "Instagram",
  en: "Instagram"
}, {
  es: "Twitter",
  en: "Twitter"
}, {
  es: "Linkedin",
  en: "Linkedin"
}, {
  es: "Google",
  en: "Google"
}, {
  es: "MENÚ",
  en: "MENU"
}, {
  es: "Inicio",
  en: "Home"
}, {
  es: "Conócenos",
  en: "Know us"
}, {
  es: "Planes Y Servicios",
  en: "Plans and Services"
}, {
  es: "Empleo",
  en: "Carrer"
}, {
  es: "Contacto",
  en: "Contact"
}, {
  es: "MÁS INFORMACIÓN",
  en: "MORE INFORMATION"
}, {
  es: "A continuación, coloque su nombre, correo electrónico y número de teléfono para contactarlo tan pronto sea posible.",
  en: "In the following form, please state your name, email and phone number to contact you as soon as possible."
}, {
  es: "Nombre",
  en: "Name"
}, {
  es: "Email",
  en: "Email"
}, {
  es: "Teléfono",
  en: "Phone Number"
}, {
  es: "SOLICITE UNA LLAMADA",
  en: "REQUEST A CALL"
}, {
  es: "* El envío de su información implica la aceptación de nuestros términos de contacto y seguimiento.",
  en: "* By sending us your information you agree to our terms of contact and follow-up."
}, {
  es: "Políticas de Privacidad ",
  en: "Privacy Policy "
}, {
  es: "WORLD SOLAR PRO US",
  en: "World Solar Pro US"
}, {
  es: "Derechos de Autor ©",
  en: "Copyrighted ©"
}, {
  es: "Ingenio Innato",
  en: "Ingenio Innato"
}];
let googleDirectionHref = document.getElementById("google_direction");
"pr" == local ? googleDirectionHref.href = "https://goo.gl/maps/fSb52ZoMWpPgemh5A" : "illinois" == local ? googleDirectionHref.href = "https://g.page/worldsolarprous?share" : "georgia" == local ? googleDirectionHref.href = "https://goo.gl/maps/7dFjmj74hi1m4VBL7" : googleDirectionHref.href = "https://goo.gl/maps/3wPSJ4XuBsUDkNZu7";