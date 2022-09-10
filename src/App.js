import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Testing from './Components/Testing/Testing';

function App() {
  return (
    <div>
      <h1 className="text-3xl font-bold underline text-red-400">
        Hello world!
      </h1>
      <Routes>
        <Route path='/testing' element = {<Testing></Testing>} />
      </Routes>
    </div>
  );
}

export default App;
