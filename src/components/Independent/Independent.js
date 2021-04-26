import { 
  Grid,
  Card,
  // CardContent,
  CardMedia,
  CardActions,
  // Typography,
  IconButton
} from '@material-ui/core';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import LibraryAddIcon from '@material-ui/icons/LibraryAdd';
import { useEffect, useState } from 'react';
import { getOembed } from '../../api-calls';

const Independent = ({ tiktoksrc, addPin, removePin }) => {
  const [thumbnail, setThumbnail] = useState('');
  const [isPinned, setPin] = useState(false);
  const [error, setError] = useState('');

  const togglePin = () => {
    isPinned ? setPin(false) : setPin(true);
  }

  const adjustHomeRender = () => {
    if (isPinned) {
      return addPin(tiktoksrc);
    }

    if (!isPinned) {
      return removePin(tiktoksrc);
    }
  }

  const handleBookmark = () => {
    togglePin();
    adjustHomeRender();
  }

  // const determinePin = () => {
  //   isPinned ? addPin(tiktoksrc) : removePin(tiktoksrc)
  // }

  useEffect(() => {
    getOembed(tiktoksrc)
      .then(oembed => {
        setThumbnail(oembed.thumbnail_url);
      })
      // .then(() => {
      //   adjustHomeRender();
      // })
      .catch(error => setError(error))
  }, [tiktoksrc, error])

  return (
    <Grid
      item
      lg={2}
      md={3}
      sm={4}
      xs={6}
    >
      <Card
        elevation={6}
      >
        <CardMedia image={ thumbnail } component="img"/>
        <CardActions>
          <IconButton>
            <LibraryAddIcon />
          </IconButton>
          <IconButton
            onClick={() => handleBookmark()}
          >
            { isPinned ? <BookmarkIcon /> : <BookmarkBorderIcon />}
          </IconButton>
        </CardActions>
      </Card>
    </Grid>
  )
}

export default Independent;