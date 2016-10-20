function sumAll(arr) {
  var sum = [];
  for(var i = Math.min(arr[0],arr[1]); i <= Math.max(arr[0],arr[1]); i++) {
    sum.push(i);
  }
  
  return sum.reduce(function(pre,cur){
    return pre + cur;
  });
}
