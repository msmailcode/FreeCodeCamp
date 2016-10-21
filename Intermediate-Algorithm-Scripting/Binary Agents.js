function binaryAgent(str) {
  str = str.replace(/\S+/g,function(e){
     return String.fromCharCode(parseInt(e,2));
  });
  str = str.replace(/  /g,'*').replace(/\s/g,'').replace(/\*/g,' ');
  return str;
}
