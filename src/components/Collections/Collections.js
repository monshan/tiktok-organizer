// import { useState, useEffect } from 'react';
import Independent from '../Independent/Independent';

const Collections = ({ collectionDet }) => {
  // const cleanGetReq = async (singleUrl) => {
  //   try {
  //     const response = await fetch(`https://www.tiktok.com/oembed?url=${singleUrl}`);
  //     const cardDetails = response.json();
  //     setCards([...cards, cardDetails])
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }

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