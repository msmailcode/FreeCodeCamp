function dropElements(arr, func) {
  // Drop them elements.
  var i = 0;
  while(!func(arr[0])) {
    arr.shift();
  }
  return arr;
}
