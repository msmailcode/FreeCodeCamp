function convertHTML(str) {
  // &colon;&rpar;
  var arr = ['&','<','>','"',"'"];
  var map = [['&','&amp;'],['<','&lt;'],['>','&gt;'],['"','&quot;'],["'",'&apos;']];
  str = str.replace(/[&<>"']/g,function(html){
    return map[arr.indexOf(html)][1];
  });
  return str;
}
