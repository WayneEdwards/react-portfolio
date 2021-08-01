import React from 'react';

function workItems({ title, desc, link, img: { src, alt } }) {
  return (
    <div className="work-items">
      <div className="work-item-title">
        <p>{title}</p>
        <p>{desc}</p>
      </div>
      <a href={link}>
        <img src={src} alt={alt} />
      </a>
    </div>
  )
}

export default workItems;