import Independent from '../Independent/Independent';

const Home = ({ initTikToks }) => {
  const renderAsCards = () => {
    return initTikToks.map(url => {
      return (
        <Independent 
          key={ url.substring(23, 63) }
          tiktoksrc={ url }
        />
      )
    })
  }

  return (
    <section>
      { renderAsCards() }
    </section>
  )
}

export default Home;