var elCarousel = document.querySelector('.carousel--testimonios');
var carousel = new Carousel(elCarousel, true, false, [1,1,1,1,1]);
var form = document.querySelector('.S4__form');
var btnQ = document.getElementById('send-q');
function getData(){
  var data = {
    'name'   :  document.getElementById('q-1').value,
    'email'  :  document.getElementById('q-2').value,
    'number' :  document.getElementById('q-3').value,
    'address':  document.getElementById('q-4').value,
    'country':  document.getElementById('q-5').value,
    'average':  document.getElementById('q-6').value,
  };
  return data;
}
function getCoverData(data){
  var string = (`Nombre: ${data.name} | Email: ${data.email} | Número telefónico: ${data.number} | Dirección: ${data.address} | País: ${data.country} | Factura de luz: ${data.average}`);
  return string;
}
form.addEventListener('submit', e => {
  e.preventDefault();
  // let data = getData();
  // btnQ.disabled = true;
  // form.innerHTML = '<h2 class="text-light text-center p-3 bg-orange">Wait a moment please...<h2>';
  // Email.send({
  //   SecureToken: "8a9ce791-d13b-44b0-8824-258b13a28660",
  //   To: 'worldsolarpropr@gmail.com',
  //   From: "leads@worldsolarprous.com",
  //   Subject: "Datos para tax credit",
  //   Body: `
  //   <h1>Datos dados por el usuario</h1>
  //   <p>Nombre: ${data.name}. <br>
  //   Teléfono: ${data.number}. <br>
  //   Email: ${data.email}. <br>
  //   Dirección: ${data.address}. <br>
  //   Ciudad: ${data.country}. <br>
  //   Average: ${data.average}. <br>
  //   </p>
  //   `
  // }).then(
  //   message => {
  //     console.log("Mensaje Enviado Correctamente " + message)
  //     form.innerHTML = '<h2 class="text-light text-center p-3 bg-orange">THANKS FOR SUBMIT<h2>';
  //   }
  // ).catch(
  //   message => console.log("Error: " + message)
  // );
  // let dataRes = getCoverData(data);
  // console.log(dataRes);
  // if( btnFlag.dataset.lang == 'es'){
  //   footerForm.innerHTML = '<h2 class="text-light text-center p-3 bg-orange">GRACIAS POR ENVIAR SU MENSAJE<h2>';
  // } else{
  //   footerForm.innerHTML = '<h2 class="text-light text-center p-3 bg-orange">THANKS FOR SUBMIT<h2>';
  // }
  form.innerHTML = '<h2 class="text-light text-center p-3 bg-orange">THANKS FOR SUBMIT<h2>';

});
