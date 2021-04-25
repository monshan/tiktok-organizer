import { AppBar, IconButton, TextField, Tabs, Tab, Toolbar, Typography } from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';
import AddBoxIcon from '@material-ui/icons/AddBox';
import SearchIcon from '@material-ui/icons/Search';
import HelpIcon from '@material-ui/icons/Help';
import { Link } from "react-router-dom";


const NavBar = ({ openForm }) => {
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton>
          <MenuIcon />
        </IconButton>
        <Typography>TTTracker</Typography>
        <TextField 
          placeholder="search tiktoks or collections..."
        />
        <Tabs>
          <Link to="/">
            <Tab label="home" />
          </Link>
          <Link to="/mycollections">
            <Tab label="collections" />
          </Link>
        </Tabs>
        <IconButton
          onClick={ openForm }>
          <AddBoxIcon />
        </IconButton>
        <IconButton>
          <HelpIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  )
}

export default NavBar;