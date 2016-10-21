function sumPrimes(num) {
  var sum = 0;
  for(var i = 1; i <= num; i++){
    sum = isPrime(i) ? sum + i : sum;
  }
  return sum;
}

function isPrime(num) {
  if(num < 2) {
    return false;
  }
  if(num == 2) {
    return true;
  }
  var sq = Math.sqrt(num);
  for(var i = 2; i <= sq; i++){
    if(num % i === 0) {
      return false;
    }
  }
  return true;
}
