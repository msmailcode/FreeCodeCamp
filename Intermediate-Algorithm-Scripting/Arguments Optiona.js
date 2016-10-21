function addTogether() {
  var x = arguments[0];

  function add(z){
    if(Number.isInteger(z)) {
      return x + z;
    } else {
      return undefined;
    }
  }
  if(arguments.length === 1){
    if(Number.isInteger(x)){
      return add;
    } else {
      return undefined;
    }    
  }
  y = arguments[1];
  if(!Number.isInteger(y)) {
    return undefined;
  }
  return x + arguments[1];
}
