export default function isTermInSiteCategory(categoryIds, categoryList, searchArray) {

  // Return true to display sites that have a category containing the term
  for (let i = 0; i < categoryIds.length; i++){
    let categoryNumber = categoryIds[i];
    let categoryFromList = categoryList[categoryNumber-1];
    let categoryDescription = categoryFromList.description;
    for(let j = 0; j < searchArray.length; j ++){
      if (categoryDescription.indexOf(searchArray[j]) !== -1) {
        return true;
      }
    }
  }
  return false;
}
