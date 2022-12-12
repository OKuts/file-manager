import {EOL} from 'os'
import {getColorText, outFlag} from './getColorText.js'
import {commands} from '../commands/index.js'

export const outErrorCommandMessage = () => {
  console.log(
    getColorText(`Invalid input${EOL}`, outFlag.ERROR),
    getColorText('Use commands:', outFlag.WARN),
    getColorText(Object.keys(commands).join(' | '),outFlag.IMPORTANT))
}
