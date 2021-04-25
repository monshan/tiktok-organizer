import { AppBar, IconButton, InputBase, Step, Stepper, StepLabel, Toolbar, Typography, Dialog, DialogTitle, DialogContent, DialogContentText, FormControl, TextField, DialogActions, Button } from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';
import AddBoxIcon from '@material-ui/icons/AddBox';
import SearchIcon from '@material-ui/icons/Search';
import { useState } from "react";
import Collections from '../Collections/Collections';

const App = () => {
  const [collections, setCollections] = useState([{ 
    title: 'List 1',
    type: 'collection',
    urls: [
      'https://www.tiktok.com/@diogoramos180/video/6946607853092343046?lang=en',
      'https://www.tiktok.com/@krisfire98/video/6954138999200009477?lang=en'
    ]
  },
  {
    title: null,
    type: 'single',
    urls: ['https://www.tiktok.com/@icedbrock/video/6954098959128300806?lang=en']
  }]);
  const [dialogOpen, setdialogOpen] = useState(false);
  

  const renderAllCollections = () => {
    return collections.map(collection => {
      return (
        <Collections
        key={ collection.title ? collection.title : `single-${ collection.urls[0].substring(23, 63) }` } 
        collectionDet={ collection }
        />
      )
    })
  }

  const openFormDialog = () => {
    setdialogOpen(true);
  }

  return (
    <div className="App">
      <main>
        <AppBar position="static">
          <Toolbar>
            <IconButton>
              <MenuIcon />
            </IconButton>
            <Typography>TTTracker</Typography>
            <SearchIcon />
            <InputBase
              placeholder="Search collections..."
            />
            <IconButton
              onClick={ openFormDialog }>
              <AddBoxIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        <Dialog open={ dialogOpen }>
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
            <Button onClick={}>
              Submit
            </Button>
            <Button onClick={}>
              Cancel
            </Button>
          </DialogActions>
        </Dialog>
        <Stepper>
          <Step key="arbitrary-step">
            <StepLabel>Just a test for Stepper</StepLabel>
          </Step>
        </Stepper>
        {/* <button>Open Form to Add TikTok</button> */}
          <section className="" >
            { renderAllCollections() }
          </section>
      </main>
    </div>
  );
}

export default App;