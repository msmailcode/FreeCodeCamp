function palindrome(str) {
  // Good luck!
  str = str.replace(/[\W_]+/gi,"").toLowerCase();
  var len = str.length;
  for(var i = 0; i < len / 2 + 1; i++){
    if(str[i] !== str[len - i -1]){
      return false;
    }
  }
  return true;
}
