# Adslot Search UI

----
## Table of contents
1. [Introduction](#introduction)
2. [Assumptions](#assumptions)
3. [How to run](#wow-to-run)
4. [Technologies and frameworks used](#technologies-and-frameworks-used)
5. [Approach](#approach)
6. [Accomplished](#accomplished)
7. [Other tasks](#other-tasks)

## Introduction
This project aims to display site that contain a match between user-entered keywords (separated by comma) with site name and category.

### Assumptions
* This project assumes that the data entered are correct. For example, the category numbers of the site is within range of the category list.
* It assumes that there may be a possible api call. Hence, test data was put un a JSON file to represent the data coming from an api call.

### How to run
* in terminal, run `npm install`, then run `npm start`
* to test, run `npm test`

### Technologies and frameworks used

* React.JS framework was used for quicker development and so that work can be separated according to components.
* React packages used:
[axios](https://www.npmjs.com/package/axios)
[material-ui](https://github.com/callemall/material-ui)
[material-ui-searchbar](https://www.npmjs.com/package/material-ui-search-bar)

### Approach
1. More focus was put into the logic of the searchbar than in footer/header since sarchbar functionalities has more value.
2. Material-ui searchbar was used because it closely resembles the searchbar in the sample image
3. An image was cropped and used to show that there is no result found
4. Case insensitive comparison was included to be less strict when checking user entered keywords
5. Spaces was also ignored during comparison
6. Data was extracted to a JSON file and was read using [axios](https://www.npmjs.com/package/axios) to using `getData()` method, which can be replaced, in the future, with a method that does an actual api call to retrieve values.
7. Some methods were extracted to the lib folder for the purpose of unit testing. These include `isTermInSiteName()`, `isTermInSiteCategory`(), and `getDataFromJSON()`. Corresponding tests are in the test folder containing basic assertions. Test can be run using `npm test` command in the terminal.

###  Accomplished
* Basic search cases to check if there is a name and category match.

### Other tasks

- In the unit test for `getDataFromJSON()`, the data was temporarily hardcoded inside the test file.
- Nice to have: [jest + enzyme](https://www.npmjs.com/package/jest-enzyme) can be added to assert the display of components.
- [ESLint](http://eslint.org) linter tool can be added for static code analysis.
- [PostCSS](https://github.com/postcss/postcss) [Autoprefixer](https://github.com/postcss/autoprefixer) plugin can be added for optimisation of css for the support of popular browsers.
- More styling and polishing needs to be performed to follow the mockup.
