import {open} from 'fs/promises'
import {getColorText, getCurrentDir, outFlag, printCurrentlyIn} from '../utils/index.js'
import {resolve} from 'path'

export const createFile = async (fileName) => {
  try {
    const file = await open(resolve(getCurrentDir(), fileName), 'ax' )
    file.close()
    printCurrentlyIn()
  } catch (err) {
    console.log(getColorText(err.message, outFlag.ERROR))
  }
}
