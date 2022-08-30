import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { app } from './controllers/firebase'
import { CoreProvider } from './components/core-sub'

import { PageNotFound } from './pages/not.found'

const Routing = () => {
  return <BrowserRouter>
    <Routes>
      <Route path="/*" element={<PageNotFound />} />
    </Routes>
  </BrowserRouter>
}

function App() {
  return (<CoreProvider firebaseApp={app}>
    <Routing />
  </CoreProvider>);
}

export default App;
