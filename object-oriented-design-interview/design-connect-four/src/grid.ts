import {
  type PlayerColor,
  type PositionColor,
  PositionColorMap,
} from './constants'

import { RowError } from './errors/RowError'

class Grid {
  private rowCount: number
  private columnCount: number
  private grid: PositionColor[][]

  constructor(rowCount: number, columnCount: number) {
    this.rowCount = rowCount
    this.columnCount = columnCount
    this.grid = []

    this.initGrid()
  }

  initGrid() {
    this.grid = Array(this.rowCount)
      .fill(0)
      .map(() => Array(this.columnCount).fill(PositionColorMap.EMPTY))
  }

  getGrid() {
    return this.grid
  }

  getColumnCount() {
    return this.columnCount
  }

  placePiece(column: number, piece: PlayerColor) {
    if (column < 0 || column >= this.columnCount) {
      throw new Error('Invalid column')
    }
    // Place piece in the lowest empty row
    for (let row = this.rowCount - 1; row >= 0; row--) {
      if (this.grid[row][column] === PositionColorMap.EMPTY) {
        this.grid[row][column] = piece
        return row
      }
    }

    throw new RowError('Out of bounds')
  }

  checkWin(connectN: number, row: number, col: number, piece: PlayerColor) {
    // Check horizontal
    let count = 0
    for (let c = 0; c < this.columnCount; c++) {
      if (this.grid[row][c] === piece) {
        count++
      } else {
        count = 0
      }
      if (count === connectN) {
        return true
      }
    }

    // Check vertical
    count = 0
    for (let r = 0; r < this.rowCount; r++) {
      if (this.grid[r][col] === piece) {
        count++
      } else {
        count = 0
      }
      if (count === connectN) {
        return true
      }
    }

    // Check diagonal
    count = 0
    for (let r = 0; r < this.rowCount; r++) {
      const c = row + col - r // row + col = r + c, for a diagonal
      if (c >= 0 && c < this.columnCount && this.grid[r][c] === piece) {
        count++
      } else {
        count = 0
      }
      if (count === connectN) {
        return true
      }
    }

    // Check anti-diagonal
    count = 0
    for (let r = 0; r < this.rowCount; r++) {
      const c = col - row + r // row - col = r - c, for an anti-diagonal
      if (c >= 0 && c < this.columnCount && this.grid[r][c] === piece) {
        count++
      } else {
        count = 0
      }
      if (count === connectN) {
        return true
      }
    }
    return false
  }
}

export default Grid
