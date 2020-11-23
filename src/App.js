import React from 'react';
import './App.css';
import Die from './components/die/Die';

export default function App() {
  return (
    <div className='App'>
      <h1>React-Roll-Dice</h1>
      <Die face='five' />
      <Die face='six' />
    </div>
  );
};

