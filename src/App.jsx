import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const BotName = "SmartBoy"
const BotEval = 3
const StockEval =-1

const INITIAL_BOARD = [10,8,9,11,12,9,8,10,
                      7,7,7,7,7,7,7,7,
                      0,0,0,0,0,0,0,0,
                      0,0,0,0,0,0,0,0,
                      0,0,0,0,0,0,0,0,
                      0,0,0,0,0,0,0,0,
                      1,1,1,1,1,1,1,1,
                      4,2,3,5,6,3,2,4]


const delay = async (ms) => {
  return new Promise((resolve) => 
      setTimeout(resolve, ms));
}

function checkCollisions(piece,pos, obj, board) {
  if (piece === 4 || piece === 10) {
    if (pos%8 === obj%8) {
      let max = Math.max(pos,obj)
      let min = Math.min(pos,obj)
      for (let i = 1; min + 8*i < max; i++) {
        if (board[min + 8*i] !== 0) {
          return false
        }
      }
    } else {
      let max = Math.max(pos,obj)
      let min = Math.min(pos,obj)
      for (let i = 1; min + i < max; i++) {
        if (board[min + i] !== 0) {
          return false
        }
      }
    }
  }
  if (piece === 3 || piece ===9) {
    if (pos%8 + Math.floor(pos/8) === obj%8 + Math.floor(obj/8)) {
      let max = Math.max(pos,obj)
      let min = Math.min(pos,obj)
      for (let i =1; min%8 - i > max%8 ; i++) {
        if (board[min + 7*i] !== 0) {
          return false
        }
      }
    } else {
      let max = Math.max(pos,obj)
      let min = Math.min(pos,obj)
      for (let i =1; min%8 + i < max%8 ; i++) {
        if (board[min + 9*i] !== 0) {
          return false
        }
      }
    }
  } if (piece === 5 || piece === 11) {
    if (pos%8 === obj%8) {
      let max = Math.max(pos,obj)
      let min = Math.min(pos,obj)
      for (let i = 1; min + 8*i < max; i++) {
        if (board[min + 8*i] !== 0) {
          return false
        }
      }
    } else if (Math.floor(pos/8) === Math.floor(obj/8)) {
      let max = Math.max(pos,obj)
      let min = Math.min(pos,obj)
      for (let i = 1; min + i < max; i++) {
        if (board[min + i] !== 0) {
          return false
        }
      }
    } else if (pos%8 + Math.floor(pos/8) === obj%8 + Math.floor(obj/8)) {
      let max = Math.max(pos,obj)
      let min = Math.min(pos,obj)
      for (let i =1; min%8 - i > max%8 ; i++) {
        if (board[min + 7*i] !== 0) {
          return false
        }
      }
    } else {
      let max = Math.max(pos,obj)
      let min = Math.min(pos,obj)
      for (let i =1; min%8 + i < max%8 ; i++) {
        if (board[min + 9*i] !== 0) {
          return false
        }
      }
    }
  }

  
  return true
}

