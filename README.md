# Adslot Search UI

`HTML` `CSS` `JavaScript` `React.JS`
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
This project aims to display site that contain a match between user-entered keywords (separated by comma) with site name and site category with user-entered keywords.

### Assumptions
* This project assumes that the data entered are correct. For example, the category numbers of the site is within range of the category list.
* It assumes that there may be a possible api call. Hence, test data was put un a JSON file to represent the data coming from an api call.

### How to run
* in terminal, run `npm install`, then run `npm start`
* to test, run `npm start`

### Technologies and frameworks used

* React.JS framework was used for quicker development and so that work can be separated according to components.
* React packages used:
[axios](https://www.npmjs.com/package/axios)
[material-ui](https://github.com/callemall/material-ui)
[material-ui-searchbar](https://www.npmjs.com/package/material-ui-search-bar)

### Approach
1. More focus was put into the logic of the searchbar than in footer/header since sarchbar functionalities has more value.
2. Material-ui searchbar was used because it closely resembles the searchbar in the sample image
3. An image was croped and used to show that there is no result found
4. Case insensitive comparison was included to be less strict when checking user entered keywords
5. Spaces was also ignored during comparison
6. Data was extracted to a json file and was read using [axios](https://www.npmjs.com/package/axios) to using `getData()` method, which can be replaced, in the future, with a method that does an actual api call to retrieve values.
7. Some methods were extracted to the lib folder for the purpose of unit testing. These include `isTermInSiteName()`, `isTermInSiteCategory`(), and `getDataFromJSON()`. Basic assertions can be tested by running `npm test`

###  Accomplished
* Basic search cases to check if there is a name and category match.

### Other tasks

- In the unit test for `getDataFromJSON()`, the data was temporarily hardcoded from inside the test file
- Nice to have: [jest + enzyme](https://www.npmjs.com/package/jest-enzyme) can be added to show assert components are displayed
- [PostCSS](https://github.com/postcss/postcss) linter tool can be added for static code analysis
- More styling and polishing needs to be performed to follow the mockup.
