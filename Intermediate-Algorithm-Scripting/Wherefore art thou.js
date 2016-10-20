function whatIsInAName(collection, source) {
  // What's in a name?
  var arr = [];
  // Only change code below this line
  var keys = Object.keys(source);
  for(var i = 0; i < collection.length; i++){
    var flag = false;
    for(var k = 0; k < keys.length; k++){
      if(collection[i].hasOwnProperty(keys[k])){
        if(collection[i][keys[k]] === source[keys[k]]){
          flag = true;
        } else {
          flag = false;
        }
      } else {
          flag = false;
        }
    }
    
    if(flag === true){
      arr.push(collection[i]);
    }
    
  }
  
  // Only change code above this line
  return arr;
}
