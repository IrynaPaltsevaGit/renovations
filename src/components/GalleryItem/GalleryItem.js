import React from 'react';

export default function GalleryItem({img}) {
  return (
    <div className='gallery__item'>
        <img className='gallery__img' src={img.src} alt="renovations" />
    </div>
  )
}
