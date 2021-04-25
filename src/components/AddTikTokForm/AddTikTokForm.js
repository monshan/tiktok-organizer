import { Dialog, DialogTitle, DialogContent, DialogContentText, FormControl, TextField, DialogActions, Button } from "@material-ui/core";

const AddTikTokForm = ({ status, closeForm }) => {
  return (
    <Dialog open={ status }>
      <DialogTitle>
        Add a TikTok to your space
      </DialogTitle>
      <DialogContent>
        <FormControl>
          <TextField
            placeholder="https://www.tiktok.com/~"
            type="string"
            variant="filled"
            autoFocus
            fullWidth
          />
        </FormControl>
        <DialogContentText>
          Paste any tiktok in the input above. No worries about formatting, we can handle it for you!
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={ closeForm }>
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