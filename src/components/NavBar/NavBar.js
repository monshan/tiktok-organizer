import { AppBar, IconButton, InputBase, Toolbar, Typography } from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';
import AddBoxIcon from '@material-ui/icons/AddBox';
import SearchIcon from '@material-ui/icons/Search';
import HelpIcon from '@material-ui/icons/Help';

const NavBar = ({ openForm }) => {
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton>
          <MenuIcon />
        </IconButton>
        <Typography>TTTracker</Typography>
        <SearchIcon />
        <InputBase
          placeholder="Search collections..."
        />
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