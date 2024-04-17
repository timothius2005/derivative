
import React from 'react';
import {Route, Routes} from 'react-router-dom';

import RecordEntry from './components/RecordEntry';
import SampleCycle from './components/SampleCyle';
import SampleDroplist from './components/SampleDroplist';
import SessionList from './components/SampleSession';
import UpNext from './components/UpNext';


function App() {

  return (
    <div>
      <Routes>
        <Route exact path='/' element={ <SampleDroplist />} />
        <Route  path='' />
      </Routes>
    </div>
  );
}
export default App;
