const Colors = {
  RED: 31,
  GREEN: 32,
  YELLOW: 33,
  BLUE: 34,
}

export const outFlag = {
  SUCCESS: 'success',
  ERROR: 'error',
  IMPORTANT: 'important',
  WARN: 'warn'
}

const getColoredText = (text, color) => `\x1B[${color}m${text}\x1B[0m`

export const getColorText = (text, flag) => {
  switch (flag) {
    case outFlag.SUCCESS:
      return getColoredText(text, Colors.GREEN)
    case outFlag.ERROR:
      return getColoredText(text, Colors.RED)
    case outFlag.IMPORTANT:
      return getColoredText(text, Colors.BLUE)
    default: return getColoredText(text, Colors.YELLOW)
  }
}
