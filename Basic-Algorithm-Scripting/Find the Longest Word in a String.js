function findLongestWord(str) {
  var arr = str.split(" ");
  var len = 0;
  for(var i = 0; i < arr.length; i++){
    len = len < arr[i].length? arr[i].length: len;
  }
  return len;
}
