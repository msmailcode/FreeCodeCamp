function diffArray(arr1, arr2) {
  var newArr = [];
  // Same, same; but different.
  var na1 = arr1.filter(function(e){
    return arr2.indexOf(e) === -1;
  });
  var na2 = arr2.filter(function(e){
    return arr1.indexOf(e) === -1;
  });
  newArr = na1.concat(na2);
  return newArr;
}
