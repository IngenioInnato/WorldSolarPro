var mobile = document.getElementById('mobile-menu');
var items = [document.querySelector('.nav-item-2'), document.querySelector('.nav-item-3'), document.querySelector('.nav-item-8')];
mobile.addEventListener('click',() => {
  if(mobile.classList.contains('hide')) { 
    mobile.classList.replace('hide', 'show');
    items.forEach(el => {
      el.classList.toggle('translatX-0')
    });
    mobile.classList.add('is-active');
  } else{ 
    mobile.classList.replace('show', 'hide');
    items.forEach(el =>  el.classList.toggle('translatX-0'));
    mobile.classList.remove('is-active');
  }
});
