import {osData} from './commands.js'
import {outCurrentlyDir, outErrorCommandMessage} from '../utils/index.js'
export const getOsParams = arg => {
  if (osData[arg]) {
    console.log(osData[arg]())
    outCurrentlyDir()
  } else {
    outErrorCommandMessage()
  }
}
