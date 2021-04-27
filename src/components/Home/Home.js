import Independent from '../Independent/Independent';
import PropTypes from 'prop-types';
import { Grid } from '@material-ui/core';
import { useEffect, useState } from 'react';

const Home = ({ initTikToks, removeTikTok }) => {
  const convertToPinObjects = initTikToks.map(tiktok => {
    return {
      url: tiktok,
      isPinned: false
    }
  })
  
  const [order, setOrder] = useState([...convertToPinObjects]);

  const addPin = (url) => {
    order[order.findIndex((tiktok) => tiktok.url === url)].isPinned = true;
    sortIfPinned();
  }

  const removePin = (url) => {
    order[order.findIndex((tiktok) => tiktok.url === url)].isPinned = false;
    sortIfPinned();
  }

  const sortIfPinned = () => {
    const inOrder = order.sort((a, b) => {
      if (a.isPinned === b.isPinned) {
        return 0;
      }
      if (!a.isPinned && b.isPinned) {
        return 1;
      }
      if (a.isPinned && !b.isPinned) {
        return (-1);
      }
      return 0;
    });
    setOrder([...inOrder]);
  }

  const renderAsCards = () => {
    return order.map(tiktok => {
      return (
        <Independent 
          key={ tiktok.url.substring(23, 63) }
          tiktoksrc={ tiktok.url }
          removeTikTok={ removeTikTok }
          addPin={ addPin }
          removePin={ removePin }
        />
      )
    })
  }

  useEffect(() => {
    setOrder([...convertToPinObjects])
  }, [initTikToks])

  return (
    <Grid
      container
      spacing={2}
      justify="center"
      alignItems="center"
      children={ renderAsCards() }
    />
  )
}

export default Home;

Home.propTypes = {
  initTikToks: PropTypes.array.isRequired
}