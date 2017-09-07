import React, { Component } from 'react';
import Site from '../site/Site';
import SearchBar from 'material-ui-search-bar';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {grey900} from 'material-ui/styles/colors';
import "./Searchbar.css";
var isTermInSiteName = require('../../lib/searchSiteNameFilter').isTermInSiteName;
var isTermInSiteCategory = require('../../lib/searchCategoryFilter').isTermInSiteCategory;
var getDataFromJSON = require('../../lib/getDataFromJSON');

const muiTheme = getMuiTheme({
  palette: {
    textColor: grey900
  }
});

class Searchbar extends Component {

  constructor(props) {
    super(props);

    this.state = {
      search: '',
      data: '',
    };
  }

  componentWillMount(){
    const setDataCopy = this.setData.bind(this);
    getDataFromJSON.getDataFromJSON("/content/data.json", setDataCopy);
  }

  setData(dat) {
    this.setState({...this.state, data: dat});
  }

  updateSearch(event) {
    this.setState({...this.state, search: event});
  }

  keyPress(event) {
    if(event.key === 'Enter')
      ;
  }

  render() {
    let filteredSites
    if (this.state.data.sites === undefined)
      filteredSites = []
    else
      filteredSites = this.state.data.sites.filter( (site) => {
        let searchArray = this.state.search.split(',');

        if (this.state.search === ""){
          return false;
        } else if (isTermInSiteName(site.siteName, searchArray) ||
          (isTermInSiteCategory(site.categoryIds, this.state.data.categories, searchArray))){
          return true;
        } else {
          return false;
        }
      });

    return <div className="searchBar">
      <MuiThemeProvider muiTheme={muiTheme}>
        <SearchBar
          value={this.state.search}
          onChange={this.updateSearch.bind(this)}
          onKeyPress={this.keyPress.bind(this)}
          onRequestSearch={this.updateSearch.bind(this)}
          style={{
            margin: '0 auto',
            maxWidth: 1200
          }}
        />
      </MuiThemeProvider>
      {filteredSites.length ?
        <ul>
          {filteredSites.map((site) => {
            return <Site siteUrl={site.siteUrl} category={site.categoryIds} description={site.description}
              key={site.id} categories={this.state.data.categories}/>
          })}
        </ul>
        : (this.state.search.length ?
        <img src={'/noresult.png'} alt='no result found' />
        : <div/>)
      }
    </div>
  }
}

export default Searchbar
