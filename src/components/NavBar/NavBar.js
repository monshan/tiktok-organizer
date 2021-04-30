import { AppBar, IconButton, Toolbar, Typography } from "@material-ui/core";
import HomeTwoToneIcon from '@material-ui/icons/HomeTwoTone';
import LibraryAddTwoToneIcon from '@material-ui/icons/LibraryAddTwoTone';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";


const NavBar = ({ openForm }) => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography
          variant="h1"
        >
          TTTracker
        </Typography>
        <IconButton
          aria-label="Back to home button link"
        >
          <Link to="/" aria-label="link to home">
            <HomeTwoToneIcon />
          </Link>
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

NavBar.propTypes = {
  openForm: PropTypes.func.isRequired
}