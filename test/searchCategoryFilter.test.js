const expect = require('chai').expect
const isTermInSiteCategory = require('../src/lib/searchCategoryFilter').isTermInSiteCategory

const category = [
  {
    id: 1,
    description: "Arts & Entertainment"
  },
  {
    id: 2,
    description: "Automotive"
  },
  {
    id: 3,
    description: "Business"
  },
  {
    id: 4,
    description: "Careers"
  }
]

describe('isTermInSiteCategory', () => {
  it('should return false by default', () => {
    let searchArray = [];
    searchArray[0] = '';
    expect(isTermInSiteCategory([1], category, searchArray)).to.be.equal(false);
  })
  it('should return true if an item comma separated list is in category list', () => {
    let searchArray = ["fun", "sport", " art "];
    expect(isTermInSiteCategory([1], category, searchArray)).to.be.equal(true);
  })
  it('should return false if category list is empty', () => {
    let searchArray = ["automotive"];
    expect(isTermInSiteCategory([], category, searchArray)).to.be.equal(false);
  })
  it('should return true for case insensitive item', () => {
    let searchArray = ["enter", "sport", "artistic"];
    expect(isTermInSiteCategory([1, 2], category, searchArray)).to.be.equal(true);
  })
})
