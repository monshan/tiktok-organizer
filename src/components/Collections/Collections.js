import { useState, useEffect } from 'react';
import { getOembed } from '../../api-calls';
import Independent from '../Independent/Independent';

const Collections = ({ collectionDet }) => {
  const [cards, setCards] = useState([]);

  const cleanGetReq = async (singleUrl) => {
    try {
      const response = await fetch(`https://www.tiktok.com/oembed?url=${singleUrl}`);
      const cardDetails = response.json();
      setCards([...cards, cardDetails])
    } catch (error) {
      console.log(error)
    }
    // getOembed(singleUrl)
    //   .then(clean => {
    //     if (!clean.ok) {
    //       throw new Error('Couldn\'t retrieve that tiktok from the Oembed API' )
    //     } else {
    //       setCards([...cards, clean]);
    //     }
    //   })
    //   .catch(error => console.log(error))
  }

  const renderAllCards = () => {
    return cards.map(({ title, author_name, html, thumbnail_url }) => {
      return (
      <Independent 
        key={ `independent-${ Date.now() }` }
        title={ title }
        author_name={ author_name }
        html={ html }
        thumbnail_url={ thumbnail_url }
      />
      )
    })
  }

  useEffect(() => {
    getOembed('https://www.tiktok.com/@icedbrock/video/6954098959128300806?lang=en&is_copy_url=0&is_from_webapp=v1&sender_device=pc&sender_web_id=6925894707823576582')
      .then(result => setCards([...cards, result]))
  }, [])

  return (
    <section>
      { renderAllCards() }
    </section>
  )
};

export default Collections;