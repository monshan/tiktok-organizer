import {
  AppBar,
  IconButton,
  Toolbar,
  Typography,
  TextField,
  Button,
  Switch,
  FormControlLabel
} from "@material-ui/core";
import { HomeTwoTone, LibraryAddTwoTone } from '@material-ui/icons';
import { Link } from 'react-router-dom';
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
          variant="outlined"
          onClick={() => clearSearch()}
        >
          Clear
        </Button>
        <div className="theme-switch" onClick={() => 
          {handleThemeSwitch()
          console.log(themeSwitch)}
          }>
          <input
            type="checkbox"
            className="theme-switch__input"
            checked={themeSwitch}
          />
          <span className="theme-switch__track" />
          <span className="theme-switch__thumb" style={{checked: themeSwitch}} />
        </div>
        {/* <FormControlLabel
          control={
          <Switch 
            checked={themeSwitch}
            onChange={() => handleThemeSwitch()}
            disableRipple={true}
            name="checkTheme"
            id="themeSwitch"/>
          }
          label="Light/Dark Mode"
        /> */}
        <Link to="/">
          <IconButton
            aria-label="Back to home button link"
          >
            <HomeTwoTone />
          </IconButton>
        </Link>
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