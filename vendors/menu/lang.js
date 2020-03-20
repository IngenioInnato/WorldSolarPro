var menuLang = [
  {
    'es': 'Inicio',
    'en': 'Home'
  },
  // {
  //   'es': 'Portada',
  //   'en': 'Cover'
  // },
  {
    'es': 'Proceso',
    'en': 'Process',
  },
  {
    'es': 'Beneficios',
    'en': 'Benefits'
  },
  {
    'es': 'Equipos',
    'en': 'Equipment'
  },
  {
    'es': 'Financiamientos',
    'en': 'Financing'
  },
  {
    'es': 'Contacto',
    'en': 'Contact'
  }
];

// var nav = document.querySelector('nav')
// var texts = nav.querySelectorAll('[name="text"]');   // Selecciona todos los menuLang en el HTML
// texts.forEach((val,i) => val.innerHTML = menuLang[i].es); // Imprime menuLang
// var btn = document.getElementById('flag');                   // Selecciona el botón que hace el cambio de lenguage
// btn.addEventListener('click',function(){                  // Escucha si hay click al botón
//   var status = btn.dataset.lang;                          // Obtiene el data del lenguaje obtenido en el HTML
//   if(status === 'es'){                                    // Verifica el lenguaje
//     btn.dataset.lang = 'en';                              // Cambia el lenguaje
//     texts.forEach((val,i) => val.innerHTML = menuLang[i].en);
//   } else{
//     btn.dataset.lang = 'es';                              // Cambia el lenguaje
//     texts.forEach((val,i) => val.innerHTML = menuLang[i].es);
//   }
// });