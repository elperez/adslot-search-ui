import React, { Component } from 'react';
import Header from './header/Header';
import Footer from './footer/Footer';
import Searchbar from './searchbar/Searchbar';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <div className="container-body">
          <Searchbar />
        </div>
        <Footer/>
      </div>
    );
  }
}

export default App;
