import {
  IconButton,
} from "@material-ui/core";
import { HomeTwoTone, LibraryAddTwoTone, Bookmark } from '@material-ui/icons';
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
    <nav>
      <div>
        <h1>TTT</h1>
      </div>
      <Link to="/">
        <IconButton
          aria-label="Back to home button link"
        >
          <HomeTwoTone />
        </IconButton>
      </Link>
      <Link to="/pins">
        <IconButton
          aria-label="My pins button link"
        >
          <Bookmark />
        </IconButton>
      </Link>
      <div>
        <IconButton
          onClick={ openForm }
          id="openForm"
          aria-label="Open add tiktok form"
        >
          <LibraryAddTwoTone />
        </IconButton>
      </div>
      <div className="search">
        <input type="text"
          defaultValue=""
          id="searchField"
          className="search__input"
          list="authors"
          placeholder="Search..."
          onChange={e => search(e.target.value)}
          onKeyDown={e => searchOnEnter(e)}
        />
        <button
          className="search__clear-btn"
          onClick={ e => clearSearch() }
        >
          Clear
        </button>
      </div>
      <datalist id="authors" className="authors">
        { writeDataListOptions() }
      </datalist>
      <div>

      <div className="theme-switch" onClick={() => toggleModes()
        }>
        <input
          type="checkbox"
          className="theme-switch__input"
          checked={isDarkMode}
        />
        <span className="theme-switch__track" />
      </div>
      </div>
    </nav>
  )
}

export default NavBar;

// NavBar.propTypes = {
//   openForm: PropTypes.func.isRequired
// }