function checkMove(piece,pos,obj, board) { 
  if (pos === obj) {
    return false
  }

  //// BLANCAS

  if (piece === 1 && 
    (((Math.floor(pos/8) === 6) && Math.floor(obj/8) === 4) 
    || ((Math.floor(obj/8)+1 === Math.floor(pos/8)) && ((pos % 8 === obj % 8 && board[obj] === 0) || (Math.abs(pos%8 - obj%8) === 1 && board[obj] !== 0))))) {
    return true
  } else if (piece === 2 && 
    (Math.abs(pos%8-obj%8) === 1 && (Math.abs(Math.floor(obj/8) - Math.floor(pos/8)) === 2)) ||
    (Math.abs(pos%8-obj%8) === 2 && (Math.abs(Math.floor(obj/8) - Math.floor(pos/8)) === 1))) {
      return true
  } else if (piece === 3 && 
    ((pos%8 + Math.floor(pos/8) === obj%8 + Math.floor(obj/8)) ||
    (pos%8 - Math.floor(pos/8) === obj%8 - Math.floor(obj/8))) &&
    checkCollisions(piece, pos, obj,board)) {
      return true
  } else if (piece === 4 && ((obj % 8 === pos % 8) || (Math.floor(obj/8) === Math.floor(pos/8))) && checkCollisions(piece,pos,obj,board)) {
    return true
  } else if (piece === 5 && ((pos%8 + Math.floor(pos/8) === obj%8 + Math.floor(obj/8)) ||
  (pos%8 - Math.floor(pos/8) === obj%8 - Math.floor(obj/8)) || 
  (obj % 8 === pos % 8) || (Math.floor(obj/8) === Math.floor(pos/8))) &&
  checkCollisions(piece, pos, obj, board)) {
    return true
  } else if (piece === 6 && (
    (pos%8 + Math.floor(pos/8) === obj%8 + Math.floor(obj/8)) ||
    (pos%8 - Math.floor(pos/8) === obj%8 - Math.floor(obj/8)) ||
    (obj % 8 === pos % 8) || (Math.floor(obj/8) === Math.floor(pos/8))
    ) && Math.abs(pos%8-obj%8) <= 1 && Math.abs(Math.floor(pos/8) - Math.floor(obj/8)) <= 1){
    return true
  }

  /// NEGRAS
  else if (piece === 7 && 
    (((Math.floor(pos/8) === 1) && Math.floor(obj/8) === 3) 
    || ((Math.floor(obj/8)-1 === Math.floor(pos/8)) && ((pos % 8 === obj % 8 && board[obj] === 0) || (Math.abs(pos%8 - obj%8) === 1 && board[obj] !== 0))))) {
    return true
  } else if (piece === 8 && 
    (Math.abs(pos%8-obj%8) === 1 && (Math.abs(Math.floor(obj/8) - Math.floor(pos/8)) === 2)) ||
    (Math.abs(pos%8-obj%8) === 2 && (Math.abs(Math.floor(obj/8) - Math.floor(pos/8)) === 1))) {
      return true
  } else if (piece === 9 && 
    ((pos%8 + Math.floor(pos/8) === obj%8 + Math.floor(obj/8)) ||
    (pos%8 - Math.floor(pos/8) === obj%8 - Math.floor(obj/8))) &&
    checkCollisions(piece, pos, obj,board)) {
      return true
  } else if (piece === 10 && ((obj % 8 === pos % 8) || (Math.floor(obj/8) === Math.floor(pos/8))) && checkCollisions(piece,pos,obj,board)) {
    return true
  } else if (piece === 11 && ((pos%8 + Math.floor(pos/8) === obj%8 + Math.floor(obj/8)) ||
  (pos%8 - Math.floor(pos/8) === obj%8 - Math.floor(obj/8)) || 
  (obj % 8 === pos % 8) || (Math.floor(obj/8) === Math.floor(pos/8))) &&
  checkCollisions(piece, pos, obj, board)) {
    return true
  } else if (piece === 12 && (
    (pos%8 + Math.floor(pos/8) === obj%8 + Math.floor(obj/8)) ||
    (pos%8 - Math.floor(pos/8) === obj%8 - Math.floor(obj/8)) ||
    (obj % 8 === pos % 8) || (Math.floor(obj/8) === Math.floor(pos/8))
    ) && Math.abs(pos%8-obj%8) <= 1 && Math.abs(Math.floor(pos/8) - Math.floor(obj/8)) <= 1){
    return true
  }

  return false
}

