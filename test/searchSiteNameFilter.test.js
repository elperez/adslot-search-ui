const expect = require('chai').expect
const isTermInSiteName = require('../src/lib/searchSiteNameFilter').isTermInSiteName

describe('isTermInSiteName', () => {
  it('should return false by default', () => {
    let searchArray = [];
    searchArray[0] = '';
    expect(isTermInSiteName("www.surfermag.com", searchArray)).to.be.equal(false)
  })
  it('scenario 1', () => {
    let searchArray = ["shopping", "news", " ui "];
    expect(isTermInSiteName("Robs UI Tips", searchArray)).to.be.equal(true)
  })
  it('scenario 2', () => {
    let searchArray = ["ebay"];
    expect(isTermInSiteName("", searchArray)).to.be.equal(false)
  })
  it('scenario 3', () => {
    let searchArray = ["shopping", "news", "sport"];
    expect(isTermInSiteName("Robs UI Tips", searchArray)).to.be.equal(false)
  })
})