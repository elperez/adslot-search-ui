export default function isTermInSiteUrl(siteUrl, searchArray) {
// module.export = function(siteUrl, searchArray) {

  // return true to display sites that have a name containing the term(s)
  // in searchArray
  for(let i = 0 ; i < searchArray.length ; i++){
    if (siteUrl.indexOf(searchArray[i]) !== -1){
      return true;
    }
  }
  return false;
}
