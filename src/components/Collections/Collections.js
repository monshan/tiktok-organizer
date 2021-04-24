import { useEffect } from 'react';
import { getOembed } from '../../api-calls';

const Collections = ( props ) => {
  const [cards, setCards] = useState([...props.toRender]);

  const loopToRender = () => {
    return cards.map(card => {
      return (
        <h2>{ card.author_name }</h2>
      )
    })
  }

  const cleanGetReq = (singleUrl) => {
    getOembed(singleUrl)
      .then(cleaned => {
        if (!cleaned.ok) {
          throw new Error('Couldn\'t retrieve that tiktok from the Oembed API' )
        } else {
          setCards([...cards, cleaned]);
        }
      })
      .catch(error => console.log(error))
  }

  // useEffect(() => {

  // }, [])

  return (
    <section>
      { cleanGetReq(props.toRender[0].urls[0]) }
    </section>
  )
};

export default Collections;