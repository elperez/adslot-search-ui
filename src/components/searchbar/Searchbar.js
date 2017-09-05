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
    // this.onLikeButtonClick = this.onLikeButtonClick.bind(this)
    console.log("hello", this.props.sites);
    this.state = {
      search: ""
    }
  }

  updateSearch(event) {

    this.setState({search: event.substr(0,20)});
  }

  render() {
    let filteredSites = this.props.sites.filter(
      (site) => {
        console.log("url",site.siteUrl);
        return site.siteUrl.indexOf(this.state.search) !== -1;
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
          console.log("siteurl", site.siteUrl);
          return <Site siteUrl={site.siteUrl} description={site.description}
            key={site.id}/>
        })}
      </ul>
    </div>
  }
}

export default Searchbar
