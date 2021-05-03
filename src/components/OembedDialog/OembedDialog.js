import { Dialog, DialogActions, DialogContent, Button } from '@material-ui/core';
import { useState } from 'react';

const OembedDialog = ({ indDialog, toggleDialog }) => {
  return (
    <Dialog open={ indDialog }>
      <DialogContent>
        <h2>Just a tester for the oembed modal</h2>
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