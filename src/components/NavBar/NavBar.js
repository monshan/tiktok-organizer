import { AppBar, IconButton, Toolbar, Typography } from "@material-ui/core";
import HomeTwoToneIcon from '@material-ui/icons/HomeTwoTone';
import AddBoxIcon from '@material-ui/icons/AddBox';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";


const NavBar = ({ openForm }) => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography>TTTracker</Typography>
        <IconButton>
          <Link to="/">
            <HomeTwoToneIcon />
          </Link>
        </IconButton>
        <IconButton
          onClick={ openForm }
          id="openForm"
        >
          <AddBoxIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  )
}

export default NavBar;

NavBar.propTypes = {
  openForm: PropTypes.func.isRequired
}