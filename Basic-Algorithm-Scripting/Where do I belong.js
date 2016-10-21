function getIndexToIns(arr, num) {
  // Find my place in this sorted array.
  arr.sort(function(a,b){
    return a - b;
  });
  var index = 0;
  var i = 0;
  while(i < arr.length){
    if(num <= arr[i]){
      index = i;
      break;
    } else {
      index = i + 1;
    }
    i++;
    
  }
  return index;
}