function App() {
  const [board, setBoard] = useState(INITIAL_BOARD)
  const [turn, setTurn] = useState(0)
  const [color, setColor] = useState(true)
  const [move, setMove] = useState([20,20])
  const [cursor, setCursor] = useState(null)
  const [mode, setMode] = useState(0)
  const [timeBlack, setTimeBlack] = useState(300)
  const [timeWhite, setTimeWhite] = useState(300)

  const PIEZAS = ["","white-pawn.png", "white-horse.png", 
  "white-bishop.png", "white-rook.png", "white-queen.png", 
  "white-king.png", "black-pawn.png", "black-horse.png", 
  "black-bishop.png", "black-rook.png", "black-queen.png", "black-king.png"]

  

  const dragDrop = async (piece, index) => {
     if (move[1] === index || (piece === 0 && move[0]===20) || (move[0] === 20 && (Math.floor(piece/7)!==turn))) {
      setMove([20,120])
      setCursor(null)
    } else if (move[0] === 20 || (Math.floor(piece/7) === turn && piece !== 0)) {
      setMove([piece,index])
      setCursor(index)
    } else {
      if (checkMove(move[0], move[1],index,board)) {
        const nBoard = board
        nBoard[index] = move[0]
        nBoard[move[1]] = 0
        setMove([20,120])
        setBoard(nBoard)
        setCursor(null)
        setTurn(turn => {
          if (turn === 1) return 0
          else return 1
        })
      }
    }
  }

  const localMatch = () => {
    setBoard(INITIAL_BOARD)
    setTurn(0)
    setMode(1)
  }

  return (
    <main className="w-screen h-screen flex justify-center flex-col items-center bg-[#f4f6fc]">
      <h1 className=" text-[#343a44] text-8xl font-extrabold m-10">Simple Chess</h1>
      <div className=" flex flex-row pb-7">
        <div className=" grid grid-cols-8 gap-0 h-[928px] w-[928px] mx-2 border-[#343a44] rounded-lg border-solid border-[1rem]">
          {
            color ? (
            board.map((piece, index) => {
              if (index === cursor) {
                if (piece === 6 || piece === 5 || piece === 12 || piece === 11){
                  return (<div key = {index} onClick={() => dragDrop(piece,index)} className="bg-emerald-600/40 h-28 w-28 text-center justify-center flex items-center font-bold text-xl"> 
                  <img src={PIEZAS[piece]} className=" w-[5.8rem]"/>
                </div>)
                } else if (piece === 1){
                  return (<div key = {index} onClick={() => dragDrop(piece,index)} className="bg-emerald-600/40 h-28 w-28 text-center justify-center flex items-center font-bold text-xl"> 
                  <img src={PIEZAS[piece]} className=" w-[4.4rem]"/>
                </div>)
                } if (piece !== 0) {
                  return (<div key = {index} onClick={() => dragDrop(piece,index)} className="bg-emerald-600/40 h-28 w-28 text-center justify-center flex items-center font-bold text-xl"> 
                    <img src={PIEZAS[piece]} className=" w-[4.8rem]"/>
                  </div>)
                }
                return (<div key = {index} onClick={() => dragDrop(piece,index)} className="bg-emerald-600/40 h-28 w-28 text-center justify-center flex items-center font-bold text-xl"> 
                  </div>)
              } else if ((index % 2 + Math.floor(index/8)%2) == 1) {
                if (piece === 6 || piece === 5 || piece === 12 || piece === 11){
                  return (<div key = {index} onClick={() => dragDrop(piece,index)} className="bg-[#8c9ab3] hover:bg-[#a4b3ce] h-28 w-28 text-center justify-center flex items-center font-bold text-xl"> 
                  <img src={PIEZAS[piece]} className=" w-[5.8rem]"/>
                </div>)
                } else if (piece === 1){
                  return (<div key = {index} onClick={() => dragDrop(piece,index)} className="bg-[#8c9ab3] hover:bg-[#a4b3ce] h-28 w-28 text-center justify-center flex items-center font-bold text-xl"> 
                  <img src={PIEZAS[piece]} className=" w-[4.4rem]"/>
                </div>)
                } if (piece !== 0) {
                  return (<div key = {index} onClick={() => dragDrop(piece,index)} className="bg-[#8c9ab3] hover:bg-[#a4b3ce] h-28 w-28 text-center justify-center flex items-center font-bold text-xl"> 
                    <img src={PIEZAS[piece]} className=" w-[4.8rem]"/>
                  </div>)
                }
                return (<div key = {index} onClick={() => dragDrop(piece,index)} className="bg-[#8c9ab3] hover:bg-[#a4b3ce] h-28 w-28 text-center justify-center flex items-center font-bold text-xl"> 
                  </div>)
              } else { 
                if (piece === 6 || piece === 5 || piece === 12 || piece === 11){
                  return (<div key = {index} onClick={() => dragDrop(piece,index)} className="bg-[#f4f6fc] hover:bg-[#e0e3ef] h-28 w-28 text-center justify-center flex items-center font-bold text-xl"> 
                  <img src={PIEZAS[piece]} className=" w-[5.8rem]"/>
                </div>)
                } else if (piece === 1){
                  return (<div key = {index} onClick={() => dragDrop(piece,index)} className="bg-[#f4f6fc] hover:bg-[#e0e3ef] h-28 w-28 text-center justify-center flex items-center font-bold text-xl"> 
                  <img src={PIEZAS[piece]} className=" w-[4.4rem]"/>
                </div>)
                } if (piece !== 0) {
                  return (<div key = {index} onClick={() => dragDrop(piece,index)} className="bg-[#f4f6fc] hover:bg-[#e0e3ef] h-28 w-28 text-center justify-center flex items-center font-bold text-xl"> 
                    <img src={PIEZAS[piece]} className=" w-[4.8rem]"/>
                  </div>)
                }
                return (<div key = {index} onClick={() => dragDrop(piece,index)} className="bg-[#f4f6fc] hover:bg-[#e0e3ef] h-28 w-28 text-center justify-center flex items-center font-bold text-xl"> 
                </div>)
              }
            })) : (
              board.toReversed().map((piece, nindex) => {
                const index = board.length-1 -nindex
                if (index === cursor) {
                  if (piece === 6 || piece === 5 || piece === 12 || piece === 11){
                    return (<div key = {index} onClick={() => dragDrop(piece,index)} className="bg-emerald-600/40 h-28 w-28 text-center justify-center flex items-center font-bold text-xl"> 
                    <img src={PIEZAS[piece]} className=" w-[5.8rem]"/>
                  </div>)
                  } else if (piece === 1){
                    return (<div key = {index} onClick={() => dragDrop(piece,index)} className="bg-emerald-600/40 h-28 w-28 text-center justify-center flex items-center font-bold text-xl"> 
                    <img src={PIEZAS[piece]} className=" w-[4.4rem]"/>
                  </div>)
                  } if (piece !== 0) {
                    return (<div key = {index} onClick={() => dragDrop(piece,index)} className="bg-emerald-600/40 h-28 w-28 text-center justify-center flex items-center font-bold text-xl"> 
                      <img src={PIEZAS[piece]} className=" w-[4.8rem]"/>
                    </div>)
                  }
                  return (<div key = {index} onClick={() => dragDrop(piece,index)} className="bg-emerald-600/40 h-28 w-28 text-center justify-center flex items-center font-bold text-xl"> 
                    </div>)
                } else if ((index % 2 + Math.floor(index/8)%2) == 1) {
                  if (piece === 6 || piece === 5 || piece === 12 || piece === 11){
                    return (<div key = {index} onClick={() => dragDrop(piece,index)} className="bg-[#8c9ab3] hover:bg-[#a4b3ce] h-28 w-28 text-center justify-center flex items-center font-bold text-xl"> 
                    <img src={PIEZAS[piece]} className=" w-[5.8rem]"/>
                  </div>)
                  } else if (piece === 1){
                    return (<div key = {index} onClick={() => dragDrop(piece,index)} className="bg-[#8c9ab3] hover:bg-[#a4b3ce] h-28 w-28 text-center justify-center flex items-center font-bold text-xl"> 
                    <img src={PIEZAS[piece]} className=" w-[4.4rem]"/>
                  </div>)
                  } if (piece !== 0) {
                    return (<div key = {index} onClick={() => dragDrop(piece,index)} className="bg-[#8c9ab3] hover:bg-[#a4b3ce] h-28 w-28 text-center justify-center flex items-center font-bold text-xl"> 
                      <img src={PIEZAS[piece]} className=" w-[4.8rem]"/>
                    </div>)
                  }
                  return (<div key = {index} onClick={() => dragDrop(piece,index)} className="bg-[#8c9ab3] hover:bg-[#a4b3ce] h-28 w-28 text-center justify-center flex items-center font-bold text-xl"> 
                    </div>)
                } else { 
                  if (piece === 6 || piece === 5 || piece === 12 || piece === 11){
                    return (<div key = {index} onClick={() => dragDrop(piece,index)} className="bg-[#f4f6fc] hover:bg-[#e0e3ef] h-28 w-28 text-center justify-center flex items-center font-bold text-xl"> 
                    <img src={PIEZAS[piece]} className=" w-[5.8rem]"/>
                  </div>)
                  } else if (piece === 1){
                    return (<div key = {index} onClick={() => dragDrop(piece,index)} className="bg-[#f4f6fc] hover:bg-[#e0e3ef] h-28 w-28 text-center justify-center flex items-center font-bold text-xl"> 
                    <img src={PIEZAS[piece]} className=" w-[4.4rem]"/>
                  </div>)
                  } if (piece !== 0) {
                    return (<div key = {index} onClick={() => dragDrop(piece,index)} className="bg-[#f4f6fc] hover:bg-[#e0e3ef] h-28 w-28 text-center justify-center flex items-center font-bold text-xl"> 
                      <img src={PIEZAS[piece]} className=" w-[4.8rem]"/>
                    </div>)
                  }
                  return (<div key = {index} onClick={() => dragDrop(piece,index)} className="bg-[#f4f6fc] hover:bg-[#e0e3ef] h-28 w-28 text-center justify-center flex items-center font-bold text-xl"> 
                  </div>)
                }
              })
            )
          }
        </div>
        <div className=" w-6 mr-3 p-0 flex flex-col items-center align-start justify-between ">
          {
            color ? (<><h1 className={` text-6xl font-bold m-0 p-0 ${turn === 1 ? "text-emerald-600/40" : "text-slate-600/35" }  rotate-180`}>⋅</h1>
            <h1 className={` text-6xl font-bold m-0 p-0 ${turn === 0 ? "text-emerald-600/40" : "text-slate-600/35" } `}>⋅</h1></>) 
            : (<><h1 className={` text-6xl font-bold m-0 p-0 ${turn === 0 ? "text-emerald-600/40" : "text-slate-600/35" }  rotate-180`}>⋅</h1>
            <h1 className={` text-6xl font-bold m-0 p-0 ${turn === 1 ? "text-emerald-600/40" : "text-slate-600/35" } `}>⋅</h1></>) 
          }
        </div>
        <div className=' bg-[#343a44] w-[30rem] rounded-lg flex flex-col pt-3 items-center'>
          {
            mode === 0 ? (<><button onClick={()=>setColor(color => !color)} className=" bg-[#f4f6fc] hover:bg-[#e4e7f4] w-[28.5rem] flex justify-center items-center flex-col m-3 mt-1 rounded-lg h-[4rem] gap-2 font-bold text-4xl text-[#717c91]">
              Change Team
            </button>
            <div className=" bg-[#141517] w-[28.5rem] flex flex-col items-center h-[10rem] rounded-lg gap-5">
              <button onClick={()=>localMatch()} className=" bg-[#b7bece] hover:bg-[#e4e7f4] w-[26.5rem] flex justify-center items-center flex-col mt-4 rounded-lg h-[5.3rem] gap-2 font-bold text-4xl text-[#141517]">
                Local Match 
              </button>
              <select className="">
                <option value="5min" key="5min">5 min</option>
                <option value="10min" key="10min">10 min</option>
                <option value="15min" key="15min">15 min</option>
                <option value="30min" key="30min">30 min</option>
                <option value="60min" key="60min">60 min</option>
              </select>
            </div></>) : (<></>)
          }
        </div>
      </div>
    </main>
  )
}

export default App
