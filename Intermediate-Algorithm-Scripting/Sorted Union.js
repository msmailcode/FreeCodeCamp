function uniteUnique(arr) {
  var args = Array.prototype.slice.call(arguments);
  args = args.reduce(function(pre, cur){
    return pre.concat(cur);
  });
  args = args.filter(function(e, index){
    return args.indexOf(e) === index;
  });
  return args;
}
