import { useState } from "react"
import confetti from "canvas-confetti"

import { Square } from "./components/Square.jsx"
import { TURNS } from "./constants.js"
import { checkEndGame, checkWinner } from "./logic/board.js"
import { WinnerModal } from "./components/WinnerModal.jsx"

import './App.css'
import { resetGameStorage, saveGameToStorage } from "./logic/storage/index.js"




function App() {
  //const board = Array(9).fill(null)


  const [board, setBoard] = useState(() =>{
    Array(9).fill(null)
    const board = window.localStorage.getItem('board')
    return board ? JSON.parse(board) : Array(9).fill(null)
  })


  const [turn, setTurn]=useState(()=>{
    const turnFromStorage = window.localStorage.getItem('turn')
    return turnFromStorage ?? TURNS.X
  })

  // null es que no hay ganador, false es que hay empate
  const [winner, setWinner] = useState(null)




  const resetGame = () =>{
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)

 resetGameStorage()
  }



  const updateBoard = (index) =>{
    if(board[index] || winner) return

    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)


    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)

    saveGameToStorage({
      board: newBoard, turn: newTurn
    })

    const newWinner =checkWinner(newBoard)
    if(newWinner){
      //alert(`El ganador es ${newWinner}`)
      confetti()
      setWinner(newWinner)
    }else if (checkEndGame(newBoard)){
      setWinner(false)
    }
  }

  return(
    <main className="board">
      <h1>Gato Game</h1>
      <button onClick={resetGame}>Reiniciar</button>
      <section className="game">
        
        {
          board.map((square, index) => {
            return(
              <Square key={index} index={index} updateBoard={updateBoard}>
                {/* {index} */}
                {square}
              </Square>
            )
          })
        } 

      </section>  

      <section className="turn">
        <Square isSelected={turn === TURNS.X}>{TURNS.X}</Square>
        <Square isSelected={turn === TURNS.O}>{TURNS.O}</Square>

      </section>

      <section>
          <WinnerModal resetGame={resetGame} winner={winner}/>
      </section>
    </main>
  )

}

export default App
