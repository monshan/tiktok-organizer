// import { useState, useEffect } from 'react';
import Independent from '../Independent/Independent';

const Collections = ({ collectionDet }) => {
  

  const renderAllCards = () => {
    return collectionDet.urls.map(url => {
      return (
      <Independent 
        key={ url.substring(23, 63) }
        tiktoksrc={ url }
      />
      )
    })
  }

  return (
    <section className="collection">
      { renderAllCards() }
    </section>
  )
};

export default Collections;