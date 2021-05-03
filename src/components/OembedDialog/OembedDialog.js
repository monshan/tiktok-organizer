import { Dialog, DialogActions, DialogContent, Button } from '@material-ui/core';
import { useState } from 'react';

const OembedDialog = ({ indDialog, toggleDialog, content }) => {
  return (
    <Dialog open={ indDialog }>
      <DialogContent>
        <p>{ content }</p>
      </DialogContent>
      <DialogActions>
        <Button
          onClick={e => toggleDialog()}
        >
          Close
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default OembedDialog;