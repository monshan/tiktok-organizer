import { Step, Stepper, StepLabel } from "@material-ui/core";
// import MenuIcon from '@material-ui/icons/Menu';
// import AddBoxIcon from '@material-ui/icons/AddBox';
// import SearchIcon from '@material-ui/icons/Search';
// import HelpIcon from '@material-ui/icons/Help';
import { useState } from "react";
import Collections from '../Collections/Collections';
import NavBar from '../NavBar/NavBar'; 
import AddTikTokForm from '../AddTikTokForm/AddTikTokForm';

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

  const [dialogOpen, setdialogOpen] = useState(false);

  const openFormDialog = () => {
    setdialogOpen(true);
  }

  const closeFormDialog = () => {
    setdialogOpen(false);
  }

  const addTikTok = (url) => {
    const newEntry = {
      title: null,
      type: 'single',
      urls: [url]
    }
    setCollections([...collections, newEntry])
    closeFormDialog();
  }

  return (
    <div className="App">
      <main>
        <NavBar 
          openForm={ openFormDialog }
        />
        <AddTikTokForm 
          status={ dialogOpen }
          addTikTok={ addTikTok }
          closeForm={ closeFormDialog }
        />
        <Stepper>
          <Step key="arbitrary-step">
            <StepLabel>Just a test for Stepper</StepLabel>
          </Step>
        </Stepper>
          <section className="" >
            { renderAllCollections() }
          </section>
      </main>
    </div>
  );
}

export default App;