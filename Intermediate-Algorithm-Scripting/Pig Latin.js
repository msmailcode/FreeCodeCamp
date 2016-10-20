function translatePigLatin(str) {
  var vowel = ['a','e','i','o','u'];
  if(vowel.indexOf(str[0]) !== -1) {
    str = str + 'way';
  } else {
    var len = 1;
    for(var i = 1; i < str.length; i++){
      if(vowel.indexOf(str[i]) !== -1){
        len = i;
        break;
      }
    }
    var s0 = str.substr(0, len);
    var sub = str.substr(len);
    str = sub + s0 + 'ay';
  }
  return str;
}
