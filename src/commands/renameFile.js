import {rename} from 'node:fs/promises'
import {getColorText, outFlag, outCurrentlyDir} from '../utils/index.js'

export const renameFile = async (oldFileName, newFileName) => {
  try {
    await rename(oldFileName, newFileName)
    outCurrentlyDir()
  } catch (e) {
    console.log(getColorText(e.message, outFlag.ERROR))
  }
}
