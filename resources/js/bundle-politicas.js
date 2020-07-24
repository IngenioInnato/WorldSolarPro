// Modernizr
!function(e,n,A){function o(e,n){return typeof e===n}function t(){var e,n,A,t,a,i,l;for(var f in r)if(r.hasOwnProperty(f)){if(e=[],n=r[f],n.name&&(e.push(n.name.toLowerCase()),n.options&&n.options.aliases&&n.options.aliases.length))for(A=0;A<n.options.aliases.length;A++)e.push(n.options.aliases[A].toLowerCase());for(t=o(n.fn,"function")?n.fn():n.fn,a=0;a<e.length;a++)i=e[a],l=i.split("."),1===l.length?Modernizr[l[0]]=t:(!Modernizr[l[0]]||Modernizr[l[0]]instanceof Boolean||(Modernizr[l[0]]=new Boolean(Modernizr[l[0]])),Modernizr[l[0]][l[1]]=t),s.push((t?"":"no-")+l.join("-"))}}function a(e){var n=u.className,A=Modernizr._config.classPrefix||"";if(c&&(n=n.baseVal),Modernizr._config.enableJSClass){var o=new RegExp("(^|\\s)"+A+"no-js(\\s|$)");n=n.replace(o,"$1"+A+"js$2")}Modernizr._config.enableClasses&&(n+=" "+A+e.join(" "+A),c?u.className.baseVal=n:u.className=n)}function i(e,n){if("object"==typeof e)for(var A in e)f(e,A)&&i(A,e[A]);else{e=e.toLowerCase();var o=e.split("."),t=Modernizr[o[0]];if(2==o.length&&(t=t[o[1]]),"undefined"!=typeof t)return Modernizr;n="function"==typeof n?n():n,1==o.length?Modernizr[o[0]]=n:(!Modernizr[o[0]]||Modernizr[o[0]]instanceof Boolean||(Modernizr[o[0]]=new Boolean(Modernizr[o[0]])),Modernizr[o[0]][o[1]]=n),a([(n&&0!=n?"":"no-")+o.join("-")]),Modernizr._trigger(e,n)}return Modernizr}var s=[],r=[],l={_version:"3.6.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,n){var A=this;setTimeout(function(){n(A[e])},0)},addTest:function(e,n,A){r.push({name:e,fn:n,options:A})},addAsyncTest:function(e){r.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=l,Modernizr=new Modernizr;var f,u=n.documentElement,c="svg"===u.nodeName.toLowerCase();!function(){var e={}.hasOwnProperty;f=o(e,"undefined")||o(e.call,"undefined")?function(e,n){return n in e&&o(e.constructor.prototype[n],"undefined")}:function(n,A){return e.call(n,A)}}(),l._l={},l.on=function(e,n){this._l[e]||(this._l[e]=[]),this._l[e].push(n),Modernizr.hasOwnProperty(e)&&setTimeout(function(){Modernizr._trigger(e,Modernizr[e])},0)},l._trigger=function(e,n){if(this._l[e]){var A=this._l[e];setTimeout(function(){var e,o;for(e=0;e<A.length;e++)(o=A[e])(n)},0),delete this._l[e]}},Modernizr._q.push(function(){l.addTest=i}),Modernizr.addAsyncTest(function(){function e(e,n,A){function o(n){var o=n&&"load"===n.type?1==t.width:!1,a="webp"===e;i(e,a&&o?new Boolean(o):o),A&&A(n)}var t=new Image;t.onerror=o,t.onload=o,t.src=n}var n=[{uri:"data:image/webp;base64,UklGRiQAAABXRUJQVlA4IBgAAAAwAQCdASoBAAEAAwA0JaQAA3AA/vuUAAA=",name:"webp"},{uri:"data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAABBxAR/Q9ERP8DAABWUDggGAAAADABAJ0BKgEAAQADADQlpAADcAD++/1QAA==",name:"webp.alpha"},{uri:"data:image/webp;base64,UklGRlIAAABXRUJQVlA4WAoAAAASAAAAAAAAAAAAQU5JTQYAAAD/////AABBTk1GJgAAAAAAAAAAAAAAAAAAAGQAAABWUDhMDQAAAC8AAAAQBxAREYiI/gcA",name:"webp.animation"},{uri:"data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA=",name:"webp.lossless"}],A=n.shift();e(A.name,A.uri,function(A){if(A&&"load"===A.type)for(var o=0;o<n.length;o++)e(n[o].name,n[o].uri)})}),t(),a(s),delete l.addTest,delete l.addAsyncTest;for(var p=0;p<Modernizr._q.length;p++)Modernizr._q[p]();e.Modernizr=Modernizr}(window,document);
// =========
// Intersection Observer
(function(){"use strict";if(typeof window!=="object"){return}if("IntersectionObserver"in window&&"IntersectionObserverEntry"in window&&"intersectionRatio"in window.IntersectionObserverEntry.prototype){if(!("isIntersecting"in window.IntersectionObserverEntry.prototype)){Object.defineProperty(window.IntersectionObserverEntry.prototype,"isIntersecting",{get:function(){return this.intersectionRatio>0}})}return}var document=window.document;var registry=[];function IntersectionObserverEntry(entry){this.time=entry.time;this.target=entry.target;this.rootBounds=entry.rootBounds;this.boundingClientRect=entry.boundingClientRect;this.intersectionRect=entry.intersectionRect||getEmptyRect();this.isIntersecting=!!entry.intersectionRect;var targetRect=this.boundingClientRect;var targetArea=targetRect.width*targetRect.height;var intersectionRect=this.intersectionRect;var intersectionArea=intersectionRect.width*intersectionRect.height;if(targetArea){this.intersectionRatio=Number((intersectionArea/targetArea).toFixed(4))}else{this.intersectionRatio=this.isIntersecting?1:0}}function IntersectionObserver(callback,opt_options){var options=opt_options||{};if(typeof callback!="function"){throw new Error("callback must be a function")}if(options.root&&options.root.nodeType!=1){throw new Error("root must be an Element")}this._checkForIntersections=throttle(this._checkForIntersections.bind(this),this.THROTTLE_TIMEOUT);this._callback=callback;this._observationTargets=[];this._queuedEntries=[];this._rootMarginValues=this._parseRootMargin(options.rootMargin);this.thresholds=this._initThresholds(options.threshold);this.root=options.root||null;this.rootMargin=this._rootMarginValues.map(function(margin){return margin.value+margin.unit}).join(" ")}IntersectionObserver.prototype.THROTTLE_TIMEOUT=100;IntersectionObserver.prototype.POLL_INTERVAL=null;IntersectionObserver.prototype.USE_MUTATION_OBSERVER=true;IntersectionObserver.prototype.observe=function(target){var isTargetAlreadyObserved=this._observationTargets.some(function(item){return item.element==target});if(isTargetAlreadyObserved){return}if(!(target&&target.nodeType==1)){throw new Error("target must be an Element")}this._registerInstance();this._observationTargets.push({element:target,entry:null});this._monitorIntersections();this._checkForIntersections()};IntersectionObserver.prototype.unobserve=function(target){this._observationTargets=this._observationTargets.filter(function(item){return item.element!=target});if(!this._observationTargets.length){this._unmonitorIntersections();this._unregisterInstance()}};IntersectionObserver.prototype.disconnect=function(){this._observationTargets=[];this._unmonitorIntersections();this._unregisterInstance()};IntersectionObserver.prototype.takeRecords=function(){var records=this._queuedEntries.slice();this._queuedEntries=[];return records};IntersectionObserver.prototype._initThresholds=function(opt_threshold){var threshold=opt_threshold||[0];if(!Array.isArray(threshold))threshold=[threshold];return threshold.sort().filter(function(t,i,a){if(typeof t!="number"||isNaN(t)||t<0||t>1){throw new Error("threshold must be a number between 0 and 1 inclusively")}return t!==a[i-1]})};IntersectionObserver.prototype._parseRootMargin=function(opt_rootMargin){var marginString=opt_rootMargin||"0px";var margins=marginString.split(/\s+/).map(function(margin){var parts=/^(-?\d*\.?\d+)(px|%)$/.exec(margin);if(!parts){throw new Error("rootMargin must be specified in pixels or percent")}return{value:parseFloat(parts[1]),unit:parts[2]}});margins[1]=margins[1]||margins[0];margins[2]=margins[2]||margins[0];margins[3]=margins[3]||margins[1];return margins};IntersectionObserver.prototype._monitorIntersections=function(){if(!this._monitoringIntersections){this._monitoringIntersections=true;if(this.POLL_INTERVAL){this._monitoringInterval=setInterval(this._checkForIntersections,this.POLL_INTERVAL)}else{addEvent(window,"resize",this._checkForIntersections,true);addEvent(document,"scroll",this._checkForIntersections,true);if(this.USE_MUTATION_OBSERVER&&"MutationObserver"in window){this._domObserver=new MutationObserver(this._checkForIntersections);this._domObserver.observe(document,{attributes:true,childList:true,characterData:true,subtree:true})}}}};IntersectionObserver.prototype._unmonitorIntersections=function(){if(this._monitoringIntersections){this._monitoringIntersections=false;clearInterval(this._monitoringInterval);this._monitoringInterval=null;removeEvent(window,"resize",this._checkForIntersections,true);removeEvent(document,"scroll",this._checkForIntersections,true);if(this._domObserver){this._domObserver.disconnect();this._domObserver=null}}};IntersectionObserver.prototype._checkForIntersections=function(){var rootIsInDom=this._rootIsInDom();var rootRect=rootIsInDom?this._getRootRect():getEmptyRect();this._observationTargets.forEach(function(item){var target=item.element;var targetRect=getBoundingClientRect(target);var rootContainsTarget=this._rootContainsTarget(target);var oldEntry=item.entry;var intersectionRect=rootIsInDom&&rootContainsTarget&&this._computeTargetAndRootIntersection(target,rootRect);var newEntry=item.entry=new IntersectionObserverEntry({time:now(),target:target,boundingClientRect:targetRect,rootBounds:rootRect,intersectionRect:intersectionRect});if(!oldEntry){this._queuedEntries.push(newEntry)}else if(rootIsInDom&&rootContainsTarget){if(this._hasCrossedThreshold(oldEntry,newEntry)){this._queuedEntries.push(newEntry)}}else{if(oldEntry&&oldEntry.isIntersecting){this._queuedEntries.push(newEntry)}}},this);if(this._queuedEntries.length){this._callback(this.takeRecords(),this)}};IntersectionObserver.prototype._computeTargetAndRootIntersection=function(target,rootRect){if(window.getComputedStyle(target).display=="none")return;var targetRect=getBoundingClientRect(target);var intersectionRect=targetRect;var parent=getParentNode(target);var atRoot=false;while(!atRoot){var parentRect=null;var parentComputedStyle=parent.nodeType==1?window.getComputedStyle(parent):{};if(parentComputedStyle.display=="none")return;if(parent==this.root||parent==document){atRoot=true;parentRect=rootRect}else{if(parent!=document.body&&parent!=document.documentElement&&parentComputedStyle.overflow!="visible"){parentRect=getBoundingClientRect(parent)}}if(parentRect){intersectionRect=computeRectIntersection(parentRect,intersectionRect);if(!intersectionRect)break}parent=getParentNode(parent)}return intersectionRect};IntersectionObserver.prototype._getRootRect=function(){var rootRect;if(this.root){rootRect=getBoundingClientRect(this.root)}else{var html=document.documentElement;var body=document.body;rootRect={top:0,left:0,right:html.clientWidth||body.clientWidth,width:html.clientWidth||body.clientWidth,bottom:html.clientHeight||body.clientHeight,height:html.clientHeight||body.clientHeight}}return this._expandRectByRootMargin(rootRect)};IntersectionObserver.prototype._expandRectByRootMargin=function(rect){var margins=this._rootMarginValues.map(function(margin,i){return margin.unit=="px"?margin.value:margin.value*(i%2?rect.width:rect.height)/100});var newRect={top:rect.top-margins[0],right:rect.right+margins[1],bottom:rect.bottom+margins[2],left:rect.left-margins[3]};newRect.width=newRect.right-newRect.left;newRect.height=newRect.bottom-newRect.top;return newRect};IntersectionObserver.prototype._hasCrossedThreshold=function(oldEntry,newEntry){var oldRatio=oldEntry&&oldEntry.isIntersecting?oldEntry.intersectionRatio||0:-1;var newRatio=newEntry.isIntersecting?newEntry.intersectionRatio||0:-1;if(oldRatio===newRatio)return;for(var i=0;i<this.thresholds.length;i++){var threshold=this.thresholds[i];if(threshold==oldRatio||threshold==newRatio||threshold<oldRatio!==threshold<newRatio){return true}}};IntersectionObserver.prototype._rootIsInDom=function(){return!this.root||containsDeep(document,this.root)};IntersectionObserver.prototype._rootContainsTarget=function(target){return containsDeep(this.root||document,target)};IntersectionObserver.prototype._registerInstance=function(){if(registry.indexOf(this)<0){registry.push(this)}};IntersectionObserver.prototype._unregisterInstance=function(){var index=registry.indexOf(this);if(index!=-1)registry.splice(index,1)};function now(){return window.performance&&performance.now&&performance.now()}function throttle(fn,timeout){var timer=null;return function(){if(!timer){timer=setTimeout(function(){fn();timer=null},timeout)}}}function addEvent(node,event,fn,opt_useCapture){if(typeof node.addEventListener=="function"){node.addEventListener(event,fn,opt_useCapture||false)}else if(typeof node.attachEvent=="function"){node.attachEvent("on"+event,fn)}}function removeEvent(node,event,fn,opt_useCapture){if(typeof node.removeEventListener=="function"){node.removeEventListener(event,fn,opt_useCapture||false)}else if(typeof node.detatchEvent=="function"){node.detatchEvent("on"+event,fn)}}function computeRectIntersection(rect1,rect2){var top=Math.max(rect1.top,rect2.top);var bottom=Math.min(rect1.bottom,rect2.bottom);var left=Math.max(rect1.left,rect2.left);var right=Math.min(rect1.right,rect2.right);var width=right-left;var height=bottom-top;return width>=0&&height>=0&&{top:top,bottom:bottom,left:left,right:right,width:width,height:height}}function getBoundingClientRect(el){var rect;try{rect=el.getBoundingClientRect()}catch(err){}if(!rect)return getEmptyRect();if(!(rect.width&&rect.height)){rect={top:rect.top,right:rect.right,bottom:rect.bottom,left:rect.left,width:rect.right-rect.left,height:rect.bottom-rect.top}}return rect}function getEmptyRect(){return{top:0,bottom:0,left:0,right:0,width:0,height:0}}function containsDeep(parent,child){var node=child;while(node){if(node==parent)return true;node=getParentNode(node)}return false}function getParentNode(node){var parent=node.parentNode;if(parent&&parent.nodeType==11&&parent.host){return parent.host}if(parent&&parent.assignedSlot){return parent.assignedSlot.parentNode}return parent}window.IntersectionObserver=IntersectionObserver;window.IntersectionObserverEntry=IntersectionObserverEntry})();
// =====================
// Location
function getUrlVars(l){var t=window.location.href.toString();return new URL(t).searchParams.get(l)}var local=getUrlVars("location"),modify=[document.querySelectorAll(".nav-item-2 > a"),document.querySelectorAll("footer .item-3 a")],verify="pr"!=local||"illinois"!=local||"florida"!=local||null==local||null==local||0==local||""==local||NaN==local;if("pr"===local||"illinois"===local||"florida"===local){modify.forEach(l=>l.forEach(l=>{var t=l.getAttribute("href")+"?location="+local;l.setAttribute("href",t)}));var atribute=document.querySelector(".nav-item-1 a").getAttribute("href")+"?location="+local;atribute=document.querySelector(".politicas a").getAttribute("href")+"?location="+local,document.querySelector(".politicas a").setAttribute("href",atribute)}else window.location.href="./";
// ========
// Loader
const loader=document.getElementById("loader");window.addEventListener("load",()=>{loader.style.visibility="hidden",loader.style.opacity="0"});
// ======



// Menu Lang
var MenuLang=[{es:"Inicio",en:"Home"},{es:"Conócenos",en:"About us"},{es:"Planes Y Servicios",en:"Plans and Services"},{es:"Empleo",en:"Career"},{es:"Contacto",en:"Contact"}];
// =========
// Footer Lang
const FooterLang=[{es:"pr"==local?"481 Calle Ing. Fernando Calder Ortiz, San Juan, 00918, Puerto Rico.<br>• (787)-961-5550.<br>• (787)-961-5553.<br>":"illinois"==local?"3400 W. Stonegate Blvd. #103-3130 Airlington Heights, IL 60005.<br>• (833)-786-6398.<br>":"20 North Orange Ave. 11th Floor Suite 1100 Orlando, FL 32801.<br>• (407)-919-6232.<br>",en:"pr"==local?"481 Calle Ing. Fernando Calder Ortiz, San Juan, 00918, Puerto Rico.<br>• (787)-961-5550.<br>• (787)-961-5553.<br>":"illinois"==local?"3400 W. Stonegate Blvd. #103-3130 Airlington Heights, IL 60005.<br>• (833)-786-6398.<br>":"20 North Orange Ave. 11th Floor Suite 1100 Orlando, FL 32801.<br>• (407)-919-6232.<br>"},{es:"E-mail:<br>info@worldsolarpro.com",en:"E-mail:<br>info@worldsolarpro.com"},{es:"SÍGUENOS",en:"FOLLOW US"},{es:"Facebook",en:"Facebook"},{es:"Instagram",en:"Instagram"},{es:"Twitter",en:"Twitter"},{es:"Linkedin",en:"Linkedin"},{es:"Google",en:"Google"},{es:"MENÚ",en:"MENU"},{es:"Inicio",en:"Home"},{es:"Conócenos",en:"Know us"},{es:"Planes Y Servicios",en:"Plans and Services"},{es:"Empleo",en:"Carrer"},{es:"Contacto",en:"Contact"},{es:"MÁS INFORMACIÓN",en:"MORE INFORMATION"},{es:"A continuación, coloque su nombre, correo electrónico y número de teléfono para contactarlo tan pronto sea posible.",en:"In the following form, please state your name, email and phone number to contact you as soon as possible."},{es:"Nombre",en:"Name"},{es:"Email",en:"Email"},{es:"Teléfono",en:"Phone Number"},{es:"SOLICITE UNA LLAMADA",en:"REQUEST A CALL"},{es:"* El envío de su información implica la aceptación de nuestros términos de contacto y seguimiento.",en:"* By sending us your information you agree to our terms of contact and follow-up."},{es:"Políticas de Privacidad ",en:"Privacy Policy "},{es:"WORLD SOLAR PRO US",en:"World Solar Pro "},{es:"Derechos de Autor ©",en:"Copyrighted ©"},{es:"Ingenio Innato",en:"Ingenio Innato"}];
// ===========
// Lang Politicas
var lang=[];function addLang(e){return e.forEach(e=>lang.push(e)),!0}let idioma=window.navigator.languages?window.navigator.languages[0]:null,userLang=idioma=idioma||window.navigator.language||window.navigator.browserLanguage||window.navigator.userLanguage;-1!==userLang.indexOf("-")&&(userLang=userLang.split("-")[0]),-1!==userLang.indexOf("_")&&(userLang=userLang.split("_")[0]);const TitleText=[{es:"POLÍTICAS DE PRIVACIDAD | WORLD SOLAR PRO US",en:"PRIVACY POLICY | WORLD SOLAR PRO US"}];addLang(TitleText),addLang(MenuLang);var S1Text=[{es:"POLÍTICAS DE PRIVACIDAD",en:"PRIVACY POLICY"},{es:"<strong>I. World Solar Pro</strong> <br><br><br><br>\n\n  World Solar Pro es una empresa de energía renovable que se especializa en la venta, instalación y mantenimiento de equipos generadores de energía solar renovable para dueños de hogar y negocios.<br><br>\n  \n  Como una empresa de responsabilidad limitada registrada en el Estado Libre Asociado de Puerto Rico, World Solar Pro, LLC. Se encuentra bajo la dirección de su socio mayoritario, la Sr. Francisco Hernández.<br><br>\n  \n   \n  \n  <strong>II. Definiciones</strong><br><br><br><br>\n  \n  Aplicabilidad de Acuerdo – Todos los empelados e interacciones en redes sociales, páginas de internet o sub-páginas de World Solar Pro están automáticamente sujetas a su análisis por cumplimiento y aplicación del acuerdo presente.<br><br>\n  \n  Términos de Servicio – El siguiente es un acuerdo legal entre el usuario y World Solar Pro y su personal.<br><br>\n  \n  Utilización – Al utilizar o interactuar con la página de World Solar Pro en Facebook, el usuario indica que ha leído y entendido los términos de uso y políticas de privacidad aquí expuestas, dando su consentimiento de adherirse a todos los términos y condiciones del acuerdo.<br><br>\n   \n  \n  <strong>III. Uso de Plataformas de Facebook & Redes Sociales</strong><br><br><br><br>\n  \n  La página oficial de Facebook de World Solar Pro se utilizará exclusivamente para propósitos de mercadeo.<br><br>\n  \n  Cualquier información adquirida o suministrada que sirva como fuentes para prospectos a través de las páginas solo serán utilizadas por la empresa.<br><br>\n  \n  El acto de acosar o “trolear” está prohibido en las cuentas de las páginas, sub-páginas o cualquier otra herramienta de medios utilizados por la empresa.<br><br>\n  \n  El uso de lenguaje sugestivo sexual o material explícito está prohibido en la página electrónica, en las cuentas de redes sociales o en cualquier otro medio utilizado para propósitos de mercadeo.<br><br>\n  \n  El uso de lenguaje soez, expresiones denigrantes, agresividad o lenguaje sugestivo con tonos raciales y discriminatorios está prohibido a través de las plataformas digitales e impresas.<br><br>\n  \n   \n  \n  <strong>IV. Información de Identificación Personal (PII, por sus siglas en inglés)</strong><br><br><br><br>\n  \n  Toda la información de identificación personal (PII) recolectada, ya sean primer nombre, apellidos, correos electrónicos y/o direcciones se almacenarán de una manera segura por World Solar Pro, LLC.<br><br>\n  \n  La información demográfica será canalizada internamente de manera exclusiva y no se compartirá, se comunicará o divulgará en ninguna forma o parcialmente a terceros.<br><br>\n  \n   \n  \n  <strong> V. Política de Privacidad</strong><br><br><br><br>\n  \n  World Solar Pro, LLC implementa y regularmente mantiene procedimientos razonables y adecuados para la protección de información personal en cumplimiento con las leyes aplicables.<br><br><br><br>\n  \n   \n  \n  <strong>VI. Términos & Condiciones</strong><br><br>\n  \n  World Solar Pro diligentemente opera su propia página electrónica, cuentas de redes sociales, y marca y materiales de mercadeo de manera protectora cuando se trata de la seguridad de PIIs, por sus siglas en inglés, y de información demográfica.<br><br>\n  \n  De algún usuario no estar de acuerdo con las políticas, términos y condiciones encontrados aquí, el o ella deberá dar por terminada cualquier tipo de comunicación con World Solar Pro inmediatamente.<br><br>\n  \n   \n  \n  <strong>VII. Jurisdicción</strong><br><br>\n  \n  Cualquier violación como consecuencia de actividades ilegales de “hackeo”, hurto o diseminación de data almacenada a través de las plataformas digitales de World Solar Pro serán castigadas por la ley, siendo procesadas y enjuiciadas bajo el marco legal del Estado Libre Asociado de Puerto Rico.",en:'<strong>I. World Solar Pro</strong><br><br>\n\n  World Solar Pro is a renewable energy company that specializes in the sale, installation and maintenance of renewable solar energy generating equipment for home and business owners.<br><br>\n  \n  As a limited liability company registered in the Commonwealth of Puerto Rico, World Solar Pro, LLC. It is under the direction of its majority partner, Mr. Francisco Hernández.\n  <br><br>\n   \n  \n  <strong>II. Definitions<strong><br><br>\n  \n  Applicability of Agreement - All employees and interactions on social networks, Internet pages or sub-pages of World Solar Pro are automatically subject to analysis by compliance and application of this agreement.<br><br>\n  \n  Terms of Service - The following is a legal agreement between the user and World Solar Pro and its staff.<br><br>\n  \n  Use - By using or interacting with the World Solar Pro Facebook page, the user indicates that he has read and understood the terms of use and privacy policies set forth herein, giving his consent to adhere to all the terms and conditions of the agreement.<br><br>\n  \n  <strong>III. Use of Facebook Platforms & Social Networks<strong><br><br>\n  \n  The official World Solar Pro Facebook page will be used exclusively for marketing purposes.<br><br>\n  \n  Any information acquired or supplied that serves as sources for prospects through the pages will only be used by the company.<br><br>\n  \n  The act of harassing or "trolling" is prohibited in the accounts of the pages, sub-pages or any other media tool used by the company.\n  <br><br>\n  The use of suggestive sexual language or explicit material is prohibited on the website, on social media accounts or in any other medium used for marketing purposes.<br><br>\n  \n  The use of foul language, demeaning expressions, aggressiveness or suggestive language with racial and discriminatory tones is prohibited through digital and printed platforms.<br><br>\n   \n  \n  <strong>IV. Personally Identifiable Information (PII)<strong><br><br>\n  \n  All collected Personally Identifiable Information (PII), be it first name, last name, emails and / or addresses will be securely stored by World Solar Pro, LLC.<br><br>\n  \n  Demographic information will be channeled internally exclusively and will not be shared, communicated or disclosed in any way or partially to third parties.<br><br>\n   \n  \n  <strong>V. Privacy Policy<strong><br><br>\n  \n  World Solar Pro, LLC implements and regularly maintains reasonable and adequate procedures for the protection of personal information in compliance with applicable laws.<br><br>\n  \n   \n  \n  <strong>Terms & Conditions<strong><br><br>\n  \n  World Solar Pro diligently operates its own website, social media accounts, and brand and marketing materials in a protective manner when it comes to the security of PIIs, and demographic information.<br><br>\n  \n  If any user does not agree with the policies, terms and conditions found here, he or she must terminate any communication with World Solar Pro immediately.<br><br>\n  \n   \n  \n  <strong>VII. Jurisdiction<strong><br><br>\n  \n  Any violation as a consequence of illegal activities of "hacking", theft or dissemination of data stored through the World Solar Pro digital platforms will be punished by law, being prosecuted and prosecuted under the legal framework of the Commonwealth of Puerto Rico.'}];addLang(S1Text),addLang(FooterLang);var html=document.querySelector("html"),textItem=document.querySelectorAll('[name="text"]');"es"==userLang?(textItem.forEach((e,a)=>e.innerHTML=lang[a].es),html.setAttribute("lang","es")):(textItem.forEach((e,a)=>e.innerHTML=lang[a].en),html.setAttribute("lang","en"));let btnFlag=document.querySelector("#flag");btnFlag.addEventListener("click",function(){var e=btnFlag.dataset.lang;btn=btnFlag.querySelector(".flag"),"es"===e?(textItem.forEach((e,a)=>e.innerHTML=lang[a].en),btnFlag.dataset.lang="en",btn.classList.replace("flag-en","flag-es"),html.setAttribute("lang","en")):(textItem.forEach((e,a)=>e.innerHTML=lang[a].es),btnFlag.dataset.lang="es",btn.classList.replace("flag-es","flag-en"),html.setAttribute("lang","es"))});
// ==============




// Form
!function(e){"use strict";function t(e){return new RegExp("(^|\\s+)"+e+"(\\s+|$)")}var n,s,i;function a(e,t){(n(e,t)?i:s)(e,t)}"classList"in document.documentElement?(n=function(e,t){return e.classList.contains(t)},s=function(e,t){e.classList.add(t)},i=function(e,t){e.classList.remove(t)}):(n=function(e,n){return t(n).test(e.className)},s=function(e,t){n(e,t)||(e.className=e.className+" "+t)},i=function(e,n){e.className=e.className.replace(t(n)," ")});var c={hasClass:n,addClass:s,removeClass:i,toggleClass:a,has:n,add:s,remove:i,toggle:a};"function"==typeof define&&define.amd?define(c):e.classie=c}(window),function(){var e;function t(e){classie.add(e.target.parentNode,"input--filled")}function n(e){""===e.target.value.trim()&&classie.remove(e.target.parentNode,"input--filled")}String.prototype.trim||(e=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,String.prototype.trim=function(){return this.replace(e,"")}),[].slice.call(document.querySelectorAll("input.input__field")).forEach(function(e){""!==e.value.trim()&&classie.add(e.parentNode,"input--filled"),e.addEventListener("focus",t),e.addEventListener("blur",n)})}();
// ====
// To Animation
function get_browser(){var e,t=navigator.userAgent,r=t.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i)||[];return/trident/i.test(r[1])?{name:"IE",version:(e=/\brv[ :]+(\d+)/g.exec(t)||[])[1]||""}:"Chrome"===r[1]&&null!=(e=t.match(/\bOPR|Edge\/(\d+)/))?{name:"Opera",version:e[1]}:(r=r[2]?[r[1],r[2]]:[navigator.appName,navigator.appVersion,"-?"],null!=(e=t.match(/version\/(\d+)/i))&&r.splice(1,1,e[1]),{name:r[0],version:r[1]})}function to(e){var t=new IntersectionObserver(t=>{t.forEach(t=>{t.isIntersecting?t.target.style.animation=`to-${e} 1s ease forwards`:t.target.style.animation="none"})});document.querySelectorAll(`.to-${e}`).forEach(e=>t.observe(e))}browser=get_browser(),to("black"),to("blue"),to("orange"),to("gray"),to("white"),to("left"),to("right"),to("top"),to("bottom");
// ============



// Menu
var mobile=document.getElementById("mobile-menu"),items=[document.querySelector(".nav-item-2"),document.querySelector(".nav-item-3"),document.querySelector(".nav-item-8")];mobile.addEventListener("click",()=>{mobile.classList.contains("hide")?(mobile.classList.replace("hide","show"),items.forEach(e=>{e.classList.toggle("translatX-0")}),mobile.classList.add("is-active")):(mobile.classList.replace("show","hide"),items.forEach(e=>e.classList.toggle("translatX-0")),mobile.classList.remove("is-active"))});var navigation=document.querySelector("nav"),header=document.querySelector("header"),section_one=document.getElementById("S1"),links=navigation.querySelectorAll(".nav-item-2 > a"),menuLogo=navigation.querySelector(".nav-item-1 img"),menuFlag=navigation.querySelector(".nav-item-8 .flag"),footer=document.querySelector("footer"),options={rootMargin:"-10px"},observerSection=new IntersectionObserver(e=>{e.forEach(e=>{window.innerWidth>1199&&(e.isIntersecting?(links.forEach(e=>e.style.color="var(--white)"),menuLogo.src="./resources/img/logo/logo-light.png",menuFlag.style.filter="invert(0)",navigation.style.background="transparent"):(links.forEach(e=>e.style.color="var(--black)"),menuLogo.src="./resources/img/logo/logo-dark.png",menuFlag.style.filter="invert(1)",navigation.style.background="var(--white)"))})},options);observerSection.observe(header),optionsFooter=[{threshold:1}];var observeFooter=new IntersectionObserver(e=>{e.forEach(e=>{e.isIntersecting?navigation.style.zIndex=-1:navigation.style.zIndex=9999})},{threshold:.5});observeFooter.observe(footer);
// ==== 
// Footer
var footerForm=document.querySelector(".footer__form");function getFooterData(){return{name:document.getElementById("f-1").value,email:document.getElementById("f-2").value,number:document.getElementById("f-3").value}}footerForm.addEventListener("submit",e=>{e.preventDefault();var t=getFooterData();console.log(t),"es"==btnFlag.dataset.lang?footerForm.innerHTML='<h2 class="text-light text-center p-3 bg-orange">GRACIAS POR ENVIAR SU MENSAJE<h2>':footerForm.innerHTML='<h2 class="text-light text-center p-3 bg-orange">THANKS FOR SUBMIT<h2>'});
// ======
// Politicas
observerSection.disconnect();
// =========