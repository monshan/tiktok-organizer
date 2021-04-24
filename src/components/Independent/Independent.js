const Independent = ({ title, author_name, html, thumbnail_url }) => {
  return (
    <Card>
      <h2>{ title }</h2>
      <p>{ author_name }</p>
      <img src={ thumbnail_url } />
    </Card>
  )
}



export default Independent;