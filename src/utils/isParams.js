import {EOL} from 'os'
import {getColorText, outFlag} from './getColorText.js'

export const isParams = (params, message) => {
  const flag = params.every(el => !!el)
  if (!flag) {
    console.log(
      getColorText(`Invalid input${EOL}`, outFlag.ERROR),
      getColorText('Use params:', outFlag.WARN),
      getColorText(message, outFlag.IMPORTANT))
  }
  return flag
}
