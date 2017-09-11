# Adslot Search UI

----
## Table of contents
1. [Introduction](#introduction)
2. [Assumptions](#assumptions)
3. [How to run](#wow-to-run)
4. [Tests](#tests)
5. [Sample Data](#sample-data)
6. [Technologies and frameworks used](#technologies-and-frameworks-used)
7. [Approach](#approach)
8. [Accomplished](#accomplished)
9. [Other tasks](#other-tasks)

## Introduction
This project aims to display site that contain a match between user-entered keywords (separated by comma) with site name and category.

### Assumptions
* This project assumes that the data entered are correct. For example, the category numbers of the site is within range of the category list.
* It assumes that there may be a possible api call. Hence, test data was put in a JSON file to represent the data coming from an api call.

### How to run
- Ensure [NPM](https://www.npmjs.com/) is installed
- Install [Webpack](https://webpack.github.io/) globally with `npm install -g webpack webpack-dev-server`
- `cd` into the app directory in the terminal/command line
- Run `npm install`, then run `npm start`

### Tests
 - Tests can be run by executing `npm test` in the root directory

### Sample data
The above tests uses the a sample data that was given. Descriptions were modified to add length and be longer.
The sample data was stored in a data.json file. Below is the sample data:
```
Structure of data:
sites = [
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
]

categories = [
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
```

### Technologies and frameworks used

* React.JS framework was used for quicker development and so that work can be separated according to components.
* React packages used:
[axios](https://www.npmjs.com/package/axios)
[material-ui](https://github.com/callemall/material-ui)
[material-ui-searchbar](https://www.npmjs.com/package/material-ui-search-bar)
[mocha](https://www.npmjs.com/package/mocha)
[chai](https://www.npmjs.com/package/chai)

### Approach
1. More focus was put into the logic of the searchbar than in footer/header since sarchbar functionalities has more value.
2. Material-ui searchbar was used because it closely resembles the searchbar in the sample image
3. An image was cropped and used to show that there is no result found
4. Case insensitive comparison was included to be less strict when checking user entered keywords
5. Spaces was also ignored during comparison
6. Data was extracted to a JSON file and was read using [axios](https://www.npmjs.com/package/axios) to using `getData()` method, which can be replaced, in the future, with a method that does an actual api call to retrieve values.
7. Some methods were extracted to the lib folder for the purpose of unit testing. These include `isTermInSiteName()`, `isTermInSiteCategory`(), and `getDataFromJSON()`. Corresponding tests are in the test folder containing basic assertions. Test can be run using `npm test` command in the terminal.

###  Accomplished
* The following search requirements were implemented:
  - displays items that match site name or category name.
  - search is fired on change in searchbar
  - displays no match found when there is no match found
  - handles comma-separated keywords (e.g. "Dogs and Cats, Frogs" will return sites that have a name or category containing the term 'Dogs and Cats' or 'Frogs'.)
* Unit Test cases were added for checking
  - unit test for checking if terms given is in site name or category
  - retrieval of test case from json (e.g. assert that there are four categories)

### Other tasks

- In the unit test for `getDataFromJSON()`, the data was temporarily hardcoded inside the test file.
- Nice to have: [jest + enzyme](https://www.npmjs.com/package/jest-enzyme) can be added to assert the display of components.
- [ESLint](http://eslint.org) linter tool can be added for static code analysis.
- [PostCSS](https://github.com/postcss/postcss) [Autoprefixer](https://github.com/postcss/autoprefixer) plugin can be added for optimisation of css for the support of popular browsers.
- More styling and polishing needs to be performed to follow the mockup.
