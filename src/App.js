import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  const [rows, setRows] = useState([['', '', ''],  ['', '', ''], ['', '', '']])
  const [activeLetter, setActiveLetter] = useState('X')
  const [winner, setWinner] = useState()

  const checkForWin = (board, player) => {
    // Check rows
    for (let i = 0; i < 3; i++) {
      if (board[i][0] === player && board[i][1] === player && board[i][2] === player) {
        return true;
      }
    }

    // Check columns
    for (let i = 0; i < 3; i++) {
      if (board[0][i] === player && board[1][i] === player && board[2][i] === player) {
        return true;
      }
    }

    // Check diagonals
    if (board[0][0] === player && board[1][1] === player && board[2][2] === player) {
      return true;
    }
    if (board[0][2] === player && board[1][1] === player && board[2][0] === player) {
      return true;
    }

    return false;
  };

  return (
    <div className="rootContainer">
      Tic Tac Toe

      {winner ?
        <div>
          {winner} wins
        </div> : null}

      <div className='board'>

        {rows.map((row, rowIndex) => {
          return <div className='row'>
           {row.map((cell, cellIndex) => {
             return <div className={winner === rows[rowIndex][cellIndex] ? 'winnerCell' : 'cell'} onClick={() => {

               if (rows[rowIndex][cellIndex] !== '' || winner) {
                 return
               }

               // Create copy of array so we can change it
               const newRows = [...rows]

               // update the selected cell by accessing the nested index
               newRows[rowIndex][cellIndex] = activeLetter

               // Check for win after the move
               if (checkForWin(newRows, activeLetter)) {
                 setWinner(activeLetter)
               }

               // switch letters each click
               if (activeLetter === 'X') {
                 setActiveLetter("O")
               } else {
                 setActiveLetter("X")
               }

               // udate the state to cause a rerender with the new rows
               setRows(newRows)

             }}>{cell}</div>
            })}
          </div>
        })}

      </div>
    </div>
  );
}

export default App;