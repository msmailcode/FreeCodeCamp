function pairElement(str) {
  var arr = [['A','T'], ['T','A'], ['C','G'], ['G','C']];
  var char = ['A', 'T', 'C', 'G'];
  var stra = str.split("");
  var result = [];
  for (var i = 0; i < stra.length; i++){
    result.push(arr[char.indexOf(stra[i])]);
  }
  return result;
}
