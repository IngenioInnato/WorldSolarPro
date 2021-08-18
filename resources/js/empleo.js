observerSection.disconnect();
var carouselheader = document.querySelector('.carousel--header');
var carousel = new Carousel(carouselheader, true, false, [1, 1, 1, 4, 4]);
var formS2 = document.querySelector('.S2__form');
var carouselTestimonios = document.querySelector('.carousel--testimonios');
var carousel = new Carousel(carouselTestimonios, true, false, [1,1,1,1,1]);
function getS2Data(){
  var dataS2 = {
    'name':    document.getElementById('e-1').value,
    'telefono':    document.getElementById('e-2').value,
    'email':   document.getElementById('e-3').value,
    'direccion':  document.getElementById('e-4').value,
  }
  return dataS2;
}

formS2.addEventListener('submit', e => {
  e.preventDefault();
  var data = getS2Data();
  console.log(data);
  if( btnFlag.dataset.lang == 'es'){
    formS2.innerHTML = `<div class="embed-responsive embed-responsive-16by9 my-3">
      <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/OX6xu2v3-lI" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div><h2 class="text-light text-center p-3">GRACIAS POR ENVIAR SU MENSAJE<h2><br><a href="https://www.flipsnack.com/nextsolarinc/folleto-wsp-illinois-esp.html" target="_blank" class="btn-wsp text-center d-block">MÁS INFORMACIÓN</a>`;
  } else{
    formS2.innerHTML = `<div class="embed-responsive embed-responsive-16by9 my-3">
      <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/OX6xu2v3-lI" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div><h2 class="text-light text-center p-3">THANKS FOR SUBMIT<h2><br><a href="https://www.flipsnack.com/nextsolarinc/folleto-para-clientes-world-solar-pro-2.html" target="_blank" class="btn-wsp text-center d-block">MÁS INFORMACIÓN</a>`;
  }
})

function formToJson(a) {
  e = new FormData(a);
  let object = {};
  e.forEach((value, key) => {object[key] = value});
  let x = JSON.stringify(object);
  return JSON.parse(x);
}
function sendEmailUser(a) {
  let e = formToJson(a);
  Email.send({
    SecureToken: "8a9ce791-d13b-44b0-8824-258b13a28660",
    To: e.Email,
    From: "leads@worldsolarprous.com",
    Subject: "Reunión Semanal",
    Body: `
    <img src="https://worldsolarprous.com/resources/img/email/crea-tu-propia-empresa.jpg">
    <p>Recibe un cordial saludo de la familia World Solar Pro US.<br><br>

    Recuerda  asistir a este próximo martes a nuestra reunión semanal a las 7:00pm ETS. Conéctate con nosotros en el siguiente enlace:<br><br>
    
    bit.ly/ZoomWSPUSOpportunity<br><br>
    
    ¡Conviértete en un consultor de energía certificado y genera miles de dólares!<br><br><br><br>
    
    Departamento de Administración<br>
    World Solar Pro US LLC<br>
    www.worldsolarprous.com<br>
    </p>
    <img src="https://worldsolarprous.com/resources/img/logo/wsp-dark-us.png" style="width: 200px;height: auto;">
    `
  }).then(
    message => {
        console.log("Mensaje Enviado Correctamente " + message)
        console.log(e)
      }
    ).catch(
      message => console.log("Error: " + message)
    );
}
function sendEmail(a) {
  let e = formToJson(a);
  Email.send({
    SecureToken: "8a9ce791-d13b-44b0-8824-258b13a28660",
    To: 'worldsolarpropr@gmail.com',
    From: "leads@worldsolarprous.com",
    Subject: "Nuevo Postulante en Ventas",
    Body: `
    <h1>Datos dados por el usuario</h1>
    <p>Nombre: ${e.Nombre}. <br>
    Teléfono: ${e.Teléfono}. <br>
    Email: ${e.Email}. <br>
    Dirección: ${e.Dirección}. <br>
    Fue añadido en <a href="https://docs.google.com/spreadsheets/d/1_GOEptWUBf9M-40QXe5ZssxZ7BMhF0B7BxEXIjzWPe4/edit?usp=sharing">Google Sheet</a>. <br>
    </p>
    `
  }).then(
    message => {
        console.log("Mensaje Enviado Correctamente " + message)
        console.log(e)
      }
    ).catch(
      message => console.log("Error: " + message)
    );
}
const scriptURL = 'https://script.google.com/macros/s/AKfycbx8ZN5uxY_z-bMPoINJOR0WeS4FSjRGiOEPrVjuoQ5hITQZgvs1/exec';
const form = document.forms['submit-to-google-sheet'];
let formEl = document.querySelector('[name="submit-to-google-sheet"]')
formEl.addEventListener('submit', e => {
  e.preventDefault()
  let data = new FormData(form);
  let message = document.getElementById('form__message')
  message.innerHTML = btnFlag.dataset.lang == "es" ? 'Enviando...': 'Sending...';
  data.append("Momento", new Date());
  fetch(scriptURL, { method: 'POST', body: data})
  .then(response => {
    console.log('Success!', response);
    sendEmail(form);
    sendEmailUser(form);
    formEl.innerHTML = "";
    message.innerHTML = btnFlag.dataset.lang == "es" ? 'Sus datos fueron guardados correctamente.' : 'Your data was saved correctly.';
    // setTimeout(() => {
    //   message.innerHTML = '';
    // }, 4000);
  })
  .catch(error => {
    console.log('Error!', error.message)
    message.innerHTML = btnFlag.dataset.lang == "es" ? 'Ha ocurrido un error, por favor, intente nuevamente.' : 'An error has occurred, please try again.';
    setTimeout(() => {
      message.innerHTML = '';
    }, 4000);
  });
});