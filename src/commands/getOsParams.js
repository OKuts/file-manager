import {osParams} from './commands.js'
import {getColorText, isParams, outCurrentlyDir, outFlag} from '../utils/index.js'
export const getOsParams = arg => {
  if (osParams[arg]) {
    console.log(getColorText(osParams[arg](), outFlag.SUCCESS))
    outCurrentlyDir()
  } else {
    isParams([''], '--EOL | --cpus | --homedir | --username | --architecture')
  }
}
