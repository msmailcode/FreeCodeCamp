function spinalCase(str) {
  // "It's such a fine line between stupid, and clever."
  // --David St. Hubbins
  /*
  str = str.replace(/[_\s]/g,"");
  str = str.replace(/[A-Z]/g,function(e){
    if(str.indexOf(e) === 0){
      return e.toLowerCase();
    }
    return "-" + e.toLowerCase();
  });
  return str;
  */
  str = str.replace(/[_\s]/g, '-');
  str = str.replace(/-[A-Z]/g,function(e){
  	return e.toLowerCase();
  });
  str = str.replace(/[A-Z]/g,function(e,offset){
  	if(offset !==0){
    	return '-' + e;
    }
    return e;
  });
  str = str.toLowerCase();
  return str;
}
