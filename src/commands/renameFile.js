import {rename} from 'node:fs/promises'
import {getColorText, outFlag, printCurrentlyIn} from '../utils/index.js'

export const renameFile = async (oldFileName, newFileName) => {
  try {
    await rename(oldFileName, newFileName)
    printCurrentlyIn()
  } catch (e) {
    console.log(getColorText(e.message, outFlag.ERROR))
  }
}
