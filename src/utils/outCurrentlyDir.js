import {resolve} from 'path'
import {getColorText, outFlag} from './index.js'
export const outCurrentlyDir = () => {
  console.log('You are currently in', getColorText(resolve('.'), outFlag.IMPORTANT))
}
