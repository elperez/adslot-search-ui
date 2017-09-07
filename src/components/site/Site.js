import React from 'react'
import './Site.css'

const Site = (site) => {
  const siteUrl = site.siteUrl;
  const description = site.description;

  return (
    <div className="site-container">
      <a className="site-url" href={siteUrl}>{siteUrl} </a>
      <p className="site-description">{description}</p>
    </div>
  )
}

export default Site
