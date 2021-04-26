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
  // const [title, setTitle] = useState('');
  // const [author, setAuthor] = useState('');
  const [thumbnail, setThumbnail] = useState('');
  const [isPinned, setPin] = useState(false);
  const [error, setError] = useState('');

  const togglePin = () => {
    isPinned ? setPin(false) : setPin(true)
  }

  const adjustHomeRender = () => {
    if (isPinned) {
      addPin(tiktoksrc);
    }
  }

  const handleBookmark = () => {
    togglePin();
  }

  // const determinePin = () => {
  //   isPinned ? addPin(tiktoksrc) : removePin(tiktoksrc)
  // }

  useEffect(() => {
    getOembed(tiktoksrc)
      .then(oembed => {
        // setTitle(oembed.title);
        // setAuthor(oembed.author_name);
        setThumbnail(oembed.thumbnail_url);
        adjustHomeRender();
      })
      .catch(error => setError(error))
  }, [tiktoksrc, isPinned, error])

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
        {/* <CardContent>
          {error && <Typography variant="h3">{ error }</Typography> }
          <Typography variant="h5">
            { title }
          </Typography>
          <Typography variant="subtitle1">
            { author }
          </Typography>
        </CardContent> */}
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