import getOembed from '../../api-calls';

const Collections = ( props ) => {

  const cleanGetReq = (singleUrl) => {
    getOembed(singleUrl)
      .then(cleaned => cleaned)
      .catch(error => console.log(error))
  }

  return (
    <section>
      { cleanGetReq(props.toRender[0].urls[0]) }
    </section>
  )
};

export default Collections;