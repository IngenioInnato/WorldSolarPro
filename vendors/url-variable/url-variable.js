function getUrlVars(location) {
  var url_string = window.location.href.toString(); //window.location.href
  var url = new URL(url_string);
  var result = url.searchParams.get(location);
  // console.log(result);
  return result;
}