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
var MenuLang=[{es:"Inicio",en:"Home"},{es:"Conócenos",en:"About us"},{es:"Planes Y Servicios",en:"Plans and Services"},{es:"Empleo",en:"Career"},{es:"Contacto",en:"Contact"},{es:"Oportunidad",en:"Opportunity"},{es:"Tienda",en:"Shop"},{es:"Iniciar sesión",en:"Log In"}];
// =========
// Footer Lang
const FooterLang=[{es:"pr"==local?"481 Calle Ing. Fernando Calder Ortiz, San Juan, 00918, Puerto Rico.<br>• (787)-961-5550.<br>• (787)-961-5553.<br>":"illinois"==local?"3400 W. Stonegate Blvd. #103-3130 Airlington Heights, IL 60005.<br>• (833)-786-6398.<br>":"20 North Orange Ave. 11th Floor Suite 1100 Orlando, FL 32801.<br>• (407)-919-6232.<br>",en:"pr"==local?"481 Calle Ing. Fernando Calder Ortiz, San Juan, 00918, Puerto Rico.<br>• (787)-961-5550.<br>• (787)-961-5553.<br>":"illinois"==local?"3400 W. Stonegate Blvd. #103-3130 Airlington Heights, IL 60005.<br>• (833)-786-6398.<br>":"20 North Orange Ave. 11th Floor Suite 1100 Orlando, FL 32801.<br>• (407)-919-6232.<br>"},{es:"E-mail:<br>info@worldsolarpro.com",en:"E-mail:<br>info@worldsolarpro.com"},{es:"SÍGUENOS",en:"FOLLOW US"},{es:"Facebook",en:"Facebook"},{es:"Instagram",en:"Instagram"},{es:"Twitter",en:"Twitter"},{es:"Linkedin",en:"Linkedin"},{es:"Google",en:"Google"},{es:"MENÚ",en:"MENU"},{es:"Inicio",en:"Home"},{es:"Conócenos",en:"Know us"},{es:"Planes Y Servicios",en:"Plans and Services"},{es:"Empleo",en:"Carrer"},{es:"Contacto",en:"Contact"},{es:"MÁS INFORMACIÓN",en:"MORE INFORMATION"},{es:"A continuación, coloque su nombre, correo electrónico y número de teléfono para contactarlo tan pronto sea posible.",en:"In the following form, please state your name, email and phone number to contact you as soon as possible."},{es:"Nombre",en:"Name"},{es:"Email",en:"Email"},{es:"Teléfono",en:"Phone Number"},{es:"SOLICITE UNA LLAMADA",en:"REQUEST A CALL"},{es:"* El envío de su información implica la aceptación de nuestros términos de contacto y seguimiento.",en:"* By sending us your information you agree to our terms of contact and follow-up."},{es:"Políticas de Privacidad ",en:"Privacy Policy "},{es:"WORLD SOLAR PRO US",en:"World Solar Pro "},{es:"Derechos de Autor ©",en:"Copyrighted ©"},{es:"Ingenio Innato",en:"Ingenio Innato"}];
// ===========
// Empleo Lang
var lang=[];function addLang(e){return e.forEach(e=>lang.push(e)),!0}let idioma=window.navigator.languages?window.navigator.languages[0]:null,userLang=idioma=idioma||window.navigator.language||window.navigator.browserLanguage||window.navigator.userLanguage;-1!==userLang.indexOf("-")&&(userLang=userLang.split("-")[0]),-1!==userLang.indexOf("_")&&(userLang=userLang.split("_")[0]);const TitleText=[{es:"EMPLEO | WORLD SOLAR PRO US",en:"CAREER | WORLD SOLAR PRO US"}];addLang(TitleText),addLang(MenuLang);const HeaderText=[{es:"Directora de Ventas, US",en:"US Regional Sales Director"},{es:"DIRECTOR DE VENTAS, US",en:"US Regional Sales Director"},{es:"DIRECTORA DE VENTAS de ILLINOIS, US",en:"ILLINOIS Sales Director"},{es:"DIRECTOR DE VENTAS de ILLINOIS, US",en:"Illinois Sales Director"},{es:"Consultor Energético",en:"Energy Consultant"},{es:"Manager WSP",en:"WSP Manager"},{es:"Team League",en:"Team League"},{es:"DIRECTOR DE VENTAS, PR",en:"PR SALES DIRECTOR"}];addLang(HeaderText);const S1Text=[{es:"Siempre nos encontramos evaluando personal nuevo para nuestra empresa, la cual ya se encuentra en los mercados de Puerto Rico y en los estados de Florida e Illinois. Por tal razón, si reside en cualquiera de estas jurisdicciones o en las cercanías de, por favor someta su resume actualizado con todas sus experiencias de trabajo, incluyendo las certificaciones relacionadas a la industria solar, como por ejemplo de electricista, eficiencia energética, ingeniería, diseño y de instalador solar.",en:"We are always considering new personnel for our company, which is already operating in the markets of Puerto Rico and the states of Florida and Illinois. For this reason, if you reside within or nearby any of these jurisdictions, please submit your updated resume with all of your past job experiences, including solar industry-related certifications such as electrician, energy efficiency, engineering, design and solar installer for example."}],S2Text=[{es:"¡Forma Parte de Nuestro Equipo!",en:"Join Our Team !"},{es:"Nombre",en:"Name"},{es:"Apellido",en:"Last Name"},{es:"Email",en:"Email"},{es:"Ciudad",en:"City"},{es:"Número Telefónico",en:"Phone Number"},{es:"ENVIAR",en:"SEND"}];addLang(S2Text);const S3Text=[{es:"Siempre nos encontramos evaluando personal nuevo para nuestra empresa, la cual ya se encuentra en los mercados de Puerto Rico y en los estados de Florida e Illinois. Por tal razón, si reside en cualquiera de estas jurisdicciones o en las cercanías de, por favor someta su resume actualizado con todas sus experiencias de trabajo, incluyendo las certificaciones relacionadas a la industria solar, como por ejemplo de electricista, eficiencia energética, ingeniería, diseño y de instalador solar.",en:"We are always considering new personnel for our company, which is already operating in the markets of Puerto Rico and the states of Florida and Illinois. For this reason, if you reside within or nearby any of these jurisdictions, please submit your updated resume with all of your past job experiences, including solar industry-related certifications such as electrician, energy efficiency, engineering, design and solar installer for example."},{es:"Envia tu CV a:",en:"Send us your resume to:"},{es:"Illinois: careeril@worldsolarpro.com",en:"Illinois: careeril@worldsolarpro.com "},{es:"Florida: careerfl@worldsolarpro.com",en:"Florida: careerfl@worldsolarpro.com"},{es:"Puerto Rico: reclutamiento@worldsolarpro.com",en:"Puerto Rico: reclutamiento@worldsolarpro.com"},{es:"Thank you so much and we will be contacting you soon!",en:"Thank you so much and we will be contacting you soon!"}];addLang(S3Text),addLang(FooterLang);var html=document.querySelector("html"),textItem=document.querySelectorAll('[name="text"]');"es"==userLang?(textItem.forEach((e,a)=>e.innerHTML=lang[a].es),html.setAttribute("lang","es")):(textItem.forEach((e,a)=>e.innerHTML=lang[a].en),html.setAttribute("lang","en"));let btnFlag=document.querySelector("#flag");btnFlag.addEventListener("click",function(){var e=btnFlag.dataset.lang;btn=btnFlag.querySelector(".flag"),"es"===e?(textItem.forEach((e,a)=>e.innerHTML=lang[a].en),btnFlag.dataset.lang="en",btn.classList.replace("flag-en","flag-es"),html.setAttribute("lang","en")):(textItem.forEach((e,a)=>e.innerHTML=lang[a].es),btnFlag.dataset.lang="es",btn.classList.replace("flag-es","flag-en"),html.setAttribute("lang","es"))});
// ===========



