import Independent from '../Independent/Independent';
import { Grid } from '@material-ui/core';
import { useEffect, useState } from 'react';

const Home = ({ initTikToks }) => {
  const [order, setOrder] = useState([...initTikToks]);

  const addPin = (url) => {
    console.log(url)
    console.log(order)
    console.log(order.find(tiktok => tiktok.url === url))
    // order[order.indexOf(tiktok => tiktok.url === url)].isPinned = true;
    // setOrder([...order]);
  }

  const removePin = (url) => {
    console.log(url)
    console.log(order)
    console.log(order.find((tiktok => tiktok.url === url))
    // order[order.indexOf(tiktok => tiktok.url === url)].isPinned = false;
    // setOrder([...order])
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
    });
    setOrder([...inOrder]);
  }

  const renderAsCards = () => {
    return order.map(tiktok => {
      return (
        <Independent 
          key={ tiktok.url.substring(23, 63) }
          tiktoksrc={ tiktok.url }
          addPin={ addPin }
          removePin={ removePin }
          // sortIfPinned={ sortIfPinned }
        />
      )
    })
  }

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