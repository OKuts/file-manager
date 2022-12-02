import {getColorText, outFlag} from '../utils/getColorText.js'

export const manager = (line, rl) => {

  if (line === 'exit') rl.emit('close')
  getColorText(line, outFlag.SUCCESS)
}
