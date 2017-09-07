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
  it('scenario 1', () => {
    let searchArray = ["fun", "sport", " art "];
    expect(isTermInSiteCategory([1], category, searchArray)).to.be.equal(true);
  })
  it('scenario 2', () => {
    let searchArray = ["automotive"];
    expect(isTermInSiteCategory([], category, searchArray)).to.be.equal(false);
  })
  it('scenario 3', () => {
    let searchArray = ["enter", "sport", "artistic"];
    expect(isTermInSiteCategory([1, 2], category, searchArray)).to.be.equal(true);
  })
})
