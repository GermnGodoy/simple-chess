import { useState } from "react"
import './App.css'
import { Board } from "./components/Board"
import { TurnLED } from "./components/TurnLED"
import { GamePanel } from "./components/GamePanel"
import { GAME_MODES, TURN, INITIAL_BOARD } from "./constants/gameConstants"


function App() {
  const [board, setBoard] = useState(INITIAL_BOARD)
  const [turn, setTurn] = useState(TURN.white) // 0 = Blanco 1 = Negro
  const [mode, setMode] = useState(GAME_MODES.default)
  const [time, setTime] = useState({
    white: 300, 
    black: 300
  })


  return (
    <div
    className="w-screen h-screen flex justify-center flex-row items-center align-middle bg-[#f4f6fc] pb-10 pt-3">
      <main className=" h-full flex flex-row m-5 mx-0 p-0">
        <Board board={board} setTurn={setTurn} turn={turn} setBoard={setBoard}/>
        <TurnLED turn = {turn}/>
      </main>
      <GamePanel setBoard={setBoard} setTurn={setTurn} setMode={setMode}/>
    </div>
  )

}

export default App