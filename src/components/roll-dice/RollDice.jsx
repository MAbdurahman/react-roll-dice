import React, { Component } from 'react';
import Die from '../die/Die';
import './RollDice.css';

export default class RollDice extends Component {
   static defaultProps = {
      dieSides: ['one', 'two', 'three', 'four', 'five', 'six']
   }
   constructor(props) {
      super(props);
      this.state = {
         die1: 'two',
         die2: 'five',
         isRolling: false
      };

      this.handleRollDice = this.handleRollDice.bind(this);
   };
   //**************** Functions ****************//
   handleRollDice() {
      //Pick two random number from 0 to 5
      let randomDie1 = this.props.dieSides[Math.floor((Math.random() * this.props.dieSides.length))];
      let randomDie2 = this.props.dieSides[Math.floor((Math.random() * this.props.dieSides.length))];
      
      //Set the state to the new random numbers
      this.setState({die1: randomDie1, die2: randomDie2, isRolling: true});

      //Wait for one second then set isRolling to false
      setTimeout(() => {
         this.setState({isRolling: false})
      }, 850);

   };

   render() {
      return (
         <div className='RollDice'>
            <div className="RollDice__dice">
               <Die face={this.state.die1} shakeDie={this.state.isRolling} />
               <Die face={this.state.die2} shakeDie={this.state.isRolling} />
            </div>
            <div className='RollDice__button'>
               <button onClick={this.handleRollDice} disabled={this.state.isRolling}>
                  {this.state.isRolling ? 'Rolling...' : 'Roll Dice'}
               </button>
            </div>
         </div>
      );
   };
};
