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
function send(){
  var data = getData();
  var string = (`Nombre: ${data.name} | Email: ${data.email} | Número telefónico: ${data.number} | Dirección: ${data.address} | País: ${data.country} | Factura de luz: ${data.average}`);
  return string;
}
form.addEventListener('submit', e => {
  e.preventDefault();
  // Email.send({
  //   Host : "smtp.gmail.com",
  //   Username : "worldsolarpropr@gmail.com",
  //   Password : "puertorico2017",
  //   To : 'miguelangel1074.gc@gmail.com',
  //   From : "worldsolarpropr@gmail.com",
  //   Subject : "Datos de clientes",
  //   Body : send()
  // }).then(
  //   message => alert(message)
  // );
  console.log(send());
  
  form.innerHTML = '<h2 class="text-light text-center p-3 bg-orange">GRACIAS POR ENVIAR SU MENSAJE<h2>';
});
