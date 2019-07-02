import React from 'react';
import './Test.css';
import { read } from 'fs';

   class Test extends React.Component {
      constructor(props) {
         super(props);
         
         this.state = {
            textToDisplay: "",
         }
      };

      // renderTextOutput(){
      //    return(
      //       <
      //    );
      // }

      render() {
         return (
            <div className="buttonsTest">
               <button onClick= {fizzBuzz}>FizzBuzz</button>
               <button onClick= {chessBoard}>Chess Board</button>
               <button onClick= {inputNumberUser}>Input number</button>
               <button onClick= {inputStringUser}>Input string</button>
               <p>{this.state.textToDisplay}</p>
            </div>
         );
      }
   }

   function fizzBuzz(){
      let outputNumber = 0;
      let fizz = "Fizz";
      let buzz = "Buzz";

      for (let counter = 0; counter < 101; counter++){

         if (outputNumber === 0){
            console.log(outputNumber);
         }
         else if (outputNumber % 3 === 0 && outputNumber % 5 === 0){
            console.log(`${fizz}${buzz}`);
         }
         else if (outputNumber % 5 === 0){
            console.log(buzz);
         }
         else if (outputNumber % 3 === 0){
            console.log(fizz);
         }
         else {
            console.log(outputNumber);
         }
         outputNumber++;
         }      
   }

   function chessBoard(){
      let boardPiece1 = ":)";
      let boardPiece2 = ":(";
      let boardPieceCurrent = "";
      let size = 10;
      let boardPieceToShow = "";

      // create entire board
      for (let counterOuter = 0; counterOuter < size; counterOuter++){
      // create line of board
      if (counterOuter % 2){
         boardPieceCurrent = boardPiece1;
      }
      else {
         boardPieceCurrent = boardPiece2;
      }

      for (let counterInner = 0; counterInner < size / 2; counterInner++){
         boardPieceToShow += boardPieceCurrent;
      }
      console.log(boardPieceToShow);
      boardPieceToShow = "";
      }
   }

   function inputStringUser(){
      let inputUser = (prompt("Enter a string:"));
      this.state.textToDisplay = inputUser;
      // Call required function
   }

   function inputNumberUser (){
      let inputUser = Number(prompt("Enter a number:"));
      if (!Number.isNaN(inputUser)){
         alert(`Valid input: ${inputUser}.`);
         // Call required function
         square(inputUser);      
      }
      else {
         alert(`Invalid input: ${inputUser}. Please enter a number.`);
      }
   }

   function square (numberToSquare){
         alert(`Your number squared is ${numberToSquare * numberToSquare}.`);
   }

   function double (numberToSquare){
      alert(`Your number doubled is ${numberToSquare + numberToSquare}.`);
}

 export default Test;