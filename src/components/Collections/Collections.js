import { useEffect } from 'react';
import { getOembed } from '../../api-calls';

const Collections = ({ collectionDet }) => {
  const [cards, setCards] = useState([...collectionDet.urls]);

  const cleanGetReq = (singleUrl) => {
    getOembed(singleUrl)
      .then(clean => {
        if (!clean.ok) {
          throw new Error('Couldn\'t retrieve that tiktok from the Oembed API' )
        } else {
          setCards([...cards, clean]);
        }
      })
      .catch(error => console.log(error))
  }

  useEffect(() => {
    cards.forEach(card => cleanGetReq(card))
    // cleanGetReq(props.toRender[0].urls[0])
  }, [])

  return (
    <section>
      { renderAllCards() }
    </section>
  )
};

export default Collections;