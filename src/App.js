import React from 'react';
import './App.scss';

import TemplateEdit from './live-edit/template-edit/TemplateEdit'
import { Provider } from './live-edit/template-edit/template-context/TemplateContext'

function App() {
  return (
    <Provider>
      <div className="App">
        <TemplateEdit />
      </div>
    </Provider>

  );
}

export default App;
