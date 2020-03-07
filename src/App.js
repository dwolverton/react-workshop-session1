import React from 'react';
import './App.css';
import Counter from './components/Counter';
import Timer from './components/Timer';

function App() {
  return (
    <div className="App">
      <Counter />
      <Counter />
      <Timer />
    </div>
  );
}

export default App;
