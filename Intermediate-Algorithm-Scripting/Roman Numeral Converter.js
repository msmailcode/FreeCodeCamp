function convertToRoman(num) {
  var copy = num;
  var th = Math.floor(num / 1000);
  num = num - th * 1000;
  var hu = Math.floor(num / 100);
  num = num - hu * 100;
  var te = Math.floor(num / 10);
  num = num - te * 10;
  var on = num;
  var ona = [0,'I','II','III','IV','V','VI','VII','VIII','IX'];
  console.log(ona);
  var tea = [0,'X','XX','XXX','XL','L','LX','LXX','LXXX','XC'];
  var hua = [0,'C','CC','CCC','CD','D','DC','DCC','DCCC','CM'];
  var tha = 'M';
  var result ='';
  if(th > 0){
    for(var i = 0; i < th; i++){
      result += tha;
    }
  }
  if(hu > 0){
  	result += hua[hu];
  }
  if(te > 0){
  	result += tea[te];
  }
  if(on > 0){
  	result += ona[on];
  }   
  return result;
}
