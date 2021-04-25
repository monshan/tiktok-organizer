import { AppBar } from "@material-ui/core";
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

  return (
    <div className="App">
      <main>
        <AppBar position="static">
          
        </AppBar>
        <input type="search" name="query" placeholder="search by collection, tiktok title, tiktok author, or sound" autoComplete="on"/>
        <input type="url" name="input-url" placeholder="Paste any tiktok link here!" size="70" maxLength="59" pattern="https://www.tiktok.com/*" required/>
        <button>Open Form to Add TikTok</button>
          <section className="" >
            { renderAllCollections() }
          </section>
      </main>
    </div>
  );
}

export default App;