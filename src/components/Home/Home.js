import Independent from '../Independent/Independent';
import { Grid } from '@material-ui/core';

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
    <Grid
      container
      spacing={1}
      justify="center"
      alignItems="center"
      children={ renderAsCards() }
    />
  )
}

export default Home;