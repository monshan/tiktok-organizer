import getOembed from '../../api-calls';

const Collections = ({ toRender }) => {

  const cleanGetReq = (singleUrl) => {
    getOembed(singleUrl)
      .then(result => result.html)
      .catch(error => console.log(error))
  }

  return (
    <section>
      { cleanGetReq(toRender.urls[0]) }
    </section>
  )
};

export default Collections;