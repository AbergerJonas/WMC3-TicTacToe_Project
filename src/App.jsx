import { useState } from 'react';

import Player from './components/Player';
import GameBoard from './components/GameBoard';
import Log from './components/Log';
import WINNING_COND from './WINNING_COND'

const initialGameBoard = [
  [null,null,null],
  [null,null,null],
  [null,null,null]
];



const deriveActivePlayer = (gameTurns) => {
  let currentPlayer = 'X'
      if(gameTurns.length > 0 && gameTurns[0].player === 'X') {
          currentPlayer = 'O'
      }
      return currentPlayer
}

function App() {
  const [gameTurns, setGameTurns] = useState([]);
  const activePlayer = deriveActivePlayer(gameTurns);

  let gameBoard = initialGameBoard
    
    for(const turn of gameTurns) {
        const {square,player} = turn
        const {row, col} = square
        
        gameBoard[row][col] = player
    }



  const handleSelectSquare = (rowIndex, colIndex) => {
    setGameTurns((prevTurns) => {
    const currentPlayer = deriveActivePlayer(prevTurns)
    

    const updatedTurns = [
      {square: {row: rowIndex, col: colIndex}, player: currentPlayer},
      ...prevTurns
    ]
      return updatedTurns;
    })
    
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player initName="Player 1" initSymbol="X" isActive ={activePlayer === 'X'}></Player>
          <Player initName="Player 2" initSymbol="O" isActive ={activePlayer === 'O'}></Player>
        </ol>
        <ol>
            <GameBoard onSelectSquare={handleSelectSquare} board={gameBoard} ></GameBoard>
        </ol>
      </div>
      <div>
        <Log turns={gameTurns}></Log>
      </div>
    </main>
  )
}

export default App
