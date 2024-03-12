import { useState } from 'react';

import Player from './components/Player';
import GameBoard from './components/GameBoard';
import Log from './components/Log';

const deriveActivePlayer = (gameTurns) => {
  let currentPlayer = 'X'
      if(gameTurns.length > 0 && gameTurns[0].player === 'X') {
          currentPlayer = 'O'
      }
      return currentPlayer
}




function App() {
  const [gameTurns, setGameTurns] = useState([]);
  // const [activePlayer, setActivePlayer] = useState('X');
  const activePlayer = deriveActivePlayer(gameTurns);


  const handleSelectSquare = (rowIndex, colIndex) => {
      
    // setActivePlayer((currentActivePlayer) => {return currentActivePlayer === 'X' ? 'O' : 'X'})
    setGameTurns((prevTurns) => {
      const currentPlayer = deriveActivePlayer(prevTurns)


      // let currentPlayer = 'X'
      // if(prevTurns.length > 0 && prevTurns[0].player === 'X') {
      //     currentPlayer = 'O'
      // }


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
            <GameBoard onSelectSquare={handleSelectSquare} turns={gameTurns}></GameBoard>
        </ol>
      </div>
      <div>
        <Log turns={gameTurns}></Log>
      </div>
    </main>
  )
}

export default App
