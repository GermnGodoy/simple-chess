import { TURN } from "../constants/gameConstants"

export function TurnLED({turn}) {
  return (
    <div className=" w-6 mr-3 mt-4 -mb-3 p-0 flex flex-col items-center align-start justify-between ">
      <h1 className={` text-7xl font-sans font-bold m-0 p-0 ${turn === TURN.black ? "text-emerald-600/70" : "text-slate-800/35" }  rotate-180`}>
        ⋅
      </h1>
      <h1 className={` text-7xl font-sans font-bold -m-1 p-0 ${turn === TURN.white ? "text-emerald-600/70" : "text-slate-800/35" } `}>
        ⋅</h1> 
    </div>
  )
}