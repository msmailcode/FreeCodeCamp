function repeatStringNumTimes(str, num) {
  // repeat after me
  if(num <= 0){
    str = "";
    return str;
  }
  var re = str;
  for(var i = 1; i < num; i++){
    str = String(str+re);
  }
  return str;
}
