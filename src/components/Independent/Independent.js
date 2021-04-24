import { Card, CardContent, CardMedia, Typography } from '@material-ui/core';

const Independent = ({ title, author_name, html, thumbnail_url }) => {
  return (
    <Card>
      <CardMedia image={ thumbnail_url } component="img"/>
      <CardContent>
        <Typography variant="h5">
          { title }
        </Typography>
        <Typography variant="subtitle1">
          { author_name }
        </Typography>
      </CardContent>
    </Card>
  )
}

export default Independent;