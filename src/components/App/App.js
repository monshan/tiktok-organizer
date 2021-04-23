import { useState } from "react";
import Collections from '../Collections/Collections';

const App = () => {
  return (
    <div className="App">
      <main>
        <input type="text" />
        <Collections />
      </main>
    </div>
  );
}

export default App;