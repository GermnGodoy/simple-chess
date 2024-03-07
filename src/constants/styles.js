const boardCellWidth = 'w-full aspect-square'

export const BOARD_CELL_STYLES = {
  cursor: `bg-emerald-600/40 ${boardCellWidth} text-center justify-center flex items-center font-bold text-xl`,
  white: `bg-[#f4f6fc] hover:bg-[#e0e3ef] ${boardCellWidth} text-center justify-center flex items-center font-bold text-xl`,
  black: `bg-[#8c9ab3] hover:bg-[#a4b3ce] ${boardCellWidth} text-center justify-center flex items-center font-bold text-xl`
}

export const SIZES = {
  king: 'w-[11rem]',
  pawn: 'w-[8.8rem]',
  other: 'w-[9rem]'
}

export const PIECES_IMAGES = ["","white-pawn.png", "white-horse.png", 
  "white-bishop.png", "white-rook.png", "white-queen.png", 
  "white-king.png", "black-pawn.png", "black-horse.png", 
  "black-bishop.png", "black-rook.png", "black-queen.png", "black-king.png"]