// Number Counter
class Counter{constructor(t,s,i,e){this._selector=t,this._obj=document.querySelector(this._selector),this._start=s,this._end=i,this._range=this._end-this._start,this._duration=e,this._range=this._end-this._start,this._increment=this._end>this._start?1:-1,this._step=Math.abs(Math.floor(this._duration/this._range)),this._timer=setInterval(()=>{this._start+=this._increment,this._obj.textContent=this._start,this._start==this._end&&clearInterval(this._timer)},this._step)}}
// ==============
// Form
!function(e){"use strict";function t(e){return new RegExp("(^|\\s+)"+e+"(\\s+|$)")}var n,s,i;function a(e,t){(n(e,t)?i:s)(e,t)}"classList"in document.documentElement?(n=function(e,t){return e.classList.contains(t)},s=function(e,t){e.classList.add(t)},i=function(e,t){e.classList.remove(t)}):(n=function(e,n){return t(n).test(e.className)},s=function(e,t){n(e,t)||(e.className=e.className+" "+t)},i=function(e,n){e.className=e.className.replace(t(n)," ")});var c={hasClass:n,addClass:s,removeClass:i,toggleClass:a,has:n,add:s,remove:i,toggle:a};"function"==typeof define&&define.amd?define(c):e.classie=c}(window),function(){var e;function t(e){classie.add(e.target.parentNode,"input--filled")}function n(e){""===e.target.value.trim()&&classie.remove(e.target.parentNode,"input--filled")}String.prototype.trim||(e=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,String.prototype.trim=function(){return this.replace(e,"")}),[].slice.call(document.querySelectorAll("input.input__field")).forEach(function(e){""!==e.value.trim()&&classie.add(e.parentNode,"input--filled"),e.addEventListener("focus",t),e.addEventListener("blur",n)})}();
// ====
// Carousel
class Carousel{constructor(t,e=!0,i=!0,r=[1,2,3,4,5],s=[0,576,768,992,1200],n=!0){this._html=t,this._bControl=e,this._bIndicator=i,this._bNIndicator=n,this._breakPoint=s,this._viewportItem=r,this._slide=this._html.querySelector(".carousel__slide"),this._indicator=this._html.querySelector(".carousel__indicator"),this._control=this._slide.querySelectorAll(".carousel__control"),this._prev=this._slide.querySelector(".control__prev"),this._next=this._slide.querySelector(".control__next"),this._slideItem=this._slide.querySelectorAll(".carousel__item"),this._nSlideItem=this._slideItem.length,this._indicatorItem=0,this._indicatorContainer=0,this._width=this.width(),this._itemPerSlide=this.itemPerSlide(),this._itemPercent=this.itemPercent(),this._nSlide=this.nSlide(),this.startCarousel()}width(){return this._width=window.innerWidth,this._width}itemPerSlide(){var t=0;return this._width=this.width(),this._breakPoint.forEach((e,i)=>{this._width>e&&(t=this._viewportItem[i])}),t}itemPercent(){var t=0;return this._itemPerSlide=this.itemPerSlide(),0!=this._itemPerSlide&&this._itemPerSlide>0&&(t=100/this._itemPerSlide),t}nSlide(){return this._itemPerSlide=this.itemPerSlide(),Math.ceil(this._nSlideItem/this._itemPerSlide)}selectIndicatorItem(){return this._indicator=this._html.querySelector(".carousel__indicator"),this._indicatorItem=this._indicator.querySelectorAll(".indicator__item"),!0}selectIndicatorContainer(){return this._indicator=this._html.querySelector(".carousel__indicator"),this._indicatorContainer=this._indicator.querySelector(".indicator__container"),!0}selectIndicatorHtml(){return this.selectIndicatorItem(),this.selectIndicatorContainer(),!0}removeActive(){return this.selectIndicatorItem(),this._indicatorItem.forEach(t=>t.classList.contains("active")?t.classList.remove("active"):""),!0}remplaceTransformText(t){return t=""===(t=(t=t.replace(/[^0-9\.]+/g,"")).replace("00",""))?0:parseInt(t)}setItemSize(){return this._itemPercent=this.itemPercent(),this._slideItem.forEach(t=>{t.style.flex=`0 0 ${this._itemPercent}%`}),!0}createIndicator(){this._nSlide=this.nSlide();var t=document.createElement("ul");t.classList.add("indicator__container");for(var e=1;e<=this._nSlide;e++){const i=document.createElement("li");i.classList.add("indicator__item",`indicator__item-${e}`),i.setAttribute("data-slide-number",e),this._bNIndicator&&(i.innerHTML=e),1===e&&i.classList.add("active"),t.appendChild(i)}return this._indicator.appendChild(t),this.selectIndicatorHtml(),!0}slideTranslate(t){return this._slideItem.forEach(e=>e.style.transform=t),!0}resetIndicator(){return this._indicator=this._html.querySelector(".carousel__indicator"),this.selectIndicatorHtml(),this.removeActive(),this._indicatorItem[0].classList.add("active"),this._control[0].dataset.slideNumber=0,this._control[1].dataset.slideNumber=2,this._slideItem.forEach(t=>t.style.transform="translateX(0)"),!0}resetControl(){return this._control[0].dataset.slideNumber=0,this._control[1].dataset.slideNumber=2,this._bIndicator||this._slideItem.forEach(t=>t.style.transform="translateX(0)"),!0}actualLocation(){this._itemPerSlide=this.itemPerSlide();var t=this._slideItem[0].style.transform;return t=(t=this.remplaceTransformText(t))/this._itemPerSlide+1}updateControl(){var t=this.actualLocation();return this._control[0].dataset.slideNumber=t-1,this._control[1].dataset.slideNumber=t+1,!0}updateIndicator(){var t=this.actualLocation();return this.removeActive(),this._indicatorItem[t-1].classList.add("active"),!0}moveSlide(t){this._itemPerSlide=this.itemPerSlide();var e=parseInt(t.dataset.slideNumber);this._bIndicator&&this.removeActive();var i=-(e-1)*this._itemPerSlide*100;return i=`translateX(${i}%)`,this.slideTranslate(i),!0}indicatorMove(t){return this.moveSlide(t),t.classList.add("active"),this._bControl&&this.updateControl(),!0}controlBorderCase(){this._itemPerSlide=this.itemPerSlide(),this._nSlide=this.nSlide();var t=0==this._control[0].dataset.slideNumber,e=this._control[1].dataset.slideNumber==this._nSlide+1;if(t){var i=`translateX(${i=-(this._nSlide-1)*this._itemPerSlide*100}%)`;console.log(i),this.slideTranslate(i),this._control[0].dataset.slideNumber=this._nSlide-1,this._control[1].dataset.slideNumber=this._nSlide+1}else if(e){i="translateX(0%)";this.slideTranslate(i),this._control[0].dataset.slideNumber=0,this._control[1].dataset.slideNumber=2}return!0}controlMove(t,e=!0){this._nSlide=this.nSlide();var i="0"==t.dataset.slideNumber,r=t.dataset.slideNumber==this._nSlide+1;i||r?this.controlBorderCase():(this.moveSlide(t),e?this._control.forEach(t=>{t.dataset.slideNumber=parseInt(t.dataset.slideNumber)+1}):this._control.forEach(t=>t.dataset.slideNumber=parseInt(t.dataset.slideNumber)-1)),this._bIndicator&&this.updateIndicator()}indicatorListener(){return this.selectIndicatorHtml(),this._indicatorItem.forEach((t,e)=>t.addEventListener("click",()=>this.indicatorMove(t))),!0}controlListener(){return this._itemPerSlide=this.itemPerSlide(),this._nSlide=this.nSlide(),this._control[0].addEventListener("click",()=>this.controlMove(this._control[0],!1)),this._control[1].addEventListener("click",()=>this.controlMove(this._control[1],!0)),!0}activeListener(){this._bIndicator&&this.indicatorListener(),this._bControl&&this.controlListener()}windowListener(){window.addEventListener("resize",()=>{this._itemPerSlide!=this.itemPerSlide()&&(this.setItemSize(),this._itemPerSlide=this.itemPerSlide(),this._bIndicator?(this._indicator.innerHTML="",this.createIndicator(),this.resetIndicator()):this._bControl&&this.resetControl(),this._bIndicator&&this.indicatorListener())})}startCarousel(){this._bControl&&this._bIndicator||!this._bControl&&!this._bIndicator?(this.setItemSize(),this.createIndicator(),this._indicator=this._html.querySelector(".carousel__indicator"),this.selectIndicatorHtml(),this.activeListener()):!1===this._bControl?(this.setItemSize(),this.createIndicator(),this.selectIndicatorHtml(),this.activeListener(),this._control.forEach(t=>t.remove()),this.indicatorListener()):!1===this._bIndicator&&(this.setItemSize(),this._indicator.style.display="none",this.controlListener()),this.windowListener()}}
// ========
// To Animation
function get_browser(){var e,t=navigator.userAgent,r=t.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i)||[];return/trident/i.test(r[1])?{name:"IE",version:(e=/\brv[ :]+(\d+)/g.exec(t)||[])[1]||""}:"Chrome"===r[1]&&null!=(e=t.match(/\bOPR|Edge\/(\d+)/))?{name:"Opera",version:e[1]}:(r=r[2]?[r[1],r[2]]:[navigator.appName,navigator.appVersion,"-?"],null!=(e=t.match(/version\/(\d+)/i))&&r.splice(1,1,e[1]),{name:r[0],version:r[1]})}function to(e){var t=new IntersectionObserver(t=>{t.forEach(t=>{t.isIntersecting?t.target.style.animation=`to-${e} 1s ease forwards`:t.target.style.animation="none"})});document.querySelectorAll(`.to-${e}`).forEach(e=>t.observe(e))}browser=get_browser(),to("black"),to("blue"),to("orange"),to("gray"),to("white"),to("left"),to("right"),to("top"),to("bottom");
// ============
// Modal
var modal=document.querySelector(".modal"),trigger=document.querySelectorAll(".btn-play"),closeButton=document.querySelector(".close-button"),modalVideo=document.querySelector(".modal__video");function toggleModal(){modal.classList.toggle("show-modal")}function windowOnClick(e){e.target===modal&&(toggleModal(),modalVideo.setAttribute("src",""))}trigger.forEach(e=>{e.addEventListener("click",e=>{var t=e.target.dataset.video;t+="?&autoplay=1&mute=1",modalVideo.setAttribute("src",t),toggleModal(),e.preventDefault})}),window.addEventListener("click",windowOnClick);
// =====



