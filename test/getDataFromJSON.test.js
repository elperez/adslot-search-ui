const expect = require('chai').expect
const assert = require('chai').assert
const getDataFromJSON = require('../src/lib/getDataFromJSON').getDataFromJSON

const data = {
  "sites" : [
    {
      "id": 1,
      "siteName": "SurferMag",
      "siteUrl": "www.surfermag.com",
      "description": "This is the description for SurferMag",
      "categoryIds": [
        2
      ]
    },
    {
      "id": 2,
      "siteName": "Ebay",
      "siteUrl": "www.ebay.com.au",
      "description": "This is the description for ebay",
      "categoryIds": [
        1
      ]
    },
    {
      "id": 3,
      "siteName": "Robs UI Tips",
      "siteUrl": "www.awesomeui.com.au",
      "description": "This is the description for the best site in the world. It is the best:)",
      "categoryIds": [
        4, 3
      ]
    },
    {
      "id": 4,
      "siteName": "Table Tennis Tips - How to not come runners up",
      "siteUrl": "www.ttt.com",
      "description": "This is the description for Table Tennis Tips",
      "categoryIds": [
        1, 2, 3, 4
       ]
    }
  ],
  
  "categories": [
    {
      "id": 1,
      "description": "Arts & Entertainment"
    },
    {
      "id": 2,
      "description": "Automotive"
    },
    {
      "id": 3,
      "description": "Business"
    },
    {
      "id": 4,
      "description": "Careers"
    }
  ]
}

describe('getDataFromJSON', () => {
    it('siteName is vaild', () => {
        for(let i = 0; i < data.sites.length; i ++)
            assert.isNotNull(data.sites[i].siteName);
    })
    it('description is vaild', () => {
        for(let i = 0; i < data.sites[i].length; i ++)
            assert.isNotNull(data.sites[i].description);
    })
    it('url is vaild', () => {
        for(let i = 0; i < data.sites[i].length; i ++)
            assert.isNotNull(data.sites[i].url);
    })
    it('category ids is vaild', () => {
        for(let i = 0; i < data.sites[i].length; i ++)
            assert.isNotNull(data.sites[i].categoryIds);
    })
    it('category length is vaild', () => {
        expect(data.categories.length).to.equal(4);
    })
})