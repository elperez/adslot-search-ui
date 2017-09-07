const expect = require('chai').expect
const isTermInSiteName = require('../src/lib/searchSiteNameFilter').isTermInSiteName

describe('isTermInSiteName', () => {
  it('should return false by default', () => {
    let searchArray = [];
    searchArray[0] = '';
    expect(isTermInSiteName("www.surfermag.com", searchArray)).to.be.equal(false)
  })
  it('should return true if an item comma separated list is in any name', () => {
    let searchArray = ["shopping", "news", " ui "];
    expect(isTermInSiteName("Robs UI Tips", searchArray)).to.be.equal(true)
  })
  it('should return false if there is no site name', () => {
    let searchArray = ["ebay"];
    expect(isTermInSiteName("", searchArray)).to.be.equal(false)
  })
  it('should return false if there is no match in site name', () => {
    let searchArray = ["shopping", "news", "sport"];
    expect(isTermInSiteName("Robs UI Tips", searchArray)).to.be.equal(false)
  })
})
