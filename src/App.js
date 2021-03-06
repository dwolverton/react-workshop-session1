import React from 'react';
import './App.css';
import Counter from './components/Counter';
import Timer from './components/Timer';
import Contact from './components/Contact';
import Grade from './components/Grade';
import Weather from './components/Weather';
import Clock from './components/Clock';

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
      <Clock seconds={0} />
      <Clock seconds={4} />
      <Clock seconds={37} />

      <Weather conditions="Sunny" highF={59} lowF={38} />
      <Weather conditions="Rainy" highF={55} lowF={40} />

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
