import React from 'react';
import { useEffect } from 'react';
import { legacyMarkup } from './legacyMarkup';

function App() {
  useEffect(() => {
    import('./script.js');
  }, []);

  return <div dangerouslySetInnerHTML={{ __html: legacyMarkup }} />;
}

export default App;
