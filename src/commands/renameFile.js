import {rename} from 'node:fs/promises'
import {getColorText, outFlag} from '../utils/getColorText.js'

export const renameFile = async (oldFileName, newFileName) => {
  try {
    await rename(oldFileName, newFileName)
  } catch (e) {
    console.log(getColorText(e.message, outFlag.ERROR))
  }
}
