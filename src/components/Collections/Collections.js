import { useEffect } from 'react';
import { getOembed } from '../../api-calls';

const Collections = ( props ) => {
  const []

  const cleanGetReq = (singleUrl) => {
    getOembed(singleUrl)
      .then(cleaned => {
        return <h1>{ cleaned.author_name }</h1>
      })
      .catch(error => console.log(error))
  }

  useEffect(() => {

  }, [])

  return (
    <section>
      { cleanGetReq(props.toRender[0].urls[0]) }
    </section>
  )
};

export default Collections;