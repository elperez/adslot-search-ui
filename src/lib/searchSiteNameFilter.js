export default function isTermInSiteName(siteName, searchArray) {
// module.export = function(siteName, searchArray) {

  // return true to display sites that have a name containing the term(s)
  // in searchArray
  for(let i = 0 ; i < searchArray.length ; i++){
    if (siteName.indexOf(searchArray[i]) !== -1){
      return true;
    }
  }
  return false;
}
