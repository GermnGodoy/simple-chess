export const GAME_MODES = {
  default: 0,
  thirty: 1,
  fifteen: 2,
  teen: 3,
  five: 4
}

export const TURN = {
  white: 0, 
  black: 1
}

export const PIECES = {
  whitePawn: 1, 
  whiteKnigth: 2,
  whiteBishop: 3,
  whiteRook: 4, 
  whiteQueen: 5, 
  whiteKing: 6, 
  blackPawn: 7, 
  blackKnigth: 8,
  blackBishop: 9,
  blackRook: 10, 
  blackQueen: 11, 
  blackKing: 12, 
}

export const INITIAL_BOARD = [PIECES.blackRook ,PIECES.blackKnigth,PIECES.blackBishop,PIECES.blackQueen,PIECES.blackKing,PIECES.blackBishop,PIECES.blackKnigth,PIECES.blackRook ,
  PIECES.blackPawn,PIECES.blackPawn,PIECES.blackPawn,PIECES.blackPawn,PIECES.blackPawn,PIECES.blackPawn,PIECES.blackPawn,PIECES.blackPawn,
  0,0,0,0,0,0,0,0,
  0,0,0,0,0,0,0,0,
  0,0,0,0,0,0,0,0,
  0,0,0,0,0,0,0,0,
  PIECES.whitePawn,PIECES.whitePawn,PIECES.whitePawn,PIECES.whitePawn,PIECES.whitePawn,PIECES.whitePawn,PIECES.whitePawn,PIECES.whitePawn,
  PIECES.whiteRook,PIECES.whiteKnigth,PIECES.whiteBishop,PIECES.whiteQueen,PIECES.whiteKing,PIECES.whiteBishop,PIECES.whiteKnigth,PIECES.whiteRook]