// Menu
var mobile=document.getElementById("mobile-menu"),items=[document.querySelector(".nav-item-2"),document.querySelector(".nav-item-3"),document.querySelector(".nav-item-8")];mobile.addEventListener("click",()=>{mobile.classList.contains("hide")?(mobile.classList.replace("hide","show"),items.forEach(e=>{e.classList.toggle("translatX-0")}),mobile.classList.add("is-active")):(mobile.classList.replace("show","hide"),items.forEach(e=>e.classList.toggle("translatX-0")),mobile.classList.remove("is-active"))});var navigation=document.querySelector("nav"),header=document.querySelector("header"),section_one=document.getElementById("S1"),links=navigation.querySelectorAll(".nav-item-2 > a"),menuLogo=navigation.querySelector(".nav-item-1 img"),menuFlag=navigation.querySelector(".nav-item-8 .flag"),footer=document.querySelector("footer"),options={rootMargin:"-10px"},observerSection=new IntersectionObserver(e=>{e.forEach(e=>{window.innerWidth>1199&&(e.isIntersecting?(links.forEach(e=>e.style.color="var(--white)"),menuLogo.src="./resources/img/logo/logo-light.png",menuFlag.style.filter="invert(0)",navigation.style.background="transparent"):(links.forEach(e=>e.style.color="var(--black)"),menuLogo.src="./resources/img/logo/logo-dark.png",menuFlag.style.filter="invert(1)",navigation.style.background="var(--white)"))})},options);observerSection.observe(header),optionsFooter=[{threshold:1}];var observeFooter=new IntersectionObserver(e=>{e.forEach(e=>{e.isIntersecting?navigation.style.zIndex=-1:navigation.style.zIndex=9999})},{threshold:.5});observeFooter.observe(footer);
// ==== 
// Footer
var footerForm=document.querySelector(".footer__form");function getFooterData(){return{name:document.getElementById("f-1").value,email:document.getElementById("f-2").value,number:document.getElementById("f-3").value}}footerForm.addEventListener("submit",e=>{e.preventDefault();var t=getFooterData();console.log(t),"es"==btnFlag.dataset.lang?footerForm.innerHTML='<h2 class="text-light text-center p-3 bg-orange">GRACIAS POR ENVIAR SU MENSAJE<h2>':footerForm.innerHTML='<h2 class="text-light text-center p-3 bg-orange">THANKS FOR SUBMIT<h2>'});
// ======
// Empleo
observerSection.disconnect();var carouselheader=document.querySelector(".carousel--header"),carousel=new Carousel(carouselheader,!0,!1,[1,1,1,4,4]),formS2=document.querySelector(".S2__form");function getS2Data(){return{name:document.getElementById("e-1").value,lastname:document.getElementById("e-2").value,email:document.getElementById("e-3").value,city:document.getElementById("e-4").value,number:document.getElementById("e-5").value}}formS2.addEventListener("submit",e=>{e.preventDefault();var t=getS2Data();console.log(t),"es"==btnFlag.dataset.lang?formS2.innerHTML='<h2 class="text-light text-center p-3 bg-orange">GRACIAS POR ENVIAR SU MENSAJE<h2>':formS2.innerHTML='<h2 class="text-light text-center p-3 bg-orange">THANKS FOR SUBMIT<h2>'});
// ======