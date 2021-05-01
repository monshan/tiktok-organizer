import { 
  Grid,
  Card,
  CardContent,
  CardMedia,
  CardActions,
  IconButton,
  Typography
} from '@material-ui/core';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import DeleteIcon from '@material-ui/icons/Delete';
import { useEffect, useState } from 'react';
import { getOembed } from '../../api-calls';
import PropTypes from 'prop-types';


const Independent = ({
  cite,
  title,
  author_url,
  author_name,
  html,
  data_video_id,
  thumbnail_url,
  status_msg,
  removeTikTok,
  addPin,
  removePin
  }) => {
  const [isPinned, setPin] = useState(false);

  const togglePin = () => {
    if (isPinned) {
      setPin(false);
      return removePin(data_video_id);
    }

    if (!isPinned) {
      setPin(true);
      return addPin(data_video_id);
    }
  }

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
        {status_msg 
        ? <CardContent>
            <p>Not able to load this tiktok, please check your path url</p>
            <p>{ cite }</p>
            {/* <Typography noWrap={true}> 
              { cite }
            </Typography> */}
          </CardContent>
        : <>
            <CardMedia 
              image={ thumbnail_url }
              component="img"
              aria-label={ `Thumbnail of ${ title }` }
            />
            <CardContent>
              {author_name && <p className="author">@{ author_name }</p>}
              {title && <p className="title">{ title }</p>}
            </CardContent>
          </>
        }
        <CardActions>
          <IconButton
            onClick={() => togglePin()}
            className="pin-icon"
            aria-label={ `${title} pin button` }
          >
            { isPinned ? <BookmarkIcon /> : <BookmarkBorderIcon />}
          </IconButton>
          <IconButton
            onClick={() => removeTikTok(data_video_id)}
            className="trash-icon"
            aria-label={ `${title} remove button` }
          >
            <DeleteIcon />
          </IconButton>
        </CardActions>
      </Card>
    </Grid>
  )
}

export default Independent;

// Independent.propTypes = {
//   tiktoksrc: PropTypes.string.isRequired,
//   addPin: PropTypes.func.isRequired,
//   removePin: PropTypes.func.isRequired
// }