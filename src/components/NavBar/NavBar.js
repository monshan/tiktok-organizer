import {
  AppBar,
  IconButton,
  Toolbar,
  Typography,
  TextField,
  Button,
} from "@material-ui/core";
import { HomeTwoTone, LibraryAddTwoTone } from '@material-ui/icons';
import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';

const NavBar = ({ search, openForm, retrieveSearchOptions, isDarkMode, setIsDarkMode }) => {

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

  const toggleModes = () => {
    if (isDarkMode) {
      setIsDarkMode(false);
    }

    if (!isDarkMode) {
      setIsDarkMode(true);
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
        <div className="theme-switch" onClick={() => toggleModes()
          }>
          <input
            type="checkbox"
            className="theme-switch__input"
            checked={isDarkMode}
          />
          <span className="theme-switch__track" />
        </div>
      </Toolbar>
    </AppBar>
  )
}

export default NavBar;

// NavBar.propTypes = {
//   openForm: PropTypes.func.isRequired
// }