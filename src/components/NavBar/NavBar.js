import { AppBar, IconButton, Toolbar, Typography, TextField, Button } from "@material-ui/core";
import HomeTwoToneIcon from '@material-ui/icons/HomeTwoTone';
import LibraryAddTwoToneIcon from '@material-ui/icons/LibraryAddTwoTone';
// import PropTypes from 'prop-types';

const NavBar = ({ search, openForm, retrieveSearchOptions }) => {

  const writeDataListOptions = () => {
    return retrieveSearchOptions().map(item => {
      return <option value={item}/>
    })
  }

  // const searchOnEnter = event => {
  //   if (event.keyCode === 13) {
  //     search(event.target.value)
  //   }
  // }

  const clearSearch = () => {
    document.querySelector('#searchField').value = '';
    search('');
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
          // onKeyDown={e => searchOnEnter(e)}
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