import React from 'react'
import './Site.css'

const Site = (site) => {
  const siteUrl = site.siteUrl;
  const description = site.description;

  return (
    <div>
      <a href={siteUrl}>{siteUrl} </a>
      <p>{description}</p>
    </div>
  )
}

export default Site
