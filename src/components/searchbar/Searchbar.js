import React, { Component } from 'react';
import Site from '../site/Site';
import SearchBar from 'material-ui-search-bar';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {grey900} from 'material-ui/styles/colors';
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
  }

  updateSearch(event) {
    this.setState({search: event});
  }

  render() {
    let filteredSites = this.props.sites.filter(
      (site) => {
        let searchArray = this.state.search.split(',');

        // return true to display sites that have a name containing the term(s)
        // in searchArray
        for(let i = 0 ; i < searchArray.length ; i++){
          if (site.siteUrl.indexOf(searchArray[i]) !== -1){
            return true;
          }
        }

        // return true to display sites that have a name or category containing
        // the term 
        for (let i = 0; i < site.categoryIds.length; i++){
          let categoryNumber = site.categoryIds[i];
          let categoryFromList = this.state.categories[categoryNumber-1];
          let categoryDescription = categoryFromList.description;
          if (categoryDescription.indexOf(searchArray[i]) !== -1){
            return true;
          }
        }
        return false
      }
    );

    return <div className="searchBar">
      <MuiThemeProvider muiTheme={muiTheme}>
        <SearchBar
          value={this.state.search}
          onChange={this.updateSearch.bind(this)}
          onRequestSearch={this.updateSearch.bind(this)}
          style={{
            margin: '0 auto',
            maxWidth: 800
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
