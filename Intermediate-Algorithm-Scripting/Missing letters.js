function fearNotLetter(str) {
  var start = str.charCodeAt(0);
  var end = str.charCodeAt(str.length - 1);
  var char;
  for(var i = start; i < end; i++) {
    if(str.indexOf(String.fromCharCode(i)) !== -1) {
      continue;
    } else {
      char = String.fromCharCode(i);
      break;
    }
  }
  return char;
}
