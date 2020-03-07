import React from 'react';
import './App.css';
import Counter from './components/Counter';
import Timer from './components/Timer';
import Contact from './components/Contact';
import Grade from './components/Grade';

function App() {

  let person = {
    name: "Detroit",
    age: 200
  };
  let gr = {
    title: "Quiz",
    score: 9,
    total: 10
  };

  return (
    <div className="App">
      <Grade title="Worksheet" score={4} total={10} passing={false} />
      <Grade title={gr.title} score={gr.score} total={gr.total} passing={gr.score >= 6} />

      <Contact name="David" age={7} />
      <Contact name="Grant" age={6} />
      <Contact name={person.name} age={person.age} />

      <Counter />
      <Counter />
      <Timer />
    </div>
  );
}

export default App;
