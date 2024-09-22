import Prompt from 'prompt-sync'
import type Grid from './grid'
import Player from './player'
import { PositionColorMap } from './constants'
import { RowError } from './errors/RowError'

const prompt = Prompt({ sigint: true })

type Score = {
  [playerName: string]: number
}

class Game {
  private grid: Grid
  private connectN: number
  private players: Player[]
  private score: Score
  private targetScore: number

  constructor(grid: Grid, connectN: number, targetScore: number) {
    this.grid = grid
    this.connectN = connectN
    this.targetScore = targetScore

    this.players = [
      new Player('Player 1', PositionColorMap.YELLOW),
      new Player('Player 2', PositionColorMap.RED),
    ]

    this.score = {
      [this.players[0].name]: 0,
      [this.players[1].name]: 0,
    }
    for (const player of this.players) {
      this.score[player.name] = 0
    }
  }

  private printBoard() {
    console.log('Board:\n')
    const grid = this.grid.getGrid()
    for (let i = 0; i < grid.length; i++) {
      let row = ''
      for (const piece of grid[i]) {
        if (piece === PositionColorMap.EMPTY) {
          row += '0 '
        } else if (piece === PositionColorMap.YELLOW) {
          row += 'Y '
        } else if (piece === PositionColorMap.RED) {
          row += 'R '
        }
      }
      console.log(row)
    }
    console.log('')
  }

  private playMove(player: Player): [number, number] {
    this.printBoard()
    console.log(`${player.name}'s turn`)
    const colCnt = this.grid.getColumnCount()
    const moveColumn = Number(
      prompt(`Enter column between ${0} and ${colCnt - 1} to add piece: `),
    )

    try {
      const moveRow = this.grid.placePiece(moveColumn, player.color)
      return [moveRow, moveColumn]
    } catch (error) {
      if (error instanceof RowError) {
        console.log(`Can not put column ${moveColumn}.`)
        console.log('Try again.')

        return this.playMove(player)
      }

      throw error
    }
  }

  playRound() {
    while (true) {
      for (const player of this.players) {
        const [row, col] = this.playMove(player)
        const pieceColor = player.color
        if (this.grid.checkWin(this.connectN, row, col, pieceColor)) {
          this.score[player.name]++
          return player
        }
      }
    }
  }

  play() {
    let maxScore = 0
    let winner: Player
    while (true) {
      winner = this.playRound()
      console.log(`${winner.name} won the round`)
      maxScore = Math.max(this.score[winner.name], maxScore)

      if (maxScore < this.targetScore) {
        this.grid.initGrid() // reset grid
      } else {
        console.log(`${winner.name} won the game`)
        break
      }
    }
  }
}

export default Game
