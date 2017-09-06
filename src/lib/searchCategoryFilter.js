exports.isTermInSiteCategory = function(categoryIds, categoryList, searchArray) {
  // Return true to display sites that have a category containing the term
  for (let i = 0; i < categoryIds.length; i ++){
    let categoryNumber = categoryIds[i];
    let categoryFromList = categoryList[categoryNumber-1];
    let categoryDescription = (String)(categoryFromList.description).toLowerCase();
    for(let j = 0; j < searchArray.length; j ++){
      searchArray[j] = searchArray[j].trim().toLowerCase();
      if(!searchArray[j].length)
        continue;
      if (categoryDescription.indexOf(searchArray[j]) !== -1) {
        return true;
      }
    }
  }
  return false;
}