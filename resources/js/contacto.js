  var formS2 = document.querySelector('.S2__form');
  function getS2Data(){
    var dataS2 = {
      'name':    document.getElementById('c-1').value,
      'lastname':    document.getElementById('c-2').value,
      'email':   document.getElementById('c-3').value,
      'city':  document.getElementById('c-4').value,
      'number':  document.getElementById('c-5').value
    }
    return dataS2;
  }

  formS2.addEventListener('submit', e => {
    e.preventDefault();
    var data = getS2Data();
    console.log(data);
    if( btnFlag.dataset.lang == 'es'){
      formS2.innerHTML = '<h2 class="text-light text-center p-3 bg-orange">GRACIAS POR ENVIAR SU MENSAJE<h2>';
    } else{
      formS2.innerHTML = '<h2 class="text-light text-center p-3 bg-orange">THANKS FOR SUBMIT<h2>';
    }
  })
