import { PIECES } from "../constants/gameConstants"

function checkMove(piece,pos,obj, board) { 
  if (pos === obj) {
    return false
  }

  //// BLANCAS

  if (piece === PIECES.whitePawn && 
    (((Math.floor(pos/8) === 6) && Math.floor(obj/8) === 4) 
    || ((Math.floor(obj/8)+1 === Math.floor(pos/8)) && ((pos % 8 === obj % 8 && board[obj] === 0) || (Math.abs(pos%8 - obj%8) === 1 && board[obj] !== 0))))) {
    return true
  }  
  
  if (piece === PIECES.whiteKnigth && 
    (Math.abs(pos%8-obj%8) === 1 && (Math.abs(Math.floor(obj/8) - Math.floor(pos/8)) === 2)) ||
    (Math.abs(pos%8-obj%8) === 2 && (Math.abs(Math.floor(obj/8) - Math.floor(pos/8)) === 1))) {
      return true
  } 
  
  if (piece === PIECES.whiteBishop && 
    ((pos%8 + Math.floor(pos/8) === obj%8 + Math.floor(obj/8)) ||
    (pos%8 - Math.floor(pos/8) === obj%8 - Math.floor(obj/8))) &&
    checkCollisions(piece, pos, obj,board)) {
      return true
  } 
  
  if (piece === PIECES.whiteRook && ((obj % 8 === pos % 8) || (Math.floor(obj/8) === Math.floor(pos/8))) && checkCollisions(piece,pos,obj,board)) {
    return true
  }
  
  if (piece === PIECES.whiteQueen && ((pos%8 + Math.floor(pos/8) === obj%8 + Math.floor(obj/8)) ||
  (pos%8 - Math.floor(pos/8) === obj%8 - Math.floor(obj/8)) || 
  (obj % 8 === pos % 8) || (Math.floor(obj/8) === Math.floor(pos/8))) &&
  checkCollisions(piece, pos, obj, board)) {
    return true
  } 
  
  if (piece === PIECES.whiteKing && (
    (pos%8 + Math.floor(pos/8) === obj%8 + Math.floor(obj/8)) ||
    (pos%8 - Math.floor(pos/8) === obj%8 - Math.floor(obj/8)) ||
    (obj % 8 === pos % 8) || (Math.floor(obj/8) === Math.floor(pos/8))
    ) && Math.abs(pos%8-obj%8) <= 1 && Math.abs(Math.floor(pos/8) - Math.floor(obj/8)) <= 1){
    return true
  }

  /// NEGRAS
  else if (piece === PIECES.blackPawn && 
    (((Math.floor(pos/8) === 1) && Math.floor(obj/8) === 3) 
    || ((Math.floor(obj/8)-1 === Math.floor(pos/8)) && ((pos % 8 === obj % 8 && board[obj] === 0) || (Math.abs(pos%8 - obj%8) === 1 && board[obj] !== 0))))) {
    return true
  } else if (piece === PIECES.blackKnigth && 
    (Math.abs(pos%8-obj%8) === 1 && (Math.abs(Math.floor(obj/8) - Math.floor(pos/8)) === 2)) ||
    (Math.abs(pos%8-obj%8) === 2 && (Math.abs(Math.floor(obj/8) - Math.floor(pos/8)) === 1))) {
      return true
  } else if (piece === PIECES.blackBishop && 
    ((pos%8 + Math.floor(pos/8) === obj%8 + Math.floor(obj/8)) ||
    (pos%8 - Math.floor(pos/8) === obj%8 - Math.floor(obj/8))) &&
    checkCollisions(piece, pos, obj,board)) {
      return true
  } else if (piece === PIECES.blackRook && ((obj % 8 === pos % 8) || (Math.floor(obj/8) === Math.floor(pos/8))) && checkCollisions(piece,pos,obj,board)) {
    return true
  } else if (piece === PIECES.blackQueen && ((pos%8 + Math.floor(pos/8) === obj%8 + Math.floor(obj/8)) ||
  (pos%8 - Math.floor(pos/8) === obj%8 - Math.floor(obj/8)) || 
  (obj % 8 === pos % 8) || (Math.floor(obj/8) === Math.floor(pos/8))) &&
  checkCollisions(piece, pos, obj, board)) {
    return true
  } else if (piece === PIECES.blackKing && (
    (pos%8 + Math.floor(pos/8) === obj%8 + Math.floor(obj/8)) ||
    (pos%8 - Math.floor(pos/8) === obj%8 - Math.floor(obj/8)) ||
    (obj % 8 === pos % 8) || (Math.floor(obj/8) === Math.floor(pos/8))
    ) && Math.abs(pos%8-obj%8) <= 1 && Math.abs(Math.floor(pos/8) - Math.floor(obj/8)) <= 1){
    return true
  }

  return false
}

function checkCollisions(piece,pos, obj, board) {
  
  if (piece === PIECES.whiteRook || piece === PIECES.blackRook) {
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
  
  if (piece === PIECES.whiteBishop || piece === PIECES.blackBishop) {
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
  } 
  
  if (piece === PIECES.whiteQueen || piece === PIECES.blackQueen) {
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

export const makeMove = (move, board, turn, piece, index, setMove, setCursor, setBoard, setTurn) => {
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

