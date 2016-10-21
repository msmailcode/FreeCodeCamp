function bouncer(arr) {
  // Don't show a false ID to this bouncer.
  arr = arr.filter(function(val){
    return Boolean(val);
  });
  return arr;
}
