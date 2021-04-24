import { useState } from "react";
import Collections from '../Collections/Collections';

const App = () => {
  const [collections, setCollections] = useState([{ 
    title: 'List 1',
    type: 'collection',
    urls: [
      'https://www.tiktok.com/@diogoramos180/video/6946607853092343046?lang=en&is_copy_url=0&is_from_webapp=v1&sender_device=pc&sender_web_id=6925894707823576582',
      'https://www.tiktok.com/@krisfire98/video/6954138999200009477?lang=en&is_copy_url=0&is_from_webapp=v1&sender_device=pc&sender_web_id=6925894707823576582'
    ]
  },
  {
    title: null,
    type: 'single',
    urls: ['https://www.tiktok.com/@icedbrock/video/6954098959128300806?lang=en&is_copy_url=0&is_from_webapp=v1&sender_device=pc&sender_web_id=6925894707823576582']
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
        <input type="url" placeholder="Paste any tiktok link here!" size="100" pattern="https://www.tiktok.com/*" required/>
        <button>Open Form to Add TikTok</button>
          <section className="" >
            { renderAllCollections() }
          </section>
      </main>
    </div>
  );
}

export default App;