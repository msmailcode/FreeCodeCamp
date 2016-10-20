function sumFibs(num) {
  var sum = 2;
  var f0, f1;
  f0 = f1 = 1;
  var f2 = f0 + f1;
  while(f2 <= num){
    sum = f2 % 2 ===1 ? sum + f2 : sum;
    f0 = f1;
    f1 = f2;
    f2 = f0 +f1;
  }
  return sum;
}
