
import React from 'react';
import {Route, Routes} from 'react-router-dom';

import RecordEntry from './components/RecordEntry';
import SampleCycle from './components/SampleCyle';
import SampleDroplist from './components/SampleDroplist';


function App() {

  return (
    <div>
      <Routes>
        <Route exact path='/' element={ <SampleDroplist />} />
      </Routes>
    </div>
  );
}
export default App;
