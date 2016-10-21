/*
http://stackoverflow.com/questions/147515/least-common-multiple-for-3-or-more-numbers
*/
function smallestCommons(arr) {
  var range = [];
  arr.sort(function(a,b){
    return a-b;
  });
  for(var i = arr[0]; i <= arr[1]; i++){
    range.push(i);
  }
  var result = 0;
  result = range.reduce(lcm);
  return result;
}

//least commin multiple
function lcm(a, b) {
  return a * b / gcd(a, b);
}

//greatest common division
function gcd(a, b) {
  var i = 0;
  while(b !== 0){
    i = b;
    b = a % b;
    a = i;
  }
  return a;
}
