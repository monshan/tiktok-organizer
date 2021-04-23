import { useState } from "react";
import Collections from '../Collections/Collections';

const App = () => {
  const [collections, setCollections] = useState([{ 
    title: 'List 1',
    Sources: ['https://www.tiktok.com/@diogoramos180/video/6946607853092343046?lang=en&is_copy_url=0&is_from_webapp=v1&sender_device=pc&sender_web_id=6925894707823576582']
    }
  ]);

  return (
    <div className="App">
      <main>
        <input type="text" />
        <button>Open Modal</button>
        <Collections />
      </main>
    </div>
  );
}

export default App;