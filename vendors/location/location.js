function getUrlVars(location) {
  var url_string = window.location.href.toString(); //window.location.href
  var url = new URL(url_string);
  var result = url.searchParams.get(location);
  // console.log(result);
  return result;
}
 
// Get url Variabale
var local = getUrlVars('location');
var modify = [document.querySelectorAll('.nav-item-2 > a'), document.querySelectorAll('footer .item-3 a')];
var verify = (local != 'pr') || (local != 'illinois') || (local != 'florida') || (local == null) || (local == undefined) || (local == 0) || (local == '') || (local == NaN);  
if((local === 'pr') || (local === 'illinois') || (local === 'florida')){
  modify.forEach(links => links.forEach(link => {
    var atribute = link.getAttribute("href") + '?location=' + local;
    link.setAttribute('href', atribute);
  }));
  var atribute = document.querySelector('.nav-item-1 a').getAttribute("href") + '?location=' + local;
  // document.querySelector('.nav-item-1 a').setAttribute('href', atribute);
  atribute = document.querySelector('.politicas a').getAttribute("href") + '?location=' + local;
  document.querySelector('.politicas a').setAttribute('href', atribute);
} else if(verify){
  window.location.href = './';
} else  window.location.href = './';
// =================
