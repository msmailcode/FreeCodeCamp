function destroyer(arr) {
  // Remove all the values
  var param = [];
  for(var i = 1; i < arguments.length; i++) {
    param.push(arguments[i]);
  }
  arr = arr.filter(function(val){
    return param.indexOf(val) < 0 ? true: false;
  });
  return arr;
}
