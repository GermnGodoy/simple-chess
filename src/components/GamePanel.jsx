import { GAME_MODES, TURN, INITIAL_BOARD } from "../constants/gameConstants"
import '@fontsource-variable/onest';

export function GamePanel({setBoard, setTurn, setMode}) {

  const setLocalMatch = () => {
    setBoard(INITIAL_BOARD)
    setTurn(TURN.white)
    setMode(GAME_MODES.localMatch)
  }

  return (
    <div 
      className=' bg-[#343a44] w-[20%] rounded-lg flex flex-col p-3 items-center h-full m-5 mt-12'>
      <h1 className=" text-8xl font-bold m-5 mb-9">Simple Chess</h1>
      <div className=" bg-[#141517] w-full flex flex-col items-center justify-center h-[10rem] rounded-lg">
        <button onClick={()=>setLocalMatch()} 
          className=" bg-[#b7bece] hover:bg-[#e4e7f4] w-[26.5rem] flex justify-center items-center flex-col rounded-lg h-[5.3rem] gap-2 font-bold text-4xl text-[#141517]">
          Local Match 
        </button>
      </div>
    </div>
  )
}
