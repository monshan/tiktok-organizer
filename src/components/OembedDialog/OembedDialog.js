import { Dialog, DialogActions, DialogContent, Button } from '@material-ui/core';
// import { useEffect, useState } from 'react';
import parse from 'html-react-parser';

const OembedDialog = ({ indDialog, toggleDialog, content }) => {
  return (
    <Dialog open={ indDialog }>
      <DialogContent>
        {/* <div
          dangerouslySetInnerHTML={{__html: content}}        
        >
        </div> */}
        {/* { parse(content) } */}
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