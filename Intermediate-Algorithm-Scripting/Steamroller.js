function steamrollArray(arr, flat) {
  // I'm a steamroller, baby
  /*
  var result = [];
  for(var i = 0; i < arr.length; i++){
    if(Array.isArray(arr[i])) {
      result.concat(steamrollArray(arr[i]));
    } else {
      result.push(arr[i]); 
    }
  }
  return result;
  */
  if(!flat) {
    flat = [];
  }
  arr.map(function(e){
    if(Array.isArray(e)) {
      steamrollArray(e,flat);
    } else {
      flat.push(e);
    }
  });
  return flat;
}
