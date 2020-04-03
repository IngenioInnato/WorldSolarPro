var footerForm = document.querySelector('.footer__form');



function getFooterData(){
  var dataFooter = {
    'name':    document.getElementById('f-1').value,
    'email':   document.getElementById('f-2').value,
    'number':  document.getElementById('f-3').value
  }
  return dataFooter;
}

footerForm.addEventListener('submit', e => {
  e.preventDefault();
  var data = getFooterData();
  console.log(data);
  if( btnFlag.dataset.lang == 'es'){
    footerForm.innerHTML = '<h2 class="text-light text-center p-3 bg-orange">GRACIAS POR ENVIAR SU MENSAJE<h2>';
  } else{
    footerForm.innerHTML = '<h2 class="text-light text-center p-3 bg-orange">THANKS FOR SUBMIT<h2>';
  }
})