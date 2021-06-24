import { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogContentText, FormControl, TextField, DialogActions, Button } from "@material-ui/core";
import PropTypes from 'prop-types';

const AddTikTokForm = ({ status, addTikTok, closeForm }) => {
  const [tikTokInput, setTikTokInput] = useState('');


  return (
    <Dialog open={ status }>
      <DialogTitle>
        Add a TikTok
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
            label="TikTok url"
            autoFocus
          />
          
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

// AddTikTokForm.propTypes = {
//   status: PropTypes.bool,
//   addTikTok: PropTypes.func.isRequired,
//   closeForm: PropTypes.func.isRequired
// }

// AddTikTokForm.defaultProps = {
//   status: false
// }