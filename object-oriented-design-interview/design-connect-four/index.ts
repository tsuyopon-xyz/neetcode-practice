import Game from './src/game'
import Grid from './src/grid'

const grid = new Grid(6, 7)
const game = new Game(grid, /* connectN= */ 4, /* targetScore= */ 2)
game.play()
