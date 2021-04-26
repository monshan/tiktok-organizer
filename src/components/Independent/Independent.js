import { Grid, Card, CardContent, CardMedia, Typography } from '@material-ui/core';
import { useEffect, useState } from 'react';
import { getOembed } from '../../api-calls';

const Independent = ({ tiktoksrc }) => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [thumbnail, setThumbnail] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    getOembed(tiktoksrc)
      .then(oembed => {
        setTitle(oembed.title);
        setAuthor(oembed.author_name);
        setThumbnail(oembed.thumbnail_url);
      })
      .catch(error => setError(error))
  }, [tiktoksrc, title, author, thumbnail, error])

  return (
    <Grid
      item
      lg={2}
      md={4}
      sm={6}
      xs={12}
    >
      <Card>
        <CardMedia image={ thumbnail } component="img"/>
        <CardContent>
          {error && <Typography variant="h3">{ error }</Typography> }
          <Typography variant="h5">
            { title }
          </Typography>
          <Typography variant="subtitle1">
            { author }
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  )
}

export default Independent;