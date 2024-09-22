import type { PlayerColor } from './constants'

class Player {
  public readonly name: string
  public readonly color: PlayerColor

  constructor(name: string, color: PlayerColor) {
    this.name = name
    this.color = color
  }
}

export default Player
