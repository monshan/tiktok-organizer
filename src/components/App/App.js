import { Step, Stepper, StepLabel } from "@material-ui/core";
import { useState } from "react";
import Collections from '../Collections/Collections';
import NavBar from '../NavBar/NavBar'; 
import AddTikTokForm from '../AddTikTokForm/AddTikTokForm';
import Home from '../Home/Home';
import { Route, Switch } from "react-router";

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

  const [initTikToks, setInitTikToks] = useState([
    'https://www.tiktok.com/@diogoramos180/video/6946607853092343046?lang=en',
    'https://www.tiktok.com/@krisfire98/video/6954138999200009477?lang=en',
    'https://www.tiktok.com/@icedbrock/video/6954098959128300806?lang=en',
    'https://www.tiktok.com/@str0ngzer0/video/6954499899572505862?lang=en',
    'https://www.tiktok.com/@itsalexte/video/6952647331875409158?lang=en',
    'https://www.tiktok.com/@youreverydayklemen/video/6951326352809200902?lang=en',

  ])

  const [dialogOpen, setdialogOpen] = useState(false);

  const openFormDialog = () => {
    setdialogOpen(true);
  }

  const closeFormDialog = () => {
    setdialogOpen(false);
  }

  const addTikTok = (url) => {
    // const newEntry = {
    //   title: null,
    //   type: 'single',
    //   urls: [url]
    // }
    // setCollections([...collections, newEntry])
    setInitTikToks([...initTikToks, url])
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
        <Switch>
          <Route exact path="/">
            <Home initTikToks={ initTikToks } />
          </Route>
          <Route path="/mycollections">
            <section className="" >
              { renderAllCollections() }
            </section>
          </Route>
        </Switch>
        {/* <Stepper>
          <Step key="arbitrary-step">
            <StepLabel>Just a test for Stepper</StepLabel>
          </Step>
        </Stepper> */}
      </main>
    </div>
  );
}

export default App;