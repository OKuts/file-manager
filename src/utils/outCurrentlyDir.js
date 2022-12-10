import {getColorText, getCurrentDir, outFlag} from './index.js'
export const outCurrentlyDir = () => {
  console.log('You are currently in', getColorText(getCurrentDir(), outFlag.IMPORTANT))
}
