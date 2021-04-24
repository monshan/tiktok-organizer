import { useState, useEffect } from 'react';
import Independent from '../Independent/Independent';

const Collections = ({ collectionDet }) => {
  const [cardUrls, setCardUrls] = useState([...collectionDet.urls]);

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
    return cardUrls.map(url => {
      return (
      <Independent 
        key={ url.substring(23, 63) }
        url={ url }
      />
      )
    })
  }

  // useEffect(() => {
    
  // }, [cardUrls])

  return (
    <section>
      { renderAllCards() }
    </section>
  )
};

export default Collections;