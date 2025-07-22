import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  const [rows, setRows] = useState([['none', 'none', 'none'],  ['none', 'none', 'none'], ['none', 'none', 'none']])

  return (
    <div className="rootContainer">
      Tic Tac Toe
      <div className='board'>

        {rows.map((row) => {
          return <div className='row'>
           {row.map((cell) => {
             return <div className='cell'>{cell}</div>
            })}
          </div>
        })}

      </div>
    </div>
  );
}

export default App;
