import React from 'react';
import './App.css';
import RollDice from './components/roll-dice/RollDice';

export default function App() {
	return (
		<div className='App'>
			<h1 className='App__title'>React-Roll-Dice</h1>
			<RollDice />
		</div>
	);
}
