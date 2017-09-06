import React, { Component } from 'react';
import Site from '../site/Site';
import SearchBar from 'material-ui-search-bar';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {grey900} from 'material-ui/styles/colors';
import isTermInSiteUrl from '../../lib/searchSiteUrlFilter';
import isTermInSiteCategory from '../../lib/searchCategoryFilter';
import './Searchbar.css';

const muiTheme = getMuiTheme({
  palette: {
    textColor: grey900
  }
});

class Searchbar extends Component {

  constructor(props) {
    super(props)
    this.state = {
      search: "",
      categories: this.props.categories
    }
    this.updateSearch = this.updateSearch.bind(this)
  }

  updateSearch(event) {
    this.setState({search: event});
  }

  render() {
    let filteredSites = this.props.sites.filter(
      (site) => {
        let searchArray = this.state.search.split(',');

        if (this.state.search === ""){
          return false;
        } else if (isTermInSiteUrl(site.siteUrl, searchArray) ||
          (isTermInSiteCategory(site.categoryIds, this.state.categories, searchArray))){
          return true;
        } else {
          return false;
        }
      }
    );

    return <div className="searchBar">
      <MuiThemeProvider muiTheme={muiTheme}>
        <SearchBar
          value={this.state.search}
          onChange={this.updateSearch}
          onRequestSearch={this.updateSearch}
          style={{
            margin: '0 auto',
            maxWidth: 800,
            Width: 600
          }}
        />
      </MuiThemeProvider>
      <ul>
        {filteredSites.map((site) => {
          return <Site siteUrl={site.siteUrl} category={site.categoryIds} description={site.description}
            key={site.id} categories={this.state.categories}/>
        })}
      </ul>
    </div>
  }
}

export default Searchbar
