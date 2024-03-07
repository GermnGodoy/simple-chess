import { useState } from "react"
import { CursorCell } from "../components/CursorCell"
import { WhiteCell } from "../components/WhiteCell"
import { BlackCell } from "./BlackCell"


export function Board({board, turn, setTurn, setBoard}) {
  const [move, setMove] = useState([20,20])
  const [cursor, setCursor] = useState(null)
  
  return (
    <div className=" grid grid-cols-8 gap-0 m-5 mt-4 h-[100%] aspect-square mx-2 border-[#343a44] rounded-lg border-solid border-[1rem]">
      {board.map((piece, index) => {
        if (index === cursor) {return (<CursorCell key={index} piece={piece} index={index} setCursor={setCursor}
        setBoard={setBoard} board={board} turn={turn} setTurn={setTurn}
        move={move} setMove={setMove}/>)}
        else if ((index % 2 + Math.floor(index/8)%2) == 1) {return (<BlackCell key={index} piece={piece} index={index} setCursor={setCursor}
          setBoard={setBoard} board={board} turn={turn} setTurn={setTurn}
          move={move} setMove={setMove}/>)}
        else {return (<WhiteCell key={index} piece={piece} index={index} setCursor={setCursor}
        setBoard={setBoard} board={board} turn={turn} setTurn={setTurn}
        move={move} setMove={setMove}/>)}
      })}
    </div>
  )
}
