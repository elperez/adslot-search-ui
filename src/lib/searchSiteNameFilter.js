exports.isTermInSiteName = function(siteName, searchArray) {
// module.export = function(siteName, searchArray) {

  // return true to display sites that have a name containing the term(s)
  // in searchArray
  siteName = String(siteName).toLowerCase();
  for(let i = 0 ; i < searchArray.length ; i++){
    searchArray[i] = searchArray[i].trim().toLowerCase()
    if(!searchArray[i].length)
      continue;
    if (siteName.indexOf(searchArray[i]) !== -1){
      return true;
    }
  }
  return false;
}
