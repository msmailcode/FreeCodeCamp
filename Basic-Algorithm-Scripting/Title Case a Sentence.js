function titleCase(str) {
  str = str.toLowerCase();
  var arr = str.split(" ");
  for(var i = 0; i < arr.length; i++){
    arr[i] = arr[i].replace(arr[i][0],arr[i][0].toUpperCase());
  }
  str = arr.join(" ");
  return str;
}
