function largestOfFour(arr) {
  // You can do this!  
  arr.map(function(val){
    val.sort(function(a,b){
      return a-b;
    });
  });
	var result=[];
  for(var i = 0; i < arr.length; i++){
  	result.push(arr[i][3]);
  }
  return result;
}
