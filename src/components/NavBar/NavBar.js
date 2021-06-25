import {
  AppBar,
  IconButton,
  Toolbar,
  Typography,
  TextField,
  Button,
  Switch,
  FormControlLabel } from "@material-ui/core";
  import { HomeTwoTone, LibraryAddTwoTone } from '@material-ui/icons';
  import { useState } from "react";
// import PropTypes from 'prop-types';

const NavBar = ({ search, openForm, retrieveSearchOptions }) => {

  const [themeSwitch, setThemeSwitch] = useState(false);

  const writeDataListOptions = () => {
    return retrieveSearchOptions().map(item => {
      return <option value={item}/>
    })
  }

  const searchOnEnter = event => {
    if (event.keyCode === 13) {
      search(event.target.value)
    }
  }

  const clearSearch = () => {
    document.querySelector('#searchField').value = '';
    search('');
  }

  const handleThemeSwitch = () => {
    if (themeSwitch) {
      setThemeSwitch(false);
    }

    if (!themeSwitch) {
      setThemeSwitch(true);
    }
  }

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography
          variant="h1"
        >
          TTTracker
        </Typography>
        <TextField
          id="searchField"
          placeholder="Search..."
          variant="filled"
          autoFocus={true}
          defaultValue=""
          inputProps={{list: "authors"}}
          onChange={e => search(e.target.value)}
          onKeyDown={e => searchOnEnter(e)}
        />
        <datalist id="authors">
          { writeDataListOptions() }
        </datalist>
        <Button
          variant="contained"
          onClick={() => clearSearch()}
        >
          Clear
        </Button>
        <FormControlLabel
          control={
          <Switch 
            checked={themeSwitch}
            onChange={() => handleThemeSwitch()}
            disableRipple={true}
            name="checkTheme"
            id="themeSwitch"/>
          }
          label="Light/Dark Mode"
        />
        <IconButton
          aria-label="Back to home button link"
          onClick={ e => {
            e.preventDefault();
            window.location = "http://localhost:3000/"
          } }
        >
          <HomeTwoTone />
        </IconButton>
        <IconButton
          onClick={ openForm }
          id="openForm"
          aria-label="Open add tiktok form"
        >
          <LibraryAddTwoTone />
        </IconButton>
      </Toolbar>
    </AppBar>
  )
}

export default NavBar;

// NavBar.propTypes = {
//   openForm: PropTypes.func.isRequired
// }