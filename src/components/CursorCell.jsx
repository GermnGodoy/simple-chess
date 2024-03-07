import { PIECES } from "../constants/gameConstants"
import { BOARD_CELL_STYLES, PIECES_IMAGES, SIZES } from "../constants/styles"
import { makeMove } from "../logic/movementLogic"

export function CursorCell({piece, index, board, setBoard, turn, setTurn, move, setMove, setCursor}) {

  return (<div  onClick={() => makeMove(move, board, turn, piece, index, setMove, setCursor, setBoard, setTurn)} 
  className={BOARD_CELL_STYLES.cursor}> 
    {piece !== 0 
        ? <img src={PIECES_IMAGES[piece]} className={`${(piece === PIECES.blackPawn || piece === PIECES.whitePawn) 
          ? SIZES.pawn
          : (piece === PIECES.blackKing || piece === PIECES.whiteKing || piece === PIECES.whiteQueen || piece === PIECES.blackQueen) 
            ? SIZES.king
            : SIZES.other} ${(piece > 6) ? ' scale-110' : ''}`}/> // CAMBIAR SIZES
        : <></>}
  </div>)
}