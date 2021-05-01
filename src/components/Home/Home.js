import Independent from '../Independent/Independent';
import PropTypes from 'prop-types';
import { Grid } from '@material-ui/core';
import { useEffect, useState } from 'react';

const Home = ({ searchHome, removeTikTok, addPin, removePin }) => {
  // const convertToPinObjects = searchHome.map(tiktok => {
  //   return {
  //     ...tiktok,
  //     isPinned: false
  //   }
  // })
  
  // const [order, setOrder] = useState([...convertToPinObjects]);

  const renderAsCards = () => {
    return searchHome.map(({
      cite,
      title,
      author_url,
      author_name,
      html,
      data_video_id,
      thumbnail_url,
      status_msg
    }) => {
      return (
        <Independent 
          key={ data_video_id }
          cite={ cite }
          data_video_id={ data_video_id }
          title={ title }
          author_name={ author_name }
          author_url={ author_url }
          html={ html }
          thumbnail_url={ thumbnail_url }
          status_msg={ status_msg }
          removeTikTok={ removeTikTok }
          addPin={ addPin }
          removePin={ removePin }
        />
      )
    })
  }

  // useEffect(() => {
  //   setOrder([...convertToPinObjects])
  // }, [searchHome]);

  return (
    <Grid
      container
      spacing={2}
      justify="center"
      alignItems="center"
      children={ renderAsCards() }
      id="gridContainer"
    />
  )
}

export default Home;

// Home.propTypes = {
//   initTikToks: PropTypes.array.isRequired
// }