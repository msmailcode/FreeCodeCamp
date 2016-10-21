function truthCheck(collection, pre) {
  // Is everyone being true?
  for(var i = 0; i < collection.length; i++){
    if(!collection[i].hasOwnProperty(pre)) {
      return false;
    } else if(!collection[i][pre]){
      return false;
    }
  }
  return true;
}
