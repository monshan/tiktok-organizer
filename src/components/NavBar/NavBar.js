import { AppBar, IconButton, Toolbar, Typography, TextField, Button } from "@material-ui/core";
import HomeTwoToneIcon from '@material-ui/icons/HomeTwoTone';
import LibraryAddTwoToneIcon from '@material-ui/icons/LibraryAddTwoTone';
import PropTypes from 'prop-types';

const NavBar = ({ openForm }) => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography
          variant="h1"
        >
          TTTracker
        </Typography>
        <TextField
          placeholder="Search..."
          variant="filled"
          autoFocus={true}
          // onChange={}
          // onKeyPress={}
        />
        <Button
          variant="contained"
        >
          Clear
        </Button>
        <IconButton
          aria-label="Back to home button link"
          onClick={ e => {
            e.preventDefault();
            window.location = "http://localhost:3000/"
          } }
        >
          <HomeTwoToneIcon />
        </IconButton>
        <IconButton
          onClick={ openForm }
          id="openForm"
          aria-label="Open add tiktok form"
        >
          <LibraryAddTwoToneIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  )
}

export default NavBar;

// NavBar.propTypes = {
//   openForm: PropTypes.func.isRequired
// }