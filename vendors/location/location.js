  // Get url Variabale
  var local = getUrlVars('location');
  var modify = [document.querySelectorAll('.nav-item-2 > a'), document.querySelectorAll('footer .item-3 a')];
  var verify = (local != 'pr') || (local != 'illinois') || (local != 'florida') || (local == null) || (local == undefined) || (local == 0) || (local == '') || (local == NaN);  
  if(local){
    modify.forEach(links => links.forEach(link => {
      var atribute = link.getAttribute("href") + '?location=' + local;
      link.setAttribute('href', atribute);
      document.querySelector('.politicas a').setAttribute('href', atribute);
    }));
  } else if(verify){
    window.location.href = './';
  }
  // =================