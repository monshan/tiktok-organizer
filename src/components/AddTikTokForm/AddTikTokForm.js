import { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogContentText, FormControl, TextField, DialogActions, Button } from "@material-ui/core";
import { Autocomplete } from '@material-ui/lab';
import PropTypes from 'prop-types';

const AddTikTokForm = ({ status, addTikTok, closeForm, retrieveAuthors }) => {
  const [tikTokInput, setTikTokInput] = useState('');

  const writeDataListOptions = () => {
    return retrieveAuthors().map(item => {
      return <option value={item}/>
    })
  }

  return (
    <Dialog open={ status }>
      <DialogTitle>
        Add a TikTok to your space
      </DialogTitle>
      <DialogContent>
        <FormControl
          fullWidth={true}
        >
          <TextField
            placeholder="https://www.tiktok.com/~"
            type="string"
            variant="filled"
            onChange={
              event => setTikTokInput(event.target.value)
            }
            id="inputTikTok"
            inputProps={{list: "authors"}}
            autoFocus
          />
          <datalist id="authors">
            { writeDataListOptions() }
          </datalist>
        </FormControl>
        <DialogContentText>
          Paste any tiktok in the input above. No worries about formatting, we can handle it for you!
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button 
          onClick={ () => addTikTok(tikTokInput) }
          id="submit"
        >
          Submit
        </Button>
        <Button onClick={ closeForm }>
          Cancel
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default AddTikTokForm;

AddTikTokForm.propTypes = {
  status: PropTypes.bool,
  addTikTok: PropTypes.func.isRequired,
  closeForm: PropTypes.func.isRequired
}

AddTikTokForm.defaultProps = {
  status: false
}