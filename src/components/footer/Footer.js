import React, { Component } from 'react'
import './Footer.css';


class Footer extends Component {

  render() {
    return <div className="footer">

        <div className="footer-links">
          <div className="footer-tm">&copy; 2017 Adslot</div>
          <a className="footer-anchor" href="http://adslot.com/selling">Publisher. By Adslot</a>
          <a className="footer-anchor" href="http://adslot.com/buying">Media. By Adslot</a>
          <a className="footer-anchor" href="/terms">Terms</a>
          <a className="footer-anchor" href="/privacy">Privacy Policy</a>
          <a className="footer-anchor" href="https://media-adslot.zendesk.com/hc/en-us" target="_blank">Knowledge Base</a>
        </div>

    </div>
  }

}

export default Footer
