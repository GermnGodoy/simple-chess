const boardCellWidth = 'w-full aspect-square'

export const BOARD_CELL_STYLES = {
  cursor: ` bg-emerald-400/50 ${boardCellWidth} text-center justify-center flex items-center font-bold text-xl`,
  white: `bg-egg hover:bg-egger ${boardCellWidth} text-center justify-center flex items-center font-bold text-xl`,
  black: `bg-faisan hover:bg-faisanner ${boardCellWidth} text-center justify-center flex items-center font-bold text-xl`
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
