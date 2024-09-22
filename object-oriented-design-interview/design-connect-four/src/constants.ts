// enumを使わない理由: https://typescriptbook.jp/reference/values-types-variables/enum/enum-problems-and-alternatives-to-enums
export const PositionColorMap = {
  EMPTY: 0,
  YELLOW: 1,
  RED: 2,
} as const

export type PositionColor =
  (typeof PositionColorMap)[keyof typeof PositionColorMap]
export type PlayerColor = Exclude<
  PositionColor,
  (typeof PositionColorMap)['EMPTY']
>
