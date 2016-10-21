function rot13(str) { // LBH QVQ VG!
  var decode;
  return str.replace(/[A-Z]/g,function(c){
    decode = c.charCodeAt(0);
    return String.fromCharCode(decode = decode > 77 ? decode - 13: decode + 13);
  });
  
}
