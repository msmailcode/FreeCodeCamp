function myReplace(str, before, after) {
  var re = eval('/'+before+'/g');
  if(before[0] > 'A' && before[0] < 'Z'){
    after = after.replace(after[0],after[0].toUpperCase());
  }
  var newstr = str.replace(re, after);
  return newstr;
}
